"use server";

import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import { getProductsByIds } from "@/lib/products";
import {
  CreateOrderSchema,
  type IOrder,
  type ActionResult,
} from "@/types/domain/order";

export async function createOrderAction(
  rawInput: unknown
): Promise<ActionResult> {
  try {
    // 1. Authenticate the customer.
    const session = await getServerSession();

    if (!session?.user?.email) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    // 2. Validate untrusted client input.
    const validation = CreateOrderSchema.safeParse(rawInput);

    if (!validation.success) {
      return {
        success: false,
        error: "Invalid order data",
      };
    }

    const { items } = validation.data;

    // 3. Fetch authoritative product data from MongoDB.
    const ids = [...new Set(items.map((item) => item.id))];
    const products = await getProductsByIds(ids);

    // 4. Index products for efficient lookup.
    const productsById = new Map(
      products.map((product) => [product.id, product])
    );

    // 5. Build order items and calculate the total on the server.
    let verifiedTotal = 0;

    const verifiedItems: IOrder["items"] = [];

    for (const item of items) {
      const product = productsById.get(item.id);

      if (!product) {
        return {
          success: false,
          error: "One or more products are unavailable",
        };
      }

      // Add product availability and stock checks here.
      if (
        !Number.isFinite(product.price) ||
        product.price < 0
      ) {
        console.error("Invalid product price:", product.id);

        return {
          success: false,
          error: "Unable to calculate order total",
        };
      }

      const subtotal = product.price * item.quantity;
      verifiedTotal += subtotal;

      // Never copy the client's name or price into the order.
      verifiedItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        description: product.description,
        image: product.image,
      });
    }

    if (!Number.isFinite(verifiedTotal)) {
      return {
        success: false,
        error: "Invalid order total",
      };
    }

    // 6. Build the order exclusively from verified data.
    const newOrder: Omit<IOrder, "_id"> = {
      userEmail: session.user.email,
      items: verifiedItems,
      total: verifiedTotal,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    // 7. Save the order.
    const db = await connectDB();

    const result = await db
      .collection("orders")
      .insertOne(newOrder);

    // 8. Return the created order's ID.
    return {
      success: true,
      orderId: result.insertedId.toString(),
    };
  } catch (error) {
    console.error("Server Action Failed:", error);

    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
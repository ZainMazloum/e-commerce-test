"use server"; // Executed strictly on the server [19]
import type {ActionResult} from "@/types/domain/order"
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import { z } from "zod";
import {IOrder} from "@/types/domain/order";

const OrderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const CreateOrderSchema = z.object({
  items: z.array(OrderItemSchema).min(1),
  totalAmount: z.number().positive(),
});

export async function createOrderAction(rawInput: z.infer<typeof  CreateOrderSchema>): Promise<ActionResult> {
  try {
    const session = await getServerSession();
    if (!session || !session.user?.email) {
      return { success: false, error: "Unauthorized" };
    }

    const validation = CreateOrderSchema.safeParse(rawInput);
    if (!validation.success) {
      return { success: false, error: "Invalid data format" };
    }

    const { items, totalAmount } = validation.data;
    const db = await connectDB();

    // Verify total on the server
    let verifiedTotal = 0;
    for (const item of items) {
      verifiedTotal += item.price * item.quantity;
    }

    if (Math.abs(verifiedTotal - totalAmount) > 0.01) {
      return { success: false, error: "Order calculation mismatch" };
    }

    const newOrder: Omit<IOrder, "_id"> = {
      userEmail: session.user.email,
      items,
      total: verifiedTotal,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    const result = await db.collection("orders").insertOne(newOrder);

    return { 
      success: true, 
      orderId: result.insertedId.toString() 
    };
  } catch (error) {
    console.error("Server Action Failed:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
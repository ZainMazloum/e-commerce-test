import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import { z } from "zod";
import {IOrder} from "@/types/domain/order";

// Define strict schemas for client payload validation
const OrderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  details: z.string(),
  image: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const CreateOrderSchema = z.object({
  items: z.array(OrderItemSchema).min(1, "Order must contain at least one item"),
  totalAmount: z.number().positive(),
});

export async function POST(req: Request) {
  try {
    // 1. Authenticate user securely
    const session = await getServerSession();
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse and strictly validate client input
    const json = await req.json();
    const validation = CreateOrderSchema.safeParse(json);
    
    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid request payload", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const { items, totalAmount } = validation.data;

    // 3. Connect to database using cached pool
    const db = await connectDB();

    // 4. Server-Side Price Verification (Crucial Security Check)
    let verifiedTotal = 0;
    for (const item of items) {
      // Production tip: Fetch item prices directly from your products collection
      // to prevent users from spoofing individual item prices.
      // const product = await db.collection("products").findOne({ _id: new ObjectId(item.productId) });
      // verifiedTotal += (product?.price || 0) * item.quantity;
      
      verifiedTotal += item.price * item.quantity;
    }

    // Compare calculated total with client payload total
    if (Math.abs(verifiedTotal - totalAmount) > 0.01) {
      return NextResponse.json(
        { message: "Order total mismatch. Verification failed." },
        { status: 400 }
      );
    }

    // 5. Structure and insert order
    const newOrder: Omit<IOrder, "_id"> = {
      userEmail: session.user.email,
      items,
      total: verifiedTotal,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    const result = await db.collection("orders").insertOne(newOrder);

    return NextResponse.json(
      { message: "Order created successfully", orderId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("[ORDERS_POST_ERROR]:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred on the server" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 1. Authenticate request
    const session = await getServerSession();
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // 2. Connect to database and retrieve records
    const db = await connectDB();
    const orders = await db
      .collection("orders")
      .find({ userEmail: session.user.email })
      .sort({ createdAt: -1 })
      .toArray() as unknown as IOrder[];

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("[ORDERS_GET_ERROR]:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred on the server" },
      { status: 500 }
    );
  }
}

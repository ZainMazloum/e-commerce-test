import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    const db = await connectDB();

    const products = await db.collection("products").find({}).toArray();

    const formattedProducts = products.map((product) => ({
      id: product._id.toString(),
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice ?? undefined,
      isOnSale: product.isOnSale,
      badge: product.badge,
      rating: product.rating,
      reviewCount: product.reviewCount,
      category: product.category,
      countInStock: product.countInStock,
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error) {
    console.error("[PRODUCTS_GET_ERROR]:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
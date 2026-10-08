import { Product } from "@/types/domain/product";
import { connectDB } from "@/lib/db";

export async function getAllProducts(): Promise<Product[]> {
  const db = await connectDB();
  const products = await db.collection("products").find().toArray();
  return products.map((p) => {
    const { _id, ...rest } = p;
    return { id: _id.toString(), ...rest } as Product;
  });
}

export async function getOnSaleProducts(): Promise<Product[]> {
  const db = await connectDB();
  const products = await db.collection("products").find({ isOnSale: true }).toArray();
  return products.map((p) => {
    const { _id, ...rest } = p;
    return { id: _id.toString(), ...rest } as Product;
  });
}
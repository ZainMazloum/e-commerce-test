import { Product } from "@/types/domain/product";
import { getCollection } from "./db";
export async function getAllProducts(): Promise<Product[]> {
    const { collection, client } = await getCollection();
    try {
        const products = await collection.find().toArray();
        return products.map((p) => {
            const { _id, ...rest } = p;
            return { id: _id.toString(), ...rest } as Product;
        });
    } finally {
        await client.close();
    }
}

export async function getOnSaleProducts(): Promise<Product[]> {
    const { collection, client } = await getCollection();
    try {
        const products = await collection.find({ isOnSale: true }).toArray()
return products.map((p) => {
  const { _id, ...rest } = p
  return { id: _id.toString(), ...rest } as Product
})
    } finally {
        await client.close();
    }
}
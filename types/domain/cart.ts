import { StaticImageData } from "next/image";
export interface CartItem {
  id: string;
  name: string;
  color: string;
  price: number;
  description: string;
  originalPrice?: number;
  quantity: number;
  stock: "In Stock" | "Low Stock" | "Out of Stock";
  image: string | StaticImageData;
}
export interface OrderSummary {
  subtotal: number;
  shipping: number | "Free";
  estimatedTax: number;
}
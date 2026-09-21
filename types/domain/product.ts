import { StaticImageData } from "next/image";
export interface Product {
    id: string;          // _id converted to string
  name: string;
  description: string;
  image: string | StaticImageData;
  price: number;
  originalPrice?: number;   // optional because not all products may have it
  isOnSale: boolean;
  badge: string | null;
  rating: number;
  reviewCount: number;
  category: string;
  countInStock: number;
}
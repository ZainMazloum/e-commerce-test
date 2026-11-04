export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;        // string only, no StaticImageData
  price: number;
  originalPrice?: number;
  isOnSale: boolean;
  badge: string | null;
  rating: number;
  reviewCount: number;
  category: string;
  countInStock: number;
}
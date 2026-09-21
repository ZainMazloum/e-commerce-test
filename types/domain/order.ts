export interface OrderItemType {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}
export interface IOrder {
  _id: string;               // MongoDB generated ID (omitted on creation)
  userEmail: string;         // email of the user who placed the order
  items: OrderItemType[];        // array of products in the order
  total: number;             // total price of the order
  status: string;            // e.g. "Processing"
  createdAt: string;         // ISO timestamp e.g. "2026-06-06T12:00:00.000Z"
}
// src/types/domain/order.ts
export type ActionResult =
  | { success: true; orderId: string }
  | { success: false; error: string };
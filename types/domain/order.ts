import { z } from "zod";

// ── Schemas (runtime validation + type source of truth) ──────────────────────

export const OrderItemSchema = z.object({
  id:          z.string(),
  name:        z.string(),
  description: z.string(),
  image:       z.string(),
  details:     z.string().optional(),
  price:       z.number().positive(),
  quantity:    z.number().int().positive(),
});

export const CreateOrderSchema = z.object({
  items:       z.array(OrderItemSchema).min(1),
  totalAmount: z.number().positive(),
});

export const IOrderSchema = z.object({
  _id:       z.string(),
  userEmail: z.email(),
  items:     z.array(OrderItemSchema),
  total:     z.number().positive(),
  status:    z.enum(["Processing", "Delivered", "Cancelled"]),
  createdAt: z.iso.datetime(),
});

// ── Derived TypeScript types (never written by hand) ─────────────────────────

export type OrderItemType    = z.infer<typeof OrderItemSchema>;
export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
export type IOrder           = z.infer<typeof IOrderSchema>;

// ── Standalone types that don't need a schema ─────────────────────────────────

export type ActionResult =
  | { success: true;  orderId: string }
  | { success: false; error: string   };
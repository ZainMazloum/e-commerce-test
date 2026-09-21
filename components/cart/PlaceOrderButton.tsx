// src/components/cart/PlaceOrderButton.tsx
"use client";
import type {ActionResult} from "@/types/domain/order";
import { useActionState } from "react";
import {createOrderAction} from "@/app/actions/order";
import {Button} from "@/components/ui/Button";
import type { CartItem } from "@/types/domain/cart";

interface PlaceOrderButtonProps {
  cartItems: CartItem[];
  totalAmount: number;
}

export default function PlaceOrderButton({ cartItems, totalAmount }: PlaceOrderButtonProps) {
const [state, formAction, isPending] = useActionState<ActionResult | null, FormData>(
  async () => {
    return await createOrderAction({ items: cartItems, totalAmount });
  },
  null
);

  return (
    <div>
      <form action={formAction}>
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Processing Order..." : "Place Order"}
        </Button>
      </form>

      {state && !state.success && (
        <p className="mt-3 text-sm text-red-600 font-medium">{state.error}</p>
      )}
      {state?.success && (
  <p className="mt-3 text-sm text-green-600 font-medium">
    Order placed successfully!
  </p>
)}
    </div>
  );
}
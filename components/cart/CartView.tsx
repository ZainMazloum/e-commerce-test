"use client";

import Link from "next/link";
import CartItemList from "@/components/cart/CartItemList";
import OrderSummaryPanel from "@/components/cart/OrderSummaryPanel";
import CartIsEmpty from "./CartIsEmpty";
import { orderSummaryData } from "@/lib/data/cart";
import { useCartStore, selectSubtotal } from "@/store/cartStore";
import { useHydrated } from "@/hooks/useHydrated"; // NEW

export default function CartView() {
  const hydrated = useHydrated(); // NEW

  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore(selectSubtotal);
  const removeItem = useCartStore((s) => s.removeItem);
  const increment = useCartStore((s) => s.increment);
  const decrement = useCartStore((s) => s.decrement);

  // NEW: wait for the saved cart to load from localStorage,
  // otherwise users see a flash of "Your cart is empty"
  if (!hydrated) {
    return <div className="min-h-screen bg-background" />;
  }

  const isEmpty = items.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
          Your Cart
        </h1>
        <Link
          href="/products" // changed from "#"
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary transition-colors duration-200 mb-6 md:mb-8"
        >
          <span aria-hidden>←</span> Continue Shopping
        </Link>

        {isEmpty ? (
          <CartIsEmpty />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            <CartItemList
              items={items}
              onRemove={removeItem}
              onDecrement={decrement}
              onIncrement={increment}
            />
            <aside className="w-full lg:w-80 lg:sticky lg:top-20">
              <OrderSummaryPanel
                items={items}
                summary={{
                  ...orderSummaryData,
                  subtotal,
                  estimatedTax: subtotal * 0.08, // optional: tax follows the subtotal
                }}
              />
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
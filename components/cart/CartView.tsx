"use client";

import { useState } from "react";
import CartItemList from "@/components/cart/CartItemList";
import OrderSummaryPanel from "@/components/cart/OrderSummaryPanel";
import { initialCartItems, orderSummaryData } from "../../lib/data/cart";
import { CartItem } from "@/types/domain/cart";
import Link from "next/link";
import CartIsEmpty from "./CartIsEmpty";

export default function CartView() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDecrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const isEmpty = cartItems.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
          Your Cart
        </h1>
        <Link 
          href="#" 
          className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary transition-colors duration-200 mb-6 md:mb-8"
        >
          <span aria-hidden>←</span> Continue Shopping
        </Link>

        {isEmpty ? (
<CartIsEmpty />
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            <CartItemList
              items={cartItems}
              onRemove={handleRemove}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
            <aside className="w-full lg:w-80 lg:sticky lg:top-20">
              <OrderSummaryPanel items={cartItems} summary={orderSummaryData} />
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
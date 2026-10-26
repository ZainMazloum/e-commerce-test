// components/product/detail/ProductInfo.tsx
"use client";

import { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { Product } from "@/types/domain/product";
import StarRating from "@/components/reviews/StarRating";
import ProductAccordion from "./ProductAccordion";

const COLORS = [
  { name: "Emerald", hex: "#2D6A4F" },
  { name: "Stone",   hex: "#C2A87C" },
  { name: "Onyx",    hex: "#1C1C1E" },
  { name: "Ivory",   hex: "#EDE8DC" },
];

const SIZES = ["XS", "S", "M", "L"];

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [activeColor, setActiveColor] = useState(COLORS[0].name);
  const [activeSize,  setActiveSize]  = useState(SIZES[2]);
  const [quantity,    setQuantity]    = useState(1);
  const [wished,      setWished]      = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {/* Name + rating */}
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          {product.name}
        </h1>
        <div className="mt-2">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed max-w-md">
        A refined piece crafted with premium materials and intentional design — made for the modern
        minimalist who values form and function equally.
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-secondary">${product.price.toFixed(2)}</span>
        {product.originalPrice && product.originalPrice > product.price && (
          <>
            <span className="text-base text-text-secondary line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-xs font-semibold text-white bg-secondary px-2 py-0.5 rounded-full">
              Save ${(product.originalPrice - product.price).toFixed(0)}
            </span>
          </>
        )}
      </div>

      <div className="border-t border-border-subtle" />

      {/* Color picker */}
      <div>
        <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-2.5">
          Color —{" "}
          <span className="text-text-primary normal-case font-medium tracking-normal">{activeColor}</span>
        </p>
        <div className="flex gap-2.5">
          {COLORS.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveColor(c.name)}
              title={c.name}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                activeColor === c.name
                  ? "border-primary scale-110 shadow-sm"
                  : "border-transparent hover:border-border"
              }`}
              style={{ backgroundColor: c.hex }}
              aria-label={c.name}
            />
          ))}
        </div>
      </div>

      {/* Size picker */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
            Size —{" "}
            <span className="text-text-primary normal-case font-medium tracking-normal">{activeSize}</span>
          </p>
          <button className="text-xs text-primary hover:underline font-medium cursor-pointer">
            Size guide
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSize(s)}
              className={`min-w-12 h-10 px-3 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSize === s
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-surface-primary text-text-primary hover:border-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center border border-border rounded-xl overflow-hidden shrink-0 w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-12 h-12 flex items-center justify-center text-lg text-text-secondary hover:text-primary hover:bg-surface-secondary transition-colors duration-200 cursor-pointer"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold text-text-primary select-none">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-12 h-12 flex items-center justify-center text-lg text-text-secondary hover:text-primary hover:bg-surface-secondary transition-colors duration-200 cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button className="flex-1 h-12 rounded-xl bg-secondary hover:bg-secondary-dark active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 cursor-pointer">
          Add to Cart — ${(product.price * quantity).toFixed(2)}
        </button>
      </div>

      {/* Wishlist + Share */}
      <div className="flex gap-3">
        <button
          onClick={() => setWished((w) => !w)}
          className={`flex items-center gap-2 flex-1 h-11 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer justify-center ${
            wished
              ? "border-secondary bg-secondary/10 text-secondary"
              : "border-border bg-surface-primary text-text-secondary hover:border-secondary hover:text-secondary"
          }`}
        >
          <Heart size={16} className={wished ? "fill-secondary" : ""} />
          {wished ? "Wishlisted" : "Wishlist"}
        </button>
        <button className="flex items-center gap-2 flex-1 h-11 rounded-xl border border-border bg-surface-primary text-text-secondary text-sm font-medium hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer justify-center">
          <Share2 size={16} />
          Share
        </button>
      </div>

      {/* Accordions */}
      <div className="mt-1">
        <ProductAccordion label="Description">
          A refined piece crafted from premium materials. Designed for durability and elegance.
        </ProductAccordion>
        <ProductAccordion label="Material & Care">
          Premium quality materials. Clean with a soft dry cloth. Avoid prolonged sunlight.
        </ProductAccordion>
        <ProductAccordion label="Shipping & Returns">
          Free standard shipping on orders over $150. Free returns within 30 days.
        </ProductAccordion>
      </div>
    </div>
  );
}
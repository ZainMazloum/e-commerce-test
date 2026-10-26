// components/product/detail/ProductGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/domain/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  // In production product.images[] replaces this stub
  const images = [product.image, product.image, product.image, product.image] as string[];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-secondary">
        <Image src={images[activeImage]} alt={product.name} fill className="object-cover" priority />

        {product.badge && (
          <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => setActiveImage((p) => (p - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:bg-white transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={18} className="text-text-primary" />
        </button>

        <button
          onClick={() => setActiveImage((p) => (p + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:bg-white transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={18} className="text-text-primary" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                i === activeImage ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative aspect-square rounded-xl overflow-hidden bg-surface-secondary border-2 transition-all duration-200 cursor-pointer ${
              activeImage === i ? "border-primary" : "border-transparent hover:border-border"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
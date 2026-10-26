// components/product/detail/ProductDetailView.tsx

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/types/domain/product";
import { PRODUCTS } from "@/lib/data/products";

import ProductCard from "@/components/product/ProductCard";
import ProductGallery from "@/components/product/detail/ProductGallery";
import ProductInfo from "@/components/product/detail/ProductInfo";
import ProductTrustStrip from "@/components/product/detail/ProductTrustStrip";
import ProductFeatureSection from "@/components/product/detail/ProductFeatureSection";
import ProductReviews from "@/components/product/detail/ProductReviews";

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({
  product,
}: ProductDetailViewProps) {
  const related = PRODUCTS
    .filter((p) => String(p.id) !== String(product.id))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-6 pb-2"
      >
        <ol className="flex items-center gap-1.5 text-xs text-text-secondary flex-wrap">
          {["Home", "Shop", "All Products"].map((crumb) => (
            <li key={crumb} className="flex items-center gap-1.5">
              <Link
                href={crumb === "Home" ? "/" : "/products"}
                className="hover:text-primary transition-colors"
              >
                {crumb}
              </Link>

              <ChevronRight
                size={12}
                aria-hidden="true"
                className="text-border"
              />
            </li>
          ))}

          <li
            aria-current="page"
            className="font-medium text-text-primary truncate max-w-50"
          >
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Main product section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-start">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Trust signals */}
      <ProductTrustStrip />

      {/* Product story and specifications */}
      <ProductFeatureSection product={product} />

      {/* Related products */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
            Complete the Aesthetic
          </h2>

          <Link
            href="/products"
            className="text-sm text-primary font-medium hover:text-primary-light transition-colors flex items-center gap-1"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
            />
          ))}
        </div>
      </section>

      {/* Customer reviews */}
      <ProductReviews product={product} />
    </main>
  );
}
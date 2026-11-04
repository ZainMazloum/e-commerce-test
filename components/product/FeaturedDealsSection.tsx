// components/product/FeaturedDealsSection.tsx
import { getOnSaleProducts } from "@/lib/products";
import ProductGridLayout from "@/components/product/ProductGridLayout";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default async function FeaturedDealsSection() {
  const featuredProducts = await getOnSaleProducts();

  return (
    <section className="px-5 py-8 md:px-10 md:py-10 lg:px-16 lg:py-14 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          Featured Deals
        </h2>
        <Link
          href="/products"
          className="text-sm text-primary font-medium hover:text-primary-light 
            transition-colors duration-200 flex items-center gap-1"
        >
          View all offers <span aria-hidden>→</span>
        </Link>
      </div>

      <ProductGridLayout>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGridLayout>
    </section>
  );
}
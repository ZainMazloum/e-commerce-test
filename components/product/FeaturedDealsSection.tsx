import Link from "next/link";
import { PRODUCTS } from "@/lib/data/products";
import ProductGridLayout from "@/components/product/ProductGridLayout";  // ← shared grid
import ProductCard from "@/components/product/ProductCard";  // ← updated card

const featuredProducts = PRODUCTS.filter(
  (p) => p.badge === "Sale"                            // ← only sale items
);

function FeaturedDealsSection() {
  return (
    <section className="px-5 py-8 md:px-10 md:py-10 lg:px-16 lg:py-14 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          Featured Deals
        </h2>
        <Link
          href="/products"                             // ← real route, not #
          className="text-sm text-primary font-medium hover:text-primary-light transition-colors duration-200 flex items-center gap-1"
        >
          View all offers <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Product Grid */}
      <ProductGridLayout>                                    {/* ← replaces inline grid div */}
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGridLayout>
    </section>
  );
}

export default FeaturedDealsSection;
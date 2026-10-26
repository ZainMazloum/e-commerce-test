import Link from "next/link";
import { Product } from "@/types/domain/product";
import ProductGridLayout from "@/components/product/ProductGridLayout";  // ← shared grid
import ProductCard from "@/components/product/ProductCard";  // ← updated card
interface Props {
  products: Product[]
}
function FeaturedDealsSection({ products }: Props) {
  return (
    <section className="px-5 py-8 md:px-10 md:py-10 lg:px-16 lg:py-14 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
          Featured Deals
        </h2>
        <Link href="/products" className="...">
          View all offers <span aria-hidden>→</span>
        </Link>
      </div>

      <ProductGridLayout>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGridLayout>
    </section>
  )
}

export default FeaturedDealsSection;
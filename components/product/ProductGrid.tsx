// components/product/ProductGrid.tsx
import ProductCard from "./ProductCard";
import { Product } from "@/types/domain/product";

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <section className="px-4 pb-16 md:px-8 lg:px-16">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Load More button */}
    </section>
  );
}
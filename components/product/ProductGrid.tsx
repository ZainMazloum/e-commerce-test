// components/product/ProductGrid.tsx
import { getAllProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

export default async function ProductsGrid() {
  const products = await getAllProducts();

  return (
    <section className="px-4 pb-16 md:px-8 lg:px-16">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="px-8 py-3 rounded-2xl border-2 border-primary text-primary
          font-semibold text-sm cursor-pointer transition-all duration-300
          hover:bg-primary hover:text-white active:scale-95">
          Load More Products
        </button>
      </div>
    </section>
  );
}
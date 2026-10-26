// app/products/page.tsx
import { getAllProducts } from "@/lib/products";
import ProductsHero from "@/components/product/ProductHero";
import ProductsFilterBar from "@/components/product/ProductFilters";
import ProductsGrid from "@/components/product/ProductGrid";

export default async function AllProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen bg-background">
      <ProductsHero />
      <ProductsFilterBar />
      <ProductsGrid products={products} />
    </main>
  );
}
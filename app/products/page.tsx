import ProductsHero from "@/components/product/ProductHero";
import ProductsFilterBar from "@/components/product/ProductFilters";
import ProductsGrid from "@/components/product/ProductGrid";
export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProductsHero />
      <ProductsFilterBar />
      <ProductsGrid />
    </main>
  );
}
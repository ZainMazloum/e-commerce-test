
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetailView from "@/components/product/ProductDetailView";
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = PRODUCTS.find(
    (p) => String(p.id) === id
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
import { notFound } from "next/navigation";
import { getProductById, getRelatedProducts } from "@/lib/products";
import ProductDetailView from "@/components/product/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product.category, id);

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
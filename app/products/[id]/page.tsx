export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <main className="min-h-screen bg-background">Product {id}</main>;
}
// app/products/loading.tsx
export default function Loading() {
  return (
    <section className="px-4 pb-16 md:px-8 lg:px-16">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-surface-primary rounded-2xl overflow-hidden 
            border border-border-subtle animate-pulse">
            <div className="aspect-4/3 bg-surface-secondary" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-surface-secondary rounded w-3/4" />
              <div className="h-3 bg-surface-secondary rounded w-1/2" />
              <div className="h-8 bg-surface-secondary rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
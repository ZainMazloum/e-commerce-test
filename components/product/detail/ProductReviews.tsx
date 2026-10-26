// components/product/detail/ProductReviews.tsx
import { Star } from "lucide-react";
import { Product } from "@/types/domain/product";

// In production this comes from an API call
const REVIEWS = [
  {
    id: 1,
    name: "Sophia M.",
    rating: 5,
    date: "October 12, 2024",
    body: "Absolutely stunning. The leather quality exceeded my expectations.",
  },
  {
    id: 2,
    name: "Amara J.",
    rating: 4,
    date: "September 28, 2024",
    body: "Beautiful bag, incredibly well made. Slightly smaller than I imagined.",
  },
  {
    id: 3,
    name: "Elena K.",
    rating: 5,
    date: "September 5, 2024",
    body: "The emerald is stunning in person — photos don't do it justice.",
  },
];

interface ProductReviewsProps {
  product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
  return (
    <section className="border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-border"
                    }
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-text-primary">
                {product.rating} out of 5
              </span>
              <span className="text-sm text-text-secondary">({product.reviewCount} reviews)</span>
            </div>
          </div>
          <button className="self-start sm:self-auto px-5 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
            Write a Review
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.id} className="border border-border-subtle rounded-2xl p-5 bg-surface-primary shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary leading-none">{r.name}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{r.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < r.rating ? "text-amber-400 fill-amber-400" : "text-border"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 rounded-2xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white active:scale-95 transition-all duration-300 cursor-pointer">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
import { Star } from "lucide-react";

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={2}
          // Fills the star completely with amber if active, otherwise transparent
          className={`${
            i < rating 
              ? "text-amber-400 fill-amber-400" 
              : "text-border"
          }`}
        />
      ))}
      <span className="text-xs text-text-secondary ml-1">({reviewCount})</span>
    </div>
  );
}
export default StarRating
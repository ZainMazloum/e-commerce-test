import { Product } from "@/types/domain/product";

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  "New Stock":       "bg-primary text-white",
  "Available":       "bg-primary-light text-white",
  "Limited Edition": "bg-secondary text-white",
  "Sale":   "bg-secondary text-white"
};

export default function ProductBadge({ badge }: { badge: NonNullable<Product["badge"]> }) {
  return (
    <span className={`
      absolute top-3 left-3 z-10
      px-2.5 py-1 rounded-full
      text-[10px] font-semibold tracking-wide uppercase
      ${BADGE_STYLES[badge]}
    `}>
      {badge}
    </span>
  );
}
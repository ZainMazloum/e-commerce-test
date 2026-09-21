"use client"
import { Heart } from "lucide-react";

function WishlistButton() {
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: add wishlist logic here
  };

  return (
    <button
      onClick={handleWishlist}
      aria-label="Add to wishlist"
      className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-surface-secondary shadow-soft hover:scale-110 active:scale-95 transition-all duration-200 group/wishlist cursor-pointer"
    >
      <Heart
        size={16}
        strokeWidth={1.8}
        className="text-text-secondary group-hover/wishlist:text-secondary group-hover/wishlist:fill-secondary transition-colors duration-200"
      />
    </button>
  );
}

export default WishlistButton;
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/domain/product';
import StarRating from '../reviews/StarRating';
import WishlistButton from '../wishlist/WishListButton';

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-surface-primary rounded-2xl overflow-hidden shadow-soft border border-border-subtle">
      {/* Image Area — Link only */}
      <Link href={`/products/${product.id}`} className="group/image block relative w-full aspect-4/3 bg-surface-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/image:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-all duration-300" />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-secondary text-surface-primary text-xs font-semibold px-2.5 py-1 rounded-md">
            {product.badge}
          </span>
        )}

        {/* Quick View */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-surface-primary text-text-primary text-xs font-semibold px-4 py-2 rounded-xl shadow-md cursor-pointer whitespace-nowrap hover:bg-secondary hover:text-surface-primary transition-colors duration-200"
          >
            Quick View
          </button>
        </div>
      </Link>

      {/* Info Area */}
      <div className="p-4">
        {/* Name + Wishlist on the same row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-text-primary leading-snug">
            {product.name}
          </h3>
          <WishlistButton />
        </div>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
{product.originalPrice && product.originalPrice > product.price ? (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-secondary">
            ${product.price}.00
          </span>
          <span className="text-sm text-text-secondary line-through">
            ${product.originalPrice}.00
          </span>
        </div>
) : (
          <div className="flex items-center gap-2 mt-2">
          <span className="text-base font-bold text-secondary">
            ${product.price}.00
          </span>
          </div>
)}
        <button className="mt-3 w-full bg-secondary hover:bg-secondary-dark active:scale-95 text-surface-primary text-sm font-semibold py-2.5 rounded-xl cursor-pointer transition-all duration-200">
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
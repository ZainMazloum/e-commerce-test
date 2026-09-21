import Image from "next/image";
import { X } from "lucide-react";
import StockBadge from "../ui/status/StockBadge";
import { CartItem } from "@/types/domain/cart";
import QuantityStepper from "./QuantityStepper";

function CartItemRow({
  item,
  onRemove,
  onDecrement,
  onIncrement,
}: {
  item: CartItem;
  onRemove: (id: number) => void;
  onDecrement: (id: number) => void;
  onIncrement: (id: number) => void;
}) {
  return (
    <div className="flex items-start gap-3 py-5 border-b border-border-subtle last:border-b-0">
      {/* Product Image */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden bg-surface-secondary">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-text-primary leading-tight">
              {item.name}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Color: {item.color}
            </p>
            <div className="mt-1">
              <StockBadge status={item.stock} />
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            className="shrink-0 w-5 h-5 flex items-center justify-center text-border cursor-pointer hover:text-secondary transition-colors duration-200"
            aria-label={`Remove ${item.name}`}
          >
            <X size={14} />
          </button>
        </div>

        {/* Price + Quantity Row */}
        <div className="flex items-end justify-between mt-1">
          <QuantityStepper
            quantity={item.quantity}
            onDecrement={() => onDecrement(item.id)}
            onIncrement={() => onIncrement(item.id)}
          />
          <div className="text-right">
            <p className="text-sm font-semibold text-text-primary">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.originalPrice && (
              <p className="text-xs text-border line-through">
                ${(item.originalPrice * item.quantity).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemRow;
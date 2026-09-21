import CartItemRow from "./CartItemRow";
import { CartItem } from "@/types/domain/cart";
interface CartItemListProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onDecrement: (id: number) => void;
  onIncrement: (id: number) => void;
}
export default function CartItemList({
  items,
  onRemove,
  onDecrement,
  onIncrement,
}: CartItemListProps) {
  return (
    <section
      aria-label="Cart items"
      className="flex-1 w-full bg-surface-primary rounded-2xl border border-border-subtle px-4 md:px-6 shadow-soft"
    >
      {items.map((item) => (
        <CartItemRow
          key={item.id}
          item={item}
          onRemove={onRemove}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      ))}
    </section>
  );
}
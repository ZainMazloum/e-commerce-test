import Image from "next/image";
import { OrderItemType } from "@/types/domain/profile";

interface OrderItemProps {
  item: OrderItemType;
}

export default function OrderItem({
  item,
}: OrderItemProps) {
  return (
    <div className="flex items-center gap-3 mt-2">
      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-secondary">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-text-primary leading-snug">
          {item.name}
        </p>

        <button className="text-xs text-primary font-medium mt-0.5 hover:underline">
          {item.details}
        </button>
      </div>
    </div>
  );
}
import { Order } from "@/types/domain/profile";
import OrderItem from "./OrderItem";
import StatusBadge from "@/components/ui/status/StatusBadge";
interface OrderCardProps {
  order: Order;
}

export default function OrderCard({
  order,
}: OrderCardProps) {
  return (
    <div className="border border-border rounded-2xl p-4 bg-surface-primary shadow-soft">
      {/* Order Meta */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-text-secondary">
          {order.date}
        </p>

        <div className="flex items-center gap-3">
          <StatusBadge status={order.status} />

          <span className="text-base font-bold text-text-primary">
            ${order.total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Order Items */}
      {order.items.map((item) => (
        <OrderItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
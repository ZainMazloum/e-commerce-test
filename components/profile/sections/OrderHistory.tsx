import OrderCard from "../order/OrderCard";
import { ORDERS } from "@/lib/data/profile";

export default function OrderHistory() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Order History
      </h2>

      <div className="flex flex-col gap-4">
        {ORDERS.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))}
      </div>
    </section>
  );
}
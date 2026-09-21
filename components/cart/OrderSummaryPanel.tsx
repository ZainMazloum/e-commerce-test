import Link from "next/link";
import { Lock } from "lucide-react";
import { OrderSummary } from "@/types/domain/cart";
import { CartItem } from "@/types/domain/cart";
function OrderSummaryPanel({
  summary,
}: {
  items: CartItem[];
  summary: OrderSummary;
}) {
  const total =
    summary.subtotal +
    (typeof summary.shipping === "number" ? summary.shipping : 0) +
    summary.estimatedTax;

  return (
    <div className="bg-white rounded-2xl border border-border-subtle p-5 md:p-6 shadow-soft">
      <h2 className="text-base font-semibold text-text-primary mb-5">
        Order Summary
      </h2>

      {/* Line Items */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-text-secondary">
          <span>Subtotal</span>
          <span className="font-medium text-text-primary">
            ${summary.subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Shipping</span>
          {/* Replaced emerald-600 with primary-light (#2b6954) to match your brand's green accent */}
          <span className="font-medium text-primary-light">
            {summary.shipping === "Free" ? "Free" : `$${summary.shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Estimated Tax</span>
          <span className="font-medium text-text-primary">
            ${summary.estimatedTax.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border-subtle my-4" />

      {/* Total */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-base font-bold text-text-primary">Total</span>
        <span className="text-xl font-bold text-text-primary">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold transition-colors duration-200 active:scale-[0.98]"
      >
        Proceed to Checkout
        <span aria-hidden>→</span>
      </Link>

      {/* Secure Checkout Note */}
      <p className="flex items-center justify-center gap-1.5 text-xs text-text-secondary mt-3">
        <Lock size={11} />
        Secure encrypted checkout
      </p>
    </div>
  );
}

export default OrderSummaryPanel;
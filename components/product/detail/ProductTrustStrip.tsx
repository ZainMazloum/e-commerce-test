// components/product/detail/ProductTrustStrip.tsx
import { Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Truck,       title: "Free Shipping",  sub: "On orders over $150"   },
  { icon: RefreshCcw,  title: "30-Day Returns", sub: "Hassle-free returns"    },
  { icon: ShieldCheck, title: "100% Authentic", sub: "Verified craftsmanship" },
];

export default function ProductTrustStrip() {
  return (
    <section className="bg-surface-secondary border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
          {TRUST_ITEMS.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 px-4 py-4 sm:first:pl-0">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{title}</p>
                <p className="text-xs text-text-secondary">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
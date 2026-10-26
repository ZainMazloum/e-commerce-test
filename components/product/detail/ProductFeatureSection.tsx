// components/product/detail/ProductFeatureSection.tsx
import Image from "next/image";
import { Product } from "@/types/domain/product";

const SPECS = [
  { label: "Origin",   value: "Ethically Sourced" },
  { label: "Edition",  value: "Limited Run"        },
  { label: "Hardware", value: "Solid Brass"         },
  { label: "Warranty", value: "2 Year Cover"        },
];

interface ProductFeatureSectionProps {
  product: Product;
}

export default function ProductFeatureSection({ product }: ProductFeatureSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-14 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Crafted with Intention
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary leading-snug mb-5">
            Designed for the Modern Aesthetic
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Each piece in our Vault collection is produced in limited runs, ensuring quality and
            exclusivity. The carefully selected materials develop character over time.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Our commitment to sustainability means every element is responsibly sourced — beautiful
            inside and out.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {SPECS.map(({ label, value }) => (
              <div key={label} className="border border-border-subtle rounded-xl p-3 bg-surface-primary">
                <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-widest">
                  {label}
                </p>
                <p className="text-sm font-semibold text-text-primary mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-surface-secondary order-first lg:order-last">
          <Image src={product.image} alt={`${product.name} detail`} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
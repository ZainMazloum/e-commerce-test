// components/product/detail/ProductAccordion.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ProductAccordionProps {
  label: string;
  children: React.ReactNode;
}

export default function ProductAccordion({ label, children }: ProductAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center justify-between w-full py-4 text-sm font-semibold text-text-primary text-left cursor-pointer"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className={`text-text-secondary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-text-secondary leading-relaxed whitespace-pre-line">
          {children}
        </div>
      )}
    </div>
  );
}
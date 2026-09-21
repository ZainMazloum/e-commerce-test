// components/product/ProductGridLayout.tsx

import { ReactNode } from "react";

interface ProductGridLayoutProps {
  children: ReactNode;
}

export default function ProductGridLayout({ children }: ProductGridLayoutProps) {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
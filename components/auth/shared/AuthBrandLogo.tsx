// components/auth/AuthBrandLogo.tsx

import Link from "next/link";

export function AuthBrandLogo() {
  return (
    <Link href="/" className="mb-6 md:mb-8">
      <span className="font-display text-xl font-semibold tracking-widest text-text-primary uppercase">
        Lumina
      </span>
    </Link>
  );
}
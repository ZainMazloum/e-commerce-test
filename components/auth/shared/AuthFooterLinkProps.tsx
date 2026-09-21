// components/auth/AuthFooterLink.tsx

import Link from "next/link";
import { AuthFooterLinkProps } from "../types";
export function AuthFooterLink({ question, linkText, href }: AuthFooterLinkProps) {
  return (
    <p className="text-center text-sm text-text-secondary">
      {question}{" "}
      <Link
        href={href}
        className="font-semibold text-primary hover:text-primary-light transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
}
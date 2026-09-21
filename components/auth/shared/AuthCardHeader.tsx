// components/auth/AuthCardHeader.tsx
import { AuthCardHeaderProps } from "../types";
export function AuthCardHeader({ title, subtitle }: AuthCardHeaderProps) {
  return (
    <header className="text-center mb-6">
      <h1 className="font-display text-2xl md:text-3xl font-semibold text-text-primary">
        {title}
      </h1>
      <p className="mt-1 text-sm text-text-secondary">
        {subtitle}
      </p>
    </header>
  );
}
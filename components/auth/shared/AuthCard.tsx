// components/auth/AuthCard.tsx
import { AuthCardProps } from "../types";
export function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="
        w-full max-w-sm
        md:max-w-md
        bg-white rounded-2xl shadow-soft
        px-6 py-8
        md:px-10 md:py-10
      "
    >
      {children}
    </div>
  );
}
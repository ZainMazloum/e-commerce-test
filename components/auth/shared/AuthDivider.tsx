// components/auth/AuthDivider.tsx
import { AuthDividerProps } from "../types";
export function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-3 my-5">
      <span className="flex-1 h-px bg-border" />
      <span className="text-xs text-text-secondary whitespace-nowrap">
        {text}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
  );
}
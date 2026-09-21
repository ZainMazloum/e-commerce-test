// components/auth/AuthSocialButton.tsx

import { AuthSocialButtonProps } from "../types";
export function AuthSocialButton({ label, icon, onClick }: AuthSocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full flex items-center justify-center gap-2.5
        border border-border bg-white
        hover:bg-surface-secondary hover:border-primary/30
        text-text-primary text-sm font-medium
        py-2.5 rounded-xl
        transition-all duration-200 cursor-pointer
        active:scale-95
      "
    >
      {icon}
      {label}
    </button>
  );
}
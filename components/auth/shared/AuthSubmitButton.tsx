// components/auth/AuthSubmitButton.tsx

import { AuthSubmitButtonProps } from "../types";
export function AuthSubmitButton({ label }: AuthSubmitButtonProps) {
  return (
    <button
      type="submit"
      className="
        w-full flex items-center justify-center
        bg-primary hover:bg-primary-light
        text-white text-sm font-medium
        py-3 rounded-xl
        transition-all duration-200 cursor-pointer
        hover:-translate-y-0.5
        hover:shadow-[0_8px_20px_rgba(0,53,39,0.3)]
        active:scale-95
      "
    >
      {label}
    </button>
  );
}
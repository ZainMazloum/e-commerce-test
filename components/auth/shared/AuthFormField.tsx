// components/auth/AuthFormField.ts

import { AuthFormFieldProps } from "../types";
export function AuthFormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  rightSlot,
}: AuthFormFieldProps) {
  return (
    <div className="flex flex-col gap-1">

      {/* Label row */}
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium text-text-primary">
          {label}
        </label>
        {rightSlot && <span className="text-xs">{rightSlot}</span>}
      </div>

      {/* Input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full rounded-xl border border-border bg-surface-secondary
          px-4 py-2.5
          text-sm text-text-primary placeholder:text-text-secondary/50
          outline-none caret-primary-light
          focus:border-primary focus:ring-2 focus:ring-primary/20
          transition duration-200
        "
      />

    </div>
  );
}
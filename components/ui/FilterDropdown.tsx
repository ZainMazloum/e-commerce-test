import type { FilterOption } from "@/types/filters/filteroption";
interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
    const id = label.toLocaleLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1">
      <label
      htmlFor={id}
      className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
        {label}
      </label>
      <select
      id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          px-3 py-2 rounded-xl
          border border-border bg-surface-primary
          text-text-primary text-sm font-medium
          cursor-pointer min-w-30
          focus:outline-none focus:ring-2 focus:ring-primary/30
          transition-all duration-200
        "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
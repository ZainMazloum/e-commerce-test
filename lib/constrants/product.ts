import { StockStatus } from "@/types/stock/stockstatus";
export const stockConfigConstrant: Record<
  StockStatus,
  { label: string; className: string }
> = {
  "In Stock": {
    label: "In Stock",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  "Low Stock": {
    label: "Low Stock",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  "Out of Stock": {
    label: "Out of Stock",
    className: "bg-red-100 text-red-600 border-red-200",
  },
};
export interface StockConfig {
  variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  label: string;
  className: string;
}
export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";
import { Order } from "@/types/domain/profile";

export const orderStatusConfig = {
  Delivered: {
    label: "Delivered",
    className:
      "bg-primary/10 text-primary border-primary/20",
  },

  Processing: {
    label: "Processing",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200",
  },

  Cancelled: {
    label: "Cancelled",
    className:
      "bg-secondary/10 text-secondary border-secondary/20",
  },
} satisfies Record<
  Order["status"],
  {
    label: string;
    className: string;
  }
>;
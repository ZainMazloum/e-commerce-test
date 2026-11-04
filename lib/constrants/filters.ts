// lib/constants/filters.ts
import { FilterOption } from "@/types/filters/filteroption";

export const CATEGORY_OPTIONS: FilterOption[] = [
  { label: "All",         value: "all"         },
  { label: "Footwear",    value: "footwear"    },
  { label: "Electronics", value: "electronics" },
  { label: "Beauty",      value: "beauty"      },
  { label: "Kitchen",     value: "kitchen"     },
];

export const PRICE_OPTIONS: FilterOption[] = [
  { label: "Any Price",   value: "any"       },
  { label: "Under $100",  value: "under-100" },
  { label: "$100 – $200", value: "100-200"   },
  { label: "Over $200",   value: "over-200"  },
];

export const MATERIAL_OPTIONS: FilterOption[] = [
  { label: "All",     value: "all"     },
  { label: "Leather", value: "leather" },
  { label: "Ceramic", value: "ceramic" },
  { label: "Steel",   value: "steel"   },
];

export const SORT_OPTIONS: FilterOption[] = [
  { label: "Newest ↑",        value: "newest"    },
  { label: "Price: Low–High", value: "price-asc" },
  { label: "Price: High–Low", value: "price-desc"},
];
import { Product} from "@/types/domain/product";
import { FilterOption } from "@/types/filters/filteroption";
import StructuredLeatherTote from "../../src/images/products/StructuredLeatherTote.png"
import CashmereBlendScarf from "../../src/images/products/CashmereBlendScarf.png"
import OversizedPoplinShirt from "../../src/images/products/OversizedPoplinShirt.png"
import EssentialLeatherSneakers from "../../src/images/products/EssentialLeatherSneakers.png"
import TheCrimsonRunner from "../../src/images/products/TheCrimsonRunner.png"
import AuraChronograph from "../../src/images/products/AuraChronograph.png"
import SonarOverEars from "../../src/images/products/ScalarOverEars.png"
import BotanicalSerum from "../../src/images/products/BotanicalSerum.png"
import RetroCapture from "../../src/images/products/RetroCapture.png"
import CeramicPourOver from "../../src/images/products/CeramicPourOver.png"
import LuminaSmartwatch from "../../src/images/products/Lumina Smartwatch.png"
import OnyxTrainers from "../../src/images/products/OnyxTrainers.png"
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Crimson Runner",
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.5,
    reviewCount: 128,
    badge: "New Stock",
    image: TheCrimsonRunner,
  },
  {
    id: 2,
    name: "Aura Chronograph",
    price: 289.00,
    originalPrice: 289.00,
    rating: 4.8,
    reviewCount: 74,
    badge: null,
    image: AuraChronograph,
  },
  {
    id: 3,
    name: "Scalar Over-Ears",
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.6,
    reviewCount: 203,
    badge: "Available",
    image: SonarOverEars,
  },
  {
    id: 4,
    name: "Botanical Serum",
    price: 85.00,
    originalPrice: 85.00,
    rating: 4.3,
    reviewCount: 56,
    badge: null,
    image: BotanicalSerum,
  },
  {
    id: 5,
    name: "Retro-Capture",
    price: 130.00,
    originalPrice: 160.00,
    rating: 4.4,
    reviewCount: 89,
    badge: null,
    image: RetroCapture,
  },
  {
    id: 6,
    name: "Ceramic Pour-Over",
    price: 65.00,
    originalPrice: 65.00,
    rating: 4.7,
    reviewCount: 42,
    badge: null,
    image: CeramicPourOver,
  },
  {
    id: 7,
    name: "Lumina Smartwatch",
    price: 309.00,
    originalPrice: 379.00,
    rating: 4.9,
    reviewCount: 317,
    badge: "Limited Edition",
    image: LuminaSmartwatch,
  },
  {
    id: 8,
    name: "Onyx Trainers",
    price: 160.00,
    originalPrice: 195.00,
    rating: 4.2,
    reviewCount: 61,
    badge: null,
    image: OnyxTrainers,
  },
  {
    id: 9,
    name: "Structured Leather Tote",
    price: 189,
    originalPrice: 249,
    rating: 4,
    reviewCount: 44,
    badge: "Sale",
  image: StructuredLeatherTote,
  },
  {
    id: 10,
    name: "Cashmere Blend Scarf",
    price: 85,
    originalPrice: 120,
    rating: 4,
    reviewCount: 36,
    badge: "Sale",
    image: CashmereBlendScarf,
  },
  {
    id: 11,
    name: "Oversized Poplin Shirt",
    price: 95,
    originalPrice: 135,
    rating: 4,
    reviewCount: 74,
    badge: "Sale",
    image: OversizedPoplinShirt,
  },
  {
    id: 12,
    name: "Essential Leather Sneakers",
    price: 145,
    originalPrice: 185,
    rating: 4,
    reviewCount: 93,
    badge: "Sale",
    image: EssentialLeatherSneakers,
  },
];

export const CATEGORY_OPTIONS: FilterOption[] = [
  { label: "All",          value: "all"         },
  { label: "Footwear",     value: "footwear"    },
  { label: "Electronics",  value: "electronics" },
  { label: "Beauty",       value: "beauty"      },
  { label: "Kitchen",      value: "kitchen"     },
];

export const PRICE_OPTIONS: FilterOption[] = [
  { label: "Any Price",    value: "any"       },
  { label: "Under $100",   value: "under-100" },
  { label: "$100 – $200",  value: "100-200"   },
  { label: "Over $200",    value: "over-200"  },
];

export const MATERIAL_OPTIONS: FilterOption[] = [
  { label: "All",      value: "all"     },
  { label: "Leather",  value: "leather" },
  { label: "Ceramic",  value: "ceramic" },
  { label: "Steel",    value: "steel"   },
];

export const SORT_OPTIONS: FilterOption[] = [
  { label: "Newest ↑",        value: "newest"     },
  { label: "Price: Low–High", value: "price-asc"  },
  { label: "Price: High–Low", value: "price-desc" },
];
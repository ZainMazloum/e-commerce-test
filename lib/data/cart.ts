import { CartItem } from "@/types/cart/cartitem";
import { OrderSummary } from "@/types/cart/ordersummary";
import AuraChronograph from "../../src/images/products/AuraChronograph.png"
import BotanicalSerum from "../../src/images/products/BotanicalSerum.png"

export const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Aura Chronograph",
    color: "Stone White",
    price: 120.00,
    originalPrice: 150.00,
    quantity: 1,
    stock: "In Stock",
    image: AuraChronograph,
  },
  {
    id: 2,
    name: "Botanical Serum",
    color: "Midnight Black",
    price: 85.00,
    quantity: 1,
    stock: "Low Stock",
    image: BotanicalSerum,
  },
];

export const orderSummaryData: OrderSummary = {
  subtotal: 168.0,
  shipping: "Free",
  estimatedTax: 13.64,
};
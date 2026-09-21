import { Address, Order } from "@/types/domain/profile";

export const USER = {
  name: "Alexander Sterling",
  email: "alexander.sterling@example.com",
  avatar: "/placeholder.jpg",
};
export const ORDERS: Order[] = [
  {
    id: "ORD-001",
    date: "Placed on October 18, 2024",
    status: "Delivered",
    total: 420.0,
    items: [
      {
        id: "item-1",
        name: "Woolen Canvas Tote & more text",
        details: "View Details ▾",
        image: "/placeholder.jpg",
        price: 120.0,
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD-002",
    date: "Placed on September 20, 2024",
    status: "Delivered",
    total: 195.0,
    items: [
      {
        id: "item-2",
        name: "Chronograph Signature Series",
        details: "View Details ▾",
        image: "/placeholder.jpg",
        price: 195.0,
        quantity: 1,
      },
    ],
  },
];
export const ADDRESSES: Address[] = [
  {
    id: "addr-1",
    name: "Alexander Sterling",
    isDefault: true,
    street: "1234 Elm Boulevard",
    city: "San Francisco",
    state: "CA 94102",
    zip: "",
    country: "United States",
  },
];
export const SIDEBAR_LINKS = [
  { label: "Order History",      icon: "🕐", active: true  },
  { label: "Shipping Addresses", icon: "📍", active: false },
  { label: "Account Settings",   icon: "⚙️", active: false },
  { label: "Sign out",           icon: "🚪", active: false },
];
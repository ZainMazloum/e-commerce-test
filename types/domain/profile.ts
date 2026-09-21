import {OrderItemType} from "../domain/order"
export interface Order {
  id: string;
  date: string;
  status: "Delivered" | "Processing" | "Cancelled";
  total: number;
  items: OrderItemType[];
}

export interface Address {
  id: string;
  name: string;
  isDefault: boolean;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface AccountFormData {
  firstName: string;
  lastName: string;
  email: string;
}

export type TabKey =
  | "orders"
  | "addresses"
  | "settings";
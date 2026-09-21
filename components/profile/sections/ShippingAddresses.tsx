import AddressCard from "../address/AddressCard";
import { ADDRESSES } from "@/lib/data/profile";

export default function ShippingAddresses() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-text-primary">
          Shipping Addresses
        </h2>

        <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
          + Add New
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {ADDRESSES.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
          />
        ))}
      </div>
    </section>
  );
}
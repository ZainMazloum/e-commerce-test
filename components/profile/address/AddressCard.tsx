import { Address } from "@/types/domain/profile";

interface AddressCardProps {
  address: Address;
}

export default function AddressCard({
  address,
}: AddressCardProps) {
  return (
    <div className="border border-border rounded-2xl p-4 bg-surface-primary shadow-soft relative">
      {/* Default Badge */}
      {address.isDefault && (
        <span className="absolute top-3 right-3 text-xs font-semibold bg-primary text-white px-2.5 py-0.5 rounded-full">
          Default
        </span>
      )}

      <p className="text-sm font-semibold text-text-primary mb-1">
        {address.name}
      </p>

      <p className="text-sm text-text-secondary leading-relaxed">
        {address.street}
        <br />
        {address.city}, {address.state}
        <br />
        {address.country}
      </p>
    </div>
  );
}
import { TabKey } from "@/types/domain/profile";
function MobileTabNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (t: TabKey) => void;
}) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "orders", label: "Orders" },
    { key: "addresses", label: "Addresses" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="flex md:hidden border-b border-border mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex-1 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 -mb-px
            ${
              active === tab.key
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
export default MobileTabNav
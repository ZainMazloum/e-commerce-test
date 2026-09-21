import { SIDEBAR_LINKS } from "../../lib/data/profile";
import { TabKey } from "@/types/domain/profile";

const LABEL_TO_TAB: Record<string, TabKey> = {
  "Order History":      "orders",
  "Shipping Addresses": "addresses",
  "Account Settings":   "settings",
};

interface ProfileSidebarProps {
  activeTab:   TabKey;
  onTabChange: (tab: TabKey) => void;
}

function Sidebar({ activeTab, onTabChange }: ProfileSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col gap-5 sticky top-25 self-start h-fit w-52 shrink-0 pt-2">
      {SIDEBAR_LINKS.map((link) => {
        const tab      = LABEL_TO_TAB[link.label];
        const isActive = tab === activeTab;

        return (
          <button
            key={link.label}
            onClick={() => {
              if (!tab) return;
              onTabChange(tab);
            }}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                        transition-all duration-200 w-full text-left cursor-pointer
              ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : link.label === "Sign out"
                  ? "text-secondary hover:bg-secondary/10"
                  : "text-text-secondary hover:bg-surface-secondary"
              }`}
          >
            <span className="text-base leading-none">{link.icon}</span>
            {link.label}
          </button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
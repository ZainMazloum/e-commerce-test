"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCartStore, selectItemCount } from "@/store/cartStore"; // NEW
import {useHydrated} from "@/hooks/useHydrated";
interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

const iconButtons = [
  { icon: Search, label: "Search", href: "#" },
  { icon: ShoppingCart, label: "Cart", href: "/cart" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hydrated = useHydrated(); // NEW: check if the component is hydrated
  const itemCount = useCartStore(selectItemCount); // NEW

  return (
    <header className="hidden md:block bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-between h-16 lg:h-20">

          <Link
            href="/"
            className="font-bold text-2xl lg:text-3xl tracking-tight text-primary select-none shrink-0"
          >
            LUMINA
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`
                      relative text-sm font-semibold lg:text-base pb-1 transition-colors duration-200 block
                      ${isActive
                        ? "font-bold text-primary"
                        : "font-normal text-text-secondary hover:text-primary-light"
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Icon Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {iconButtons.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={
                  label === "Cart" && itemCount > 0
                    ? `Cart, ${itemCount} items`   // NEW
                    : label
                }
                className="relative w-11 h-11 rounded-2xl bg-surface-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:scale-105 hover:shadow-card-hover active:scale-95 group"
              >
                {/*                ^^^^^^^ NEW: "relative" so the badge positions against this link */}
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="text-text-secondary group-hover:text-surface-primary transition-colors duration-300"
                />

                {/* NEW: cart badge */}
                {label === "Cart" && hydrated && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-secondary text-white text-[11px] font-semibold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";

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

                    {/* Active underline using your primary theme color */}
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
                aria-label={label}
                className="w-11 h-11 rounded-2xl bg-surface-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:scale-105 hover:shadow-card-hover active:scale-95 group"
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="text-text-secondary group-hover:text-surface-primary transition-colors duration-300"
                />
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </header>
  );
}
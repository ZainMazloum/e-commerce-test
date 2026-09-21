"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, ShoppingBag, ShoppingCart, LogIn, UserPlus } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "/",          icon: Home },
  { label: "All Products", href: "/products",   icon: ShoppingBag },
  { label: "Cart",         href: "/cart",       icon: ShoppingCart },
  { label: "Sign In",      href: "/sign-in",    icon: LogIn },
  { label: "Sign Up",      href: "/sign-up",    icon: UserPlus },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-5 py-4 bg-background border-b border-border md:hidden">
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-primary select-none"
        >
          LUMINA
        </Link>

        {/* Hamburger / Close toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
aria-expanded={open ? "true" : "false"}
          className="w-11 h-11 rounded-2xl bg-surface-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:-translate-y-1 hover:scale-105 hover:shadow-card-hover active:scale-95 group"
        >
          {open ? (
            <X size={20} strokeWidth={1.6} className="text-text-secondary group-hover:text-surface-primary transition-colors duration-300" />
          ) : (
            <Menu size={20} strokeWidth={1.6} className="text-text-secondary group-hover:text-surface-primary transition-colors duration-300" />
          )}
        </button>
      </header>

      {/* Dropdown menu */}
      {open && (
        <nav className="md:hidden bg-background border-b border-border px-5 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-text-secondary hover:text-primary hover:bg-surface-secondary transition-all duration-200"
            >
              <Icon size={18} strokeWidth={1.6} />
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
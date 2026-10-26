import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Contact Us", href: "#" },
];

async function getCurrentYear() {
  "use cache";

  return new Date().getFullYear();
}

export default async function Footer() {
  const CURRENT_YEAR = await getCurrentYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-0">
          <Link
            href="/"
            className="font-bold text-2xl tracking-tight text-primary select-none shrink-0"
          >
            LUMINA
          </Link>

          <nav className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-3 lg:flex lg:flex-nowrap lg:justify-start lg:gap-x-8 lg:gap-y-0">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-text-secondary hover:text-primary-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-text-secondary text-center shrink-0 lg:text-right">
            © {CURRENT_YEAR} LUMINA Editorial Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
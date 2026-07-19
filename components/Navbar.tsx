"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Tours",
    href: "/tours",
    children: [
      { label: "Tangier Private Tours", href: "/tours/tangier-private-tours" },
      { label: "Shore Excursions", href: "/tours/tangier-shore-excursions" },
      { label: "Chefchaouen Day Trip", href: "/tours/chefchaouen-day-trip-from-tangier" },
      { label: "Camel Ride Experience", href: "/tours/camel-ride-morocco" },
      { label: "Private Transfers", href: "/tours/private-morocco-transfers" },
      { label: "Tangier–Casablanca Day Trip", href: "/tours/tangier-casablanca-day-trip" },
    ],
  },
  { label: "Jewish Heritage", href: "/jewish-heritage-tours" },
  { label: "Luxury Tours", href: "/luxury-morocco-tours" },
  { label: "Pricing", href: "/pricing" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Idrissi", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="TangierTours logo"
              width={38}
              height={38}
              className="rounded"
              priority
            />
            <span className="font-display text-xl lg:text-2xl font-bold text-white tracking-wide">
              Tangier<span className="text-gold">Tours</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/85 hover:text-gold transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-gold py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-ivory hover:text-navy font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://wa.me/212668702424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#20BA5A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy text-sm font-semibold px-4 py-2 rounded hover:bg-gold-light transition-colors"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 max-h-screen overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-white/85 hover:text-gold font-medium border-b border-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pt-1 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-white/60 hover:text-gold"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/212668702424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded"
              >
                <Phone className="w-4 h-4" /> WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="block text-center bg-gold text-navy font-semibold py-3 rounded"
                onClick={() => setMobileOpen(false)}
              >
                Book a Tour
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

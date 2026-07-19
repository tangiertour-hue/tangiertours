import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Star } from "lucide-react";

const tourLinks = [
  { label: "Tangier Private Tours", href: "/tours/tangier-private-tours" },
  { label: "Shore Excursions", href: "/tours/tangier-shore-excursions" },
  { label: "Chefchaouen Day Trip", href: "/tours/chefchaouen-day-trip-from-tangier" },
  { label: "Camel Ride Experience", href: "/tours/camel-ride-morocco" },
  { label: "Private Transfers", href: "/tours/private-morocco-transfers" },
  { label: "Luxury Morocco Tours", href: "/luxury-morocco-tours" },
];

const heritageLinks = [
  { label: "Jewish Heritage Tours", href: "/jewish-heritage-tours" },
  { label: "Tangier Jewish Heritage", href: "/jewish-heritage-tours/tangier" },
  { label: "Casablanca Jewish Heritage", href: "/jewish-heritage-tours/casablanca" },
];

const companyLinks = [
  { label: "About Idrissi", href: "/about" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Pricing", href: "/pricing" },
  { label: "Destinations", href: "/destinations" },
  { label: "Blog", href: "/blog" },
  { label: "Cancellation Policy", href: "/terms" },
  { label: "Contact & Booking", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="TangierTours logo" width={36} height={36} className="rounded" />
              <span className="font-display text-2xl font-bold text-white">
                Tangier<span className="text-gold">Tours</span>
              </span>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Your trusted, licensed private tour guide in Tangier and Morocco. Crafting unforgettable experiences since 2008.
            </p>
            <div className="space-y-2 text-sm text-white/65">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Tangier Medina, Tangier 90000, Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="https://wa.me/212668702424" className="hover:text-gold transition-colors">+212 668-702-424</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:tangiertour@gmail.com" className="hover:text-gold transition-colors">tangiertour@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Our Tours</h3>
            <ul className="space-y-2">
              {tourLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Heritage */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Jewish Heritage</h3>
            <ul className="space-y-2 mb-6">
              {heritageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Why TangierTours?</h3>
            <ul className="space-y-3 text-sm text-white/65">
              {[
                "Licensed & certified guide",
                "500+ tours completed",
                "4.9★ on Google & TripAdvisor",
                "English, French, Spanish, Arabic, Hebrew",
                "Fully customizable private tours",
                "Guaranteed on-time returns for cruise passengers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/212668702424"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#20BA5A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} TangierTours. All rights reserved. Licensed Tour Guide — Morocco Ministry of Tourism.</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-gold transition-colors">Sitemap</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Cancellation Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

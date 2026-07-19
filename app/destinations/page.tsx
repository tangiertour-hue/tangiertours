import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Morocco Destinations — Tangier, Casablanca, Chefchaouen | TangierTours",
  description:
    "Explore Morocco's most captivating destinations with TangierTours. From cosmopolitan Tangier to the blue streets of Chefchaouen and the art-deco boulevards of Casablanca.",
};

interface DestinationCard {
  name: string;
  region: string;
  href: string;
  description: string;
  highlights: string[];
  tag: string;
}

const destinations: DestinationCard[] = [
  {
    name: "Tangier",
    region: "Northern Morocco · Mediterranean Coast",
    href: "/destinations/tangier",
    tag: "Gateway City",
    description:
      "Where Africa meets Europe across 14 km of shimmering Strait, Tangier is Morocco's most cosmopolitan city — a layered palimpsest of Phoenician, Roman, Moorish, Portuguese, and colonial influences.",
    highlights: [
      "Medina & Kasbah — ancient walled city centre",
      "Cape Spartel & Caves of Hercules",
      "American Legation Museum — only US National Historic Landmark abroad",
      "Café Hafa — legendary clifftop café since 1921",
    ],
  },
  {
    name: "Casablanca",
    region: "Atlantic Coast · Central-West Morocco",
    href: "/destinations/casablanca",
    tag: "Modern Metropolis",
    description:
      "Morocco's economic capital blends sweeping Art Deco boulevards with the breathtaking Hassan II Mosque — the third-largest mosque in the world, built on a platform extending over the Atlantic Ocean.",
    highlights: [
      "Hassan II Mosque — built over the Atlantic",
      "Art Deco Quartier des Habous",
      "Corniche promenade & beach clubs",
      "Rick's Café — recreated from the classic film",
    ],
  },
  {
    name: "Chefchaouen",
    region: "Rif Mountains · Northern Morocco",
    href: "/destinations/chefchaouen",
    tag: "Blue City",
    description:
      "Founded in 1471 at the foot of the Rif Mountains, Chefchaouen is Morocco's most photographed city — its medina painted in an infinite palette of blues, from powder to cobalt to midnight.",
    highlights: [
      "Blue-painted medina streets & alleyways",
      "Ras El Maa cascading river walkway",
      "Place Outa El Hammam & the old Kasbah",
      "Rif Mountain hiking trails above the city",
    ],
  },
];

const relatedTours = [
  { label: "Tangier Private Tours", href: "/tours/tangier-private-tours" },
  { label: "Shore Excursions", href: "/tours/tangier-shore-excursions" },
  { label: "Chefchaouen Day Trip", href: "/tours/chefchaouen-day-trip-from-tangier" },
  { label: "Luxury Morocco Tours", href: "/luxury-morocco-tours" },
];

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton variant="floating" />

      <main className="pt-16 bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[{ label: "Destinations" }]} />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              Discover Morocco —<br />
              From the Mediterranean Coast to the Atlas Mountains
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Every city tells a different story. Let Idrissi guide you through Northern Morocco's most remarkable places.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="space-y-4 text-[var(--charcoal)] leading-relaxed text-base">
            <p>
              Northern Morocco is one of the world&rsquo;s most geographically and culturally diverse regions, concentrated into a surprisingly compact area. Within a single day&rsquo;s drive from Tangier, you can move from the Mediterranean shores where Africa and Europe almost touch, through the cedar-forested peaks of the Rif Mountains, down to the Atlantic coast with its whitewashed fishing towns and rolling surf. Few regions anywhere on earth pack such variety into so little distance.
            </p>
            <p>
              The cities themselves are as distinct as the landscapes between them. Tangier carries the cosmopolitan energy of a city that has belonged to almost every empire and resisted all of them. Chefchaouen, tucked into the Rif, is a medina that seems to exist outside of time — cool, quiet, painted in extraordinary blues. Casablanca, on the Atlantic, pulses with the ambition of a modern economic capital that refuses to abandon its extraordinary Art Deco soul. Each deserves more than a single afternoon.
            </p>
          </div>
        </section>

        {/* Destination Cards */}
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <article
                key={d.name}
                className="bg-white rounded-lg border border-[var(--border-warm)] shadow-sm overflow-hidden flex flex-col"
              >
                {/* Color band */}
                <div className="bg-navy h-2" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wide border border-[var(--gold)] rounded px-2 py-0.5">
                      {d.tag}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[var(--navy)] mt-3 mb-1">
                    {d.name}
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-[var(--muted-text)] mb-4">
                    <MapPin className="w-3 h-3 shrink-0" />
                    {d.region}
                  </div>
                  <p className="text-sm text-[var(--charcoal)] leading-relaxed mb-5">{d.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {d.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--charcoal)]">
                        <span className="text-[var(--gold)] mt-0.5 shrink-0">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={d.href}
                    className="inline-flex items-center gap-1.5 text-[var(--navy)] font-semibold text-sm hover:text-[var(--gold)] transition-colors group mt-auto"
                  >
                    Explore {d.name}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Related Tours */}
        <section className="bg-white border-y border-[var(--border-warm)] py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold text-[var(--navy)] mb-6 text-center gold-divider">
              Related Tours
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {relatedTours.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex items-center gap-2 border border-[var(--border-warm)] rounded-lg px-5 py-3 text-sm font-medium text-[var(--navy)] hover:border-[var(--gold)] hover:bg-amber-50 transition-colors"
                >
                  {t.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Ready to Explore Morocco?
            </h2>
            <p className="text-white/70 mb-8">
              Let Idrissi design a private itinerary around the destinations that interest you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-8 py-4 rounded hover:opacity-90 transition"
              >
                Plan My Trip <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton label="WhatsApp Idrissi" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

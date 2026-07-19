import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Sun, Ship, Plane } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tangier Morocco — Complete Travel Guide | TangierTours",
  description:
    "Complete travel guide to Tangier, Morocco. Discover top attractions, best time to visit, and practical travel tips. Expert local knowledge for Tangier Morocco travel.",
  keywords: ["Tangier Morocco travel", "what to see in Tangier", "Tangier travel guide", "visit Tangier Morocco"],
};

const tangierSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Tangier",
  description:
    "Morocco's northernmost city, Tangier sits at the meeting point of the Atlantic Ocean and the Mediterranean Sea, just 14 km from mainland Spain.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangier",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.7595",
    longitude: "-5.8340",
  },
  touristType: ["Cultural", "Heritage", "Historical", "Coastal"],
};

const attractions = [
  {
    name: "Tangier Medina & Kasbah",
    icon: "🏰",
    desc: "The heart of old Tangier — a labyrinthine medina of whitewashed lanes, spice-stall aromas, and the ancient Kasbah perched above the Strait. The Kasbah Museum houses Roman mosaics, Islamic calligraphy, and artefacts from every civilisation that has called Tangier home. The views from the Kasbah ramparts across to the Spanish coast on a clear day are among the most dramatic in North Africa.",
  },
  {
    name: "Grand Socco",
    icon: "🌳",
    desc: "The Grand Socco (Place du Grand Socco) is the main gateway between the old medina and the colonial-era Ville Nouvelle. A broad, animated square ringed by the Mendoubia Gardens, the cinematic Cinema Rif, and the pastel-painted bab (gate) through which the city's daily life flows. On Thursday and Sunday mornings, mountain Berber women in traditional striped foutah skirts sell fresh produce on the square.",
  },
  {
    name: "Cape Spartel & Caves of Hercules",
    icon: "🌊",
    desc: "Ten kilometres west of the city, Cape Spartel marks the exact point where the Atlantic Ocean meets the Mediterranean Sea — one of the most geographically significant headlands on earth. Just below the cape, the Caves of Hercules cut dramatically into the cliff face: according to ancient legend, Hercules rested here before performing his eleventh labour. The sea-shaped opening frames an extraordinary portrait of the Atlantic.",
  },
  {
    name: "Café Hafa",
    icon: "☕",
    desc: "Perched on a terraced clifftop above the Strait of Gibraltar, Café Hafa has been serving mint tea and watching the Spanish coast shimmer since 1921. The Rolling Stones, Allen Ginsberg, and Paul Bowles all sat at these simple wooden tables. Little has changed: the tea still arrives in a battered pot, the view is still hypnotic, and the passing container ships still shrink to toys in the afternoon haze.",
  },
  {
    name: "Tangier Beach",
    icon: "🏖️",
    desc: "Tangier's long crescent beach stretches several kilometres along the bay, framed by the city's colonial façades and the headland at either end. It is a lively, cosmopolitan stretch — Moroccan families, European tourists, and local youth all sharing the sand through the long summer evenings. Water sports, fresh seafood at the beachside restaurants, and sunset views across the Strait make it a natural gathering place.",
  },
  {
    name: "American Legation Museum",
    icon: "🏛️",
    desc: "One of Tangier's most remarkable cultural treasures: the former United States Legation, gifted to the American government by Sultan Moulay Slimane in 1821 — the only US National Historic Landmark located outside the United States. Today it operates as a museum of extraordinary depth: Delacroix paintings, Beat Generation manuscripts, diplomatic correspondence, and the definitive archive of Tangier's remarkable 20th-century international zone.",
  },
];

const monthGuide = [
  { months: "Mar – May", label: "Spring", verdict: "Best", desc: "Warm, green, wildflowers on the Rif. Perfect conditions for day trips." },
  { months: "Jun", label: "Early Summer", verdict: "Excellent", desc: "Long days, manageable heat, fewer tourists than July–August." },
  { months: "Jul – Aug", label: "Peak Summer", verdict: "Good", desc: "Very busy, hot afternoons. Mornings and evenings are pleasant." },
  { months: "Sep – Oct", label: "Autumn", verdict: "Excellent", desc: "Golden light, cooler temperatures, quieter medina. Highly recommended." },
  { months: "Nov – Feb", label: "Winter", verdict: "Mild", desc: "Cool and sometimes rainy but rarely cold. Very few tourists — authentic atmosphere." },
];

export default function TangierDestinationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tangierSchema) }}
      />
      <Navbar />
      <WhatsAppButton variant="floating" />

      <main className="pt-16 bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb
              items={[
                { label: "Destinations", href: "/destinations" },
                { label: "Tangier" },
              ]}
            />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              Tangier, Morocco —<br />
              The Gateway to Africa
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/60 mt-6 text-sm">
              <MapPin className="w-4 h-4" />
              35.7595° N, 5.8340° W · 14 km from mainland Spain
            </div>
          </div>
        </section>

        {/* Destination Intro */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-6 gold-divider-left">
            Where Two Continents Almost Touch
          </h2>
          <div className="space-y-4 text-[var(--charcoal)] leading-relaxed">
            <p>
              Tangier occupies one of the most dramatic geographical positions of any city on earth. Standing on the Kasbah ramparts, you can see two continents, two seas, and three nations simultaneously: the jagged silhouette of the Spanish Sierra Nevada to the north, the Atlantic stretching west toward the Americas, and the Mediterranean curling east toward the ancient civilisations of the Levant. Only 14 kilometres of churning Strait separate Africa from Europe — a crossing so short that on a clear day you can watch Spanish fishing boats without binoculars.
            </p>
            <p>
              The city&rsquo;s history reads like an anthology of the ancient world. Phoenician traders founded a settlement here around the 8th century BC. Romans followed, calling it Tingis and making it the capital of the province of Mauretania Tingitana. Vandals, Byzantines, and Visigoths all left their marks before the Arab conquests of the 7th century transformed the city into the Islamic trading port that gave rise to the medina you can walk today. Portuguese fortified it in the 16th century; the Spanish held it; the British received it as a wedding gift when Charles II married Catherine of Braganza in 1661. In the 20th century, Tangier became an international zone administered jointly by eight nations — a cosmopolitan experiment that drew Matisse, Delacroix, Paul Bowles, Jack Kerouac, and the Rolling Stones to its fabled cafés and anarchic streets.
            </p>
            <p>
              Modern Tangier is a city in confident transformation. The old medina remains one of the most authentic in Morocco — genuinely lived-in rather than preserved for tourism. The new port has made it a major Mediterranean hub. Grand hotels have risen along the bay. Yet the Café Hafa still serves tea on its cliff-edge terrace just as it did in 1921, the Grand Socco still fills with Rif Berber women on market mornings, and the Kasbah still catches the afternoon light in the same extraordinary way it must have for a thousand years.
            </p>
          </div>
        </section>

        {/* Attractions */}
        <section className="bg-white border-y border-[var(--border-warm)] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] mb-8 gold-divider-left">
              Top Attractions in Tangier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {attractions.map((a) => (
                <div key={a.name} className="flex gap-4">
                  <div className="shrink-0 text-3xl">{a.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-[var(--navy)] mb-1">{a.name}</h3>
                    <p className="text-sm text-[var(--charcoal)] leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-6 gold-divider-left">
            Best Time to Visit Tangier
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
            {monthGuide.map((m) => (
              <div key={m.months} className="bg-white border border-[var(--border-warm)] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--navy)]">
                    <Sun className="w-4 h-4 text-[var(--gold)]" />
                    {m.months}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      m.verdict === "Best"
                        ? "bg-green-100 text-green-700"
                        : m.verdict === "Excellent"
                        ? "bg-blue-100 text-blue-700"
                        : m.verdict === "Good"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {m.verdict}
                  </span>
                </div>
                <div className="text-xs font-medium text-[var(--muted-text)] mb-1">{m.label}</div>
                <p className="text-xs text-[var(--charcoal)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Around */}
        <section className="bg-white border-y border-[var(--border-warm)] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-8 gold-divider-left">
              Getting Around Tangier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Ship,
                  title: "Tangier Med Port",
                  desc: "Tangier Med, 40 km east of the city, is the primary port for ferries from Spain (Tarifa, Algeciras, Barcelona). Transfer to the city centre takes 40–50 minutes by taxi or shuttle. The older Tangier Ville port in the city centre also receives some ferry services.",
                },
                {
                  icon: Plane,
                  title: "Ibn Battouta Airport",
                  desc: "Tangier Ibn Battouta International Airport (TNG) is 15 km south of the city centre. Served by Royal Air Maroc, Ryanair, easyJet, and Transavia with direct connections to Madrid, Paris, London, and other European hubs. Taxi to centre takes 20 minutes.",
                },
                {
                  icon: Clock,
                  title: "Getting Around the City",
                  desc: "The medina is best explored on foot — most lanes are too narrow for vehicles. Petit taxis (small red or blue cabs) are metered and inexpensive. Grand taxis operate fixed routes to outlying areas. For private day trips to Cape Spartel, Asilah, or Chefchaouen, TangierTours provides dedicated private transport.",
                },
              ].map((t) => (
                <div key={t.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">{t.title}</h3>
                    <p className="text-sm text-[var(--charcoal)] leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tours in Tangier */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-6 gold-divider-left">
            Tours in Tangier with TangierTours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              { label: "Tangier Private Tours", sub: "Half-day or full-day, fully private", href: "/tours/tangier-private-tours" },
              { label: "Shore Excursions", sub: "Designed for cruise passengers", href: "/tours/tangier-shore-excursions" },
              { label: "Jewish Heritage Tour", sub: "Tangier's Sephardic history", href: "/jewish-heritage-tours" },
              { label: "Chefchaouen Day Trip", sub: "Day trip from Tangier", href: "/tours/chefchaouen-day-trip-from-tangier" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="flex items-center justify-between gap-4 bg-white border border-[var(--border-warm)] rounded-lg px-5 py-4 hover:border-[var(--gold)] hover:bg-amber-50 transition-colors group"
              >
                <div>
                  <div className="font-semibold text-[var(--navy)] text-sm">{t.label}</div>
                  <div className="text-xs text-[var(--muted-text)] mt-0.5">{t.sub}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--muted-text)] group-hover:text-[var(--gold)] shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Plan Your Tangier Visit
            </h2>
            <p className="text-white/70 mb-8">
              Let Idrissi show you the Tangier that most visitors never find — the real city, lived from the inside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-8 py-4 rounded hover:opacity-90 transition"
              >
                Book a Tangier Tour <ArrowRight className="w-4 h-4" />
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

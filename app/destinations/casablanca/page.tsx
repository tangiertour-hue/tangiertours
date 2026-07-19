import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Star, Train, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Casablanca Travel Guide — What to See & Do | TangierTours",
  description:
    "Complete Casablanca travel guide: Hassan II Mosque, Jewish Mellah, Art Deco architecture, and more. Plan your Casablanca visit with expert tips from TangierTours.",
  keywords:
    "Casablanca Morocco guide, what to see Casablanca, Hassan II Mosque, Casablanca Jewish heritage, Casablanca day trip from Tangier",
};

const attractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Casablanca",
  description:
    "Morocco's largest city and economic capital — home to the iconic Hassan II Mosque, Art Deco architecture, vibrant Jewish heritage, and a cosmopolitan culture unlike anywhere else in the country.",
  url: "https://www.tangiertours.ma/destinations/casablanca",
  touristType: ["Cultural Tourism", "Heritage Tourism", "City Break"],
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Hassan II Mosque" },
    { "@type": "TouristAttraction", name: "Habous Quarter" },
    { "@type": "TouristAttraction", name: "Museum of Moroccan Judaism" },
    { "@type": "TouristAttraction", name: "Art Deco Boulevard Mohammed V" },
  ],
};

const attractions = [
  {
    title: "Hassan II Mosque",
    icon: "🕌",
    time: "2–3 hours",
    desc: "One of the world's largest mosques, built on a promontory over the Atlantic Ocean. Its 210-metre minaret — the tallest in the world — is visible across the city. Guided tours of the interior (non-Muslim visitors welcome) reveal stunning Moroccan craftsmanship: carved cedarwood, hand-cut zellige tiles, and a retractable roof.",
  },
  {
    title: "Habous Quarter (New Mellah)",
    icon: "🏛️",
    time: "1–2 hours",
    desc: "Built by the French in the 1930s as a planned neighbourhood blending Moroccan medina layout with European urban planning, the Habous Quarter was also home to Casablanca's Jewish community. Its arcaded streets, patisseries, bookshops, and craftsmen's stalls make for one of the city's most pleasant and authentic walks.",
  },
  {
    title: "Museum of Moroccan Judaism",
    icon: "✡️",
    time: "1–2 hours",
    desc: "The only museum of Jewish culture in the Arab world, located in the Oasis neighbourhood. Its extraordinary collection includes Torah scrolls, ceremonial objects, marriage contracts, photographs, and personal testimonies spanning 2,000 years of Moroccan Jewish life. Essential for Jewish heritage travellers.",
  },
  {
    title: "Boulevard Mohammed V (Art Deco)",
    icon: "🏙️",
    time: "1 hour",
    desc: "Casablanca is one of the world's great Art Deco cities, rivalling Miami Beach. The colonnaded Boulevard Mohammed V and surrounding streets are lined with stunning 1920s–1940s French colonial architecture — ornate facades, arcaded pavements, and decorative ironwork. The city has over 300 protected Art Deco buildings.",
  },
  {
    title: "Corniche & Ain Diab Beach",
    icon: "🌊",
    time: "1–2 hours",
    desc: "Casablanca's elegant seafront promenade stretches several kilometres along the Atlantic coast. Lined with cafés, restaurants, beach clubs, and the iconic Twin Towers, the Corniche offers a completely different — and distinctly modern — face of Morocco.",
  },
  {
    title: "Old Medina & Central Market",
    icon: "🛒",
    time: "1 hour",
    desc: "Smaller and less touristy than Marrakech or Fez, Casablanca's Old Medina is an authentic working neighbourhood. The Central Market, built in 1917, is a beautiful covered market hall selling fresh fish, spices, and local produce — a genuine slice of daily Casablanca life.",
  },
];

const practicalInfo = [
  { label: "Distance from Tangier", value: "340 km — 3.5 hrs by high-speed train (Al Boraq) or 4 hrs by private car" },
  { label: "Best way to arrive", value: "Al Boraq high-speed train from Tangier Ville station (fast, scenic, comfortable)" },
  { label: "Best time to visit", value: "March–May and September–November (mild weather, fewer crowds)" },
  { label: "Currency", value: "Moroccan Dirham (MAD). ATMs widely available." },
  { label: "Language", value: "Arabic, Darija (Moroccan Arabic), French widely spoken in business areas" },
  { label: "Getting around", value: "Petit taxis (cheap, metered), ride-sharing apps, or private guide with vehicle" },
  { label: "Day trip feasible?", value: "Yes — a focused 1-day itinerary covers the highlights comfortably" },
];

const tours = [
  {
    title: "Casablanca Jewish Heritage Tour",
    href: "/jewish-heritage-tours/casablanca",
    desc: "Specialist guided tour of Casablanca's Jewish Quarter, Beth El Synagogue, Museum of Moroccan Judaism, and Jewish Cemetery — led by Hebrew-speaking guide Idrissi.",
  },
  {
    title: "Private Morocco Transfers",
    href: "/tours/private-morocco-transfers",
    desc: "Door-to-door private transfer from Tangier to Casablanca in an air-conditioned vehicle with an English-speaking driver.",
  },
  {
    title: "Luxury Morocco Tours",
    href: "/luxury-morocco-tours",
    desc: "Combine Casablanca with Tangier, Chefchaouen, Fez, and beyond in a bespoke multi-day luxury Morocco itinerary.",
  },
];

export default function CasablancaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* HERO */}
        <section className="relative pt-16 overflow-hidden" style={{ minHeight: "480px" }}>
          <Image
            src="/hero-casablanca.jpg"
            alt="Hassan II Mosque Casablanca Morocco on the Atlantic Ocean at golden hour"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.55) 0%,rgba(15,31,61,0.45) 50%,rgba(15,31,61,0.80) 100%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Breadcrumb items={[{ label: "Destinations", href: "/destinations" }, { label: "Casablanca" }]} />
            <div className="max-w-3xl mt-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <MapPin className="w-3.5 h-3.5" /> Atlantic Coast · Morocco&apos;s Largest City
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Casablanca —<br />
                <span className="text-gold">Morocco&apos;s Cosmopolitan Capital</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Beyond the film and the legend lies a city of genuine grandeur — Art Deco boulevards, the world&apos;s most spectacular mosque, a rich Jewish heritage, and a modernity that surprises every visitor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/jewish-heritage-tours/casablanca" className="bg-gold text-navy font-bold px-6 py-3 rounded hover:opacity-90 transition">
                  Jewish Heritage Tour
                </Link>
                <Link href="/tours/private-morocco-transfers" className="border border-white/60 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition">
                  Book a Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">About Casablanca</h2>
          <div className="space-y-4 text-muted-text leading-relaxed mt-6">
            <p>
              Casablanca — Casa, as locals call it — is not the Morocco most visitors expect. There is no ancient imperial medina, no snake charmers, no romantic camel markets. Instead, you find a young, fast-moving, deeply modern city of five million people, shot through with extraordinary Art Deco architecture, excellent restaurants, a thriving creative scene, and a cosmopolitan energy unlike anywhere else in the country.
            </p>
            <p>
              Yet history runs deep here too. The city&apos;s Jewish community — once numbering over 80,000 — left an indelible mark on its architecture, commerce, and culture. The Habous Quarter, the Museum of Moroccan Judaism, and the Beth El Synagogue are among the most compelling Jewish heritage sites in the entire Arab world. For families tracing Moroccan Jewish roots, Casablanca is often the emotional heart of the journey.
            </p>
            <p>
              And then there is the Hassan II Mosque: built between 1986 and 1993, it stands on a dramatic promontory above the Atlantic, its 210-metre minaret piercing the sky. It is one of the great architectural achievements of the 20th century — and one of the very few mosques in Morocco open to non-Muslim visitors.
            </p>
          </div>
        </section>

        {/* ATTRACTIONS */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Top Attractions in Casablanca</h2>
            <p className="text-center text-muted-text mt-6 mb-12 max-w-2xl mx-auto">
              From the world&apos;s tallest minaret to the only Jewish museum in the Arab world — Casablanca rewards the curious traveller.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((a) => (
                <div key={a.title} className="bg-ivory border border-border-warm rounded overflow-hidden">
                  <div className="h-1 bg-gold" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-navy">{a.title}</h3>
                        <span className="text-xs text-gold font-semibold flex items-center gap-1"><Clock className="w-3 h-3" /> {a.time}</span>
                      </div>
                    </div>
                    <p className="text-muted-text text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEWISH HERITAGE SPOTLIGHT */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-3xl mb-4">✡️</span>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Jewish Heritage in Casablanca</h2>
            <p className="text-white/75 leading-relaxed max-w-3xl mx-auto mb-8">
              Casablanca was home to one of the largest Jewish communities in the Arab world — over 80,000 people at its peak in the 1950s. The Museum of Moroccan Judaism, the Beth El Synagogue, the Habous Quarter, and the Jewish Cemetery together tell a story of 2,000 years of Moroccan Jewish life. Our specialist Jewish heritage tours, led by Hebrew-speaking guide Idrissi, bring this extraordinary history to life.
            </p>
            <Link href="/jewish-heritage-tours/casablanca" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded hover:opacity-90 transition">
              Explore the Casablanca Jewish Heritage Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* PRACTICAL INFO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl font-bold text-navy mb-8 gold-divider-left">Getting to Casablanca from Tangier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {practicalInfo.map((item) => (
              <div key={item.label} className="bg-white border border-border-warm rounded p-4">
                <div className="text-xs font-bold text-gold uppercase tracking-wide mb-1">{item.label}</div>
                <div className="text-sm text-charcoal">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gold/10 border border-gold/30 rounded p-5 flex items-start gap-4">
            <Train className="w-6 h-6 text-gold shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-navy mb-1">Al Boraq High-Speed Train</div>
              <p className="text-sm text-muted-text">Morocco&apos;s Al Boraq train connects Tangier Ville station to Casablanca in just 2 hours 10 minutes at 320 km/h — Africa&apos;s first high-speed rail line. Tickets from approximately 100 MAD (~$10). Book at ONCF stations or online.</p>
            </div>
          </div>
        </section>

        {/* TOURS CTA */}
        <section className="bg-ivory border-t border-border-warm py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Tours Including Casablanca</h2>
            <p className="text-center text-muted-text mt-6 mb-10">Let Idrissi guide you through Casablanca&apos;s highlights — privately, expertly, in your language.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tours.map((t) => (
                <Link key={t.href} href={t.href} className="group bg-white border border-border-warm rounded overflow-hidden hover:shadow-md transition-all">
                  <div className="h-1 bg-gold" />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">{t.title}</h3>
                    <p className="text-sm text-muted-text leading-relaxed mb-4">{t.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold">Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

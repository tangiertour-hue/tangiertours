// TangierTours Pricing Page
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import DepositPayment from "@/components/DepositPayment";

export const metadata: Metadata = {
  title: "Tour Prices — TangierTours | Private Tours Morocco",
  description:
    "Transparent pricing for all TangierTours private tours — Tangier city tours, shore excursions, Chefchaouen day trips, Jewish heritage tours, camel rides and luxury Morocco experiences.",
  keywords:
    "Tangier tour price, Morocco private tour cost, how much tour guide Morocco, Tangier shore excursion price, Morocco tour guide fee",
};

// ── data ─────────────────────────────────────────────────
const tourPrices = [
  {
    category: "Tangier City Tours",
    icon: "🕌",
    tours: [
      { name: "Tangier Private Half-Day Tour", duration: "4 hours", price: "From €80 / group", note: "Medina, Grand Socco, Kasbah viewpoint, mint tea", href: "/tours/tangier-private-tours" },
      { name: "Tangier Private Full-Day Tour", duration: "8 hours", price: "From €150 / group", note: "All half-day + Cape Spartel, Caves of Hercules, local lunch", href: "/tours/tangier-private-tours" },
      { name: "Tangier Custom Tour", duration: "Your choice", price: "Quote on request", note: "Any duration, fully bespoke itinerary", href: "/contact" },
    ],
  },
  {
    category: "Shore Excursions",
    icon: "⚓",
    tours: [
      { name: "3-Hour Express Excursion", duration: "3 hours", price: "From €60 / group", note: "Grand Socco, Medina, Kasbah viewpoint, mint tea, port return", href: "/tours/tangier-shore-excursions" },
      { name: "5-Hour Classic Excursion", duration: "5 hours", price: "From €100 / group", note: "All Express + Café Hafa ocean terrace, local crafts", href: "/tours/tangier-shore-excursions" },
      { name: "7-Hour Grand Tour Excursion", duration: "7 hours", price: "From €150 / group", note: "All Classic + Cape Spartel, Caves of Hercules", href: "/tours/tangier-shore-excursions" },
    ],
  },
  {
    category: "Day Trips from Tangier",
    icon: "🏔️",
    tours: [
      { name: "Chefchaouen Full-Day Trip", duration: "~12 hours", price: "From €180 / group", note: "Private car, guided Blue City tour, local lunch included", href: "/tours/chefchaouen-day-trip-from-tangier" },
      { name: "Tangier–Casablanca Al Boraq Day Trip", duration: "~11 hours", price: "From €220 / person", note: "Train tickets, guide, Hassan II Mosque, Jewish Heritage, lunch", href: "/tours/tangier-casablanca-day-trip" },
      { name: "Camel Ride at Cape Spartel", duration: "30–45 min", price: "From €25 / person", note: "Atlantic dunes, can be added to any Tangier tour", href: "/tours/camel-ride-morocco" },
    ],
  },
  {
    category: "Jewish Heritage Tours",
    icon: "✡️",
    tours: [
      { name: "Tangier Jewish Heritage Tour", duration: "3–4 hours", price: "From €100 / group", note: "Mellah, Ben Chimol Synagogue, Jewish Cemetery — Hebrew-speaking guide", href: "/jewish-heritage-tours/tangier" },
      { name: "Casablanca Jewish Heritage Tour", duration: "Full day", price: "From €200 / group", note: "Museum of Moroccan Judaism, Beth El Synagogue, Habous Quarter", href: "/jewish-heritage-tours/casablanca" },
      { name: "Combined Tangier + Casablanca Heritage", duration: "2 days", price: "From €380 / group", note: "Both cities — the definitive Moroccan Jewish heritage experience", href: "/jewish-heritage-tours" },
    ],
  },
  {
    category: "Private Transfers",
    icon: "🚗",
    tours: [
      { name: "Tangier Airport ↔ Hotel", duration: "~30 min", price: "From €25", note: "Ibn Battouta Airport to any Tangier hotel", href: "/tours/private-morocco-transfers" },
      { name: "Tangier ↔ Chefchaouen", duration: "~2.5 hrs", price: "From €80", note: "Door-to-door private transfer", href: "/tours/private-morocco-transfers" },
      { name: "Tangier ↔ Casablanca", duration: "~4 hrs", price: "From €180", note: "Private car — or Al Boraq train option available", href: "/tours/private-morocco-transfers" },
      { name: "Tangier ↔ Fez", duration: "~5 hrs", price: "From €200", note: "Private car with English-speaking driver", href: "/tours/private-morocco-transfers" },
    ],
  },
  {
    category: "Luxury Morocco Tours",
    icon: "💎",
    tours: [
      { name: "3-Day Northern Morocco Luxury Tour", duration: "3 days", price: "From €600 / person", note: "Tangier + Asilah + Chefchaouen — riad stays, private transport", href: "/luxury-morocco-tours" },
      { name: "5-Day Morocco Highlight Luxury Tour", duration: "5 days", price: "From €950 / person", note: "Tangier, Chefchaouen, Fez, Sahara dunes, Marrakech", href: "/luxury-morocco-tours" },
      { name: "Bespoke Multi-Day Itinerary", duration: "Your choice", price: "Quote on request", note: "Fully customised — any cities, any duration, any style", href: "/contact" },
    ],
  },
];

const faqs = [
  { q: "Are these prices per person or per group?", a: "Most tour prices are per group — meaning the price stays the same whether there are 1, 2, 3 or 4 people in your party. Larger groups (5+) may require an additional vehicle and will be quoted separately. The Al Boraq day trip and per-person luxury tours are priced per person due to train ticket costs." },
  { q: "What currency do you accept?", a: "We accept Moroccan Dirhams (MAD), Euros (€), US Dollars ($), and British Pounds (£). Payment is made in cash on the day of the tour. For group or multi-day bookings, bank transfer can be arranged in advance." },
  { q: "Is a deposit required to book?", a: "No deposit is required for most tours. You simply confirm your booking, and pay on the day. For multi-day luxury tours or large group bookings, a 20–30% deposit may be requested to cover advance costs such as riad reservations and train tickets." },
  { q: "Are entrance fees included in the price?", a: "For tours where entrance fees are listed as included (such as the Hassan II Mosque, Museum of Moroccan Judaism, and Caves of Hercules), yes — they are covered. For other sites where entrance fees apply, your guide will advise you in advance." },
  { q: "Can I get a custom quote for my group?", a: "Absolutely. Every group is different — size, interests, mobility, budget. Contact Idrissi directly via WhatsApp or the booking form for a personalised quote within 2 hours." },
  { q: "Do prices change in peak season?", a: "Prices shown are standard rates valid year-round. Peak season surcharges may apply for certain luxury multi-day packages during July–August and major holidays. All pricing is confirmed in your written booking confirmation." },
];

const whatsIncluded = [
  "Licensed, professional guide (Idrissi) for the full tour duration",
  "Private transport in air-conditioned vehicle for tours requiring driving",
  "Entrance fees where listed as included in the tour description",
  "Local lunch where listed as included",
  "Bottled water throughout the tour",
  "Hotel/riad pickup and drop-off in Tangier",
  "All taxes and service charges",
];

const notIncluded = [
  "International or domestic flights",
  "Accommodation (can be recommended on request)",
  "Travel insurance (strongly recommended)",
  "Personal spending, tips, and souvenirs",
  "Entrance fees not listed as included",
  "Additional meals and drinks beyond what is listed",
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <HeroSection />
        <IntroSection />
        <PricingTableSection />
        <IncludedSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

// ── components ────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "380px" }}>
      <Image src="/hero-pricing.jpg" alt="Morocco tour pricing — Moroccan map, compass and mint tea" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.72) 0%,rgba(15,31,61,0.58) 55%,rgba(15,31,61,0.85) 100%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <Breadcrumb items={[{ label: "Pricing" }]} />
        <div className="mt-6 inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
          <Star className="w-3.5 h-3.5" /> Transparent Pricing · No Hidden Fees · No Surprises
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Tour Prices &amp; Packages
        </h1>
        <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
          Clear, honest pricing for every tour and experience. All prices are per group unless stated — so the more you share, the better the value.
        </p>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { icon: "💬", title: "No upfront payment", desc: "Enquire freely — no deposit required for most tours. Pay on the day." },
          { icon: "👥", title: "Prices per group", desc: "Most prices are for your whole group, not per person. Split the cost and save." },
          { icon: "✏️", title: "Custom quotes", desc: "Don't see exactly what you need? WhatsApp Idrissi for a personalised proposal within 2 hours." },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-border-warm rounded p-5 text-center">
            <span className="text-3xl block mb-3">{item.icon}</span>
            <div className="font-semibold text-navy mb-1">{item.title}</div>
            <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function PricingTableSection() {
  return (
    <section id="pricing" className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 space-y-10">
      <h2 className="font-display text-3xl font-bold text-navy text-center gold-divider mb-10">All Tours &amp; Prices</h2>
      {tourPrices.map((cat) => (
        <div key={cat.category} className="bg-white border border-border-warm rounded overflow-hidden">
          <div className="bg-navy px-6 py-3 flex items-center gap-3">
            <span className="text-xl">{cat.icon}</span>
            <h3 className="font-display text-lg font-bold text-white">{cat.category}</h3>
          </div>
          <div className="divide-y divide-border-warm">
            {cat.tours.map((tour) => (
              <div key={tour.name} className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-ivory transition-colors">
                <div className="flex-1">
                  <div className="font-semibold text-navy text-sm">{tour.name}</div>
                  <div className="text-xs text-muted-text mt-0.5">{tour.note}</div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-muted-text bg-navy/5 px-2.5 py-1 rounded-full">{tour.duration}</span>
                  <span className="font-bold text-gold text-sm whitespace-nowrap">{tour.price}</span>
                  <Link href={tour.href} className="text-navy hover:text-gold transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-center text-xs text-muted-text pt-2">
        All prices shown in Euros (€). Moroccan Dirhams, USD and GBP also accepted. Prices correct as of 2025 and subject to change for 2026 season — confirm when booking.
      </p>
    </section>
  );
}

function IncludedSection() {
  return (
    <section id="included" className="bg-navy py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-white text-center mb-10 gold-divider">What&apos;s Included in Every Tour</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-gold mb-4">✅ Always Included</h3>
            <ul className="space-y-2">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gold mb-4">➖ Not Included</h3>
            <ul className="space-y-2">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="shrink-0 mt-0.5">–</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
function FaqSection() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Pricing FAQs</h2>
      <div className="space-y-3 mt-6">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-border-warm rounded group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors text-sm">
              {f.q}<span className="text-gold ml-2 shrink-0 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="bg-white border-t border-border-warm py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">Ready to Book?</h2>
        <p className="text-muted-text leading-relaxed mb-8 max-w-xl mx-auto">
          Prices are a guide — every group and itinerary is different. Message Idrissi directly for a personalised quote within 2 hours, with no obligation to book.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/212668702424?text=Hi%20Idrissi%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20tour%20in%20Morocco."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded hover:bg-[#20BA5A] transition">
            <Phone className="w-4 h-4" /> WhatsApp for a Quote
          </a>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded hover:bg-navy/90 transition">
            Booking Request Form <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-xs text-muted-text mt-6">
          View our <Link href="/terms" className="text-gold hover:underline">cancellation policy</Link> · €30 deposit secures your booking
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <h3 className="font-display text-xl font-bold text-navy text-center mb-6">How to Pay Your Deposit</h3>
        <DepositPayment depositAmount="€30" />
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Plane, Shield, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Casablanca Layover Tours & Mohammed V Airport Transfers | TangierTours",
  description:
    "Make the most of your Casablanca layover with a private tour and comfortable transfers between Mohammed V International Airport and Casablanca. Customized itineraries, professional service.",
  keywords:
    "Casablanca layover tour, Casablanca airport layover tour, Mohammed V Airport transfer, Casablanca stopover tour, CMN airport to Casablanca, Casablanca private airport transfer",
};

// ── Schema ──────────────────────────────────────────────
const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Casablanca Layover Tours & Mohammed V Airport Transfers",
  description: "Private layover tours and airport transfers between Mohammed V International Airport (CMN) and Casablanca, Morocco.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/tours/casablanca-layover-tours",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

// ── Data ─────────────────────────────────────────────────
const highlights = [
  { icon: "✈️", title: "Airport Pickup & Drop-off", desc: "Private pickup directly from Mohammed V International Airport arrivals, and a timely return ahead of your onward flight." },
  { icon: "🕌", title: "Hassan II Mosque", desc: "One of the world's most spectacular mosques, built on the Atlantic Ocean. Visit the exterior and, where opening hours permit, the interior." },
  { icon: "🏛️", title: "Habous Quarter", desc: "The historic New Mellah — a charming blend of Moroccan medina planning and French urban design, with artisan shops and local character." },
  { icon: "🌊", title: "Corniche & Ain Diab", desc: "Casablanca's Atlantic seafront promenade — cafés, ocean views, and a very different face of Morocco." },
  { icon: "🛕", title: "Mohammed V Square", desc: "The civic heart of modern Casablanca — grand colonial-era architecture, palm trees, and the rhythm of a working Moroccan city." },
  { icon: "🚗", title: "Private Transport Throughout", desc: "Air-conditioned private vehicle for the entire layover. No shared buses, no waiting." },
];

const itineraryOptions = [
  {
    duration: "3–4 Hour Layover",
    stops: [
      "Airport pickup",
      "Hassan II Mosque exterior visit",
      "Corniche seafront drive",
      "Return to Mohammed V Airport",
    ],
  },
  {
    duration: "5–6 Hour Layover",
    stops: [
      "Airport pickup",
      "Hassan II Mosque (exterior + interior where open)",
      "Habous Quarter — short walk",
      "Mohammed V Square",
      "Local lunch or café stop",
      "Return to Mohammed V Airport",
    ],
  },
  {
    duration: "7+ Hour Layover",
    stops: [
      "Airport pickup",
      "Hassan II Mosque visit",
      "Old Medina & local markets",
      "Habous Quarter",
      "Corniche & Ain Diab",
      "United Nations Square",
      "Sit-down lunch",
      "Return to Mohammed V Airport",
    ],
  },
];

const transfers = [
  { route: "Mohammed V Airport (CMN) ↔ Casablanca city / hotel", note: "Standard transfer — most popular" },
  { route: "Mohammed V Airport (CMN) ↔ Tangier", note: "Long-distance — available on request" },
  { route: "Mohammed V Airport (CMN) ↔ Rabat", note: "Available on request" },
  { route: "Mohammed V Airport (CMN) ↔ Private residences", note: "Door-to-door service" },
];

const faqs = [
  { q: "How much time do I need for a Casablanca layover tour?", a: "We recommend a minimum of 4 hours between landing and your onward flight to allow for immigration, customs, a short city visit, and a comfortable return. Longer layovers allow for a richer experience. Contact us with your exact flight times and we will design a realistic itinerary." },
  { q: "Is it safe to leave Mohammed V Airport during a layover?", a: "Yes — as long as your layover is long enough and you hold the necessary visas (most Western passport holders do not need a visa for Morocco). A private guide and vehicle means no navigation stress and a reliable return time. Always verify visa requirements for your nationality before travelling." },
  { q: "Can you guarantee I will make my onward flight?", a: "Your itinerary is carefully planned around your flight schedule, with sufficient time reserved for your return to Mohammed V International Airport. The exact itinerary depends on your layover duration, airport procedures, and traffic conditions. We always prioritise a safe and timely return over extra sightseeing." },
  { q: "Do you offer just the airport transfer without a tour?", a: "Yes — private transfers between Mohammed V Airport and Casablanca, Tangier, Rabat, or any hotel are available independently without a guided tour. Contact us for a personalised quotation." },
  { q: "How do I book a Casablanca layover tour?", a: "Fill in the enquiry form below with your flight details (arrival time, onward flight time, date), group size, and any preferences. We will respond within 2 hours with a tailored itinerary proposal." },
];

export default function CasablancaLayoverPage() {
  faqSchema.mainEntity = faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <HeroSection />
        <IntroSection />
        <HighlightsSection highlights={highlights} />
        <ItinerarySection options={itineraryOptions} />
        <SafetySection />
        <TransferSection transfers={transfers} />
        <FaqSection faqs={faqs} />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "460px" }}>
      <Image src="/hero-casablanca-layover.jpg" alt="Mohammed V International Airport Casablanca Morocco with Hassan II Mosque in background" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.70) 0%,rgba(15,31,61,0.52) 55%,rgba(15,31,61,0.82) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb items={[{ label: "Tours", href: "/tours" }, { label: "Casablanca Layover Tours" }]} />
        <div className="max-w-3xl mt-6">
          <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Plane className="w-3.5 h-3.5" /> Mohammed V International Airport (CMN) · Casablanca
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Casablanca Layover Tours<br />
            <span className="text-gold">&amp; Mohammed V Airport Transfers</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
            Have a long layover at Mohammed V International Airport? Turn your waiting time into a private Moroccan experience — with a personalized city tour and a timely return for your onward flight.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm text-white/70">
            {[
              { icon: <Plane className="w-4 h-4 text-gold" />, text: "CMN Airport pickup & drop-off" },
              { icon: <Clock className="w-4 h-4 text-gold" />, text: "3–8+ hour layovers" },
              { icon: <Shield className="w-4 h-4 text-gold" />, text: "Flight-time focused planning" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">{b.icon}{b.text}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#booking" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">Request My Layover Tour</a>
            <a href="#itinerary" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">See Itinerary Options</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">Make the Most of Your Casablanca Layover</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Mohammed V International Airport is 30 kilometres south of Casablanca — close enough to make a layover visit entirely practical. With a private vehicle and a knowledgeable local guide, you can experience some of Morocco&apos;s most impressive sights and return to the airport comfortably, well within your schedule.</p>
        <p>Casablanca is not the Morocco most visitors expect. It is a modern, cosmopolitan city — home to the breathtaking Hassan II Mosque, elegant Art Deco boulevards, a vibrant seafront Corniche, and one of the Arab world&apos;s most significant Jewish heritage collections. Even a few hours here leaves a strong impression.</p>
        <p>Every layover itinerary is designed around your specific flight times. We do not offer a fixed programme — we offer a flexible, flight-safe plan adapted to how long you actually have.</p>
      </div>
    </section>
  );
}

function HighlightsSection({ highlights }: { highlights: { icon: string; title: string; desc: string }[] }) {
  if (!highlights.length) return null;
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">What You Can Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-ivory border border-border-warm rounded p-5">
              <span className="text-3xl block mb-3">{h.icon}</span>
              <h3 className="font-display text-base font-bold text-navy mb-2">{h.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItinerarySection({ options }: { options: { duration: string; stops: string[] }[] }) {
  if (!options.length) return null;
  return (
    <section id="itinerary" className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Suggested Itinerary Options</h2>
      <p className="text-center text-muted-text text-sm mt-6 mb-10 max-w-2xl mx-auto">
        Every itinerary is adapted to your flight schedule, airport procedures, and traffic conditions. These are suggestions — not fixed programmes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((opt) => (
          <div key={opt.duration} className="bg-white border border-border-warm rounded overflow-hidden">
            <div className="bg-navy px-5 py-3">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />{opt.duration}
              </h3>
            </div>
            <ul className="p-5 space-y-2">
              {opt.stops.map((stop, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-text">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />{stop}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
function SafetySection() {
  return (
    <section className="bg-navy py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-gold shrink-0 mt-1" />
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-3">Important — Allow Sufficient Airport Time</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Your itinerary is carefully planned around your flight schedule, with sufficient time reserved for your return to Mohammed V International Airport. The exact itinerary depends on your layover duration, airport procedures, and traffic conditions.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">Please allow adequate time for:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Immigration & passport control", "Customs clearance", "Security screening", "Airport check-in", "Boarding procedures", "Traffic to/from airport"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                  <span className="text-gold shrink-0">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransferSection({ transfers }: { transfers: { route: string; note: string }[] }) {
  if (!transfers.length) return null;
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-2 gold-divider-left">Private Airport Transfers</h2>
      <p className="text-muted-text mt-5 mb-8 leading-relaxed text-sm">
        Need only a transfer — without a guided tour? Private airport transfers are available between Mohammed V Airport and destinations across Morocco. Contact us for a personalised quotation.
      </p>
      <div className="space-y-3">
        {transfers.map((t) => (
          <div key={t.route} className="bg-white border border-border-warm rounded p-4 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="font-semibold text-navy text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />{t.route}
              </div>
              <div className="text-xs text-muted-text mt-0.5">{t.note}</div>
            </div>
            <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20need%20a%20private%20transfer%20from%20Mohammed%20V%20Airport.%20Please%20send%20me%20a%20quote."
              target="_blank" rel="noopener noreferrer"
              className="shrink-0 text-xs bg-navy text-white font-semibold px-3 py-1.5 rounded hover:bg-navy/90 transition">
              Request Quote
            </a>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-text mt-4 text-center">Prices are customized according to the route, group size and vehicle. Contact us for a personalised quotation.</p>
    </section>
  );
}

function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Frequently Asked Questions</h2>
        <div className="space-y-3 mt-6">
          {faqs.map((f, i) => (
            <details key={i} className="bg-ivory border border-border-warm rounded group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors text-sm">
                {f.q}<span className="text-gold ml-2 group-open:rotate-180 transition-transform shrink-0">▾</span>
              </summary>
              <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="max-w-2xl mx-auto px-4 pb-20 pt-10">
      <h2 className="font-display text-2xl font-bold text-navy mb-2 text-center gold-divider">Request Your Layover Tour</h2>
      <p className="text-center text-muted-text text-sm mt-4 mb-8">
        Share your flight details and we will design a realistic, flight-safe itinerary within 2 hours.
      </p>
      <BookingForm
        showCruiseField={true}
        tourOptions={[
          "Casablanca Layover Tour — 3–4 hours",
          "Casablanca Layover Tour — 5–6 hours",
          "Casablanca Layover Tour — 7+ hours",
          "Mohammed V Airport → Casablanca transfer only",
          "Casablanca → Mohammed V Airport transfer only",
          "Mohammed V Airport → Tangier transfer",
          "Custom / other",
        ]}
      />
      <div className="mt-6 text-center">
        <Link href="/destinations/casablanca" className="text-sm text-gold hover:underline inline-flex items-center gap-1">
          Read our Casablanca Travel Guide <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}

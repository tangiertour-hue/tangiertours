import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star, CheckCircle, ArrowRight, Ship, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tangier Day Trip from Gibraltar — Private Tour | TangierTours",
  description:
    "Take the ferry from Gibraltar to Tangier and explore Morocco with private licensed guide Idrissi. Half-day and full-day options. Hassle-free, guaranteed return.",
  keywords:
    "Tangier day trip from Gibraltar, Gibraltar to Tangier ferry tour, Morocco day trip Gibraltar, Tangier private tour from Gibraltar, Strait of Gibraltar tour",
};

// ── schema ──────────────────────────────────────────────
const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier Day Trip from Gibraltar",
  description: "Private guided day trip from Gibraltar to Tangier, Morocco by ferry across the Strait of Gibraltar.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  touristType: "Private",
  url: "https://www.tangiertours.ma/tours/tangier-day-trip-from-gibraltar",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

// ── data (populated below) ───────────────────────────────
const highlights = [
  { icon: "⛴️", title: "Ferry Across the Strait of Gibraltar", desc: "The 35-minute crossing between Gibraltar and Tangier is one of the world's great short sea journeys — two continents visible simultaneously, the Atlantic meeting the Mediterranean beneath your feet." },
  { icon: "🕌", title: "Tangier Medina & Kasbah", desc: "Explore the ancient walled Medina, the Grand Socco market square, and the Kasbah fortress with its sweeping views back across the Strait to Gibraltar and Spain." },
  { icon: "🌊", title: "Cape Spartel & Caves of Hercules", desc: "Africa's northwestern tip — the lighthouse where the Atlantic meets the Mediterranean, and the legendary Caves of Hercules just 14km from the city." },
  { icon: "🍵", title: "Authentic Moroccan Mint Tea", desc: "No visit to Morocco is complete without the ritual of mint tea — poured high from a silver pot into painted glasses. Your guide knows exactly where to find the best." },
  { icon: "🛍️", title: "Medina Souks & Crafts", desc: "Browse the covered souks for hand-woven textiles, leather goods, ceramics, spices, and Moroccan lanterns — with Idrissi to navigate and translate." },
  { icon: "🎯", title: "Guaranteed Return to Gibraltar", desc: "We track your ferry schedule and guarantee you are back at the Tangier port in time for your return crossing — every time, without exception." },
];
const itinerary = [
  { time: "08:30", stop: "Meet at Gibraltar ferry terminal", desc: "Idrissi's Tangier contact or Idrissi himself meets you at the Tangier Ville port arrival hall — sign with your name." },
  { time: "09:00", stop: "Ferry departs Gibraltar", desc: "Board the high-speed ferry at Gibraltar's ferry terminal. The crossing takes approximately 35–60 minutes depending on the operator." },
  { time: "09:45", stop: "Arrive Tangier Ville Port", desc: "Clear Moroccan customs and passport control — Idrissi meets you immediately on the other side and handles any formalities." },
  { time: "10:15", stop: "Grand Socco & Medina entrance", desc: "The Grand Socco (Big Square) — the gateway between modern Tangier and the ancient Medina. A brief orientation before diving into the alleyways." },
  { time: "10:30", stop: "Tangier Medina walking tour", desc: "Narrow whitewashed streets, the covered Souk al-Dakhel market, traditional artisans, hidden fountains, and centuries of history explained by your guide." },
  { time: "11:30", stop: "Kasbah & panoramic viewpoint", desc: "The ancient citadel sits above the Medina with breathtaking views across the Strait of Gibraltar — on a clear day you can see Spain from here." },
  { time: "12:30", stop: "Moroccan lunch", desc: "A traditional sit-down lunch at a carefully chosen restaurant — tagine, couscous, pastilla, and fresh Moroccan bread." },
  { time: "14:00", stop: "Cape Spartel & Caves of Hercules", desc: "Drive 14km to Africa's northwestern tip — the lighthouse, the dunes, and the mythological Caves of Hercules carved by the sea." },
  { time: "15:30", stop: "Return to Tangier port area", desc: "Optional souvenir shopping near the port, or a final mint tea at a seafront café." },
  { time: "16:30", stop: "Board ferry back to Gibraltar", desc: "Return ferry crossing — back in Gibraltar within the hour. Full day complete." },
];
const included = [
  "Private licensed guide (Idrissi) for the full day in Tangier",
  "Meet & greet at Tangier port arrival hall",
  "Private transport in Tangier (Medina to Cape Spartel and back to port)",
  "Entrance fee to Caves of Hercules",
  "Traditional Moroccan lunch at a hand-picked restaurant",
  "Bottled water throughout the day",
  "All taxes, insurance and service charges",
];

const notIncluded = [
  "Ferry tickets Gibraltar ↔ Tangier (booked separately by you — see ferry info below)",
  "Moroccan visa if required (most EU, UK, US, Canadian passports — visa-free)",
  "Personal spending and souvenirs",
  "Tips (appreciated but never obligatory)",
];

const faqs = [
  { q: "How do I get the ferry from Gibraltar to Tangier?", a: "Two main operators run the Gibraltar–Tangier route: FRS and Inter Shipping. Crossings take 35–60 minutes. Book online in advance at frs.es or directly at the Gibraltar ferry terminal. Ferries run several times daily." },
  { q: "Do I need a visa to enter Morocco from Gibraltar?", a: "Most EU, UK, US, Canadian, Australian and New Zealand passport holders do not need a visa for Morocco — you receive a free 90-day stamp on arrival at the port. Always check the latest entry requirements for your nationality before travelling." },
  { q: "How much time will I have in Tangier?", a: "The standard itinerary gives you approximately 6–7 hours in Tangier, which is enough to see the Medina, Kasbah, enjoy lunch, and visit Cape Spartel. If you take an earlier ferry, we can extend the day." },
  { q: "Is Tangier safe for day trippers from Gibraltar?", a: "Yes — with a licensed private guide, Tangier is completely safe and relaxed. Idrissi has been guiding visitors for 15+ years and knows how to show you the best of the city without the stress of navigating alone." },
  { q: "Can I book a half-day tour instead?", a: "Yes. A shorter 4-hour version covering the Medina and Kasbah (without Cape Spartel) is available for those with an early return ferry. Please mention this preference when booking." },
  { q: "What currency do I need in Morocco?", a: "Moroccan Dirhams (MAD). There are ATMs at the Tangier port and in the city centre. Euros are sometimes accepted in tourist areas but at poor rates — change a small amount at the port bureau de change on arrival." },
];

const ferryInfo = [
  { label: "Route", value: "Gibraltar → Tangier Ville (city port)" },
  { label: "Crossing time", value: "35–60 minutes" },
  { label: "Main operators", value: "FRS (frs.es) · Inter Shipping" },
  { label: "Frequency", value: "Several crossings daily — check operator websites for current schedules" },
  { label: "Booking", value: "Book online in advance — especially in summer (July–August)" },
  { label: "Documents needed", value: "Valid passport (ID card not accepted for Morocco entry)" },
];

// ── page ─────────────────────────────────────────────────
export default function GibraltarDayTripPage() {
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

        {/* HERO */}
        <section className="relative pt-16 overflow-hidden" style={{ minHeight: "460px" }}>
          <Image src="/hero-gibraltar.jpg" alt="Ferry crossing the Strait of Gibraltar with Rock of Gibraltar and Tangier coastline visible" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.68) 0%,rgba(15,31,61,0.52) 55%,rgba(15,31,61,0.82) 100%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Breadcrumb items={[{ label: "Tours", href: "/tours" }, { label: "Gibraltar Day Trip" }]} />
            <div className="max-w-3xl mt-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Ship className="w-3.5 h-3.5" /> 35-min Ferry · Two Continents · One Day
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                Tangier Day Trip from Gibraltar —<br />
                <span className="text-gold">Cross to Africa in 35 Minutes</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Gibraltar sits just 14km from the African coast. Morocco is closer than you think — and with private guide Idrissi waiting at the Tangier port, it has never been easier to cross.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-sm text-white/70">
                {[
                  { icon: <Clock className="w-4 h-4 text-gold" />, text: "Full day (~7 hrs in Tangier)" },
                  { icon: <Ship className="w-4 h-4 text-gold" />, text: "35-min ferry crossing" },
                  { icon: <Users className="w-4 h-4 text-gold" />, text: "Fully private tour" },
                  { icon: <Shield className="w-4 h-4 text-gold" />, text: "Guaranteed return time" },
                  { icon: <Star className="w-4 h-4 text-gold" />, text: "4.9★ rated guide" },
                ].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5">{b.icon}{b.text}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#booking" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">Book This Tour</a>
                <a href="#itinerary" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">See Itinerary</a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">Africa is Closer Than You Think</h2>
          <div className="space-y-4 text-muted-text leading-relaxed mt-6">
            <p>Standing on the Rock of Gibraltar, you can see the African continent with the naked eye — a brown smudge of mountains rising above the blue Strait, just 14km away. For most visitors, it remains a view. With TangierTours, it becomes a day.</p>
            <p>The high-speed ferry from Gibraltar to Tangier takes between 35 and 60 minutes, and private guide Idrissi will be waiting for you at the Tangier Ville port when you arrive. From that moment, Morocco opens up: the ancient Medina, the Kasbah above the sea, the mint tea, the souks, the lighthouse at Africa&apos;s tip. By the time you step back on the ferry in the afternoon, you will have experienced a completely different culture, a different continent, and a completely different world — and been back in Gibraltar in time for dinner.</p>
            <p>This is consistently one of the most memorable days for Gibraltar visitors — and one of the most underused opportunities in European tourism. The crossing is short, the logistics are simple, and the reward is extraordinary.</p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">What You&apos;ll Experience</h2>
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

        {/* FERRY INFO */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Ship className="w-7 h-7 text-gold" />
              <h2 className="font-display text-3xl font-bold text-white">Ferry Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ferryInfo.map((item) => (
                <div key={item.label} className="bg-white/10 border border-white/20 rounded p-4">
                  <div className="text-xs font-bold text-gold uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-sm text-white/80 leading-relaxed">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gold/15 border border-gold/30 rounded p-4 text-sm text-white/80 text-center">
              <strong className="text-gold">Important:</strong> Ferry tickets are booked independently by you. TangierTours handles everything on the Moroccan side from the moment you step off the boat.
            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section id="itinerary" className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-2 gold-divider-left">Sample Full-Day Itinerary</h2>
          <p className="text-muted-text text-sm mt-4 mb-8">Times are approximate and adjusted to your ferry schedule.</p>
          <div className="space-y-4">
            {itinerary.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-xs font-bold text-gold border-2 border-gold">
                    {step.time.split(":")[0]}<span className="text-[9px]">:{step.time.split(":")[1]}</span>
                  </div>
                  {i < itinerary.length - 1 && <div className="w-0.5 flex-1 bg-gold/20 mt-1" />}
                </div>
                <div className="pb-5">
                  <div className="font-semibold text-navy text-sm">{step.stop}</div>
                  <div className="text-xs text-muted-text leading-relaxed mt-0.5">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INCLUDED */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-semibold text-navy mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Included</h3>
                <ul className="space-y-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-text">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-muted-text" /> Not Included</h3>
                <ul className="space-y-2">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-text">
                      <span className="shrink-0 mt-0.5">–</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Frequently Asked Questions</h2>
          <div className="space-y-3 mt-6">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-border-warm rounded group">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors text-sm">
                  {f.q}<span className="text-gold ml-2 group-open:rotate-180 transition-transform shrink-0">▾</span>
                </summary>
                <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-ivory border-t border-border-warm py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold text-navy mb-6 text-center">Related Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Tangier Private Tours", href: "/tours/tangier-private-tours", desc: "Half-day or full-day private exploration of Tangier." },
                { title: "Shore Excursions", href: "/tours/tangier-shore-excursions", desc: "For cruise passengers — guaranteed return to port." },
                { title: "Chefchaouen Day Trip", href: "/tours/chefchaouen-day-trip-from-tangier", desc: "Extend your visit — stay in Tangier and visit the Blue City." },
              ].map((t) => (
                <Link key={t.href} href={t.href} className="group bg-white border border-border-warm rounded p-4 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-gold transition-colors">{t.title}</h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-2">{t.desc}</p>
                  <span className="text-gold text-xs font-semibold flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="max-w-2xl mx-auto px-4 pb-20 pt-10">
          <h2 className="font-display text-2xl font-bold text-navy mb-6 text-center gold-divider">Book Your Gibraltar Day Trip</h2>
          <div className="mt-6">
            <BookingForm tourOptions={["Gibraltar → Tangier Full-Day Tour", "Gibraltar → Tangier Half-Day Tour", "Custom itinerary"]} />
          </div>
          <p className="text-center text-xs text-muted-text mt-4">
            Ferry tickets not included — book separately at <a href="https://www.frs.es" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">frs.es</a> or Inter Shipping.
          </p>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

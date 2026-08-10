import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ship, Clock, MapPin, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tangier Day Trip from Tarifa — Private Tour from Spain | TangierTours",
  description:
    "Take the fast ferry from Tarifa to Tangier and explore Morocco with a private local guide. Just 35 minutes across the Strait of Gibraltar. Private tours, hassle-free logistics.",
  keywords:
    "Tangier day trip from Tarifa, Tarifa to Tangier tour, Morocco day trip from Spain, Tangier private tour from Tarifa, Strait of Gibraltar tour, Tarifa Tangier ferry tour",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier Day Trip from Tarifa",
  description: "Private guided day trip from Tarifa, Spain to Tangier, Morocco by fast ferry across the Strait of Gibraltar.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/tours/tangier-day-trip-from-tarifa",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

const highlights = [
  { icon: "⛴️", title: "Fast Ferry from Tarifa", desc: "The Tarifa–Tangier crossing takes just 35 minutes on a modern high-speed catamaran — the shortest and most scenic way to cross from Europe to Africa." },
  { icon: "🕌", title: "Tangier Medina & Kasbah", desc: "Explore the ancient walled Medina and its labyrinthine alleyways, the Grand Socco market square, and the Kasbah with its panoramic views across the Strait back to Spain." },
  { icon: "🌊", title: "Cape Spartel & Caves of Hercules", desc: "Africa's northwestern tip — the lighthouse where Atlantic meets Mediterranean, and the legendary Caves of Hercules carved by sea and myth." },
  { icon: "🍵", title: "Mint Tea & Local Flavours", desc: "Moroccan hospitality in a glass. Your guide knows where to find the best mint tea, pastilla, and fresh-baked Moroccan bread." },
  { icon: "🛍️", title: "Medina Souks", desc: "Browse covered souks for textiles, leather goods, ceramics, spices and artisan crafts — with your guide to navigate and translate." },
  { icon: "🎯", title: "Ferry-Time Planning", desc: "Your itinerary is designed around your return ferry time, with sufficient time built in for your journey back to Tarifa." },
];

const itinerary = [
  { time: "08:00", stop: "Meet at Tarifa ferry terminal", desc: "We recommend arriving at the terminal 45 minutes before departure. Our guide meets you at the Tangier arrival hall." },
  { time: "08:45", stop: "Ferry departs Tarifa", desc: "Board the FRS or Inter Shipping fast ferry. The crossing takes approximately 35 minutes." },
  { time: "09:20", stop: "Arrive Tangier Ville Port", desc: "Clear Moroccan passport control. Your guide meets you immediately and handles any formalities." },
  { time: "09:45", stop: "Grand Socco & Medina entrance", desc: "The gateway between modern and ancient Tangier — an orientation before entering the medina." },
  { time: "10:00", stop: "Tangier Medina walking tour", desc: "Ancient alleyways, the covered souk, local artisans, Petit Socco, and centuries of layered history." },
  { time: "11:00", stop: "Kasbah & panoramic viewpoint", desc: "The citadel above the Medina — views across the Strait of Gibraltar to Tarifa and the Spanish coast." },
  { time: "12:30", stop: "Local lunch", desc: "Traditional Moroccan lunch at a carefully chosen restaurant — tagine, couscous, and fresh bread." },
  { time: "14:00", stop: "Cape Spartel & Caves of Hercules", desc: "Drive 14km to Africa's northwesternmost point — lighthouse, dunes, and the mythological caves." },
  { time: "16:00", stop: "Return to Tangier port area", desc: "Optional souvenir shopping or a final mint tea near the port." },
  { time: "17:00", stop: "Board ferry back to Tarifa", desc: "Return crossing — back in Spain within 35 minutes." },
];

const included = [
  "Private licensed guide for the full day in Tangier",
  "Meet & greet at Tangier port arrival hall",
  "Private transport in Tangier (Medina, Cape Spartel, port)",
  "Entrance fee to Caves of Hercules",
  "Traditional Moroccan lunch",
  "Bottled water throughout the day",
  "All taxes, insurance and service charges",
];

const notIncluded = [
  "Ferry tickets Tarifa ↔ Tangier (booked separately by you)",
  "Moroccan visa if required (check your nationality)",
  "Personal spending and souvenirs",
  "Tips (appreciated but never obligatory)",
];

const ferryInfo = [
  { label: "Route", value: "Tarifa (Spain) → Tangier Ville (Morocco)" },
  { label: "Crossing time", value: "Approximately 35 minutes" },
  { label: "Main operators", value: "FRS (frs.es) · Inter Shipping" },
  { label: "Frequency", value: "Several crossings daily — check operator websites" },
  { label: "Tarifa terminal", value: "Estación Marítima, Tarifa — 5 min walk from town centre" },
  { label: "Documents", value: "Valid passport required — ID cards not accepted for Morocco entry" },
];

const faqs = [
  { q: "Is Tarifa a good base for a Morocco day trip?", a: "Tarifa is the closest point in Europe to Africa — just 14km across the Strait of Gibraltar. The fast ferry crossing takes only 35 minutes, making it the most convenient departure point for a Tangier day trip from Spain." },
  { q: "Do I need a visa to visit Morocco from Tarifa?", a: "Most EU, UK, US, Canadian, Australian and New Zealand passport holders do not need a visa for Morocco — you receive a free 90-day stamp on arrival. Always verify entry requirements for your specific nationality before travelling." },
  { q: "Can I book the ferry from Tarifa to Tangier on the day?", a: "Same-day tickets are often available at the Tarifa terminal, but in peak season (July–August) and at weekends we recommend booking in advance at frs.es. Contact us when you book your tour and we can advise on availability." },
  { q: "How much time do I need for a Tangier day trip from Tarifa?", a: "A comfortable day trip requires leaving Tarifa on an early-morning ferry (08:00–09:00) and returning on an afternoon or early-evening ferry (17:00–18:00). This gives you 7–8 hours in Morocco — enough for the Medina, lunch, and Cape Spartel." },
  { q: "Can I combine Tarifa and Gibraltar on the same trip?", a: "Yes — Tarifa and Gibraltar are about 45 minutes apart by car. Some visitors combine a morning ferry from Tarifa, a full day in Tangier, and then continue to Gibraltar. Contact us to discuss a custom itinerary." },
];

export default function TarifaDayTripPage() {
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
          <Image src="/hero-tarifa.jpg" alt="Fast ferry crossing Strait of Gibraltar from Tarifa Spain to Tangier Morocco" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.70) 0%,rgba(15,31,61,0.52) 55%,rgba(15,31,61,0.82) 100%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Breadcrumb items={[{ label: "Tours", href: "/tours" }, { label: "Tarifa Day Trip" }]} />
            <div className="max-w-3xl mt-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Ship className="w-3.5 h-3.5" /> Tarifa → Tangier · 35-min Ferry · Europe to Africa
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                Tangier Day Trip from Tarifa —<br />
                <span className="text-gold">Morocco from Spain in 35 Minutes</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Tarifa is the closest point in Europe to Africa. Cross the Strait of Gibraltar on a fast ferry and discover Tangier with a private local guide — a complete Moroccan experience, back in Spain for dinner.
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-sm text-white/70">
                {[
                  { icon: <Clock className="w-4 h-4 text-gold" />, text: "Full day (~7 hrs in Tangier)" },
                  { icon: <Ship className="w-4 h-4 text-gold" />, text: "35-min fast ferry" },
                  { icon: <Shield className="w-4 h-4 text-gold" />, text: "Ferry-time planning" },
                  { icon: <MapPin className="w-4 h-4 text-gold" />, text: "14km from Spain" },
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
          <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">Africa is 14km from Tarifa</h2>
          <div className="space-y-4 text-muted-text leading-relaxed mt-6">
            <p>Stand on the beach at Tarifa and you can see the Moroccan coast with the naked eye. The Rif Mountains rise brown and clear above the blue Strait on most days. Africa — and an entirely different culture, history, and sensory world — is just 35 minutes away by fast ferry.</p>
            <p>Tarifa is Europe&apos;s southernmost point and the continent&apos;s closest land to Africa. The Strait of Gibraltar crossing from here to Tangier is the most direct, most scenic, and most historically resonant way to make the journey. Thousands of years of trade, migration, invasion, and cultural exchange happened across this narrow strip of water. On a clear day, you can see both continents simultaneously from the ferry.</p>
            <p>With private guide Abdelhamid Idrissi waiting at Tangier port, you step off the boat and into Morocco — the ancient Medina, the Kasbah above the sea, the souks, the mint tea, the storytelling. By the time you return to Tarifa in the afternoon, you will have experienced a genuinely different world.</p>
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
            <h2 className="font-display text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <Ship className="w-7 h-7 text-gold" /> Ferry Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ferryInfo.map((item) => (
                <div key={item.label} className="bg-white/10 border border-white/20 rounded p-4">
                  <div className="text-xs font-bold text-gold uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-sm text-white/80 leading-relaxed">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs text-center mt-5">Ferry tickets are booked independently by you. TangierTours manages everything from the moment you arrive at Tangier port.</p>
          </div>
        </section>

        {/* ITINERARY */}
        <section id="itinerary" className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-display text-3xl font-bold text-navy mb-2 gold-divider-left">Sample Day Itinerary</h2>
          <p className="text-muted-text text-sm mt-4 mb-8">Times are approximate and adjusted to your chosen ferry.</p>
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
                <ul className="space-y-2">{included.map((item) => (<li key={item} className="flex items-start gap-2 text-sm text-muted-text"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}</li>))}</ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-muted-text" /> Not Included</h3>
                <ul className="space-y-2">{notIncluded.map((item) => (<li key={item} className="flex items-start gap-2 text-sm text-muted-text"><span className="shrink-0 mt-0.5">–</span>{item}</li>))}</ul>
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
            <h2 className="font-display text-xl font-bold text-navy mb-6 text-center">Also Visiting from Gibraltar?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { title: "Tangier Day Trip from Gibraltar", href: "/tours/tangier-day-trip-from-gibraltar", desc: "Crossing from Gibraltar? Same Tangier experience, different ferry port." },
                { title: "Tangier Private Tours", href: "/tours/tangier-private-tours", desc: "Staying longer in Tangier? Explore the city on your own terms." },
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
          <h2 className="font-display text-2xl font-bold text-navy mb-6 text-center gold-divider">Book Your Tarifa Day Trip</h2>
          <div className="mt-6">
            <BookingForm tourOptions={["Tangier Day Trip from Tarifa — Full Day", "Tangier Day Trip from Tarifa — Half Day", "Custom itinerary"]} />
          </div>
          <p className="text-center text-xs text-muted-text mt-4">
            Ferry tickets not included — book at <a href="https://www.frs.es" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">frs.es</a> or Inter Shipping.
          </p>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

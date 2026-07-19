import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Users, Shield, Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Luxury Morocco Tours — Bespoke Private Experiences | TangierTours",
  description:
    "Discover bespoke luxury Morocco tours crafted for the discerning traveller. Private vehicles, handpicked riads, exclusive access and curated gastronomy. Private luxury tour Morocco.",
  keywords: ["luxury Morocco tours", "private luxury tour Morocco", "bespoke Morocco itinerary", "VIP Morocco tour"],
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Luxury Morocco Tours by TangierTours",
  description:
    "Bespoke private luxury Morocco tours including Tangier, Chefchaouen, Fez, and the Sahara. Private vehicles, handpicked riads, exclusive access.",
  url: "https://www.tangiertours.ma/luxury-morocco-tours",
  touristType: ["Luxury", "Cultural", "Heritage"],
};

const fiveDayItinerary = [
  {
    day: "Day 1",
    title: "Tangier Arrival & Golden Hour Kasbah",
    desc: "Private airport transfer to your handpicked boutique riad in the medina. Late afternoon, we ascend to the Kasbah at sunset — the same view that captivated Delacroix and Matisse. Private rooftop aperitif overlooking the Strait of Gibraltar.",
  },
  {
    day: "Day 2",
    title: "Chefchaouen — The Blue City",
    desc: "A private 3-hour drive through the Rif Mountains delivers you to Chefchaouen before the day-trippers arrive. Explore the photogenic alleyways with your personal guide, enjoy a long private lunch at a hilltop terrace, and return at your own pace.",
  },
  {
    day: "Day 3",
    title: "Fez — Imperial City & Living Museum",
    desc: "Fez el-Bali is the world's largest car-free urban area and one of humanity's great medieval cities. Your private guide navigates the 9,000 alleyways with purpose — the tanneries, the ancient university, the spice souks — while avoiding every tourist bottleneck.",
  },
  {
    day: "Day 4",
    title: "Sahara Desert & Merzouga Dunes",
    desc: "Rise before dawn to witness the Erg Chebbi dunes change colour from rose to amber to gold. A private camel caravan takes you deep into the desert. Overnight in an exclusive luxury desert camp with private tent and exceptional Moroccan cuisine.",
  },
  {
    day: "Day 5",
    title: "Marrakech & Private Farewell Dinner",
    desc: "Morning drive through the date-palm valleys of the Draa. Private walking tour of the Medina and Majorelle Gardens (pre-booked tickets included). Farewell dinner at a curated riad restaurant with a personally selected menu.",
  },
];

const threeDayItinerary = [
  {
    day: "Day 1",
    title: "Tangier — History, Art & Sunset Terrace",
    desc: "Deep dive into Tangier's extraordinary international past: the American Legation, the Kasbah Museum, the legendary Grand Café de Paris. Private rooftop dinner with views of two continents at dusk.",
  },
  {
    day: "Day 2",
    title: "Asilah — Whitewashed Art Town",
    desc: "An hour south along the Atlantic coast lies Asilah, perhaps Morocco's most beautiful small town. White ramparts, outstanding street art, and the finest fresh seafood on the Moroccan coast. Exclusive private tour of the Palais de Raissouli.",
  },
  {
    day: "Day 3",
    title: "Chefchaouen — Blue City at Your Pace",
    desc: "An unhurried morning in the blue city, exploring the hill neighbourhood of Ras El Maa with its cascading stream. Private picnic lunch prepared with local market ingredients, followed by an optional hammam experience before returning to Tangier.",
  },
];

const included = [
  "Private air-conditioned vehicle (Mercedes or equivalent)",
  "Certified English-speaking guide throughout",
  "Luxury riad selection & booking assistance",
  "Airport and port transfers included",
  "Curated restaurant reservations (best local tables)",
  "Entrance fees to all sites mentioned",
  "Complimentary bottled water throughout",
  "24/7 personal WhatsApp concierge with Idrissi",
];

const signatureExperiences = [
  {
    icon: Sparkles,
    title: "Private Kasbah Sunset",
    desc: "Exclusive access to a Kasbah terrace closed to the general public, with a traditional Moroccan tea ceremony as the sun sets over the Strait of Gibraltar.",
  },
  {
    icon: Shield,
    title: "Exclusive Hammam Session",
    desc: "A private hammam reserved solely for your group — traditional black soap, kessa scrub, and argan oil massage in a centuries-old bathhouse, with no strangers present.",
  },
  {
    icon: Users,
    title: "Private Cooking Class",
    desc: "Cook alongside a Moroccan grandmother in her family home: hand-rolled couscous, slow-braised tagine, and fresh pastilla — then enjoy the meal you've created together.",
  },
  {
    icon: Calendar,
    title: "Riad Rooftop Dinner",
    desc: "A private multi-course dinner on an illuminated riad rooftop, personally curated by Idrissi with a sommelier-selected selection of Moroccan wines and live traditional oud music.",
  },
];

const luxuryTestimonials = [
  {
    name: "Olivia T.",
    country: "Canada 🇨🇦",
    quote:
      "I have travelled extensively across Southeast Asia and Europe, but Morocco with Idrissi was a category entirely its own. Every riad was breathtaking, every restaurant was a discovery, and the private Kasbah sunset was genuinely the most beautiful moment of my travel life.",
    tour: "5-Day Luxury Itinerary",
  },
  {
    name: "Marco & Chiara B.",
    country: "Italy 🇮🇹",
    quote:
      "The cooking class with the local family was the most authentic experience we've had anywhere in the world. Idrissi's attention to detail — from the riad selection to the rooftop dinner menu — was extraordinary. We're already planning our return.",
    tour: "3-Day Northern Morocco Luxury",
  },
  {
    name: "James & Fiona W.",
    country: "United Kingdom 🇬🇧",
    quote:
      "We chose TangierTours specifically because Idrissi offers a genuinely private experience rather than a group tour dressed up as luxury. From the moment he met us at the airport to our final farewell dinner, every detail exceeded our expectations.",
    tour: "5-Day Luxury Itinerary",
  },
];

const luxuryTourOptions = [
  "5-Day Morocco Luxury Tour",
  "3-Day Northern Morocco Luxury",
  "Bespoke Multi-Week Itinerary",
  "Luxury Honeymoon Package",
  "Private Sahara Desert Experience",
  "Custom Luxury Request",
];

export default function LuxuryMoroccoToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <Navbar />
      <WhatsAppButton variant="floating" />

      <main className="pt-16 bg-ivory min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-4 overflow-hidden" style={{minHeight:"420px"}}>
          <Image src="/hero-luxury.jpg" alt="Opulent Moroccan luxury riad rooftop terrace at sunset with elegant dining and medina panoramic view" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(15,31,61,0.68) 0%,rgba(15,31,61,0.55) 60%,rgba(15,31,61,0.78) 100%)"}} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Breadcrumb items={[{ label: "Luxury Morocco Tours" }]} />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              Luxury Morocco Tours —<br />
              Bespoke Private Experiences for the Discerning Traveller
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              No crowds. No compromises. A completely private Morocco curated around your tastes, pace, and passions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#enquire"
                className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-8 py-4 rounded hover:opacity-90 transition"
              >
                Request a Bespoke Itinerary <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton label="WhatsApp for Pricing" />
            </div>
          </div>
        </section>

        {/* What Luxury Means in Morocco */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6 gold-divider-left">
            What Luxury Travel Means in Morocco
          </h2>
          <div className="space-y-4 text-[var(--charcoal)] leading-relaxed">
            <p>
              True luxury in Morocco is not merely a thread-count or a Michelin star — it is access. Access to the narrow medina lanes that tour groups never reach. Access to a family&rsquo;s private courtyard, a rooftop that overlooks the Kasbah at the exact moment the light turns gold, a hammam reserved exclusively for your group. It is the unhurried hours that no coach-tour itinerary allows.
            </p>
            <p>
              TangierTours designs entirely private experiences around your interests, your pace, and your budget. Whether you wish to trace the footsteps of Paul Bowles through Tangier&rsquo;s literary past, spend an afternoon with a master weaver in a Fez workshop, or watch the Saharan stars from a luxury desert camp, we handle every arrangement with discretion and precision.
            </p>
            <p>
              Your vehicle is private. Your guide is dedicated to your group alone. Your restaurants are hand-selected for quality and authenticity — never a tourist menu. This is Morocco as the discerning traveller deserves to experience it.
            </p>
          </div>
        </section>

        {/* 5-Day Itinerary */}
        <section className="bg-white border-y border-[var(--border-warm)] py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] mb-2 gold-divider-left">
              Sample 5-Day Luxury Morocco Itinerary
            </h2>
            <p className="text-[var(--muted-text)] mt-4 mb-8">
              Tangier · Chefchaouen · Fez · Sahara · Marrakech — all itineraries are fully bespoke.
            </p>
            <div className="space-y-6">
              {fiveDayItinerary.map((d) => (
                <div key={d.day} className="flex gap-5">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-[var(--navy)] flex flex-col items-center justify-center text-center">
                    <span className="text-[var(--gold)] text-xs font-semibold">{d.day.split(" ")[0]}</span>
                    <span className="text-white text-lg font-bold leading-none">{d.day.split(" ")[1]}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[var(--navy)] text-lg mb-1">{d.title}</h3>
                    <p className="text-sm text-[var(--charcoal)] leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Day Itinerary */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] mb-2 gold-divider-left">
            Sample 3-Day Northern Morocco Luxury Itinerary
          </h2>
          <p className="text-[var(--muted-text)] mt-4 mb-8">
            Tangier · Asilah · Chefchaouen — perfect for cruise passengers or long-weekend visitors.
          </p>
          <div className="space-y-6">
            {threeDayItinerary.map((d) => (
              <div key={d.day} className="flex gap-5">
                <div className="shrink-0 w-16 h-16 rounded-full border-2 border-[var(--gold)] flex flex-col items-center justify-center text-center">
                  <span className="text-[var(--muted-text)] text-xs">{d.day.split(" ")[0]}</span>
                  <span className="text-[var(--navy)] text-lg font-bold leading-none">{d.day.split(" ")[1]}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--navy)] text-lg mb-1">{d.title}</h3>
                  <p className="text-sm text-[var(--charcoal)] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-8 gold-divider">
              What&rsquo;s Included in Every Luxury Tour
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Experiences */}
        <section className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] text-center mb-2 gold-divider">
            Signature Experiences
          </h2>
          <p className="text-center text-[var(--muted-text)] mt-6 mb-10">
            Exclusive moments available only to TangierTours luxury clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureExperiences.map((e) => (
              <div key={e.title} className="bg-white border border-[var(--border-warm)] rounded-lg p-6 flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                  <e.icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-1">{e.title}</h3>
                  <p className="text-sm text-[var(--muted-text)] leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white border-y border-[var(--border-warm)] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-[var(--navy)] text-center mb-8 gold-divider">
              What Luxury Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {luxuryTestimonials.map((t) => (
                <div key={t.name} className="bg-ivory rounded-lg p-6 border border-[var(--border-warm)]">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <blockquote className="text-sm italic text-[var(--charcoal)] leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="text-sm font-semibold text-[var(--navy)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted-text)]">{t.country} · {t.tour}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="enquire" className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl font-bold text-[var(--navy)] text-center mb-2 gold-divider">
            Request Your Bespoke Luxury Itinerary
          </h2>
          <p className="text-center text-[var(--muted-text)] mt-4 mb-8 text-sm">
            Please share your group size, preferred dates, and budget range — we will craft a personalised proposal within 24 hours.
          </p>
          <BookingForm tourOptions={luxuryTourOptions} />
        </section>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Star, Clock, Users, Shield, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tangier Private Tours — Expert Local Guide | TangierTours",
  description:
    "Book a Tangier private tour with a licensed local guide. Private tour guide Tangier — half-day, full-day & custom Tangier day tours. Medina, Kasbah, Cape Spartel, Caves of Hercules.",
};

const tourJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier Private Tour",
  description:
    "Private guided day tour of Tangier covering the Medina, Kasbah, Cape Spartel, and Caves of Hercules with licensed guide Idrissi.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  touristType: "private",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "80",
    highPrice: "150",
    priceCurrency: "USD",
    offerCount: "3",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is a Tangier private tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a 4-hour half-day tour and an 8-hour full-day tour. Custom durations are available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tangier safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tangier is safe for tourists, especially with a licensed local guide. Idrissi navigates the medina with expertise, ensuring you enjoy the authentic experience without any hassle.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a guide in Tangier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While you can explore independently, a private guide unlocks hidden gems, provides cultural context, and ensures you don't spend your visit getting lost or fending off touts.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the tour price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All tours include private licensed guide services, comfortable private transportation, and entrance fees to main sites. Lunch is included in the full-day tour.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise the itinerary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our custom tour option is completely bespoke — tell us your interests, time constraints, and any special requests, and we'll design the perfect day.",
      },
    },
  ],
};

const tourOptions = [
  {
    icon: Clock,
    title: "Half-Day Tour",
    duration: "4 hours",
    price: "From $80 / group",
    highlights: ["Medina walk & souks", "Grand Socco market square", "Kasbah viewpoint", "Traditional mint tea"],
  },
  {
    icon: Star,
    title: "Full-Day Tour",
    duration: "8 hours",
    price: "From $150 / group",
    highlights: ["All half-day highlights", "Cape Spartel lighthouse", "Caves of Hercules", "Local restaurant lunch", "Café Hafa ocean terrace"],
  },
  {
    icon: Users,
    title: "Custom Tour",
    duration: "Any duration",
    price: "Quote on request",
    highlights: ["Fully bespoke itinerary", "Any combination of sites", "Flexible start time", "Special interest focus"],
  },
];

const sights = [
  { icon: MapPin, name: "Tangier Medina", desc: "Labyrinthine streets dating back centuries, filled with artisans, spice stalls, and authentic neighbourhood life far from tourist artifice." },
  { icon: Shield, name: "Kasbah & Dar el-Makhzen", desc: "The ancient fortress crowning the city with sweeping views across the Strait of Gibraltar to Spain — only 14 km away." },
  { icon: MapPin, name: "Grand Socco Market", desc: "The main square where the old city meets the new, buzzing with vendors, storytellers, and the unmistakable energy of a Moroccan souk." },
  { icon: MapPin, name: "Cape Spartel Lighthouse", desc: "The dramatic meeting point of the Atlantic Ocean and the Mediterranean Sea — one of Africa's most photographed headlands." },
  { icon: Star, name: "Caves of Hercules", desc: "Ancient sea caves linked to the myth of Hercules, whose famous Atlantic window frames the ocean like a natural picture." },
  { icon: Clock, name: "Café Hafa Ocean View", desc: "A terraced clifftop café open since 1921, once frequented by Kerouac and the Rolling Stones. The mint tea here is non-negotiable." },
];

const testimonials = [
  {
    name: "Sophie & Thomas R.",
    country: "France",
    stars: 5,
    text: "Idrissi made Tangier come alive for us. We'd been to Morocco twice before but always on group tours — this was our first private experience and the difference was extraordinary. He knew every corner of the medina and adjusted the pace perfectly.",
  },
  {
    name: "James M.",
    country: "United Kingdom",
    stars: 5,
    text: "Flew in for just one day before a cruise. The full-day tour was worth every penny — Cape Spartel, the caves, the kasbah views. Idrissi was professional, funny, and his English is perfect. Already planning to come back for longer.",
  },
  {
    name: "Maria & Carlos V.",
    country: "Spain",
    stars: 5,
    text: "We asked for a custom tour focused on Tangier's literary history — the beats, Tennessee Williams, Paul Bowles. Idrissi delivered a tour unlike anything we'd found online. Genuinely one of the best days of travel we've had.",
  },
];

const faqs = faqJsonLd.mainEntity;

export default function TangierPrivateToursPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 text-center overflow-hidden" style={{minHeight:"420px"}}>
          <Image src="/hero-tangier-private.jpg" alt="Tangier Morocco Kasbah and Medina with turquoise Mediterranean bay" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(15,31,61,0.68) 0%,rgba(15,31,61,0.55) 60%,rgba(15,31,61,0.78) 100%)"}} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Tours", href: "/tours" }, { label: "Tangier Private Tours" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Tangier Private Tours —<br />Discover the Gateway to Africa with an Expert Guide
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mt-6 mb-3">
              Tangier is not a city you can skim. Beneath its whitewashed walls and café terraces lies
              one of the most layered, complex, and endlessly fascinating cities in Africa — a place
              where Moorish architecture meets Art Deco, where the Atlantic crashes against
              Mediterranean history, and where ancient trade routes converge at the edge of two
              continents.
            </p>
            <p className="text-gray-400 leading-relaxed">
              A private tour with licensed guide Idrissi means you experience all of this without the
              noise, rush, or compromises of a group. Your itinerary, your group, your pace — the way
              travel should be.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="#booking" className="bg-[var(--gold)] text-navy font-semibold px-7 py-3 rounded hover:opacity-90 transition-opacity">
                Book Your Tour
              </Link>
              <Link href="#options" className="border border-white text-white px-7 py-3 rounded hover:bg-white/10 transition-colors">
                See Tour Options
              </Link>
            </div>
          </div>
        </section>


        {/* Tour Options */}
        <section id="options" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Choose Your Tour</h2>
          <p className="text-center text-gray-500 mt-6 mb-12">All prices are per group, not per person.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tourOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="bg-white rounded-lg border border-[var(--border-warm)] p-7 flex flex-col hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-1">{opt.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{opt.duration}</p>
                  <p className="text-[var(--gold)] font-bold text-lg mb-4">{opt.price}</p>
                  <ul className="space-y-2 flex-1">
                    {opt.highlights.map((h) => (
                      <li key={h} className="flex gap-2 items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="#booking" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:text-navy transition-colors">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* What You'll See */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">What You'll See</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {sights.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.name} className="flex gap-3">
                    <Icon className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{s.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Private vs Group */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Private vs. Group Tours</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold text-[var(--gold)]">Private Tour</th>
                  <th className="px-4 py-3 font-semibold text-gray-400">Group Tour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Itinerary", "Fully customised", "Fixed for all"],
                  ["Group size", "Your group only", "Up to 30 strangers"],
                  ["Timing", "You decide", "Strict schedule"],
                  ["Pace", "As slow or fast as you like", "Must keep up"],
                  ["Local insight", "Deep, personal", "Surface-level"],
                  ["Flexibility", "Change plans anytime", "No changes allowed"],
                ].map(([feat, priv, grp]) => (
                  <tr key={feat} className="border-b border-[var(--border-warm)] even:bg-white">
                    <td className="px-4 py-3 font-medium text-navy">{feat}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                        <CheckCircle className="w-4 h-4" /> {priv}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500">{grp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* About Guide */}
        <section className="bg-[var(--ivory)] border-y border-[var(--border-warm)] py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-10 h-10 text-[var(--gold)] mx-auto mb-4" />
            <h2 className="font-display text-2xl text-navy mb-3">Your Licensed Expert Guide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Idrissi is a Tangier-born, Ministry of Tourism licensed guide with over twelve years of
              experience showing visitors the city he grew up in. He speaks English, French, Spanish,
              and Arabic fluently, and brings genuine passion to every tour — not just the sights, but
              the stories, the people, and the hidden corners that only a local can reveal.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:text-navy transition-colors">
              Meet Idrissi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg border border-[var(--border-warm)] p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.country}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.name} className="group border border-[var(--border-warm)] rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none font-semibold text-navy hover:bg-[var(--ivory)]">
                  {faq.name}
                  <ArrowRight className="w-4 h-4 text-[var(--gold)] rotate-90 group-open:rotate-[270deg] transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-[var(--border-warm)]">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Tours */}
        <section className="max-w-4xl mx-auto px-4 py-8 pb-12">
          <h2 className="font-display text-2xl text-navy text-center mb-6">Related Tours</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours/tangier-shore-excursions" className="flex-1 border border-[var(--gold)] rounded-lg p-5 text-center hover:bg-[var(--gold)] hover:text-white transition-colors group">
              <Users className="w-6 h-6 text-[var(--gold)] group-hover:text-white mx-auto mb-2" />
              <span className="font-display text-navy group-hover:text-white font-semibold block">Shore Excursions</span>
              <span className="text-sm text-gray-500 group-hover:text-white/80">For cruise passengers</span>
            </Link>
            <Link href="/tours/chefchaouen-day-trip-from-tangier" className="flex-1 border border-[var(--gold)] rounded-lg p-5 text-center hover:bg-[var(--gold)] hover:text-white transition-colors group">
              <MapPin className="w-6 h-6 text-[var(--gold)] group-hover:text-white mx-auto mb-2" />
              <span className="font-display text-navy group-hover:text-white font-semibold block">Chefchaouen Day Trip</span>
              <span className="text-sm text-gray-500 group-hover:text-white/80">The Blue City escape</span>
            </Link>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking" className="max-w-2xl mx-auto px-4 pb-20">
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book Your Tangier Private Tour</h2>
          <BookingForm showCruiseField={false} tourOptions={["Half-Day Tangier Tour", "Full-Day Tangier Tour", "Custom Tangier Tour"]} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

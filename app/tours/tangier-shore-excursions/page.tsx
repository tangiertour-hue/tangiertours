import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, MapPin, Star, CheckCircle, ArrowRight, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Tangier Shore Excursions — Private Cruise Port Tours | TangierTours",
  description:
    "Private Tangier shore excursion from the cruise port. Expert guide, on-time guarantee. Book your Tangier cruise port tour for MSC, Costa, Royal Caribbean & more.",
  keywords:
    "Tangier shore excursion, Tangier cruise port tour, Tangier from cruise ship, cruise Tangier private tour, Tangier port excursion",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier Shore Excursion — Private Cruise Port Tour",
  description:
    "Private guided shore excursion from Tangier Medina Port. Three durations: 3-hour Express, 5-hour Classic, 7-hour Grand Tour. On-time guarantee for all cruise passengers.",
  touristType: "cruise passengers",
  provider: {
    "@type": "LocalBusiness",
    name: "TangierTours",
    url: "https://www.tangiertours.ma",
  },
  offers: [
    { "@type": "Offer", name: "3-Hour Express", price: "60", priceCurrency: "USD" },
    { "@type": "Offer", name: "5-Hour Classic", price: "100", priceCurrency: "USD" },
    { "@type": "Offer", name: "7-Hour Grand Tour", price: "150", priceCurrency: "USD" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "34",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which port does Tangier use for cruise ships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cruise ships dock at Tangier Medina Port (also called Tangier Ville Port), located right next to the old city. It's just a short walk from the Grand Socco and the entrance to the Medina, making it one of the most conveniently located cruise ports in the Mediterranean.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Tangier port from the city centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tangier Medina Port is within walking distance of the city centre. The Grand Socco (main square) is just 10 minutes on foot from the port gates. The Kasbah is 20–25 minutes on foot, or a short drive.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to explore Tangier independently from a cruise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tangier is generally safe, but the Medina's narrow, winding streets can be confusing and solo tourists are sometimes approached by unofficial guides. Having a licensed private guide ensures a safe, hassle-free, and far richer experience — you'll see more, understand more, and never feel lost.",
      },
    },
    {
      "@type": "Question",
      name: "What if my ship is delayed or departs later than scheduled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor all cruise schedules in real time. If your ship is delayed on arrival, we adjust your start time at no extra cost. If your departure is pushed back, we can extend your tour. We are flexible and experienced with cruise port logistics.",
      },
    },
  ],
};

const excursions = [
  {
    duration: "3-Hour Express",
    price: "from $60/group",
    icon: "⚓",
    highlights: [
      "Grand Socco (Great Market Square)",
      "Tangier Medina souks & spice market",
      "Kasbah walls & panoramic viewpoint",
      "Traditional mint tea ceremony",
      "Return to port — on time, guaranteed",
    ],
    color: "border-gold",
  },
  {
    duration: "5-Hour Classic",
    price: "from $100/group",
    icon: "🌊",
    highlights: [
      "Everything in the Express tour",
      "Café Hafa — legendary ocean-terrace café",
      "Local artisan workshops & crafts",
      "Relaxed, unhurried pace throughout",
      "Time for independent exploration",
    ],
    color: "border-gold",
    featured: true,
  },
  {
    duration: "7-Hour Grand Tour",
    price: "from $150/group",
    icon: "🏔️",
    highlights: [
      "Everything in the Classic tour",
      "Cape Spartel lighthouse (Africa's northwest tip)",
      "Caves of Hercules (ancient sea caves)",
      "Spartel Bay — Atlantic coastline views",
      "Leisurely lunch at a local restaurant",
    ],
    color: "border-gold",
  },
];

const advantages = [
  {
    icon: <Users className="w-5 h-5 text-gold" />,
    title: "Just Your Group",
    desc: "No strangers, no waiting for others. Your tour runs entirely at your pace.",
  },
  {
    icon: <Clock className="w-5 h-5 text-gold" />,
    title: "On-Time Guarantee",
    desc: "In 15 years, we have never caused a passenger to miss their ship. Your schedule is our priority.",
  },
  {
    icon: <Shield className="w-5 h-5 text-gold" />,
    title: "Licensed & Vetted",
    desc: "Your guide is licensed by Morocco's Ministry of Tourism — not a street tout.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-gold" />,
    title: "Flexible Itinerary",
    desc: "Want to spend more time in the souks and less at the Kasbah? Say the word.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-gold" />,
    title: "Same Price or Cheaper",
    desc: "Private tours often cost the same — or less — than the ship's group excursion.",
  },
];

const cruiseLines = ["MSC Cruises", "Costa Cruises", "Royal Caribbean", "Norwegian Cruise Line", "P&O Cruises", "Celebrity Cruises", "Cunard"];

const testimonials = [
  {
    name: "Helen & Frank D.",
    country: "Australia",
    ship: "MSC Grandiosa",
    text: "We were terrified of missing the ship, but Idrissi was tracking the departure time from the moment we met him at the port. He packed an extraordinary amount into 5 hours and had us back with 45 minutes to spare. Absolutely the right choice over the ship's own tour.",
  },
  {
    name: "Margaret T.",
    country: "United Kingdom",
    ship: "P&O Britannia",
    text: "We'd heard mixed things about Tangier. Idrissi completely transformed our experience. He guided us through the Medina's labyrinthine streets with such grace and knowledge — we never once felt unsafe or pressured. A truly unforgettable few hours.",
  },
  {
    name: "Carlos & Ana R.",
    country: "Spain",
    ship: "Costa Diadema",
    text: "Idrissi speaks perfect Spanish, which made everything so easy. The 7-hour Grand Tour was worth every penny — Cape Spartel and the Caves of Hercules were breathtaking. He knew every spot for the best photos and every stall with the best prices.",
  },
];

const breadcrumbItems = [
  { label: "Tours", href: "/tours" },
  { label: "Tangier Shore Excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative pt-24 pb-16 text-white overflow-hidden" style={{minHeight:"420px"}}>
          <Image src="/hero-shore-excursions.jpg" alt="Luxury cruise ship docked at Tangier port with city skyline in background" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,rgba(15,31,61,0.75) 0%,rgba(15,31,61,0.60) 60%,rgba(12,34,68,0.80) 100%)"}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Shield className="w-3.5 h-3.5" /> On-Time Guarantee — 15 Years, Zero Missed Ships
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Tangier Shore Excursions —{" "}
                <span className="text-gold">Private Tours from the Cruise Port, Guaranteed On Time</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Back on board on time — guaranteed. We've never missed a departure in 15 years. Experience the real Tangier with a licensed private guide who knows the port schedule as well as the Medina's hidden alleyways.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#book"
                  className="bg-gold text-navy font-bold px-7 py-3.5 rounded hover:opacity-90 transition-opacity"
                >
                  Book Your Excursion
                </a>
                <WhatsAppButton variant="primary" />
              </div>
            </div>
          </div>
        </section>

        {/* PORT INFO */}
        <section className="py-12 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-gold" />,
                  title: "Tangier Medina Port",
                  desc: "Your cruise ship docks at Tangier Medina Port (Tangier Ville Port), the historic harbour right beside the old city. No long transfers needed.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-gold" />,
                  title: "Walking Distance to Medina",
                  desc: "The Grand Socco is just 10 minutes on foot from the port gates. Most tour highlights are within 20 minutes' walk — or a quick drive.",
                },
                {
                  icon: <Users className="w-6 h-6 text-gold" />,
                  title: "Meeting Point",
                  desc: "Your guide meets you at the cruise terminal exit, holding a sign with your name. No confusion, no wasted time.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border-warm rounded p-6 flex gap-4">
                  <div className="bg-gold/10 rounded p-2 shrink-0 h-fit">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXCURSION OPTIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy gold-divider mb-2">
                Choose Your Excursion
              </h2>
              <p className="text-muted-text mt-6 max-w-2xl mx-auto">
                All excursions are fully private. Prices are per group — not per person. Book the one that fits your port schedule.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {excursions.map((ex, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded border-2 ${ex.featured ? "border-gold shadow-xl" : "border-border-warm"} overflow-hidden flex flex-col`}
                >
                  {ex.featured && (
                    <div className="bg-gold text-navy text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-3xl mb-3">{ex.icon}</div>
                    <h3 className="font-display text-xl font-bold text-navy mb-1">{ex.duration}</h3>
                    <p className="text-gold font-semibold text-lg mb-4">{ex.price}</p>
                    <ul className="space-y-2.5 flex-1">
                      {ex.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#book"
                      className={`mt-6 block text-center font-semibold py-2.5 rounded transition-colors ${
                        ex.featured
                          ? "bg-gold text-navy hover:opacity-90"
                          : "border border-gold text-gold hover:bg-gold hover:text-navy"
                      }`}
                    >
                      Book This Tour <ArrowRight className="inline w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY PRIVATE */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold gold-divider mb-2">
                Why Private Over Ship Tours?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {advantages.map((adv, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded p-5">
                  <div className="bg-gold/20 rounded p-2 w-fit mb-3">{adv.icon}</div>
                  <h3 className="font-semibold text-white mb-1.5">{adv.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRUISE LINES */}
        <section className="py-14 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center mb-3">
              What Cruise Lines Dock at Tangier?
            </h2>
            <p className="text-muted-text text-center max-w-2xl mx-auto mb-8">
              Tangier Medina Port regularly welcomes the following cruise lines. Whatever ship you're sailing, we can arrange your private excursion.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {cruiseLines.map((line) => (
                <span key={line} className="bg-white border border-border-warm text-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm">
                  {line}
                </span>
              ))}
            </div>
            <p className="text-center text-muted-text text-sm mt-6">
              Not listed? <a href="#book" className="text-gold underline">Contact us</a> — if it docks in Tangier, we'll be there.
            </p>
          </div>
        </section>

        {/* BOOK BEFORE YOU SAIL */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-navy text-white rounded p-8">
              <h2 className="font-display text-2xl font-bold mb-3">Book Before You Sail</h2>
              <p className="text-white/75 leading-relaxed mb-5">
                Cruise excursions fill up fast. We strongly recommend booking before your voyage departs — especially in high season (April–October). Secure your spot now and travel with confidence.
              </p>
              <WhatsAppButton variant="primary" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              What Cruise Passengers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-border-warm rounded p-6 flex flex-col">
                  <div className="flex mb-3">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}
                  </div>
                  <blockquote className="text-charcoal text-sm leading-relaxed flex-1 italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="border-t border-border-warm pt-4">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-text">{t.country} · {t.ship}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="bg-ivory border border-border-warm rounded group">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex items-center justify-between list-none hover:text-gold transition-colors">
                    {faq.name}
                    <ArrowRight className="w-4 h-4 text-gold shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="book" className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Reserve Your Shore Excursion
              </h2>
              <p className="text-muted-text mt-3 max-w-xl mx-auto">
                Fill in the form below and we'll confirm your booking within 2 hours.
              </p>
            </div>
            <BookingForm
              tourOptions={["3-Hour Express Excursion", "5-Hour Classic Excursion", "7-Hour Grand Tour"]}
              showCruiseField={true}
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

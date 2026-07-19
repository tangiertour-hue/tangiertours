import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TangierTours Reviews — Testimonials from 87 Travellers | TangierTours",
  description:
    "Read genuine reviews from 87 travellers who explored Morocco with TangierTours. Rated 4.9/5 on Google, TripAdvisor, and Viator. Private tours, shore excursions & luxury experiences.",
};

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TangierTours",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah M." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Idrissi made our Tangier shore excursion absolutely unforgettable. His knowledge of the medina's history is extraordinary.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Daniel K." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The Jewish Heritage Tour was deeply moving and meticulously researched. Idrissi connected us to our family roots in ways we never expected.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claire D." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Our private Chefchaouen day trip was perfection. The blue city was magical and Idrissi knew every perfect photo spot.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marco B." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The luxury tour exceeded every expectation — private riad, exclusive restaurant bookings and a truly personal experience.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anika R." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Idrissi's camel ride experience through the dunes was the highlight of our entire Morocco trip.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Tom W." },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Best shore excursion guide in all of Morocco. On time, knowledgeable, and made sure we got back to the ship safely.",
    },
  ],
};

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  tour: string;
  date: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    country: "United States",
    flag: "🇺🇸",
    tour: "Shore Excursion",
    date: "October 2024",
    rating: 5,
    quote:
      "Our MSC cruise docked in Tangier for just six hours — I was nervous we'd miss everything. Idrissi had a perfectly paced route planned: the Kasbah, Grand Socco, a mint tea stop, and the famous Café Hafa with its panoramic views. He waited patiently at the port without a single complaint about our delayed disembarkation. Hands down the best shore excursion of our entire Mediterranean voyage.",
  },
  {
    name: "Daniel K.",
    country: "Israel",
    flag: "🇮🇱",
    tour: "Jewish Heritage Tour",
    date: "June 2024",
    rating: 5,
    quote:
      "My family left Tangier in 1956 and I never imagined I'd be standing in our ancestral synagogue, listening to Idrissi explain the full history of Tangier's Sephardic community. He had researched our family name beforehand and had photographs ready for me — an extraordinary gesture. This tour left me speechless and brought our whole family to tears.",
  },
  {
    name: "Claire D.",
    country: "France",
    flag: "🇫🇷",
    tour: "Chefchaouen Day Trip",
    date: "April 2024",
    rating: 5,
    quote:
      "We'd seen thousands of photos of the blue city online and worried it would be a disappointment in person — it absolutely was not. Idrissi took us through the quieter neighbourhoods away from the tourist crowds, explained the history of the blue-painted walls, and found us the most wonderful little restaurant up on the hillside. The whole 10-hour round trip felt effortless.",
  },
  {
    name: "Hans & Brigitte R.",
    country: "Germany",
    flag: "🇩🇪",
    tour: "Tangier Private Tour (Full-Day)",
    date: "September 2024",
    rating: 5,
    quote:
      "As historians, we had very specific interests — the international zone era, the Beat Generation writers, and the colonial architecture. Idrissi knew every detail: Burroughs' old apartment, the Café Central where Paul Bowles wrote, the layered influences of six different cultures on a single street. He adapted his commentary entirely to our interests, which made the day feel deeply personal.",
  },
  {
    name: "Olivia T.",
    country: "Canada",
    flag: "🇨🇦",
    tour: "Luxury Morocco Tour",
    date: "March 2024",
    rating: 5,
    quote:
      "I'd travelled extensively through Southeast Asia and Europe but had never experienced Morocco. Idrissi designed a bespoke five-day itinerary that balanced culture and comfort perfectly. Every hotel was a gorgeous riad, every restaurant a genuine local gem — no tourist traps whatsoever. The private access to the Kasbah at sunset was worth the entire trip on its own.",
  },
  {
    name: "James & Fiona W.",
    country: "United Kingdom",
    flag: "🇬🇧",
    tour: "Shore Excursion",
    date: "November 2023",
    rating: 5,
    quote:
      "We've done dozens of shore excursions around the Mediterranean and Idrissi ranks among the very best guides we've ever had. He communicated clearly before our cruise even arrived, met us with a sign at the port, and had a professional air-conditioned vehicle ready. The Caves of Hercules were extraordinary and we still had time for fresh seafood before boarding. Absolutely flawless.",
  },
  {
    name: "Yael & Avi S.",
    country: "Israel",
    flag: "🇮🇱",
    tour: "Jewish Heritage Tour",
    date: "July 2024",
    rating: 5,
    quote:
      "Idrissi's Jewish Heritage Tour is unlike anything we've experienced — and we've done heritage tours in Poland, Hungary, and throughout Spain. His respect for the Sephardic tradition is genuine and his knowledge of the Tangier Jewish community's unique story is exceptional. We visited two synagogues, the historic Jewish quarter, and the old cemetery. A profound and beautifully curated experience.",
  },
  {
    name: "Sophie L.",
    country: "Australia",
    flag: "🇦🇺",
    tour: "Tangier Private Tour (Half-Day)",
    date: "February 2024",
    rating: 5,
    quote:
      "I was solo travelling through Morocco and wanted a safe, informative introduction to Tangier without being overwhelmed. Idrissi was incredibly professional, spoke excellent English, and made me feel completely at ease navigating the medina. He introduced me to a local Moroccan family over tea — a spontaneous, generous moment that showed his genuine love for sharing his culture.",
  },
  {
    name: "Marco B.",
    country: "Italy",
    flag: "🇮🇹",
    tour: "Luxury Morocco Tour",
    date: "May 2024",
    rating: 5,
    quote:
      "My partner and I used TangierTours for a three-day luxury itinerary through Northern Morocco. The private vehicle was immaculate, the riad bookings were impeccable, and Idrissi's restaurant choices were extraordinary — authentic Moroccan gastronomy rather than tourist menus. He even arranged a private cooking class with a local chef's family in Chefchaouen. Magnifico.",
  },
  {
    name: "Carlos & María J.",
    country: "Spain",
    flag: "🇪🇸",
    tour: "Camel Ride Experience",
    date: "August 2024",
    rating: 5,
    quote:
      "Tangier is just 45 minutes from Tarifa so we took the ferry for a day trip and booked the camel ride with TangierTours. Idrissi's communication beforehand was impeccable — arrival times, exact meeting points, what to expect. The ride itself was magical, the dunes were breathtaking at sunset, and he captured photographs of us that are now our most-liked social media posts ever.",
  },
  {
    name: "Pieter van den B.",
    country: "Netherlands",
    flag: "🇳🇱",
    tour: "Chefchaouen Day Trip",
    date: "October 2023",
    rating: 5,
    quote:
      "I'm a travel photographer and came specifically to capture Chefchaouen at the golden hour. Idrissi understood exactly what I needed — he drove faster to avoid the midday coach crowds and positioned us at the perfect viewpoints just as the light turned amber. He also carried my tripod without being asked and found a stunning rooftop the tour groups never reach. A photographer's dream guide.",
  },
  {
    name: "Nomvula M.",
    country: "South Africa",
    flag: "🇿🇦",
    tour: "Tangier Private Tour (Full-Day)",
    date: "December 2023",
    rating: 5,
    quote:
      "Travelling as a Black African woman in North Africa, I had some apprehensions about being welcome. Idrissi made me feel completely at home from the very first message. His commentary touched on Morocco's ancient ties with sub-Saharan Africa, the Trans-Saharan trade routes, and the diversity that has always defined Tangier. Deeply educational and genuinely welcoming.",
  },
];

function StarRow({ count, filled }: { count: number; filled: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < filled ? "fill-[var(--gold)] text-[var(--gold)]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const ratingBreakdown = [
    { stars: 5, count: 80, pct: 92 },
    { stars: 4, count: 5, pct: 6 },
    { stars: 3, count: 2, pct: 2 },
    { stars: 2, count: 0, pct: 0 },
    { stars: 1, count: 0, pct: 0 },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
      />
      <Navbar />
      <WhatsAppButton variant="floating" />

      <main className="pt-16 bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[{ label: "Reviews" }]} />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              What Travellers Say About TangierTours
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Real stories from real travellers — 87 verified reviews across Google, TripAdvisor, and Viator.
            </p>
          </div>
        </section>

        {/* Aggregate Rating */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow border border-[var(--border-warm)] p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="text-center shrink-0">
              <div className="font-display text-7xl font-bold text-[var(--navy)]">4.9</div>
              <div className="flex justify-center mt-2 mb-1">
                <StarRow count={5} filled={5} />
              </div>
              <div className="text-[var(--muted-text)] text-sm">Based on 87 reviews</div>
            </div>
            <div className="flex-1 w-full space-y-2">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-[var(--navy)] w-10 shrink-0">{r.stars} ★</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--gold)]"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="text-sm text-[var(--muted-text)] w-8 text-right">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] text-center mb-2 gold-divider">
            Traveller Stories
          </h2>
          <p className="text-center text-[var(--muted-text)] mt-6 mb-10">
            Every review is unedited and sourced from verified bookings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-white rounded-lg border border-[var(--border-warm)] shadow-sm p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <StarRow count={5} filled={t.rating} />
                  <span className="text-sm text-[var(--muted-text)]">{t.date}</span>
                </div>
                <blockquote className="text-sm text-[var(--charcoal)] leading-relaxed flex-1 italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[var(--border-warm)] pt-4">
                  <div className="font-semibold text-[var(--navy)]">
                    {t.flag} {t.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--muted-text)] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {t.country}
                    <span className="mx-1">·</span>
                    <span className="text-[var(--gold)] font-medium">{t.tour}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Platform Badges */}
        <section className="bg-white border-y border-[var(--border-warm)] py-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold text-[var(--navy)] mb-6">
              Also Find Us On
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "TripAdvisor", color: "text-green-600", badge: "⭐ 4.9 / 5" },
                { name: "Google Reviews", color: "text-blue-600", badge: "⭐ 4.9 / 5" },
                { name: "Viator", color: "text-[#E4393C]", badge: "⭐ 5 / 5" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="border border-[var(--border-warm)] rounded-lg px-6 py-4 min-w-[160px] text-center"
                >
                  <div className={`font-semibold text-lg ${p.color}`}>{p.name}</div>
                  <div className="text-[var(--muted-text)] text-sm mt-1">{p.badge}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Join 500+ Happy Travellers
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Book your private Morocco tour today — we reply within 2 hours, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-8 py-4 rounded hover:opacity-90 transition"
              >
                Book Now <ArrowRight className="w-4 h-4" />
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

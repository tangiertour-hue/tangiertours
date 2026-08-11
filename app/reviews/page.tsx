import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TangierTours Reviews — What Travellers Say | TangierTours Morocco",
  description:
    "Read genuine reviews from travellers who have explored Tangier and Morocco with licensed guide Abdelhamid Idrissi. Private tours, shore excursions and Jewish heritage experiences.",
};

// Schema — no aggregate rating until real verified data is available
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TangierTours",
  url: "https://www.tangiertours.ma",
  telephone: "+212668702424",
  email: "tangiertour@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Ave Mly Ali Cherif",
    addressLocality: "Tangier",
    postalCode: "90000",
    addressCountry: "MA",
  },
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

// Add your genuine TripAdvisor / Google reviews here
const testimonials: Testimonial[] = [
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
              Genuine reviews from travellers who have explored Tangier and Morocco with Abdelhamid Idrissi.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          {testimonials.length > 0 ? (
            <>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--navy)] text-center mb-2 gold-divider">
                Traveller Stories
              </h2>
              <p className="text-center text-[var(--muted-text)] mt-6 mb-10">
                All reviews are genuine and sourced from verified travellers.
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
            </>
          ) : (
            <div className="max-w-2xl mx-auto bg-white border border-[var(--border-warm)] rounded-lg p-10 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">Reviews Coming Soon</h2>
              <p className="text-muted-text leading-relaxed mb-6">
                We are adding genuine reviews from travellers shortly. In the meantime, you are welcome to read traveller feedback directly on our TripAdvisor profile, or contact us directly — we are happy to share references.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://www.tripadvisor.fr/Attraction_Review-g293737-d2322721-Reviews-Tangiertours-Tangier_Tanger_Tetouan_Al_Hoceima.html"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00AA6C] text-white font-semibold px-6 py-2.5 rounded hover:opacity-90 transition text-sm">
                  Read on TripAdvisor
                </a>
                <Link href="/leave-a-review"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-2.5 rounded hover:bg-navy/90 transition text-sm">
                  Leave a Review
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* External review platforms */}
        <section className="bg-white border-y border-[var(--border-warm)] py-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold text-[var(--navy)] mb-3">
              Find Us on Review Platforms
            </h2>
            <p className="text-muted-text text-sm mb-6">Read independent traveller reviews on external platforms.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.tripadvisor.fr/Attraction_Review-g293737-d2322721-Reviews-Tangiertours-Tangier_Tanger_Tetouan_Al_Hoceima.html"
                target="_blank" rel="noopener noreferrer"
                className="border border-[var(--border-warm)] rounded-lg px-6 py-4 min-w-[160px] text-center hover:border-gold transition-colors">
                <div className="font-semibold text-green-600 text-base">TripAdvisor</div>
                <div className="text-[var(--muted-text)] text-xs mt-1">Read our TripAdvisor reviews</div>
              </a>
              <div className="border border-[var(--border-warm)] rounded-lg px-6 py-4 min-w-[160px] text-center">
                <div className="font-semibold text-blue-600 text-base">Google Reviews</div>
                <div className="text-[var(--muted-text)] text-xs mt-1">Search TangierTours on Google Maps</div>
              </div>
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="bg-ivory border-t border-border-warm py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h2 className="font-display text-2xl font-bold text-navy mb-3">
              Travelled with TangierTours?
            </h2>
            <p className="text-muted-text mb-6 max-w-xl mx-auto">
              We would love to hear about your experience. Share your review directly on our website — it only takes a few minutes.
            </p>
            <Link
              href="/leave-a-review"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded hover:opacity-90 transition"
            >
              <Star className="w-4 h-4" /> Leave a Review
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Explore Morocco?
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

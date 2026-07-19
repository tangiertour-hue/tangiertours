import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingForm from "@/components/BookingForm";
import GalleryGrid from "@/components/GalleryGrid";
import {
  Star, Shield, Award, Users, MapPin, Clock, ChevronDown,
  ArrowRight, Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "TangierTours — Private Tour Guide in Tangier, Morocco | Idrissi",
  description:
    "Book a private tour in Tangier, Morocco with licensed guide Idrissi. Shore excursions, Jewish heritage tours, Chefchaouen day trips, luxury Morocco experiences. 4.9★ rated.",
  keywords:
    "Tangier private tour, Tangier tour guide, private tours Morocco, shore excursion Tangier, Jewish heritage Morocco, luxury Morocco tours",
  openGraph: {
    title: "TangierTours — Private Tour Guide in Tangier, Morocco",
    description:
      "Experience Morocco's magic with licensed guide Idrissi. Tailored private tours, Jewish heritage experiences, shore excursions & luxury itineraries.",
    type: "website",
    locale: "en_US",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristInformationCenter"],
  name: "TangierTours",
  description:
    "Licensed private tour guide service in Tangier, Morocco. Specialising in private tours, Jewish heritage experiences, shore excursions, and luxury Morocco travel.",
  url: "https://www.tangiertours.ma",
  telephone: "+212668702424",
  email: "tangiertour@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tangier Medina",
    addressLocality: "Tangier",
    postalCode: "90000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7595,
    longitude: -5.8340,
  },
  openingHours: "Mo-Su 07:00-21:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
  },
  sameAs: [
    "https://www.tripadvisor.com",
    "https://www.google.com/maps",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a private tour in Tangier cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A private half-day tour in Tangier (4 hours) starts from $80 per group. Full-day tours (8 hours) start from $150. Prices vary based on group size, tour type, and inclusions. Contact us for a personalised quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tangier safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Tangier is generally safe for tourists, especially with a licensed guide. Idrissi has been guiding visitors safely for over 15 years. Having a professional guide eliminates stress and ensures you experience the best of the city.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does the tour guide speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idrissi speaks English, French, Spanish, Arabic, and Hebrew — making TangierTours uniquely accessible to travelers from around the world.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a tour from my cruise ship in Tangier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialise in Tangier shore excursions for cruise passengers. We meet you at the port, show you the best of Tangier, and guarantee you're back on board on time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Jewish heritage tours in Morocco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer specialist Jewish heritage tours in Tangier and Casablanca, covering the Mellah (Jewish quarter), historic synagogues, Jewish cemeteries, and the Museum of Moroccan Judaism.",
      },
    },
  ],
};

const tours = [
  {
    title: "Tangier Private Tours",
    href: "/tours/tangier-private-tours",
    icon: "🕌",
    desc: "Explore Tangier's Medina, Kasbah, Grand Socco, and Cape Spartel with your personal licensed guide. Half-day or full-day options.",
    tag: "Most Popular",
  },
  {
    title: "Shore Excursions",
    href: "/tours/tangier-shore-excursions",
    icon: "⚓",
    desc: "Arriving by cruise ship? We meet you at Tangier port and guarantee you return on time — every time.",
    tag: "Cruise Passengers",
  },
  {
    title: "Jewish Heritage Tours",
    href: "/jewish-heritage-tours",
    icon: "✡️",
    desc: "Discover Morocco's extraordinary 2,000-year Jewish history. Tangier Mellah, synagogues, Casablanca, and beyond.",
    tag: "Specialist Niche",
  },
  {
    title: "Chefchaouen Day Trip",
    href: "/tours/chefchaouen-day-trip-from-tangier",
    icon: "🏔️",
    desc: "Visit Morocco's iconic Blue City. Winding blue-washed streets, mountain views, and authentic local culture — just 2.5 hours from Tangier.",
    tag: "Top-Rated",
  },
  {
    title: "Luxury Morocco Tours",
    href: "/luxury-morocco-tours",
    icon: "💎",
    desc: "Bespoke multi-day itineraries for the discerning traveller. Private transport, luxury riad accommodation, exclusive access.",
    tag: "Premium",
  },
  {
    title: "Private Transfers",
    href: "/tours/private-morocco-transfers",
    icon: "🚗",
    desc: "Comfortable, reliable private transfers across Morocco. Airport pickups, city-to-city routes, and custom journeys.",
    tag: "Airport & City",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    country: "United States",
    rating: 5,
    tour: "Tangier Private Tour",
    text: "Idrissi is without question the best tour guide we've ever had — anywhere in the world. His knowledge of Tangier's history, his warmth, and his ability to show us hidden corners of the Medina made this the highlight of our entire Morocco trip.",
  },
  {
    name: "David & Rachel L.",
    country: "Israel",
    rating: 5,
    tour: "Jewish Heritage Tour",
    text: "We were deeply moved by the Jewish heritage tour. Idrissi's depth of knowledge about Moroccan Jewish history and the Tangier Mellah was extraordinary. He speaks Hebrew beautifully and made us feel completely at home. Highly recommend.",
  },
  {
    name: "James P.",
    country: "United Kingdom",
    rating: 5,
    tour: "Shore Excursion",
    text: "We were on a cruise and only had 6 hours in Tangier. Idrissi made every minute count. We saw the Kasbah, the Medina, the Grand Socco, enjoyed mint tea, and were back at the port with 30 minutes to spare. Flawless.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
          style={{ paddingTop: "4rem" }}
          aria-label="Hero section"
        >
          <Image
            src="/hero-homepage.jpg"
            alt="Aerial view of Tangier Morocco Medina and Mediterranean Sea at golden hour"
            fill
            priority
            className="object-cover object-center z-0"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(15,31,61,0.72) 0%, rgba(15,31,61,0.55) 50%, rgba(15,31,61,0.75) 100%)" }} />
          <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Award className="w-3.5 h-3.5" />
              Licensed & Certified Tour Guide — Morocco Ministry of Tourism
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Your Expert Private Guide
              <br />
              <span className="text-gold">in Tangier & Morocco</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Experience the real Morocco — its ancient Medinas, rich Jewish heritage, Blue Mountains, and desert landscapes — with Idrissi, a certified local guide trusted by 500+ travellers from around the world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-gold text-navy font-bold px-8 py-4 rounded text-lg hover:bg-gold-light transition-colors w-full sm:w-auto text-center"
              >
                Book Your Tour
              </Link>
              <a
                href="https://wa.me/212668702424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded text-lg hover:bg-[#20BA5A] transition-colors w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              {[
                { icon: <Star className="w-4 h-4 text-gold" />, text: "4.9★ (87 reviews)" },
                { icon: <Shield className="w-4 h-4 text-gold" />, text: "Licensed Guide" },
                { icon: <Users className="w-4 h-4 text-gold" />, text: "500+ Tours Led" },
                { icon: <Award className="w-4 h-4 text-gold" />, text: "15+ Years Experience" },
                { icon: <MapPin className="w-4 h-4 text-gold" />, text: "5 Languages" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {t.icon}
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="#tours" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] text-white/50 hover:text-gold transition-colors animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </section>

        {/* TOURS GRID */}
        <section id="tours" className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4 gold-divider">
                Private Tours & Experiences
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto mt-6">
                Every tour is fully private — no strangers, no rigid schedules. Your journey is tailored to your pace, your interests, and your story.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <Link
                  key={tour.href}
                  href={tour.href}
                  className="group bg-white border border-border-warm rounded overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="h-1.5 bg-gold" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{tour.icon}</span>
                      <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded-full">
                        {tour.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-muted-text text-sm leading-relaxed flex-1">{tour.desc}</p>
                    <div className="mt-4 flex items-center text-gold text-sm font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* JEWISH HERITAGE SPOTLIGHT */}
        <section className="py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  ✡️ Specialist Heritage Tours
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                  Jewish Heritage Tours in Morocco
                </h2>
                <p className="text-white/75 leading-relaxed mb-4">
                  Morocco has one of the world's oldest and most vibrant Jewish histories — 2,000 years of coexistence, culture, and community. The ancient Mellahs (Jewish quarters) of Tangier and Casablanca, the working synagogues, the royal cemeteries, and the Museum of Moroccan Judaism tell a story unlike any other.
                </p>
                <p className="text-white/75 leading-relaxed mb-8">
                  Idrissi speaks Hebrew and brings deep personal knowledge to these tours, guiding Jewish families from Israel, the US, France, and beyond to reconnect with their Moroccan roots.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/jewish-heritage-tours/tangier"
                    className="bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors text-center"
                  >
                    Tangier Jewish Heritage
                  </Link>
                  <Link
                    href="/jewish-heritage-tours/casablanca"
                    className="border border-gold/50 text-gold font-semibold px-6 py-3 rounded hover:bg-gold/10 transition-colors text-center"
                  >
                    Casablanca Jewish Heritage
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Tangier Mellah", desc: "The historic Jewish quarter of Tangier, dating to the 15th century." },
                  { title: "Beth El Synagogue", desc: "Casablanca's stunning 19th-century synagogue, still in use today." },
                  { title: "Jewish Cemeteries", desc: "Beautifully preserved cemeteries bearing witness to centuries of community life." },
                  { title: "Museum of Moroccan Judaism", desc: "The only museum of Jewish culture in the Arab world, in Casablanca." },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded p-4">
                    <h3 className="font-display text-base font-semibold text-gold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">Your Guide</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-6 gold-divider-left">
                  Meet Idrissi — Licensed Professional Guide
                </h2>
                <p className="text-muted-text leading-relaxed mb-4 mt-6">
                  With over 15 years of experience guiding visitors through Morocco's most captivating landscapes and cities, Idrissi brings rare expertise, genuine warmth, and an insider's knowledge that transforms a sightseeing trip into a life-changing experience.
                </p>
                <p className="text-muted-text leading-relaxed mb-6">
                  Licensed by the Moroccan Ministry of Tourism and fluent in five languages — English, French, Spanish, Arabic, and Hebrew — Idrissi is uniquely placed to serve travellers from across the world, including specialist Jewish heritage tours for families tracing their Moroccan roots.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["English", "Français", "Español", "العربية", "עברית"].map((lang) => (
                    <span key={lang} className="bg-navy/5 text-navy text-sm font-semibold px-3 py-1.5 rounded-full border border-navy/10">
                      {lang}
                    </span>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy/90 transition-colors"
                >
                  Full Bio & Credentials <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-ivory border border-border-warm rounded p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6 border-4 border-gold">
                    <span className="text-5xl">👨‍💼</span>
                  </div>
                  <div className="font-display text-2xl font-bold text-navy mb-1">Idrissi</div>
                  <div className="text-gold font-semibold text-sm mb-4">Licensed Tour Guide · Tangier, Morocco</div>
                  <div className="grid grid-cols-3 gap-4 text-center border-t border-border-warm pt-4">
                    {[
                      { val: "15+", label: "Years Experience" },
                      { val: "500+", label: "Tours Led" },
                      { val: "4.9★", label: "Average Rating" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-2xl font-bold text-navy">{s.val}</div>
                        <div className="text-xs text-muted-text">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Testimonials</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4 gold-divider">
                What Travellers Say
              </h2>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-navy font-bold text-lg">4.9 / 5</span>
                <span className="text-muted-text">based on 87 reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white border border-border-warm rounded p-6 flex flex-col">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote className="text-charcoal text-sm leading-relaxed flex-1 italic mb-4">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <div className="border-t border-border-warm pt-4">
                    <div className="font-semibold text-navy">{r.name}</div>
                    <div className="text-xs text-muted-text">{r.country} · {r.tour}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded hover:bg-navy hover:text-white transition-colors"
              >
                Read All Reviews <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">In the Field</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4 gold-divider">
                Morocco Through Our Lens
              </h2>
              <p className="text-muted-text max-w-xl mx-auto mt-6">
                Authentic photos from real tours — the places you&apos;ll visit, the moments you&apos;ll remember.
              </p>
            </div>
            <GalleryGrid featuredOnly={true} showFilter={false} limit={6} />
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded hover:bg-navy hover:text-white transition-colors"
              >
                View Full Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-gold font-semibold text-sm tracking-widest uppercase">Ready to Explore?</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-6 gold-divider-left">
                  Book Your Morocco Experience
                </h2>
                <p className="text-muted-text leading-relaxed mb-6 mt-6">
                  Every TangierTours experience is private, personalised, and fully flexible. Fill in the form and we'll get back to you within 2 hours with a tailored proposal.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Clock className="w-5 h-5 text-gold" />, title: "Reply Within 2 Hours", desc: "We respond to all enquiries promptly, 7 days a week." },
                    { icon: <Shield className="w-5 h-5 text-gold" />, title: "No Upfront Payment", desc: "Secure your tour with a simple message. Payment on the day." },
                    { icon: <Users className="w-5 h-5 text-gold" />, title: "Fully Private Tours", desc: "Your group only — no strangers, no compromises." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-gold/10 rounded p-2 shrink-0">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-navy">{item.title}</div>
                        <div className="text-sm text-muted-text">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-navy/5 border border-navy/10 rounded p-4">
                  <div className="font-semibold text-navy mb-1">Prefer WhatsApp?</div>
                  <p className="text-sm text-muted-text mb-3">Message Idrissi directly for the fastest response.</p>
                  <a
                    href="https://wa.me/212668702424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded hover:bg-[#20BA5A] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" /> Open WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy gold-divider">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="bg-white border border-border-warm rounded group">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-navy flex items-center justify-between list-none hover:text-gold transition-colors">
                    {faq.name}
                    <ChevronDown className="w-5 h-5 text-gold shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
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

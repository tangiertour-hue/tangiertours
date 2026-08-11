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
  title: "Tangier Private Tours & Licensed Tour Guide | TangierTours Morocco",
  description:
    "Private tours in Tangier, Morocco with licensed guide Abdelhamid Idrissi — over 15 years of experience. Shore excursions, Jewish heritage tours, Chefchaouen day trips & private transfers.",
  keywords:
    "Tangier private tour, Tangier tour guide, private tour guide Tangier Morocco, shore excursion Tangier, Jewish heritage Morocco, Chefchaouen day trip",
  openGraph: {
    title: "Tangier Private Tours & Licensed Tour Guide | TangierTours Morocco",
    description:
      "Private tours in Tangier with licensed guide Abdelhamid Idrissi. Over 15 years of professional experience. Shore excursions, Jewish heritage, Chefchaouen & private transfers.",
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
    streetAddress: "36 Ave Mly Ali Cherif",
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
  sameAs: [],
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
        text: "Tour prices are customised according to the itinerary, group size, duration and services included. Please contact us for a personalised quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tangier safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tangier is a welcoming city with a well-established tourism infrastructure. Travelling with a licensed local guide provides orientation, cultural context, and a more relaxed experience for first-time visitors.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does the tour guide speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idrissi speaks Arabic, English, French, and Spanish — making TangierTours uniquely accessible to travelers from around the world.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a tour from my cruise ship in Tangier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shore excursions are designed around your ship's scheduled departure. We meet you at the port and plan your itinerary with sufficient time for your return — always keeping your all-aboard time at the centre of the plan.",
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
    desc: "Arriving by cruise ship? We meet you at Tangier port and plan your excursion around your ship's departure schedule.",
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

// Reviews — replace with your genuine customer reviews from Google / TripAdvisor
const reviews: { name: string; country: string; rating: number; tour: string; text: string }[] = [];

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
                Private Tours in Tangier
                <br />
                <span className="text-gold">with a Licensed Local Guide</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                Private, personalised tours in Tangier and Morocco led by Abdelhamid Idrissi — a licensed professional guide with over 15 years of local experience.
              </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
               <Link
                 href="/contact"
                 className="bg-gold text-navy font-bold px-8 py-4 rounded text-lg hover:bg-gold-light transition-colors w-full sm:w-auto text-center"
               >
                 Request Your Private Tour
               </Link>
               <a
                 href="https://wa.me/212668702424"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded text-lg hover:bg-[#20BA5A] transition-colors w-full sm:w-auto"
               >
                 <Phone className="w-5 h-5" /> WhatsApp Us
               </a>
             </div>

             {/* Trust bar */}
             <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
               {[
                 { icon: <Shield className="w-4 h-4 text-gold" />, text: "Licensed by Morocco Ministry of Tourism" },
                 { icon: <Users className="w-4 h-4 text-gold" />, text: "Private & Personalised" },
                 { icon: <MapPin className="w-4 h-4 text-gold" />, text: "English · French · Spanish · Arabic" },
                 { icon: <Award className="w-4 h-4 text-gold" />, text: "Based in Tangier" },
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

        {/* WHY TRAVEL WITH US */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Promise</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4 gold-divider">
                Why Travel With Us?
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto mt-6">
                Every detail below reflects how we actually work — not marketing copy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎓", title: "Licensed Local Expertise", desc: "Travel with a professionally licensed Moroccan tourist guide with deep knowledge of Tangier and northern Morocco." },
                { icon: "👤", title: "Private & Personalised", desc: "Your itinerary is adapted to your interests, schedule, mobility and group size. No strangers. No compromises." },
                { icon: "🚗", title: "Professional Transportation", desc: "Private chauffeur-driven transportation is available for customized tours and excursions across Morocco." },
                { icon: "⚓", title: "Cruise-Safe Planning", desc: "Shore excursions are planned around your ship's arrival and departure schedule, with sufficient time for your return." },
                { icon: "🌍", title: "Multilingual Service", desc: "Tours can be arranged in English, French, Spanish and Arabic. We communicate in your language from first contact." },
                { icon: "🔍", title: "Local Knowledge", desc: "Discover Tangier beyond the standard tourist route — through authentic stories, history, culture and local perspectives." },
              ].map((item) => (
                <div key={item.title} className="bg-ivory border border-border-warm rounded p-6">
                  <span className="text-3xl block mb-4">{item.icon}</span>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                </div>
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
                  Idrissi brings deep personal knowledge to these tours, guiding Jewish families from Europe and beyond to reconnect with Morocco&apos;s extraordinary Jewish heritage.
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
                  Licensed by the Moroccan Ministry of Tourism and fluent in English, French, Spanish and Arabic, Idrissi is well placed to welcome travellers from around the world, including families seeking specialist Jewish heritage tours.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["English", "Français", "Español", "العربية"].map((lang) => (
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
                  <div className="font-display text-2xl font-bold text-navy mb-1">Abdelhamid Idrissi</div>
                  <div className="text-gold font-semibold text-sm mb-4">Licensed Tour Guide · Tangier, Morocco</div>
                  <div className="border-t border-border-warm pt-4 space-y-2">
                    {[
                      "Licensed by Morocco Ministry of Tourism",
                      "Private & personalised tours",
                      "English · French · Spanish · Arabic",
                    ].map((item) => (
                      <div key={item} className="text-xs text-muted-text">{item}</div>
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
              <p className="text-muted-text mt-6 max-w-xl mx-auto text-sm">
                Genuine reviews from travellers who have experienced TangierTours firsthand. Read more on Google and TripAdvisor.
              </p>
            </div>
            {reviews.length === 0 ? (
              <div className="text-center py-10 bg-white border border-border-warm rounded p-8 max-w-xl mx-auto">
                <p className="text-muted-text text-sm leading-relaxed">
                  Reviews coming soon — we display only genuine testimonials from verified travellers. Check our{" "}
                  <Link href="/reviews" className="text-gold hover:underline">reviews page</Link> for the latest feedback.
                </p>
              </div>
            ) : (
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
            )}
            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-3 rounded hover:bg-navy hover:text-white transition-colors"
              >
                Read Reviews <ArrowRight className="w-4 h-4" />
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

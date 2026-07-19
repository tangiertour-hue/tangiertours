import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, MapPin, Star, CheckCircle, ArrowRight, Camera, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "Chefchaouen Day Trip from Tangier — The Blue City Private Tour | TangierTours",
  description:
    "Private Chefchaouen day trip from Tangier. Journey 2.5h through the Rif Mountains to Morocco's iconic Blue City. Guided itinerary, lunch included. Book today.",
  keywords:
    "Chefchaouen day trip from Tangier, blue city Morocco tour, Chefchaouen private tour, Chefchaouen excursion, Tangier to Chefchaouen",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Chefchaouen Day Trip from Tangier — Blue City Private Tour",
  description:
    "Full-day private guided trip from Tangier to Chefchaouen — Morocco's enchanting Blue City in the Rif Mountains. Includes scenic drive, guided medina walk, lunch, and photography stops.",
  itinerary: [
    { "@type": "TouristAttraction", name: "Chefchaouen Blue Medina", description: "Walk the famous blue-painted streets of the old city" },
    { "@type": "TouristAttraction", name: "Uta el-Hammam Square", description: "The lively main square at the heart of Chefchaouen" },
    { "@type": "TouristAttraction", name: "Spanish Mosque Viewpoint", description: "Panoramic views over the blue city and Rif Mountains" },
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "TangierTours",
    url: "https://www.tangiertours.ma",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "41",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is the drive from Tangier to Chefchaouen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The drive from Tangier to Chefchaouen takes approximately 2.5 hours each way along a scenic mountain road through the Rif Mountains. The journey itself is beautiful, passing terraced hillsides, cedar forests, and Berber villages.",
      },
    },
    {
      "@type": "Question",
      name: "Is lunch included in the Chefchaouen day trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The tour includes a traditional Moroccan lunch at a recommended local restaurant in Chefchaouen — typically a terrace with stunning views over the city. Vegetarian options are always available.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year to visit Chefchaouen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring (March–May) and autumn (September–November) offer the most pleasant temperatures and the best light for photography. Summer can be warm but the mountain altitude keeps it cooler than coastal Morocco. Winter is quieter and the city is often beautifully misty.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine Chefchaouen with a Tangier tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chefchaouen is best enjoyed as a dedicated full day from Tangier — there's too much to see to rush. However, we can arrange multi-day itineraries that include both Tangier and a night in Chefchaouen for a deeper experience.",
      },
    },
  ],
};

const itinerary = [
  { time: "08:00", title: "Hotel Pickup in Tangier", desc: "Your private vehicle collects you from your Tangier hotel. Begin the scenic drive south through the hills." },
  { time: "10:30", title: "Arrive Chefchaouen", desc: "Enter the Blue City. First impressions of the vivid blue-washed medina as we begin our walking tour." },
  { time: "11:30", title: "Uta el-Hammam Square & Souks", desc: "Explore the lively main square, browse local artisan stalls, and visit the historic kasbah garden." },
  { time: "13:00", title: "Traditional Moroccan Lunch", desc: "Sit down to a relaxed Moroccan meal at a terrace restaurant — tagine, couscous, and fresh Rif mountain herbs." },
  { time: "14:30", title: "Spanish Mosque Viewpoint", desc: "Climb to the hilltop Spanish mosque for the most iconic panoramic view of Chefchaouen and the Rif Mountains." },
  { time: "16:00", title: "Blue Alleyways & Souvenir Shopping", desc: "Lose yourself in the hidden lanes, admire hand-painted staircases, and pick out handcrafted souvenirs." },
  { time: "17:00", title: "Depart for Tangier", desc: "Begin the return mountain drive as the afternoon light turns golden over the Rif." },
  { time: "19:30", title: "Return to Tangier Hotel", desc: "Drop-off at your Tangier hotel or a location of your choosing. Day complete." },
];

const photoSpots = [
  {
    icon: <Camera className="w-5 h-5 text-gold" />,
    title: "Ras el-Maa Waterfall Lane",
    desc: "A stream-fed alley at the edge of the medina where laundry hangs between electric-blue walls — one of the most photographed spots in Morocco.",
  },
  {
    icon: <Sun className="w-5 h-5 text-gold" />,
    title: "Spanish Mosque at Sunrise",
    desc: "The hilltop mosque looks down over the entire Blue City. Come early and you'll have the stairway to yourself in the golden morning light.",
  },
  {
    icon: <Camera className="w-5 h-5 text-gold" />,
    title: "Rue Targhi Blue Staircase",
    desc: "The flower-decorated staircase on Rue Targhi is perhaps the single most Instagrammed alleyway in the world — and for good reason.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-gold" />,
    title: "Uta el-Hammam at Dusk",
    desc: "The main square softens beautifully in late afternoon light. The Kasbah's ochre tower against the blue medina walls makes for a perfect composition.",
  },
];

const included = [
  "Private licensed guide for the full day",
  "Private air-conditioned vehicle (Tangier → Chefchaouen → Tangier)",
  "Guided walking tour of the Blue Medina",
  "Traditional Moroccan lunch at a terrace restaurant",
  "Hotel pickup and drop-off in Tangier",
  "Best photography spots guided tour",
];

const notIncluded = [
  "Entry fees for museums or kasbah (optional, payable locally)",
  "Personal shopping and souvenirs",
  "Drinks beyond provided water",
  "Gratuity (appreciated but never obligatory)",
];

const testimonials = [
  {
    name: "Sophie L.",
    country: "France",
    text: "Un guide exceptionnel! Idrissi made Chefchaouen feel like a personal discovery rather than a tourist excursion. He knew exactly which lanes to take for the best light at noon, and the lunch he chose was the best meal of our entire Morocco trip.",
  },
  {
    name: "Tom & Jessica B.",
    country: "Canada",
    text: "We'd seen Chefchaouen in a thousand Instagram photos and worried reality wouldn't match. It exceeded everything. Idrissi took us down alleyways we would never have found alone and even chatted with local artists for us. An unforgettable day.",
  },
  {
    name: "Priya N.",
    country: "United States",
    text: "As a photographer, this day trip was everything I could have hoped for. Idrissi knew exactly when and where the light fell perfectly on every blue wall and staircase. I came home with hundreds of incredible shots. Worth every dollar.",
  },
];

const breadcrumbItems = [
  { label: "Tours", href: "/tours" },
  { label: "Chefchaouen Day Trip" },
];

export default function ChefchaouenPage() {
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
          <Image src="/hero-chefchaouen.jpg" alt="Chefchaouen blue city Morocco winding blue alleyways with Rif Mountains backdrop" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,rgba(15,31,61,0.70) 0%,rgba(28,45,94,0.58) 50%,rgba(12,26,58,0.78) 100%)"}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Star className="w-3.5 h-3.5" /> 4.9★ Rated · Top-Rated Morocco Day Trip
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Chefchaouen Day Trip from Tangier —{" "}
                <span className="text-gold">Experience the Enchanting Blue City</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Nestled in Morocco's Rif Mountains, Chefchaouen is one of the world's most visually stunning cities — a labyrinth of cobalt-blue alleys, hand-painted staircases, and centuries-old medina life. We drive you there privately in 2.5 hours and guide you through every photogenic corner.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "Full Day (approx. 12 hours)" },
                  { icon: <MapPin className="w-4 h-4" />, text: "Pickup: Tangier Hotel" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Lunch Included" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-sm">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>
              <a href="#book" className="inline-block bg-gold text-navy font-bold px-8 py-3.5 rounded hover:opacity-90 transition-opacity">
                Book This Trip
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-14 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">
              Morocco's Most Photogenic City — Just 2.5 Hours from Tangier
            </h2>
            <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
              <p>
                Chefchaouen — known simply as "the Blue City" — sits at 600 metres above sea level in the Rif Mountains, its medina washed in countless shades of cobalt, periwinkle, and sky blue. Founded in 1471, the city's famously painted walls were traditionally meant to represent the sky and heavens, and today they create an otherworldly atmosphere found nowhere else on earth.
              </p>
              <p>
                From Tangier, the journey takes just 2.5 hours through one of Morocco's most dramatic landscapes: winding mountain roads, cedar forests roamed by Barbary macaques, and Berber villages clinging to terracotta hillsides. Your private air-conditioned vehicle and licensed guide make the entire day seamless, from hotel pickup to the last blue alleyway.
              </p>
            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              Full Day Itinerary
            </h2>
            <div className="relative">
              <div className="absolute left-14 top-0 bottom-0 w-0.5 bg-gold/20 hidden sm:block" />
              <div className="space-y-6">
                {itinerary.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="shrink-0 w-16 sm:w-28 text-right">
                      <span className="text-gold font-bold text-sm sm:text-base">{item.time}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[1.35rem] top-1 w-3 h-3 rounded-full bg-gold hidden sm:block" />
                    </div>
                    <div className="bg-ivory border border-border-warm rounded p-4 flex-1">
                      <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO SPOTS */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-center gold-divider mb-12">
              Best Photography Spots in Chefchaouen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {photoSpots.map((spot, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded p-5">
                  <div className="bg-gold/20 rounded p-2 w-fit mb-3">{spot.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{spot.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{spot.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white/5 border border-white/10 rounded p-5 max-w-2xl mx-auto text-center">
              <Sun className="w-6 h-6 text-gold mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Best Time for Photos</h3>
              <p className="text-white/60 text-sm">
                The most magical light falls in the early morning (before 10am) and late afternoon (after 4pm). Spring and autumn also offer soft golden-hour colour that brings out the richest blues. Our itinerary is timed to capture both.
              </p>
            </div>
          </div>
        </section>

        {/* INCLUDED / EXCLUDED */}
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-border-warm rounded p-6">
                <h3 className="font-display text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" /> What&apos;s Included
                </h3>
                <ul className="space-y-2.5">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-border-warm rounded p-6">
                <h3 className="font-display text-xl font-bold text-navy mb-4">Not Included</h3>
                <ul className="space-y-2.5">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-text">
                      <span className="w-4 h-4 shrink-0 mt-0.5 text-center text-gold font-bold">–</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              What Travellers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-ivory border border-border-warm rounded p-6 flex flex-col">
                  <div className="flex mb-3">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}
                  </div>
                  <blockquote className="text-charcoal text-sm leading-relaxed flex-1 italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="border-t border-border-warm pt-4">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-text">{t.country} · Chefchaouen Day Trip</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-ivory">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="bg-white border border-border-warm rounded group">
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

        {/* RELATED */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-xl font-bold text-navy mb-6">Related Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { title: "Tangier Private Tours", href: "/tours/tangier-private-tours", desc: "Explore Tangier's Medina, Kasbah, and Cape Spartel." },
                { title: "More About Chefchaouen", href: "/destinations/chefchaouen", desc: "History, travel tips, and what to expect in the Blue City." },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center gap-4 bg-ivory border border-border-warm rounded p-4 hover:border-gold transition-colors">
                  <div className="flex-1">
                    <div className="font-semibold text-navy group-hover:text-gold transition-colors">{link.title}</div>
                    <div className="text-sm text-muted-text">{link.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="book" className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Book Your Chefchaouen Day Trip
              </h2>
              <p className="text-muted-text mt-3 max-w-xl mx-auto">
                We reply within 2 hours. No upfront payment required — secure your date with a message.
              </p>
            </div>
            <BookingForm tourOptions={["Chefchaouen Day Trip from Tangier", "Chefchaouen + Tangier Private Tour (2 days)"]} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

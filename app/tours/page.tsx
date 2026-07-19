import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Clock, Users, Shield, CheckCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Tours in Morocco — TangierTours | Licensed Guide Idrissi",
  description:
    "Discover Morocco private tours tailored to you. Expert licensed guide, private itineraries, no strangers. Tours in Morocco from Tangier: medina, coast, mountains, transfers.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  name: "TangierTours",
  description: "Private guided tours in Morocco departing from Tangier",
  url: "https://www.tangiertours.ma/tours",
  address: { "@type": "PostalAddress", addressLocality: "Tangier", addressCountry: "MA" },
};

const tours = [
  {
    icon: MapPin,
    title: "Tangier Private Tours",
    description:
      "Half-day & full-day private exploration of Tangier's soul — the ancient Medina, the Kasbah, Cape Spartel lighthouse, and the mythical Caves of Hercules. Your pace, your interests.",
    href: "/tours/tangier-private-tours",
  },
  {
    icon: Shield,
    title: "Tangier Shore Excursions",
    description:
      "Arriving by cruise? Our private port tours are built around your schedule with guaranteed return times — so you never miss embarkation while still seeing everything that matters.",
    href: "/tours/tangier-shore-excursions",
  },
  {
    icon: Star,
    title: "Chefchaouen Day Trip",
    description:
      "Escape to Morocco's legendary Blue City, just 2.5 hours from Tangier. Wander cobalt-washed alleyways and mountain scenery on a private full-day excursion.",
    href: "/tours/chefchaouen-day-trip-from-tangier",
  },
  {
    icon: Clock,
    title: "Camel Ride Experience",
    description:
      "Ride along the Atlantic dunes at Cape Spartel, just outside Tangier. A memorable camel experience that takes less than half a day — perfect as an add-on or standalone trip.",
    href: "/tours/camel-ride-morocco",
  },
  {
    icon: ArrowRight,
    title: "Private Morocco Transfers",
    description:
      "Seamless airport pickups, hotel drop-offs, and city-to-city transfers across Morocco. Arrive relaxed with a licensed driver who knows every route.",
    href: "/tours/private-morocco-transfers",
  },
];

const whyPrivate = [
  {
    icon: Users,
    title: "Personalised Itinerary",
    body: "Every route is built around your interests, energy level, and available time — not a bus timetable.",
  },
  {
    icon: Shield,
    title: "No Strangers, No Compromise",
    body: "Your group only. No waiting for latecomers or listening to commentary meant for thirty different people.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    body: "Start when you're ready, linger where you love, skip what doesn't interest you. Full control.",
  },
  {
    icon: Star,
    title: "Deep Local Expertise",
    body: "Licensed guide Idrissi was born and raised in Tangier. His knowledge goes far beyond any guidebook.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book a private tour in Morocco?",
    a: "We recommend booking at least 48 hours ahead to confirm availability and tailor the itinerary to your needs. Last-minute bookings are sometimes possible — just send us a WhatsApp message.",
  },
  {
    q: "Are all TangierTours guides officially licensed?",
    a: "Yes. Your guide Idrissi holds an official Moroccan Ministry of Tourism guide licence and has over a decade of experience leading private tours throughout northern Morocco.",
  },
  {
    q: "Can I combine multiple tours in one day?",
    a: "Absolutely. Many guests combine a Tangier morning tour with a camel ride at Cape Spartel in the afternoon, for example. We'll design a seamless full-day experience for you.",
  },
];

export default function ToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 text-center overflow-hidden" style={{minHeight:"420px"}}>
          <Image src="/hero-tours.jpg" alt="Licensed Moroccan tour guide leading tourists through Tangier Medina" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(15,31,61,0.70) 0%,rgba(15,31,61,0.60) 60%,rgba(15,31,61,0.80) 100%)"}} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Tours" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Private Tours in Morocco —<br />Tailored Experiences with a Licensed Guide
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mt-6">
              At TangierTours, we believe Morocco is best discovered at your own pace, with someone
              who truly knows it. Every tour is entirely private — just your group and your guide,
              Idrissi, a licensed Moroccan expert born in Tangier. We craft itineraries around your
              curiosity, not a coach schedule. Whether you have four hours or four days, we design
              the experience you actually want.
            </p>
          </div>
        </section>

        {/* Tour Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Our Tours</h2>
          <p className="text-center text-gray-500 mt-6 mb-12">
            Five distinct experiences — each private, each unforgettable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => {
              const Icon = tour.icon;
              return (
                <div
                  key={tour.href}
                  className="bg-white rounded-lg border border-[var(--border-warm)] p-6 flex flex-col hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">{tour.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{tour.description}</p>
                  <Link
                    href={tour.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:text-navy transition-colors"
                  >
                    Book This Tour <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Private */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">
              Why Private Over Group Tours?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {whyPrivate.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="max-w-4xl mx-auto px-4 py-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/jewish-heritage-tours"
            className="flex-1 border border-[var(--gold)] rounded-lg p-5 text-center hover:bg-[var(--gold)] hover:text-white transition-colors group"
          >
            <CheckCircle className="w-6 h-6 text-[var(--gold)] group-hover:text-white mx-auto mb-2" />
            <span className="font-display text-navy group-hover:text-white font-semibold block">Jewish Heritage Tours</span>
            <span className="text-sm text-gray-500 group-hover:text-white/80">Tangier's rich Sephardic history</span>
          </Link>
          <Link
            href="/luxury-morocco-tours"
            className="flex-1 border border-[var(--gold)] rounded-lg p-5 text-center hover:bg-[var(--gold)] hover:text-white transition-colors group"
          >
            <Star className="w-6 h-6 text-[var(--gold)] group-hover:text-white mx-auto mb-2" />
            <span className="font-display text-navy group-hover:text-white font-semibold block">Luxury Morocco Tours</span>
            <span className="text-sm text-gray-500 group-hover:text-white/80">Premium private experiences</span>
          </Link>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="font-display text-3xl text-navy mb-2 text-center gold-divider">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-[var(--border-warm)] rounded-lg overflow-hidden"
              >
                <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none font-semibold text-navy hover:bg-[var(--ivory)]">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-[var(--gold)] rotate-90 group-open:rotate-[270deg] transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-[var(--border-warm)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="max-w-2xl mx-auto px-4 pb-20">
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book Your Private Tour</h2>
          <BookingForm
            tourOptions={[
              "Tangier Private Tours",
              "Tangier Shore Excursions",
              "Chefchaouen Day Trip",
              "Camel Ride Experience",
              "Private Morocco Transfers",
            ]}
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

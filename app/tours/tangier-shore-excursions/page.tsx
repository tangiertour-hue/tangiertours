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
  title: "Shore Excursions Morocco — Private Tours, Transfers & Cruise Port Services | TangierTours",
  description:
    "Private shore excursions, transfers and tours in Morocco since 1998. Tangier, Casablanca, Ceuta and Agadir. Professional multilingual driver-guides, Mercedes-Benz vehicles, personalized service.",
  keywords:
    "Tangier shore excursion, Morocco shore excursion, Tangier cruise port tour, Casablanca shore excursion, private Morocco tour cruise, Ceuta Agadir shore excursion",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Shore Excursions Morocco — Private Tours, Transfers & Cruise Port Services",
  description:
    "Private shore excursions, tours and transfers in Morocco since 1998. Operating in Tangier, Casablanca, Ceuta and Agadir with professional multilingual driver-guides and modern vehicles.",
  touristType: "cruise passengers",
  provider: {
    "@type": "LocalBusiness",
    name: "TangierTours",
    url: "https://www.tangiertours.ma",
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

// Excursion durations — no prices
const excursions = [
  {
    duration: "Short Excursion",
    icon: "⚓",
    hours: "Approx. 3 hours",
    highlights: [
      "Grand Socco (Great Market Square)",
      "Tangier Medina souks & spice market",
      "Kasbah walls & panoramic viewpoint",
      "Traditional mint tea ceremony",
      "Return to port",
    ],
  },
  {
    duration: "Classic Excursion",
    icon: "🌊",
    hours: "Approx. 5 hours",
    highlights: [
      "Everything in the Short excursion",
      "Café Hafa — legendary ocean-terrace café",
      "Local artisan workshops & crafts",
      "Relaxed, unhurried pace throughout",
    ],
  },
  {
    duration: "Full-Day Excursion",
    icon: "🏔️",
    hours: "Approx. 7 hours",
    highlights: [
      "Everything in the Classic excursion",
      "Cape Spartel lighthouse (Africa's northwest tip)",
      "Caves of Hercules (ancient sea caves)",
      "Spartel Bay — Atlantic coastline views",
      "Local lunch",
    ],
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
    title: "Cruise-Safe Planning",
    desc: "Your itinerary is planned around your ship's departure schedule, with sufficient time allocated for your return to port.",
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

// Reviews — add your genuine TripAdvisor/Google reviews here
const testimonials: { name: string; country: string; ship: string; text: string }[] = [];

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
                <Shield className="w-3.5 h-3.5" /> Shore Excursions Planned Around Your Ship&apos;s Schedule
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Private Shore Excursions<br />
                <span className="text-gold">Tours &amp; Transfers in Morocco</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Operating since 1998 — professional, reliable and personalised private tours, transfers and shore excursions in Tangier, Casablanca, Ceuta and Agadir, with experienced multilingual driver-guides and modern vehicles.
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

        {/* ABOUT THE SERVICE */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">
                  Private Tours, Transfers &amp; Shore Excursions in Morocco
                </h2>
                <div className="space-y-5 text-muted-text leading-relaxed mt-6">
                  <p>TangierTours has been operating in the private tours and transfers business since 1998, providing professional, reliable and personalised services with experienced, skilled and multilingual driver-guides.</p>

                  {/* Two photos between paragraphs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative h-44 rounded-lg overflow-hidden border border-border-warm shadow-sm">
                      <Image
                        src="/shore-cruise-port.jpg"
                        alt="Cruise passengers disembarking at port — shore excursion Morocco TangierTours"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width:1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative h-44 rounded-lg overflow-hidden border border-border-warm shadow-sm">
                      <Image
                        src="/shore-tangier-port.jpg"
                        alt="Cruise ship docked at Tangier port with mosque and blue Mediterranean sea"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width:1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  <p>Enjoy the convenience of having one trusted provider for all your travel needs — private tours, airport and hotel transfers, and shore excursions. We operate in <strong className="text-navy">Tangier, Casablanca, Ceuta</strong> and <strong className="text-navy">Agadir</strong>, providing personalised experiences for individuals, couples, families and private groups.</p>
                  <p>Instead of sending multiple emails to different providers, let us take care of everything with professional service and personalised attention.</p>
                </div>
                <div className="mt-6 bg-gold/10 border border-gold/30 rounded p-4">
                  <div className="font-semibold text-navy mb-1 text-sm">Fast Response &amp; Confirmation</div>
                  <p className="text-sm text-muted-text">We aim to answer your questions within one hour and provide prompt confirmation once all details have been agreed.</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-navy mb-4">Our Service Includes</h3>
                {[
                  "Professional and experienced multilingual driver-guides",
                  "Comfortable, modern Mercedes-Benz or similar vehicles",
                  "Reliable transportation and personalised service",
                  "Immediate vehicle replacement in the unlikely event of a breakdown",
                  "Flexible and customisable private tours",
                  "Convenient pickup directly at the cruise ship",
                  "Vehicle access and parking close to major attractions where permitted",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-ivory border border-border-warm rounded p-3">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY PRIVATE */}
        <section className="py-14 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold mb-4 gold-divider">Why Choose a Private Tour?</h2>
            <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mt-6 mb-6">
              If you want to avoid travelling with 40 or more people on a large cruise bus, enjoy a first-class private service and travel at your own pace — TangierTours is the right choice.
            </p>
            <p className="text-white/75 leading-relaxed max-w-3xl mx-auto mb-8">
              Customise your itinerary, avoid unnecessary long walks, and enjoy the convenience of having your private vehicle pick you up directly in front of your ship. Our vehicles can park close to many attractions where access is permitted, allowing you to make the most of your time and see more while travelling in comfort.
            </p>
            <p className="text-gold font-semibold mb-6">Whether you are visiting Tangier, Casablanca, Ceuta or Agadir — we are here to make your experience comfortable, flexible and memorable.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20would%20like%20to%20enquire%20about%20a%20shore%20excursion."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3 rounded hover:bg-[#20BA5A] transition">
                WhatsApp — Send Your Enquiry
              </a>
              <a href="#book" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">
                Request Your Excursion
              </a>
            </div>
          </div>
        </section>

        {/* EXCURSION OPTIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy gold-divider mb-2">
                Excursion Options
              </h2>
              <p className="text-muted-text mt-6 max-w-2xl mx-auto">
                All excursions are fully private. The duration and itinerary are adapted to your ship&apos;s schedule, your interests and your group.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {excursions.map((ex, i) => (
                <div key={i} className="bg-ivory border border-border-warm rounded overflow-hidden flex flex-col">
                  <div className="h-1 bg-gold" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-3xl mb-3">{ex.icon}</div>
                    <h3 className="font-display text-xl font-bold text-navy mb-1">{ex.duration}</h3>
                    <p className="text-xs text-gold font-semibold mb-4">{ex.hours}</p>
                    <ul className="space-y-2.5 flex-1">
                      {ex.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            {/* Personalized Pricing */}
            <div className="bg-navy rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-white mb-3">Personalized Pricing</h3>
              <p className="text-white/75 leading-relaxed mb-2">
                Every journey is different. Our shore excursions are individually priced according to your schedule, group size, itinerary and preferences.
              </p>
              <p className="text-gold font-semibold mb-6">Contact us for a personalized quotation.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20would%20like%20a%20quote%20for%20a%20Tangier%20shore%20excursion."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded hover:bg-[#20BA5A] transition">
                  <ArrowRight className="w-4 h-4" /> WhatsApp for a Quote
                </a>
                <a href="#book"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded hover:opacity-90 transition">
                  Request Your Excursion
                </a>
              </div>
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
        {testimonials.length > 0 && (
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
        )}

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

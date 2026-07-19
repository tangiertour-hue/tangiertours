import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, MapPin, Star, CheckCircle, ArrowRight, Sun, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Camel Ride Experience in Morocco — Tangier | TangierTours",
  description:
    "Book a camel ride experience near Tangier, Morocco. Ride along Atlantic sand dunes at Cape Spartel — 14km from the city. Ethical operators, stunning ocean views.",
  keywords:
    "camel ride Morocco, Morocco camel experience, Tangier camel ride, camel riding Cape Spartel, camels near Tangier Morocco",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Camel Ride Experience near Tangier — Cape Spartel & Caves of Hercules",
  description:
    "Guided camel ride experience at Cape Spartel sand dunes near Tangier. 30–45 minutes along Atlantic dunes with panoramic ocean views, just 14km from Tangier city centre.",
  provider: {
    "@type": "LocalBusiness",
    name: "TangierTours",
    url: "https://www.tangiertours.ma",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "28",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is camel riding ethical in Morocco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ethical camel riding depends entirely on the operator. TangierTours only works with a carefully vetted partner site near Cape Spartel where camels are well-fed, given adequate rest, and never overworked. We limit daily rides per animal, rides are short (30–45 min), and handlers are experienced and caring. We encourage you to ask these questions wherever you book — and avoid operations where animals appear thin, distressed, or sore.",
      },
    },
    {
      "@type": "Question",
      name: "Where can you ride camels near Tangier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best camel ride experience near Tangier is at Cape Spartel, approximately 14km from the city centre. The site sits alongside the Caves of Hercules near the Atlantic sand dunes — where the dunes meet the ocean at the northwestern tip of Africa. It's a dramatic and beautiful setting.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the camel ride last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The camel ride itself lasts 30 to 45 minutes, depending on your preference and the chosen route. Combined with travel time from Tangier (approximately 20 minutes each way), this makes for a half-day activity — typically combined with a visit to the Caves of Hercules and Cape Spartel lighthouse.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need riding experience to go on a camel ride in Morocco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No experience is needed. Camels are led by experienced handlers throughout the ride, and the pace is gentle and relaxed. Children (with parental supervision), seniors, and complete beginners all enjoy it comfortably. Our guides will brief you on how to mount and dismount safely.",
      },
    },
  ],
};

const whatToExpect = [
  {
    icon: <Clock className="w-5 h-5 text-gold" />,
    title: "30–45 Minute Ride",
    desc: "A leisurely route along the Atlantic sand dunes, led by an experienced handler at a gentle, relaxed pace.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-gold" />,
    title: "Stunning Landscape",
    desc: "Where Saharan-style sand dunes meet the Atlantic Ocean — a truly unique geographical experience at Africa's northwest tip.",
  },
  {
    icon: <Shield className="w-5 h-5 text-gold" />,
    title: "Expert Handlers",
    desc: "Every camel is accompanied by a dedicated handler. Safety instructions given before mounting. Beginners always welcome.",
  },
  {
    icon: <Sun className="w-5 h-5 text-gold" />,
    title: "Sunrise & Golden Hour",
    desc: "The most magical rides are at sunrise or during the late-afternoon golden hour, when the dunes glow amber and the Atlantic turns silver.",
  },
];

const wearTips = [
  "Comfortable, flexible trousers or shorts (avoid very tight clothing)",
  "Closed-toe shoes or trainers — sand can be hot",
  "High-SPF sunscreen and lip balm",
  "Sunglasses and a light hat or scarf",
  "A small amount of cash for gratuity (not obligatory)",
  "Your camera — the views are extraordinary",
];

const testimonials = [
  {
    name: "Ben & Emma K.",
    country: "United Kingdom",
    text: "We combined the camel ride with the Caves of Hercules visit and it was honestly one of the most memorable mornings of our whole Morocco trip. The dunes looking out over the Atlantic are breathtakingly beautiful. Idrissi organised everything seamlessly.",
  },
  {
    name: "Yuki M.",
    country: "Japan",
    text: "I was nervous about camels, but the handlers were so gentle and patient. The golden-hour light on the sand was absolutely magical for photographs. I could not believe we were only 20 minutes from Tangier city. Do not miss this.",
  },
];

const combineTours = [
  {
    title: "Tangier Private Tour",
    href: "/tours/tangier-private-tours",
    desc: "Pair your camel ride with a full Tangier city tour — Medina, Kasbah, Grand Socco, and Café Hafa.",
    tag: "Popular Combo",
  },
  {
    title: "Chefchaouen Day Trip",
    href: "/tours/chefchaouen-day-trip-from-tangier",
    desc: "Add a day trip to Morocco's iconic Blue City in the Rif Mountains.",
    tag: "Top Rated",
  },
];

const breadcrumbItems = [
  { label: "Tours", href: "/tours" },
  { label: "Camel Ride Experience" },
];

export default function CamelRidePage() {
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
          <Image src="/hero-camel.jpg" alt="Camel ride at sunset on Atlantic sand dunes near Tangier Morocco with ocean in background" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,rgba(15,31,61,0.65) 0%,rgba(42,31,15,0.55) 60%,rgba(61,42,12,0.75) 100%)"}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <MapPin className="w-3.5 h-3.5" /> Cape Spartel · 14km from Tangier City Centre
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Camel Ride Experience in Morocco —{" "}
                <span className="text-gold">An Unforgettable Encounter Near Tangier</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                At the northwestern tip of Africa, where Atlantic sand dunes meet the ocean, ride a camel through one of Morocco's most dramatic and photogenic landscapes. Just 14km from Tangier — no overnight desert required.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "30–45 min ride" },
                  { icon: <MapPin className="w-4 h-4" />, text: "Cape Spartel, Tangier" },
                  { icon: <CheckCircle className="w-4 h-4" />, text: "Ethical operators only" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-sm">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>
              <a href="#book" className="inline-block bg-gold text-navy font-bold px-8 py-3.5 rounded hover:opacity-90 transition-opacity">
                Book Camel Ride
              </a>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-14 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4 gold-divider-left">
              Where the Dunes Meet the Atlantic
            </h2>
            <div className="mt-6 space-y-4 text-muted-text leading-relaxed">
              <p>
                Most people associate camel rides with the Sahara — but Morocco's northwest coast offers something equally spectacular and far more accessible. At Cape Spartel, just 14 kilometres from Tangier city centre, wind-sculpted Atlantic sand dunes rise between ancient argan trees and the crashing ocean. This is geographically unique: the most northwesterly point of the African continent, where the Mediterranean meets the Atlantic.
              </p>
              <p>
                The camel experience takes place alongside the famous Caves of Hercules — mythological sea caves carved partly by the ocean and partly by ancient Berber stonecutters. Riding a camel through this landscape, with waves breaking on one side and forested dunes on the other, is genuinely unlike anywhere else in the world.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatToExpect.map((item, i) => (
                <div key={i} className="bg-ivory border border-border-warm rounded p-6">
                  <div className="bg-gold/10 rounded p-2 w-fit mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEST TIME */}
        <section className="py-14 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sun className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Best Time for Your Camel Ride
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
              For the most beautiful experience, choose <strong className="text-gold">sunrise (6:30–8:00am)</strong> or <strong className="text-gold">late afternoon golden hour (4:30–6:00pm)</strong>. The low Atlantic light turns the sand a rich amber and creates extraordinary photographs. Midday rides are also possible but the light is harsher. The experience is rewarding year-round, with spring and autumn offering the most pleasant temperatures.
            </p>
          </div>
        </section>

        {/* WHAT TO WEAR */}
        <section className="py-14 bg-ivory">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-6 text-center">
              What to Wear & Bring
            </h2>
            <div className="bg-white border border-border-warm rounded p-6">
              <ul className="space-y-3">
                {wearTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ETHICS NOTE */}
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 bg-gold/10 border border-gold/30 rounded p-5">
              <Shield className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-navy mb-1">Our Ethical Commitment</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  All camels at our partner site are well-cared for and not overworked — we only work with ethical operators. Rides are limited to 30–45 minutes per animal per session, animals are fed and rested between groups, and our handlers treat their camels with evident affection and care. We have personally vetted this operator and visit regularly to maintain standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMBINE WITH */}
        <section className="py-14 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">
              Combine With Your Tour
            </h2>
            <p className="text-muted-text mb-8 max-w-xl">
              The camel ride pairs beautifully with a Tangier city tour (Cape Spartel is on the way back) or as part of a multi-day Morocco adventure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
              {combineTours.map((tour, i) => (
                <Link key={i} href={tour.href} className="group bg-white border border-border-warm rounded p-5 hover:border-gold transition-colors flex flex-col">
                  <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-full w-fit mb-3">{tour.tag}</span>
                  <h3 className="font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors">{tour.title}</h3>
                  <p className="text-sm text-muted-text flex-1">{tour.desc}</p>
                  <div className="mt-3 flex items-center text-gold text-sm font-semibold">
                    View Tour <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy text-center gold-divider mb-12">
              What Travellers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                    <div className="text-xs text-muted-text">{t.country} · Camel Ride Experience</div>
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

        {/* BOOKING FORM */}
        <section id="book" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Book Your Camel Ride Experience
              </h2>
              <p className="text-muted-text mt-3 max-w-xl mx-auto">
                We reply within 2 hours. Can also be combined with a Tangier city tour — mention it in your message.
              </p>
            </div>
            <BookingForm
              tourOptions={[
                "Camel Ride Experience (Cape Spartel)",
                "Camel Ride + Caves of Hercules",
                "Camel Ride + Tangier City Tour (combo)",
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

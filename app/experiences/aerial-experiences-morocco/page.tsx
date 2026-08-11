import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Aerial Experiences Morocco — Helicopter, Balloon & Private Air Transfers | TangierTours",
  description:
    "Discover Morocco from above with a private aerial experience — hot-air balloon over the Sahara, helicopter flights above the Atlas Mountains, or private air transfers. Tailor-made itineraries on request.",
  keywords:
    "aerial experiences Morocco, hot air balloon Morocco, helicopter tours Morocco, Sahara aerial experience, Atlas Mountains aerial, private air transfers Morocco, Morocco aerial tours, Merzouga balloon",
};

const experienceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Aerial Experiences Morocco",
  description: "Tailor-made aerial experiences in Morocco — hot-air balloon, helicopter flights and private air transfers above the Sahara, Atlas Mountains and beyond.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/experiences/aerial-experiences-morocco",
  touristType: ["Luxury Tourism", "Adventure Tourism", "Tailor-made Travel"],
};

// ── data ─────────────────────────────────────────────────
const experiences = [
  {
    icon: "🎈",
    title: "Hot-Air Balloon Experience",
    where: "Merzouga Sahara · subject to availability",
    desc: "Float above the golden dunes of the Sahara at sunrise — an experience unlike any other in Morocco. Depending on availability, a hot-air balloon flight over the Erg Chebbi dunes of Merzouga can offer extraordinary views across one of the world's most iconic desert landscapes.",
  },
  {
    icon: "🚁",
    title: "Private Helicopter Flight",
    where: "Atlas Mountains · Sahara · coastal Morocco · subject to confirmation",
    desc: "Discover Morocco's most remote and dramatic landscapes from above. Depending on availability and your chosen itinerary, a private helicopter flight can offer a unique perspective over the High Atlas peaks, the Sahara, or Morocco's Atlantic coastline.",
  },
  {
    icon: "✈️",
    title: "Light Aircraft Journey",
    where: "Available destinations on request",
    desc: "For travellers seeking a more private and flexible aerial experience, a light aircraft journey may be arranged depending on availability. This can offer an exceptional way to reach remote destinations or simply appreciate Morocco's remarkable geographical variety from altitude.",
  },
];

const highlights = [
  "Merzouga Sahara — vast golden dunes at sunrise",
  "High Atlas Mountains — dramatic peaks and valleys",
  "Morocco's Atlantic coastline — ocean and landscape",
  "Remote oases and kasbahs from above",
  "Private 4x4 vehicle available to meet you upon landing",
  "Incorporated into a tailor-made Morocco itinerary",
];

export default function AerialExperiencesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <HeroSection />
        <IntroSection />
        <ExperiencesSection />
        <HelicopterSection />
        <HighlightsSection />
        <TransfersSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "480px" }}>
      <Image src="/hero-aerial.jpg" alt="Hot air balloon over Sahara desert dunes at sunrise in Morocco near Merzouga" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.60) 0%,rgba(15,31,61,0.42) 55%,rgba(15,31,61,0.82) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb items={[{ label: "Experiences", href: "/experiences/moroccan-cooking" }, { label: "Aerial Experiences" }]} />
        <div className="max-w-3xl mt-6">
          <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🎈 Sahara · Atlas Mountains · Private · Tailor-made
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Aerial Experiences<br />
            <span className="text-gold">Across Morocco</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
            Discover Morocco from an entirely different perspective. From the vast dunes of Merzouga to the dramatic peaks of the Atlas Mountains — some of the country's most spectacular landscapes are best experienced from above.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#cta" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">Plan Your Aerial Experience</a>
            <a href="#experiences" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">Discover the Experiences</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">Morocco from Above</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Morocco is a country of extraordinary geographical variety — Atlantic coastline, Mediterranean shores, the High Atlas peaks, ancient imperial cities, vast Saharan dunes and remote Berber valleys. Much of this landscape is difficult to reach overland, and some of it can only be fully appreciated from altitude.</p>
        <p>If your time in Morocco is limited, or if you are seeking an experience that goes beyond the standard itinerary, an aerial adventure can offer a genuinely unique and memorable perspective on this extraordinary country.</p>
        <p>Depending on availability and the experience selected, guests may enjoy a private helicopter flight, a light aircraft journey, or a hot-air balloon experience — each offering exceptional bird&apos;s-eye views of Morocco&apos;s most breathtaking landscapes. These experiences are not simply a means of transport — they can be an unforgettable adventure in their own right.</p>
      </div>
    </section>
  );
}
function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Aerial Experience Options</h2>
        <p className="text-center text-muted-text text-sm mt-6 mb-12 max-w-2xl mx-auto">
          All experiences are arranged subject to availability and confirmation. We do not operate aircraft directly — we help plan and coordinate tailor-made aerial experiences as part of a wider Morocco itinerary.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-ivory border border-border-warm rounded overflow-hidden flex flex-col">
              <div className="h-1 bg-gold" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-4xl block mb-4">{exp.icon}</span>
                <h3 className="font-display text-xl font-bold text-navy mb-1">{exp.title}</h3>
                <p className="text-xs text-gold font-semibold mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" />{exp.where}
                </p>
                <p className="text-sm text-muted-text leading-relaxed flex-1">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HelicopterSection() {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <span className="inline-block text-4xl mb-5">🚁</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
          Your Ultimate Private Helicopter Experience
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Treat yourself to an unforgettable flight over Morocco&apos;s desert landscapes, majestic mountains, and ochre-coloured palaces.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Private.", "Elegant.", "Unforgettable."].map((word) => (
            <span key={word} className="font-display text-xl font-semibold text-gold">{word}</span>
          ))}
        </div>
        <p className="text-white/65 text-sm mb-8">One message is all it takes to arrange your experience.</p>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />

        {/* Mission */}
        <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
        <p className="text-gold font-semibold text-base mb-5">Creating the exceptional, with simplicity and elegance.</p>
        <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-4">
          Our mission is to offer every guest a seamless, exclusive and genuinely personal experience in Morocco — from the vibrant streets of Marrakesh to the country&apos;s most remarkable destinations.
        </p>
        <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
          Whether it is a romantic weekend, a business trip, a private celebration or an exceptional event, we transform every journey into a tailor-made experience, shaped around each client&apos;s individual wishes and delivered with the highest standards of service.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20am%20interested%20in%20a%20private%20helicopter%20experience%20in%20Morocco.%20Please%20send%20me%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded hover:opacity-90 transition"
        >
          Arrange Your Helicopter Experience
        </a>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section id="highlights" className="bg-navy py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-white text-center mb-10 gold-divider">What You May See</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/10 border border-white/15 rounded p-4">
              <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-white/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-white/45 text-xs text-center mt-6">Landscapes and highlights vary depending on the experience selected, departure location, season and weather conditions.</p>
      </div>
    </section>
  );
}

function TransfersSection() {
  return (
    <section id="transfers" className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4 gold-divider-left">Private Air Transfers</h2>
          <div className="space-y-4 text-muted-text leading-relaxed mt-6">
            <p>For travellers seeking a more personalised itinerary, we can help arrange <strong className="text-navy">private air transfers</strong> between destinations across Morocco — subject to availability and confirmation.</p>
            <p>A private 4x4 vehicle can be arranged to meet guests upon landing and continue the journey to their chosen destination — whether that is a remote desert camp, a mountain retreat, or a coastal riad.</p>
            <p>This combination of air travel and private ground transport is particularly suited to travellers with limited time who wish to cover significant distances across Morocco in comfort.</p>
          </div>
        </div>
        <div className="bg-white border border-border-warm rounded p-6 space-y-3">
          {[
            { label: "Sahara → Atlas Mountains", note: "Remote landscapes without long road journeys" },
            { label: "Marrakech → Merzouga", note: "Desert arrival in style" },
            { label: "Coastal → Interior Morocco", note: "Flexible routing on request" },
            { label: "Private 4x4 on landing", note: "Seamless onward journey from airstrip" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 border-b border-border-warm pb-3 last:border-0 last:pb-0">
              <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-navy text-sm">{item.label}</div>
                <div className="text-xs text-muted-text">{item.note}</div>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-text italic pt-1">All air transfers subject to availability and confirmation. Contact us to discuss your itinerary.</p>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="cta" className="bg-ivory border-t border-border-warm py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-4xl mb-4">🎈</div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">Plan Your Moroccan Aerial Adventure</h2>
        <p className="text-muted-text leading-relaxed mb-2 max-w-xl mx-auto">
          Make your tailor-made Moroccan journey even more memorable with a private aerial experience. Contact us via WhatsApp to discuss your itinerary, preferences and travel plans.
        </p>
        <p className="text-navy font-semibold mb-8">Let us help you explore the possibilities for an unforgettable journey above Morocco.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20am%20interested%20in%20an%20aerial%20experience%20in%20Morocco.%20Please%20send%20me%20more%20information."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded hover:bg-[#20BA5A] transition">
            WhatsApp — Request Availability
          </a>
          <Link href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded hover:bg-navy/90 transition">
            Plan Your Experience <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-text">
          <span>✅ Tailor-made itineraries</span>
          <span>✅ Subject to availability</span>
          <span>✅ Private & exclusive</span>
          <span>✅ Ground transport included on request</span>
        </div>
        <div className="mt-8 pt-6 border-t border-border-warm flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/luxury-morocco-tours" className="text-gold hover:underline flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Luxury Morocco Tours</Link>
          <Link href="/experiences/moroccan-cooking" className="text-gold hover:underline flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Moroccan Cooking Experience</Link>
        </div>
      </div>
    </section>
  );
}

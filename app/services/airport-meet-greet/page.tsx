import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plane, Star, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Airport Meet & Greet Services Morocco — VIP Assistance | TangierTours",
  description:
    "Professional airport Meet & Greet services in Morocco. Arrival assistance, departure support, transit connections and VIP airport experience. Tangier, Casablanca Mohammed V Airport.",
  keywords:
    "airport meet greet Morocco, VIP airport assistance Morocco, Tangier airport meet greet, Casablanca airport assistance, Morocco airport transfer VIP, airport concierge Morocco",
};

const services = [
  {
    icon: "✈️",
    title: "Warm Welcome on Arrival",
    desc: "Start your visit the right way with our professional Meet & Assist service. Upon arrival, our airport representative welcomes you and guides you smoothly through every step of the arrival process.",
    details: ["Welcome at aircraft or arrival gate", "Immigration and passport control guidance", "Baggage claim assistance", "Airport exit and transfer to vehicle"],
  },
  {
    icon: "🛫",
    title: "Smooth Departure Assistance",
    desc: "Enjoy a relaxed and effortless departure with dedicated airport support. We assist you from hotel pickup through to your boarding gate.",
    details: ["Hotel or accommodation pickup", "Check-in and luggage assistance", "Security procedure support", "Boarding guidance and gate escort"],
  },
  {
    icon: "🔄",
    title: "Transit & Connection Support",
    desc: "Connecting flights are more comfortable with support at every step. Our team provides gate-to-gate assistance for organized and efficient flight connections.",
    details: ["Gate-to-gate transfer guidance", "Connection timing management", "Baggage transfer assistance", "Priority support at busy periods"],
  },
  {
    icon: "⭐",
    title: "Premium VIP Airport Experience",
    desc: "Upgrade your journey with our VIP Meet & Greet service. Priority access, personalized concierge support, and dedicated assistance throughout every stage of your airport experience.",
    details: ["Priority fast-track access where available", "VIP lounge access assistance", "Personalized concierge support", "Dedicated representative throughout"],
  },
];

export default function AirportMeetGreetPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* HERO */}
        <section className="relative pt-16 overflow-hidden" style={{ minHeight: "420px" }}>
          <Image src="/hero-meetgreet.jpg" alt="Professional airport representative welcoming VIP passengers at modern airport terminal" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.72) 0%,rgba(15,31,61,0.55) 55%,rgba(15,31,61,0.82) 100%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Breadcrumb items={[{ label: "Services" }, { label: "Airport Meet & Greet" }]} />
            <div className="max-w-3xl mt-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Plane className="w-3.5 h-3.5" /> Tangier · Casablanca Mohammed V · All Morocco Airports
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                Airport Meet &amp; Greet Services<br />
                <span className="text-gold">Enhance Your Journey with Expert Assistance</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Travel with complete peace of mind from the moment you arrive. Personalized airport assistance for first-time visitors, families, senior travellers, business executives, and anyone seeking a smooth, comfortable airport experience.
              </p>
              <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20would%20like%20to%20enquire%20about%20your%20airport%20Meet%20%26%20Greet%20service."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded hover:bg-[#20BA5A] transition">
                Request Airport Assistance
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Our Airport Services</h2>
          <p className="text-center text-muted-text mt-6 mb-12 max-w-2xl mx-auto text-sm">
            Whether you are arriving, departing, or connecting through the airport, our expert team is here to make your journey easier, faster, and more comfortable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white border border-border-warm rounded overflow-hidden">
                <div className="h-1 bg-gold" />
                <div className="p-6">
                  <span className="text-3xl block mb-3">{svc.icon}</span>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-text">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHO */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-8">Who This Service is For</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: "👨‍👩‍👧", label: "Families with children" },
                { icon: "👴", label: "Senior travellers" },
                { icon: "💼", label: "Business executives" },
                { icon: "🌍", label: "First-time visitors" },
                { icon: "♿", label: "Accessibility needs" },
                { icon: "⭐", label: "VIP travellers" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 border border-white/20 rounded p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white/80 text-xs font-semibold leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AIRPORTS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Airports We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { name: "Tangier Ibn Battouta Airport (TNG)", note: "Tangier's international airport — arrivals, departures and transfers" },
              { name: "Casablanca Mohammed V Airport (CMN)", note: "Morocco's main international hub — all service types available" },
              { name: "Other Morocco airports", note: "Rabat, Fez, Marrakech and others — available on request" },
            ].map((ap) => (
              <div key={ap.name} className="bg-white border border-border-warm rounded p-4">
                <div className="font-semibold text-navy text-sm mb-1 flex items-center gap-2">
                  <Plane className="w-4 h-4 text-gold shrink-0" />{ap.name}
                </div>
                <div className="text-xs text-muted-text">{ap.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ivory border-t border-border-warm py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-navy mb-3">Request Airport Assistance</h2>
            <p className="text-muted-text text-sm mb-8 leading-relaxed max-w-xl mx-auto">
              Contact us with your flight details — arrival or departure time, airport, number of travellers, and any specific requirements. We will confirm availability and details within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20would%20like%20to%20enquire%20about%20airport%20Meet%20%26%20Greet%20assistance."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded hover:bg-[#20BA5A] transition">
                WhatsApp Abdelhamid
              </a>
              <a href="mailto:tangiertour@gmail.com"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded hover:bg-navy/90 transition">
                Email Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-text">
              <Link href="/tours/private-morocco-transfers" className="hover:text-gold transition-colors flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5 text-gold" /> Private Transfers</Link>
              <Link href="/tours/casablanca-layover-tours" className="hover:text-gold transition-colors flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5 text-gold" /> Casablanca Layover Tours</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

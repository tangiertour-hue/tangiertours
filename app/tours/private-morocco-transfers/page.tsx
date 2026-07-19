import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Car, Wifi, UserCheck, PlaneLanding, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Morocco Transfers — Airport & City-to-City | TangierTours",
  description:
    "Reliable private transfer Morocco services — Morocco airport transfer, Tangier to Casablanca transfer, Tangier to Chefchaouen and more. Comfortable vehicles, English-speaking driver, fixed prices.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "TangierTours",
      url: "https://www.tangiertours.ma",
      address: { "@type": "PostalAddress", addressLocality: "Tangier", addressCountry: "MA" },
    },
    {
      "@type": "Service",
      name: "Private Morocco Transfers",
      description: "Door-to-door private transfer services across Morocco — airports, hotels, city-to-city.",
      provider: { "@type": "LocalBusiness", name: "TangierTours" },
      areaServed: { "@type": "Country", name: "Morocco" },
      serviceType: "Private Transfer",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get from Tangier airport to the Medina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest and most comfortable option is a private transfer. We meet you in the arrivals hall with a name board, handle your luggage, and drive you directly to your riad or hotel in the Medina — typically 20-30 minutes, from $25.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a direct bus from Tangier to Chefchaouen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are CTM and Supratours buses, but they often require changes and can take over 4 hours with limited schedules. Our private transfer takes around 2.5 hours door-to-door, departing whenever suits you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Tangier to Casablanca transfer take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By private car it typically takes around 3.5 to 4 hours via the A1 motorway, depending on traffic. We recommend the train for this route too — we can drop you at the station and collect from Casablanca.",
      },
    },
    {
      "@type": "Question",
      name: "Are your transfer prices fixed or do they change with traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All prices are fixed and agreed before departure. There are no meter charges, no hidden fees, and no surprises — what we quote is what you pay.",
      },
    },
  ],
};

const routes = [
  { from: "Tangier Ibn Battouta Airport", to: "Tangier Medina / Hotel", duration: "~25 min", price: "from $25" },
  { from: "Tangier", to: "Chefchaouen", duration: "~2.5 hrs", price: "from $80" },
  { from: "Tangier", to: "Casablanca", duration: "~3.5 hrs", price: "from $180" },
  { from: "Tangier", to: "Fez", duration: "~4.5 hrs", price: "from $200" },
  { from: "Casablanca Airport (CMN)", to: "Casablanca City Centre", duration: "~45 min", price: "from $40" },
];

const fleetFeatures = [
  { icon: Car, title: "Modern Vehicles", body: "Air-conditioned sedans, SUVs, and minivans — always clean and well-maintained." },
  { icon: UserCheck, title: "English-Speaking Driver", body: "Your driver speaks English and knows every route. No language barrier, no stress." },
  { icon: Wifi, title: "Free WiFi On Board", body: "Stay connected during your journey — complimentary WiFi in all transfer vehicles." },
  { icon: Shield, title: "Fixed, Transparent Prices", body: "No meters. No surge pricing. The price we quote before you book is the price you pay." },
];

const faqs = [
  {
    q: "How do I get from Tangier airport to the Medina?",
    a: "The easiest option is a private transfer. We meet you in arrivals with a name board, load your luggage, and drive you directly to your riad or hotel — typically 20-30 minutes, from $25.",
  },
  {
    q: "Is there a direct bus from Tangier to Chefchaouen?",
    a: "There are CTM and Supratours buses, but they often involve changes and can take over 4 hours. Our private transfer takes around 2.5 hours door-to-door, leaving whenever suits you.",
  },
  {
    q: "How long does the Tangier to Casablanca transfer take?",
    a: "By private car, approximately 3.5 to 4 hours via the A1 motorway. We can also combine a drop at Tanger Ville train station if you prefer to take the high-speed ONCF service.",
  },
  {
    q: "Are your transfer prices fixed?",
    a: "Yes. All prices are agreed in advance. No meter, no hidden fees — what we quote is what you pay.",
  },
];

export default function PrivateMoroccoTransfersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Tours", href: "/tours" }, { label: "Private Transfers" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Private Morocco Transfers —<br />Comfortable, Reliable, Door-to-Door Travel
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Morocco's public transport is an adventure in itself — but when you have a flight to catch, a cruise ship waiting, or simply want to arrive without stress, a private transfer is the smart choice. Fixed prices, air-conditioned vehicles, and a driver who speaks your language.
            </p>
          </div>
        </section>

        {/* Why Private Transfer */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">
            Why Choose a Private Transfer Over Public Transport?
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <p>
              Morocco&apos;s intercity buses are inexpensive, but they run on fixed schedules, stop at inconvenient terminals far from city centres, and can be delayed by hours. Shared grands taxis are faster but uncomfortable and offer zero privacy. For travellers arriving with luggage, young children, or simply a limited time window, these options create unnecessary stress.
            </p>
            <p>
              A private transfer with TangierTours means your driver is waiting for you when you land — flight tracked, name board in hand. You proceed directly to your destination without queuing, negotiating, or worrying about luggage. Whether it&apos;s a short airport run or a cross-country journey to Fez, we handle every detail so you don&apos;t have to.
            </p>
          </div>
        </section>

        {/* Routes Pricing Table */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Popular Routes &amp; Prices</h2>
          <p className="text-center text-gray-500 mt-4 mb-8">All prices are per vehicle, not per person. Fixed rate, no surprises.</p>
          <div className="overflow-x-auto rounded-lg border border-[var(--border-warm)]">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">From</th>
                  <th className="px-5 py-4 text-left font-semibold">To</th>
                  <th className="px-5 py-4 text-left font-semibold">
                    <Clock className="w-4 h-4 inline mr-1" />Duration
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-[var(--gold)]">Price</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={r.from + r.to} className={i % 2 === 0 ? "bg-white" : "bg-[var(--ivory)]"}>
                    <td className="px-5 py-4 font-medium text-navy">{r.from}</td>
                    <td className="px-5 py-4 text-gray-700">{r.to}</td>
                    <td className="px-5 py-4 text-gray-500">{r.duration}</td>
                    <td className="px-5 py-4 font-bold text-[var(--gold)]">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Prices are indicative. Contact us for group vehicles, night transfers, or multi-stop routes.</p>
        </section>

        {/* Fleet Section */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Our Fleet &amp; Service Standards</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {fleetFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Airport Pickup */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy mb-2 gold-divider-left">Airport Pickup — Stress-Free Arrivals</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: PlaneLanding, title: "Flight Tracking", body: "We monitor your flight in real time. Delayed? We already know — and we're still there when you land." },
              { icon: UserCheck, title: "Name Board Meet & Greet", body: "Your driver waits in the arrivals hall with a board showing your name. No hunting for a taxi, no uncertainty." },
              { icon: CheckCircle, title: "Direct to Your Door", body: "From the airport straight to your riad, hotel, or any address you specify — no detours, no hidden stops." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-lg border border-[var(--border-warm)] p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-lg text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="font-display text-3xl text-navy mb-2 text-center gold-divider">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-[var(--border-warm)] rounded-lg overflow-hidden">
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
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book Your Private Transfer</h2>
          <BookingForm
            tourOptions={["Airport Transfer", "Tangier → Chefchaouen", "Tangier → Casablanca", "Tangier → Fez", "Casablanca Airport Transfer", "Other Route"]}
          />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

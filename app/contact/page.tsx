import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import DepositPayment from "@/components/DepositPayment";

export const metadata: Metadata = {
  title: "Contact TangierTours — Book Your Private Morocco Tour | WhatsApp",
  description:
    "Book your private Tangier tour or Morocco experience. Contact us by WhatsApp, email, or our online form. We reply within 2 hours. Expert local guide — book Tangier tour today.",
  keywords: ["book Tangier tour", "contact tour guide Tangier", "Morocco tour booking", "private tour Morocco"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TangierTours",
  description: "Private tour guide services in Tangier and Northern Morocco",
  url: "https://www.tangiertours.ma",
  telephone: "+212668702424",
  email: "tangiertour@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangier",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "35.7595",
    longitude: "-5.8340",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
  },
};

const contactCards = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+212 668-702-424",
    sub: "Instant response, 7 days/week",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Mail,
    title: "Email",
    value: "tangiertour@gmail.com",
    sub: "Bookings & enquiries — reply within 2 hours",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tangier, Morocco",
    sub: "Pickups from port, hotel & airport",
    color: "text-[var(--gold)]",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon – Sun  07:00–21:00",
    sub: "7 days a week, including holidays",
    color: "text-[var(--navy)]",
    bg: "bg-slate-50",
  },
];

const messageTemplates = [
  {
    label: "Private Full-Day Tour",
    msg: "Hi Idrissi, I'd like to book a private full-day tour of Tangier. We are a group of [NUMBER]. Our visit date is [DATE]. Could you please send me details and pricing?",
  },
  {
    label: "Shore Excursion",
    msg: "Hi Idrissi, our cruise ship arrives at Tangier port on [DATE]. We'd love to book a shore excursion. We have [HOURS] hours ashore. Group size is [NUMBER]. Please advise on availability.",
  },
  {
    label: "Chefchaouen Day Trip",
    msg: "Hi Idrissi, I'm interested in a Chefchaouen day trip from Tangier on [DATE]. Group size is [NUMBER]. Can you share availability and pricing?",
  },
  {
    label: "Jewish Heritage Tour",
    msg: "Hi Idrissi, we're interested in the Jewish Heritage Tour. Our visit date is [DATE] and there are [NUMBER] of us. Could you please share the itinerary and pricing?",
  },
];

export default function ContactPage() {
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
            <Breadcrumb items={[{ label: "Contact" }]} />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              Contact TangierTours —<br />
              Book Your Private Morocco Experience
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Reach us by WhatsApp, email, or our booking form. We reply within 2 hours, every day.
            </p>
          </div>
        </section>

        {/* WhatsApp Highlight */}
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-2">
              Fastest Reply: WhatsApp
            </h2>
            <p className="text-[var(--muted-text)] mb-4">
              We reply within 2 hours · Available 7 days a week · 07:00 – 21:00 Morocco time
            </p>
            <a
              href="https://wa.me/212668702424?text=Hi%20Idrissi%2C%20I'd%20like%20to%20book%20a%20private%20tour%20in%20Morocco."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp +212 668-702-424
            </a>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((c) => (
              <div key={c.title} className={`${c.bg} border border-[var(--border-warm)] rounded-lg p-5`}>
                <c.icon className={`w-6 h-6 mb-3 ${c.color}`} />
                <div className="font-semibold text-[var(--navy)] text-sm mb-1">{c.title}</div>
                <div className="font-bold text-[var(--charcoal)] text-sm leading-tight mb-1">{c.value}</div>
                <div className="text-xs text-[var(--muted-text)]">{c.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form + After-Submit Steps */}
        <section className="max-w-5xl mx-auto px-4 pb-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-[var(--navy)] mb-1 gold-divider-left">
                What Happens Next?
              </h2>
              <div className="mt-6 space-y-5">
                {[
                  {
                    step: "1",
                    title: "We review your request",
                    body: "Idrissi personally reads every enquiry and checks availability for your chosen date.",
                  },
                  {
                    step: "2",
                    title: "You receive a personalised proposal",
                    body: "Within 2 hours we send a detailed itinerary and transparent pricing — no hidden costs.",
                  },
                  {
                    step: "3",
                    title: "Confirm and we handle everything",
                    body: "Once you confirm, we take care of vehicle, routing, tickets, and any special requests.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--navy)] text-[var(--gold)] font-bold text-sm flex items-center justify-center">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--navy)] text-sm">{s.title}</div>
                      <div className="text-xs text-[var(--muted-text)] mt-0.5 leading-relaxed">{s.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Templates */}
            <div className="bg-white border border-[var(--border-warm)] rounded-lg p-5">
              <h3 className="font-semibold text-[var(--navy)] flex items-center gap-2 mb-3">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Prefer to message directly?
              </h3>
              <p className="text-xs text-[var(--muted-text)] mb-4">
                Click any template below to open a pre-filled WhatsApp message.
              </p>
              <div className="space-y-2">
                {messageTemplates.map((t) => (
                  <a
                    key={t.label}
                    href={`https://wa.me/212668702424?text=${encodeURIComponent(t.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 px-3 py-2.5 border border-[var(--border-warm)] rounded text-sm text-[var(--navy)] hover:border-[var(--gold)] hover:bg-amber-50 transition-colors group"
                  >
                    <span className="font-medium">{t.label}</span>
                    <ArrowRight className="w-3 h-3 text-[var(--muted-text)] group-hover:text-[var(--gold)] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="bg-white border-t border-[var(--border-warm)] py-8 px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-[var(--muted-text)]">
            {["No payment required to enquire", "Free cancellation policy", "4.9 / 5 from 87 reviews", "Licensed local guide", "Private & personalised"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Deposit Payment Section */}
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-2 gold-divider">
            Ready to Confirm? Pay Your Deposit
          </h2>
          <p className="text-center text-muted-text text-sm mt-6 mb-8">
            Once Abdelhamid confirms availability, secure your booking with a <strong className="text-navy">€85 deposit</strong> by bank transfer.
          </p>
          <DepositPayment depositAmount="€85" />
        </section>
      </main>

      <Footer />
    </>
  );
}

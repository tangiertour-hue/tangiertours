import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cancellation Policy & Terms | TangierTours",
  description: "TangierTours booking terms, cancellation policy, refund conditions, and general terms of service. Transparent, fair, and traveller-friendly.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Breadcrumb items={[{ label: "Cancellation Policy & Terms" }]} />
            <h1 className="font-display text-4xl font-bold text-white mt-6 mb-4 gold-divider">
              Cancellation Policy & Terms
            </h1>
            <p className="text-white/70 mt-6">Transparent, fair, and traveller-friendly — because trust is the foundation of every great tour.</p>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-12">
          <CancellationPolicy />
          <RefundPolicy />
          <BookingTerms />
          <GeneralTerms />
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-navy mb-5 gold-divider-left">{title}</h2>
      <div className="mt-6 space-y-4 text-muted-text leading-relaxed text-sm">{children}</div>
    </section>
  );
}

function CancellationPolicy() {
  return (
    <Section title="Cancellation Policy">
      <p>We understand that travel plans sometimes change unexpectedly. Our cancellation policy is designed to be as fair as possible for both parties.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm mt-4">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-3 text-left font-semibold">Notice Given</th>
              <th className="px-4 py-3 text-left font-semibold">Refund</th>
            </tr>
          </thead>
          <tbody>
            {[
              { notice: "7 days or more before the tour", refund: "100% full refund" },
              { notice: "3–6 days before the tour", refund: "75% refund" },
              { notice: "24–48 hours before the tour", refund: "50% refund" },
              { notice: "Less than 24 hours before the tour", refund: "No refund" },
              { notice: "No-show on the day", refund: "No refund" },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-ivory"}>
                <td className="px-4 py-3 border-b border-border-warm">{row.notice}</td>
                <td className="px-4 py-3 border-b border-border-warm font-semibold text-navy">{row.refund}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">All cancellation requests must be submitted in writing — by email to <a href="mailto:tangiertour@gmail.com" className="text-gold hover:underline">tangiertour@gmail.com</a> or via WhatsApp message to <a href="https://wa.me/212668702424" className="text-gold hover:underline">+212 668-702-424</a>. Verbal cancellations are not accepted.</p>
    </Section>
  );
}

function RefundPolicy() {
  return (
    <Section title="Refund Policy">
      <p>Refunds are processed within <strong className="text-navy">5–7 business days</strong> of the confirmed cancellation. Refunds are issued via the same payment method used for the original booking where possible.</p>
      <p>In the event of a refund dispute, the date and time of the written cancellation notice (email or WhatsApp) is used as the official cancellation timestamp.</p>
      <p><strong className="text-navy">Exceptional Circumstances:</strong> In cases of genuine emergency — serious illness, bereavement, or natural disaster — we will consider full or partial refunds outside the standard policy at our discretion. Please contact us as early as possible and provide relevant documentation.</p>
    </Section>
  );
}

function BookingTerms() {
  return (
    <Section title="Booking Terms">
      {[
        { title: "Confirmation", text: "A booking is confirmed only when you receive a written confirmation from TangierTours (by email or WhatsApp). Submitting a booking request form does not constitute a confirmed booking." },
        { title: "Payment", text: "No upfront payment is required to submit a booking request or enquiry. Payment is made on the day of the tour, in cash (Moroccan Dirhams or Euros accepted) or via agreed advance transfer for group bookings." },
        { title: "Group Size", text: "Our tours are private — limited to your own group. Maximum group size varies by tour type. Please discuss larger groups (10+ persons) in advance." },
        { title: "Meeting Point", text: "For most tours, Idrissi will meet you at your hotel, riad, or a clearly agreed central location. Exact meeting point and time are confirmed in your booking confirmation." },
        { title: "Punctuality", text: "Please be ready at the agreed meeting time. A grace period of 15 minutes applies. Tours may begin without late arrivals to ensure the itinerary is completed on time, particularly for shore excursions with ship departure deadlines." },
        { title: "Right to Refuse", text: "TangierTours reserves the right to refuse or terminate a tour in the event of abusive, threatening, or illegal behaviour by any member of the group. No refund will be issued in such cases." },
      ].map((item) => (
        <div key={item.title}>
          <p><strong className="text-navy">{item.title}:</strong> {item.text}</p>
        </div>
      ))}
    </Section>
  );
}

function GeneralTerms() {
  return (
    <Section title="General Terms & Liability">
      {[
        { title: "Health & Mobility", text: "Please inform us of any mobility limitations, health conditions, or dietary requirements when booking. We will adapt the itinerary wherever possible. TangierTours is not liable for injuries arising from undisclosed health conditions." },
        { title: "Weather & Force Majeure", text: "Tours proceed in most weather conditions. In the event of severe weather, civil unrest, or other force majeure events making the tour unsafe or impossible, TangierTours will offer a full reschedule or refund at no charge." },
        { title: "Personal Belongings", text: "TangierTours is not liable for loss, theft, or damage to personal belongings during tours. We strongly recommend travel insurance that includes personal property cover." },
        { title: "Photography", text: "Some sites we visit (certain synagogues, cemeteries, private locations) have photography restrictions. Your guide will advise you on-site. Please respect these restrictions." },
        { title: "Governing Law", text: "These terms are governed by the laws of the Kingdom of Morocco. Any disputes will be resolved under Moroccan jurisdiction." },
      ].map((item) => (
        <div key={item.title}>
          <p><strong className="text-navy">{item.title}:</strong> {item.text}</p>
        </div>
      ))}
    </Section>
  );
}

function Contact() {
  return (
    <section className="bg-navy rounded-lg p-8 text-white text-center">
      <h2 className="font-display text-2xl font-bold mb-3">Questions About Our Policy?</h2>
      <p className="text-white/70 mb-6 max-w-lg mx-auto">We&apos;re always happy to discuss booking terms or special circumstances. Contact us directly — we reply within 2 hours.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://wa.me/212668702424" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded hover:bg-[#20BA5A] transition">
          WhatsApp +212 668-702-424
        </a>
        <a href="mailto:tangiertour@gmail.com"
          className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/20 transition">
          tangiertour@gmail.com
        </a>
      </div>
      <p className="text-white/40 text-xs mt-6">Last updated: July 2025 · TangierTours · Tangier, Morocco</p>
    </section>
  );
}

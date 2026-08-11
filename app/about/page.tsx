import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Star, Globe, BookOpen, Shield, MessageCircle, ArrowRight, CheckCircle, Users, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Idrissi — Licensed Professional Tour Guide in Tangier, Morocco | TangierTours",
  description:
    "Meet Idrissi — Licensed Professional Guide recognized by the Moroccan Ministry of Tourism and Former President of the Tangier Tour Guides Association. Fluent in English, French, Spanish and Arabic.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Idrissi",
  jobTitle: "Licensed Tour Guide",
  worksFor: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/about",
  address: { "@type": "PostalAddress", addressLocality: "Tangier", addressCountry: "MA" },
  knowsLanguage: ["en", "fr", "es", "ar"],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "licence", name: "Moroccan Ministry of Tourism Official Guide Licence — GVCT 2932" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "role", name: "Former President, Tangier Tour Guides Association" },
  ],
  description: "Licensed Professional Guide recognized by the Moroccan Ministry of Tourism and Former President of the Tangier Tour Guides Association. Over 15 years of experience guiding visitors through Morocco's cities, landscapes and cultural heritage.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Idrissi a certified guide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Idrissi holds an official guide licence from the Moroccan Ministry of Tourism and has served as Former President of the Tangier Tour Guides Association.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does Idrissi speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idrissi speaks Arabic, English, French and Spanish — making TangierTours accessible to travellers from around the world.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact Idrissi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest way is via WhatsApp — click the button on any page. You can also use the booking form or email via the contact page. Idrissi typically responds within a few hours.",
      },
    },
  ],
};

const languages = [
  { lang: "English", flag: "🇬🇧", note: "Primary tour language — fluent and confident, shaped by years guiding visitors from the UK, US, Canada, and Australia." },
  { lang: "French", flag: "🇫🇷", note: "Morocco's second official language and Idrissi's strongest European tongue. Most French and Belgian visitors tour entirely in French." },
  { lang: "Spanish", flag: "🇪🇸", note: "Northern Morocco was a Spanish protectorate until 1956, and many older Tangerines still speak Spanish. Idrissi draws on this heritage for Spanish-speaking guests." },
  { lang: "Arabic", flag: "🇲🇦", note: "Both Modern Standard Arabic and Darija (Moroccan dialect) — allows genuine, unmediated access to local people, markets, and culture." },

];

const specialisations = [
  { icon: MapPin, title: "Tangier City Tours", desc: "Half-day and full-day private exploration of the Medina, Kasbah, Cap Spartel, and the Caves of Hercules." },
  { icon: BookOpen, title: "Jewish Heritage Tours", desc: "Tangier and Casablanca Jewish heritage specialist — Mellah, synagogues, cemeteries, genealogical research." },
  { icon: Shield, title: "Shore Excursions", desc: "Cruise port tours planned around your ship's departure schedule, with time allocated for a comfortable return." },
  { icon: Star, title: "Luxury Bespoke", desc: "Multi-day custom itineraries for clients who want the finest private experience Morocco can offer." },
  { icon: Globe, title: "Chefchaouen Day Trips", desc: "Full-day private excursions to the Blue City, including stops at hidden viewpoints and local lunch." },
  { icon: Users, title: "Transfer Services", desc: "Airport, hotel, and city-to-city transfers across Morocco — professional, punctual, door-to-door." },
];

const credentials = [
  { title: "Moroccan Ministry of Tourism — Official Guide Licence · GVCT 2932", detail: "A licensed professional guide recognized by the Moroccan Ministry of Tourism. Licence number: GVCT 2932." },
  { title: "Former President — Tangier Tour Guides Association", detail: "Served as Former President of the Tangier Tour Guides Association, reflecting extensive experience and professional standing within Morocco's tourism community." },
  { title: "Over 15 Years of Professional Experience", detail: "More than 15 years guiding visitors through Morocco's most captivating cities, landscapes and cultural heritage — with a consistent focus on personal attention and authentic local expertise." },
];

const faqs = [
  { q: "Is Idrissi a certified guide?", a: "Yes. Idrissi holds an official guide licence from the Moroccan Ministry of Tourism and has served as Former President of the Tangier Tour Guides Association." },
  { q: "What languages does Idrissi speak?", a: "Idrissi speaks Arabic, English, French and Spanish — making TangierTours accessible to travellers from around the world." },
  { q: "How do I contact Idrissi?", a: "The fastest way is via WhatsApp — click the button on any page. You can also use the booking form or email via the contact page. Idrissi typically responds within a few hours." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "About Idrissi" }]} />
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5 mt-6">
              Your Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight gold-divider">
              Meet Idrissi —<br />Licensed Professional Guide
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[var(--gold)]" /> Licensed by Morocco Ministry of Tourism · GVCT 2932</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[var(--gold)]" /> Former President, Tangier Tour Guides Association</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[var(--gold)]" /> English · French · Spanish · Arabic</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--gold)]" /> Based in Tangier, Morocco</span>
            </div>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-56 h-64 lg:w-full lg:h-80 rounded-lg overflow-hidden border-4 border-gold shadow-lg">
                <Image
                  src="/idrissi-photo.jpg"
                  alt="Abdelhamid Idrissi — Licensed Professional Tour Guide in Tangier, Morocco"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:1024px) 224px, 280px"
                  priority
                />
              </div>
              <div className="mt-4 text-center lg:text-left">
                <div className="font-display text-lg font-bold text-navy">Abdelhamid Idrissi</div>
                <div className="text-gold text-sm font-semibold">Licensed Tour Guide · Morocco</div>
                <div className="text-muted-text text-xs mt-1 font-mono tracking-wide">Licence No. GVCT 2932</div>
              </div>
            </div>
            {/* Bio */}
            <div>
              <h2 className="font-display text-2xl text-navy mb-6 gold-divider-left">Your Guide</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed mt-6">
                <p>
                  With over 15 years of experience guiding visitors through Morocco&apos;s most captivating cities, landscapes and cultural heritage, Idrissi brings extensive professional expertise, genuine warmth, and an insider&apos;s knowledge that can transform a sightseeing trip into a truly memorable experience.
                </p>
                <p>
                  A licensed professional guide recognized by the Moroccan Ministry of Tourism, Idrissi has also served as <strong className="text-navy">Former President of the Tangier Tour Guides Association</strong>, reflecting his experience and standing within Morocco&apos;s professional tourism community.
                </p>
                <p>
                  Fluent in English, French, Spanish and Arabic, Idrissi is well placed to welcome travellers from around the world and provide personalized experiences tailored to their interests.
                </p>
                <p>
                  His expertise also includes Jewish heritage tours, helping families and travellers explore Morocco&apos;s rich Jewish history, cultural heritage, historic communities and ancestral connections.
                </p>
                <p>
                  Whether discovering Tangier for the first time, exploring Morocco&apos;s cultural treasures, or tracing family roots, guests can expect professional guidance, personal attention, authentic local insight, and a warm Moroccan welcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Quote */}
        <section className="bg-gold/10 border-y border-gold/25 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl text-gold mb-4">&ldquo;</div>
            <blockquote className="font-display text-xl sm:text-2xl font-semibold text-navy leading-relaxed italic">
              We believe the best journeys are built on genuine connections — because people book people, not just tours!
            </blockquote>
            <div className="mt-5 text-sm font-semibold text-gold tracking-widest uppercase">
              Abdelhamid Idrissi · TangierTours
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Languages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {languages.map((l) => (
                <div key={l.lang} className="bg-white/10 border border-white/20 rounded-lg p-5">
                  <div className="text-2xl mb-2">{l.flag}</div>
                  <h3 className="font-display text-lg text-white mb-2">{l.lang}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{l.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialisations */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Specialisations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {specialisations.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-[var(--border-warm)] rounded-lg p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Credentials &amp; Certifications</h2>
            <div className="mt-10 space-y-5">
              {credentials.map((c) => (
                <div key={c.title} className="flex gap-4 bg-white/10 border border-white/20 rounded-lg p-5">
                  <CheckCircle className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl text-navy mb-6 gold-divider-left">My Philosophy</h2>
          <blockquote className="border-l-4 border-[var(--gold)] pl-6 mb-6">
            <p className="font-display text-2xl text-navy italic leading-snug">
              &ldquo;I don&apos;t give tours. I share my home.&rdquo;
            </p>
            <footer className="mt-3 text-gray-500 text-sm">— Idrissi, TangierTours</footer>
          </blockquote>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              There is a fundamental difference between a guide who recites facts and a host who genuinely wants you to understand and love a place. Idrissi has always operated from the second position. When you walk through the Medina with him, you are not on a programme — you are a guest in his city, being shown the things he finds most fascinating, introduced to the shopkeepers and craftsmen he has known for years, given the real context behind what you see rather than the sanitised version designed for tour buses.
            </p>
            <p>
              This philosophy is especially important on the Jewish heritage tours, where many visitors arrive carrying personal history — family stories, old photographs, half-remembered names of streets and synagogues. Idrissi understands that these tours are not primarily about information. They are about connection: connecting a person to a place, a present to a past, a diaspora family to the soil their grandparents left behind. He treats that responsibility with the respect it deserves.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="font-display text-3xl text-navy mb-2 text-center gold-divider">Frequently Asked About Idrissi</h2>
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

        {/* WE KNOW MOROCCO */}
        <section className="bg-ivory border-y border-border-warm py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">Local Expertise</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-5 gold-divider-left">
                We Know Morocco from the Inside Out
              </h2>
              <div className="space-y-4 text-muted-text leading-relaxed mt-6">
                <p>Morocco is more than a destination to us — it is a country we know deeply and love sharing with our guests. Over the years, we have helped travellers turn their ideas and dream journeys into memorable experiences.</p>
                <p>From tailor-made holidays and special celebrations to weddings and professional productions, we have had the privilege of organising and managing experiences for a wide range of discerning clients.</p>
                <p>We remain a dedicated, hands-on team, committed to providing <strong className="text-navy">honest advice, personal attention and reliable local expertise</strong>. Our role is to take care of the details, help navigate the unexpected, and make each journey as smooth and enjoyable as possible.</p>
                <p className="text-navy font-medium">You simply relax, enjoy the experience, and discover the best of Morocco — while we take care of the rest.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-warm">
                <p className="font-display text-lg font-semibold text-navy italic mb-4">
                  &ldquo;When experience matters, trust those who know Morocco.&rdquo;
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy/90 transition">
                  Plan Your Trip <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🗺️", title: "Tailor-made holidays", desc: "Every itinerary is built around your interests, pace and travel style." },
                { icon: "💍", title: "Special celebrations", desc: "Weddings, anniversaries, milestone journeys — planned with care." },
                { icon: "🎬", title: "Professional productions", desc: "Film, photography and media work — local logistics handled." },
                { icon: "🤝", title: "Hands-on service", desc: "Personal attention from first enquiry to final drop-off." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-border-warm rounded p-4">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <div className="font-semibold text-navy text-sm mb-1">{item.title}</div>
                  <p className="text-xs text-muted-text leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <div className="bg-navy rounded-xl p-8 text-center">
            <h2 className="font-display text-2xl text-white mb-2">Ready to Explore Tangier?</h2>
            <p className="text-gray-300 text-sm mb-6">Book a private tour with Idrissi, or read what past guests have said.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-navy font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                <BookOpen className="w-4 h-4" />
                Book with Idrissi
              </Link>
              <Link href="/reviews" className="inline-flex items-center justify-center gap-2 border border-[var(--gold)] text-[var(--gold)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--gold)] hover:text-navy transition-colors">
                <MessageCircle className="w-4 h-4" />
                Read Reviews
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

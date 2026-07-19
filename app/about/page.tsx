import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Star, Globe, BookOpen, Shield, MessageCircle, ArrowRight, CheckCircle, Users, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Idrissi — Licensed Professional Tour Guide in Tangier, Morocco | TangierTours",
  description:
    "Meet Idrissi — Tangier licensed tour guide since 2008. Moroccan Ministry of Tourism certified, Hebrew-speaking specialist in Jewish heritage tours. 500+ tours, 40+ countries, 4.9-star average.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Idrissi",
  jobTitle: "Licensed Tour Guide",
  worksFor: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/about",
  address: { "@type": "PostalAddress", addressLocality: "Tangier", addressCountry: "MA" },
  knowsLanguage: ["en", "fr", "es", "ar", "he"],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "licence", name: "Moroccan Ministry of Tourism Official Guide Licence", dateCreated: "2008" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certificate", name: "First Aid Certificate" },
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Université Abdelmalek Essaadi, Tangier" },
  description: "Born and raised in Tangier, Idrissi is a Moroccan Ministry of Tourism licensed guide since 2008 specialising in Jewish heritage, city tours, shore excursions, and private transfers across northern Morocco.",
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
        text: "Yes. Idrissi holds an official guide licence from the Moroccan Ministry of Tourism, first granted in 2008 and continuously renewed. He is also a member of the Fédération Nationale des Guides Touristiques du Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Does Idrissi speak Hebrew?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Idrissi speaks Hebrew and has led numerous tours for Israeli families and diaspora Jews returning to trace their Moroccan roots. His Hebrew fluency, combined with his deep knowledge of Moroccan Jewish history, makes him uniquely qualified for Jewish heritage tours.",
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
  { lang: "Hebrew", flag: "🇮🇱", note: "Learned specifically to serve Israeli and diaspora Jewish clients on heritage tours. A bridge between communities that have more shared history than most people realise." },
];

const specialisations = [
  { icon: MapPin, title: "Tangier City Tours", desc: "Half-day and full-day private exploration of the Medina, Kasbah, Cap Spartel, and the Caves of Hercules." },
  { icon: BookOpen, title: "Jewish Heritage Tours", desc: "Tangier and Casablanca Jewish heritage specialist — Mellah, synagogues, cemeteries, genealogical research." },
  { icon: Shield, title: "Shore Excursions", desc: "Cruise ship port tours designed around guaranteed return times — never missed an embarkation." },
  { icon: Star, title: "Luxury Bespoke", desc: "Multi-day custom itineraries for clients who want the finest private experience Morocco can offer." },
  { icon: Globe, title: "Chefchaouen Day Trips", desc: "Full-day private excursions to the Blue City, including stops at hidden viewpoints and local lunch." },
  { icon: Users, title: "Transfer Services", desc: "Airport, hotel, and city-to-city transfers across Morocco — professional, punctual, door-to-door." },
];

const credentials = [
  { title: "Moroccan Ministry of Tourism — Official Guide Licence", detail: "Licensed since 2008. The Ministry licence is the gold standard for professional guides in Morocco — awarded after formal training, examination, and annual renewal." },
  { title: "First Aid Certificate", detail: "Current first aid certification ensures Idrissi can respond appropriately to any medical situation during a tour — a standard we consider non-negotiable." },
  { title: "Fédération Nationale des Guides Touristiques du Maroc", detail: "Active member of Morocco's national professional association for tour guides, committed to the standards and ethics of the profession." },
];

const faqs = [
  { q: "Is Idrissi a certified guide?", a: "Yes. Idrissi holds an official guide licence from the Moroccan Ministry of Tourism, first granted in 2008 and continuously renewed. He is also a member of the Fédération Nationale des Guides Touristiques du Maroc." },
  { q: "Does Idrissi speak Hebrew?", a: "Yes. Idrissi speaks Hebrew and has led numerous tours for Israeli families and diaspora Jews returning to trace their Moroccan roots. His Hebrew fluency, combined with deep knowledge of Moroccan Jewish history, makes him uniquely qualified for these tours." },
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
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              About Idrissi —<br />Licensed Professional Tour Guide<br />in Tangier, Morocco
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[var(--gold)]" /> Licensed since 2008</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[var(--gold)]" /> 4.9 ★ average rating</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-[var(--gold)]" /> 5 languages</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[var(--gold)]" /> 500+ tours</span>
            </div>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl text-navy mb-6 gold-divider-left">Biography</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Idrissi was born and raised in the Medina of Tangier — the ancient walled city at the meeting point of the Atlantic and the Mediterranean, Africa and Europe, Islam and a dozen other civilisations. He grew up in its alleyways, learned its rhythms and its secrets, and understood from an early age that Tangier was not merely a beautiful city but an extraordinarily complex one: a place where layer upon layer of history could be read in a single street, a single doorway, a single face. That understanding became a vocation.
            </p>
            <p>
              After completing secondary education in Tangier, Idrissi studied Tourism and History at the Université Abdelmalek Essaadi — the city&apos;s principal university — gaining a formal grounding in Moroccan cultural heritage, tourism management, and the history of North Africa. He received his official guide licence from the Moroccan Ministry of Tourism in 2008, following the national examination programme that tests candidates on history, geography, languages, and professional conduct. Since then, he has led more than 500 private tours and has welcomed clients from over 40 countries — families, solo travellers, academic researchers, cruise passengers, and heads of state.
            </p>
            <p>
              Over the years, Idrissi has developed a particular specialisation in Jewish heritage tourism — a niche that emerged naturally from his deep engagement with Tangier&apos;s history and from the growing number of visitors seeking to understand Morocco&apos;s extraordinary Jewish past. He taught himself Hebrew specifically to serve Israeli and diaspora clients, and has spent years studying the history of the Moroccan Jewish communities in detail: their origins, their institutions, their relationship with Muslim neighbours and Moroccan rulers, and the bittersweet story of their post-1948 dispersal. He is known within the Jewish heritage travel community for the depth of his knowledge and the sensitivity with which he guides families through what are often deeply emotional encounters with history.
            </p>
            <p>
              Beyond heritage tours, Idrissi leads shore excursions for cruise passengers, full-day trips to Chefchaouen, camel rides at Cape Spartel, and private transfers across northern Morocco. His 4.9-star average across review platforms reflects not just knowledge but a fundamental quality that no training programme teaches: the ability to make every visitor feel that this tour was made specifically for them — because it was.
            </p>
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

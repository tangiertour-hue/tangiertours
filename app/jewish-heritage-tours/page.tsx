import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Star, CheckCircle, ArrowRight, BookOpen, Shield, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jewish Heritage Tours in Morocco — Tangier & Casablanca | TangierTours",
  description:
    "Discover Jewish heritage Morocco on a private guided tour. Explore Morocco Jewish history across 2,000 years — Mellah quarters, synagogues, cemeteries. Jewish tour Morocco with a Hebrew-speaking guide.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Jewish Heritage Tours in Morocco",
  description: "Private guided tours exploring 2,000 years of Jewish history in Morocco — Tangier, Casablanca, and beyond.",
  url: "https://www.tangiertours.ma/jewish-heritage-tours",
  address: { "@type": "PostalAddress", addressLocality: "Tangier", addressCountry: "MA" },
  touristType: ["Cultural Tourism", "Heritage Tourism", "Jewish Heritage"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Morocco safe for Jewish travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morocco is widely considered one of the safest Muslim-majority countries for Jewish visitors. King Mohammed VI has consistently championed Jewish heritage preservation, and the country maintains diplomatic ties with Israel. Travellers from Israel, France, and the US visit regularly and are warmly welcomed.",
      },
    },
    {
      "@type": "Question",
      name: "What Jewish sites are in Morocco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morocco has extraordinary Jewish heritage sites: the Tangier Mellah, Ben Chimol Synagogue, the Jewish Cemetery in Tangier, Beth El Synagogue in Casablanca, the Museum of Moroccan Judaism (the only Jewish museum in the Arab world), and many more across Fez, Marrakech, and Essaouira.",
      },
    },
    {
      "@type": "Question",
      name: "Does the tour guide speak Hebrew?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guide Idrissi speaks Hebrew and has studied Moroccan Jewish history extensively. He is known for the depth and sensitivity he brings to these tours, many of which serve families returning to trace their ancestral roots.",
      },
    },
    {
      "@type": "Question",
      name: "Can you arrange a Shabbat meal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can help arrange a traditional Moroccan-Jewish Shabbat dinner in Tangier or Casablanca with advance notice. Please mention this when enquiring and we will do our best to coordinate with local Jewish families or restaurants.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Jewish heritage tour take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tangier Jewish Heritage Tour typically runs 3–4 hours. The Casablanca tour is 4–5 hours. We can combine both as a two-day itinerary, or extend either tour with lunch at a local kosher-style restaurant and additional family history research time.",
      },
    },
  ],
};

const sites = [
  { name: "Tangier Mellah", city: "Tangier", desc: "The historic Jewish quarter at the heart of the old medina — centuries of community life preserved in its alleys and architecture." },
  { name: "Ben Chimol Synagogue", city: "Tangier", desc: "One of the last active synagogues in northern Morocco, still holding services and beautifully maintained by the dwindling but devoted community." },
  { name: "Jewish Cemetery Tangier", city: "Tangier", desc: "A remarkably well-preserved cemetery where families can trace ancestors and connect with names and dates going back generations." },
  { name: "Beth El Synagogue (1913)", city: "Casablanca", desc: "An architectural gem in the heart of Casablanca — Moorish arches, intricate tilework, and an active congregation since the early 20th century." },
  { name: "Habous Quarter", city: "Casablanca", desc: "The 1930s French-built 'New Mellah' blends colonial town planning with Moroccan Jewish commercial life — Jewish-owned shops and bakeries still dot the streets." },
  { name: "Museum of Moroccan Judaism", city: "Casablanca", desc: "The only Jewish museum in the Arab world. An extraordinary collection of Torah scrolls, marriage contracts, photographs, and everyday objects spanning a millennium." },
];

const testimonials = [
  {
    name: "Miriam K.",
    origin: "Tel Aviv, Israel",
    text: "I came to Tangier to find my grandmother's house. Idrissi not only found the street — he knew its history better than any book. He spoke Hebrew throughout, and the emotional depth he brought to every site moved me to tears. An unforgettable experience.",
    stars: 5,
  },
  {
    name: "David R.",
    origin: "New York, USA",
    text: "As an American Jew with Moroccan roots, I had low expectations — I'd been on 'heritage tours' before that felt hollow. This was completely different. Idrissi's knowledge of Moroccan Jewish history is encyclopedic, and his personal warmth made it feel like we were walking through history with a friend.",
    stars: 5,
  },
  {
    name: "Sophie L.",
    origin: "Paris, France",
    text: "Ma famille est originaire de Tanger et je voulais comprendre d'où nous venons. Idrissi a su mêler rigueur historique et sensibilité humaine. J'ai quitté le Maroc avec un sentiment de réconciliation que je n'attendais pas.",
    stars: 5,
  },
];

const faqs = [
  { q: "Is Morocco safe for Jewish travelers?", a: "Morocco is one of the safest Muslim-majority countries for Jewish visitors. King Mohammed VI has actively championed Jewish heritage, the country has diplomatic relations with Israel, and Jewish travellers from Israel, France, and the US visit regularly and are welcomed warmly." },
  { q: "What Jewish sites are in Morocco?", a: "Morocco has remarkable Jewish heritage: the Tangier and Casablanca Mellahs, multiple active and historic synagogues, the Museum of Moroccan Judaism (the only Jewish museum in the Arab world), cemeteries, and community buildings across Tangier, Casablanca, Fez, and Marrakech." },
  { q: "Does the tour guide speak Hebrew?", a: "Yes. Guide Idrissi speaks Hebrew and has studied Moroccan Jewish history extensively. Many of his clients are Israeli families returning to trace their ancestral roots." },
  { q: "Can you arrange a Shabbat meal?", a: "With advance notice we can help arrange a traditional Moroccan-Jewish Shabbat dinner. Please mention this when booking." },
  { q: "How long does a Jewish heritage tour take?", a: "The Tangier tour is 3–4 hours; Casablanca 4–5 hours. We can combine both into a two-day itinerary including private transfers between the cities." },
];

export default function JewishHeritageHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 text-center overflow-hidden" style={{minHeight:"420px"}}>
          <Image src="/hero-jewish-heritage.jpg" alt="Historic Jewish Mellah quarter Morocco with ancient synagogue and ornate Moorish-Jewish architecture" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(15,31,61,0.72) 0%,rgba(15,31,61,0.58) 60%,rgba(15,31,61,0.80) 100%)"}} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Jewish Heritage Tours" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Jewish Heritage Tours in Morocco —<br />Discover 2,000 Years of History
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mt-6">
              Private guided tours through Morocco's extraordinary Jewish world — Tangier, Casablanca, and beyond. Led by a Hebrew-speaking local guide with deep historical expertise and genuine human warmth.
            </p>
          </div>
        </section>

        {/* Authoritative Intro */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Morocco is home to one of the oldest continuous Jewish communities on earth. Long before the Arab conquests, before the Byzantine empire reshaped North Africa, Jewish traders and artisans were already established in the cities that would become Tangier, Fez, and Volubilis. Scholars trace the first Jewish settlers in Morocco to the era of the First Temple, more than 2,500 years ago — families who arrived with Phoenician traders or fled the destruction of Jerusalem. Their descendants built communities that would survive Roman rule, the Vandal invasions, the Arabisation of North Africa, and the expulsion of 1492, when hundreds of thousands of Sephardic Jews chose Morocco as their new home rather than convert to Christianity under the Spanish Inquisition.
            </p>
            <p>
              Central to Morocco&apos;s Jewish story is the <em>Mellah</em> — the distinct Jewish quarter found in every major Moroccan city. Unlike the ghettos of medieval Europe, the Mellah in Morocco was often established under royal protection. Sultans recognised Jewish merchants as invaluable intermediaries between Morocco and the wider world, granting them autonomy, communal institutions, and security in exchange for loyalty and commercial expertise. This compact between the Moroccan crown and its Jewish subjects endured for centuries and was explicitly honoured by King Mohammed VI, who has personally funded the restoration of synagogues, cemeteries, and community buildings, and who regularly attends commemorations of Jewish Moroccan heritage. His words are unambiguous: &ldquo;Moroccan Jews are a part of Morocco&apos;s identity.&rdquo;
            </p>
            <p>
              Today, Morocco draws Jewish diaspora visitors from three main communities: Israeli families whose grandparents or great-grandparents emigrated after 1948 or 1967; French Jews of Moroccan origin — the largest single diaspora group — who grew up hearing stories of Casablanca, Tangier, and Marrakech; and American Jewish travellers motivated by curiosity, genealogical research, or a desire to understand a chapter of Jewish history rarely taught in Western schools. What unites them is the discovery that Morocco is not a country where Jews merely survived — it is a country where Jews <em>thrived</em>, left an indelible mark, and are remembered with genuine pride by the Muslim majority. Our tours are designed to honour that complexity with the depth it deserves.
            </p>
          </div>
        </section>

        {/* Tour Cards */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Our Jewish Heritage Tours</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                {
                  title: "Tangier Jewish Heritage Tour",
                  subtitle: "Mellah, Synagogues & Living History",
                  desc: "Walk the alleys of the Tangier Mellah, visit the Ben Chimol Synagogue, explore the Jewish cemetery, and trace the footsteps of a community that shaped this city for 2,000 years.",
                  duration: "3–4 hours",
                  href: "/jewish-heritage-tours/tangier",
                },
                {
                  title: "Casablanca Jewish Heritage Tour",
                  subtitle: "Beth El, Mellah & the Oasis Museum",
                  desc: "Discover the Beth El Synagogue (1913), walk the French-built Habous Quarter, and visit the Museum of Moroccan Judaism — the only Jewish museum in the Arab world.",
                  duration: "4–5 hours",
                  href: "/jewish-heritage-tours/casablanca",
                },
              ].map((tour) => (
                <div key={tour.href} className="bg-white/10 border border-[var(--gold)] rounded-lg p-6 flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-1">{tour.title}</h3>
                  <p className="text-[var(--gold)] text-sm mb-3 italic">{tour.subtitle}</p>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">{tour.desc}</p>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-gray-400 text-xs">⏱ {tour.duration}</span>
                    <Link href={tour.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold)] hover:text-white transition-colors">
                      View Tour <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Sites */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy text-center mb-2 gold-divider">Key Sites You&apos;ll Visit</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {sites.map((site) => (
              <div key={site.name} className="bg-white rounded-lg border border-[var(--border-warm)] p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] mb-2 block">{site.city}</span>
                <h3 className="font-display text-lg text-navy mb-2">{site.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{site.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Idrissi */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-white mb-2 gold-divider">Why Tour with Idrissi?</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {[
                { icon: Globe, title: "Speaks Hebrew", body: "Idrissi communicates fluently in Hebrew, making Israeli and diaspora families feel truly at home." },
                { icon: BookOpen, title: "Deep Historical Knowledge", body: "He has spent years studying Moroccan Jewish history — from the Mellah's founding to today's diaspora returns." },
                { icon: Shield, title: "Respectful & Sensitive", body: "Every tour is conducted with the gravity and tenderness these sites and stories deserve." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy mb-2 gold-divider-left">Is Morocco Safe for Jewish Travelers?</h2>
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              The short answer is yes — and the longer answer is that Morocco is not merely safe for Jewish visitors, it is actively welcoming. King Mohammed VI has made the preservation of Jewish Moroccan heritage a personal priority, funding synagogue restorations and establishing the Mimouna Museum in Marrakech. Morocco was one of the first Arab countries to normalise relations with Israel under the 2020 Abraham Accords, and direct El Al flights now connect Tel Aviv to Casablanca and Marrakech.
            </p>
            <p>
              Moroccan culture values hospitality above almost everything else. The concept of <em>l&apos;marhba</em> — the warm welcome — extends to every visitor regardless of background. Our Jewish heritage tour clients consistently report that interactions with local residents — in the Mellah, at the synagogue, in the souks — are characterised by curiosity, warmth, and genuine pride in a shared history. Morocco is not a country that has buried its Jewish past. It celebrates it.
            </p>
            <div className="flex items-start gap-3 bg-white border border-[var(--border-warm)] rounded-lg p-4 mt-4">
              <CheckCircle className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                <strong>Practical note:</strong> There are no restrictions on visitors carrying Jewish religious items. Israeli passports are accepted. Several kosher-certified restaurants operate in Casablanca. Shabbat services take place regularly at active synagogues in both Tangier and Casablanca.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">What Our Guests Say</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/10 border border-white/20 rounded-lg p-5 flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.origin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 py-16">
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
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book a Jewish Heritage Tour</h2>
          <BookingForm tourOptions={["Tangier Jewish Heritage Tour", "Casablanca Jewish Heritage Tour", "Combined Tangier + Casablanca (2-day)", "Custom Jewish Heritage Itinerary"]} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, Users, MapPin, Star, ArrowRight, Train, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casablanca Jewish Heritage Tour — Beth El Synagogue & Mellah | TangierTours",
  description:
    "Discover Jewish heritage Casablanca on a private guided tour. Visit Beth El synagogue Casablanca (1913), the Habous Quarter Mellah, and the Museum of Moroccan Judaism. Expert guide Idrissi.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Casablanca Jewish Heritage Tour",
  description: "A private guided tour of Casablanca's Jewish heritage — Beth El Synagogue, Habous Quarter, Museum of Moroccan Judaism, and the Jewish Cemetery.",
  url: "https://www.tangiertours.ma/jewish-heritage-tours/casablanca",
  provider: { "@type": "LocalBusiness", name: "TangierTours" },
  offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  itinerary: [
    { "@type": "TouristAttraction", name: "Beth El Synagogue (1913)" },
    { "@type": "TouristAttraction", name: "Habous Quarter (New Mellah)" },
    { "@type": "TouristAttraction", name: "Museum of Moroccan Judaism" },
    { "@type": "TouristAttraction", name: "Jewish Cemetery of Casablanca" },
    { "@type": "TouristAttraction", name: "Boulevard Mohammed V" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get from Tangier to Casablanca for this tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a private transfer from Tangier to Casablanca (approx. 3.5 hours, from $180) or can arrange a drop at Tanger Ville station for the ONCF high-speed train (approx. 2h20). We recommend combining travel and the tour into a full-day excursion from Tangier.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Museum of Moroccan Judaism open every day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The museum is closed on Saturdays and Jewish holidays. We check the opening schedule before each booking and design the itinerary accordingly. It is one of the most extraordinary heritage institutions in North Africa and well worth building the day around.",
      },
    },
    {
      "@type": "Question",
      name: "Can this tour be combined with a general Casablanca city tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We can combine the Jewish heritage itinerary with a visit to the Hassan II Mosque, the Corniche, and Art Deco Boulevard Mohammed V for a full-day Casablanca experience.",
      },
    },
  ],
};

const itinerary = [
  {
    step: "01",
    title: "Beth El Synagogue (1913)",
    duration: "45 min",
    desc: "Built in 1913 at the heart of what was then the prosperous Jewish quarter, Beth El is a masterpiece of Moorish-influenced Jewish architecture — horseshoe arches, geometric tilework, and carved wooden screens that echo the great mosques and palaces of Morocco. It remains an active congregation, holding Friday evening and Shabbat services attended by the city's small but dedicated Jewish community. Idrissi explains the history of the synagogue, the families who funded its construction, and the resilience of the community that has kept it alive through a century of upheaval.",
  },
  {
    step: "02",
    title: "Habous Quarter — The New Mellah",
    duration: "45 min",
    desc: "The Habous is a peculiarly Moroccan paradox: a new neighbourhood built in the 1930s by the French colonial administration to deliberately evoke the feel of a traditional Moroccan medina — and it works beautifully. Designed partly as a residential and commercial quarter for Jewish families displaced by rapid urbanisation, it became the heart of Casablanca's Jewish commercial life. Idrissi walks you through its arcaded streets, pointing out the Jewish bakeries that still operate, the buildings that bear the names of Jewish families in their ironwork, and the human scale of a neighbourhood built for community life rather than motor traffic.",
  },
  {
    step: "03",
    title: "Museum of Moroccan Judaism",
    duration: "60 min",
    desc: "The only Jewish museum in the Arab world — and one of the most moving heritage institutions anywhere in North Africa. Founded in 1997 and housed in a restored building in the Oasis neighbourhood, the museum holds an extraordinary collection: ancient Torah scrolls, hand-illustrated marriage contracts (ketubot), ceremonial objects in silver and brass, photographs from early 20th-century Jewish life, and personal testimonies from community members across the diaspora. Idrissi moves through the collection with the fluency of someone who has spent years studying its context — bringing each object to life with its story rather than just its label.",
  },
  {
    step: "04",
    title: "Jewish Cemetery of Casablanca",
    duration: "40 min",
    desc: "One of the largest Jewish cemeteries in North Africa, this remarkable site covers several hectares and holds the graves of some of the most significant figures in Moroccan Jewish history — rabbis, merchants, artists, and community leaders. The white-marble tombs extend in serried rows, many bearing Hebrew and Judeo-Arabic inscriptions and small photographs of the deceased. For visiting families, Idrissi can help identify graves with advance notice. The cemetery is maintained with care and is a profound testament to the depth of Jewish roots in Moroccan soil.",
  },
  {
    step: "05",
    title: "Boulevard Mohammed V — The Former Jewish Commercial Heart",
    duration: "30 min",
    desc: "Casablanca's grandest avenue was designed in the 1930s as a showcase of French Art Deco urbanism — and along it, Jewish merchants built some of the city's most impressive commercial premises. Department stores, import-export houses, jewellers, and banks bearing Jewish family names lined both sides of the boulevard at its peak. Idrissi traces this architectural and commercial legacy, discussing the role of Jewish entrepreneurs in building modern Casablanca and the gradual transformation of the street after the emigrations of the 1950s and 1960s.",
  },
];

const testimonials = [
  {
    name: "Danielle F.",
    origin: "Lyon, France",
    text: "My grandfather left Casablanca in 1961 and never spoke about it. After this tour I understand why — and I understand what he lost. The Museum of Moroccan Judaism left me speechless. Idrissi's knowledge of the details — the neighbourhood names, the family histories, the specific streets — was astonishing. Je suis revenue transformée.",
    stars: 5,
  },
  {
    name: "Jonathan S.",
    origin: "London, UK",
    text: "The best heritage experience I've had anywhere in the world. Idrissi combines the rigour of a historian with the warmth of a host. The museum alone is worth the trip to Casablanca. Extraordinary.",
    stars: 5,
  },
];

const faqs = [
  { q: "How do I get from Tangier to Casablanca for this tour?", a: "We offer a private transfer (approx. 3.5 hours, from $180) or can arrange a drop at Tanger Ville station for the ONCF high-speed train. We recommend combining travel and the tour as a full-day excursion from Tangier." },
  { q: "Is the Museum of Moroccan Judaism open every day?", a: "The museum is closed on Saturdays and Jewish holidays. We check opening schedules before each booking and design the itinerary around confirmed hours." },
  { q: "Can this tour be combined with a general Casablanca city tour?", a: "Yes. We can add the Hassan II Mosque, the Corniche, and Art Deco architecture to create a full-day Casablanca experience." },
];

export default function CasablancaJewishTourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Jewish Heritage Tours", href: "/jewish-heritage-tours" }, { label: "Casablanca" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Casablanca Jewish Heritage Tour —<br />Beth El Synagogue, Mellah &amp; Oasis Museum
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[var(--gold)]" /> 4–5 hours</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[var(--gold)]" /> Private group</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[var(--gold)]" /> Casablanca city tour</span>
            </div>
          </div>
        </section>

        {/* Historical Intro */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl text-navy mb-6 gold-divider-left">Casablanca — Heart of Moroccan Jewish Life in the 20th Century</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              When most people think of Jewish history in Morocco, Fez and Marrakech come to mind — ancient cities with ancient communities. But it was Casablanca that became the defining centre of Moroccan Jewish life in the 20th century, drawing migrants from across the country to its rapidly expanding port city and creating a Jewish population that at its peak, in the 1940s, numbered more than 80,000 souls. That figure made Casablanca home to one of the largest Jewish communities in the Arab world — larger than many European capitals, and far more prosperous than the Jewish communities of most surrounding countries.
            </p>
            <p>
              The story of Casablanca&apos;s Jewish community is inseparable from the story of the city itself. When the French established Casablanca as Morocco&apos;s commercial capital in the early 20th century, Jewish families from the traditional Mellahs of Fez, Marrakech, and Mogador arrived in large numbers, drawn by commercial opportunity and relative freedom. They built synagogues, schools, and community institutions with speed and confidence. By the 1930s, Jewish merchants dominated several key sectors — textiles, jewellery, banking, and the import-export trade. The Boulevard Mohammed V, laid out in high Art Deco style, was lined with Jewish-owned businesses. The Alliance Israélite schools produced a generation of bilingual, cosmopolitan professionals who moved easily between the Mellah, the French quarter, and the wider world.
            </p>
            <p>
              The establishment of Israel in 1948, the riots of 1948 and 1952, and the outcome of the 1967 Six Day War each accelerated an emigration that progressively hollowed out what had been a vibrant community. By the 1980s, fewer than 8,000 Jews remained in Morocco — the majority in Casablanca. Today, the community numbers around 2,500 nationally, concentrated in the city. Yet Casablanca retains more active Jewish institutions than any other city in Morocco: functioning synagogues, a kosher restaurant scene, a communal organisation, and above all the Museum of Moroccan Judaism — the only institution of its kind in the Arab world, a testament to a community that refuses to let its story be forgotten.
            </p>
          </div>
        </section>

        {/* Itinerary */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Tour Itinerary</h2>
            <div className="mt-10 space-y-6">
              {itinerary.map((stop) => (
                <div key={stop.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center font-bold text-navy text-sm">
                    {stop.step}
                  </div>
                  <div className="flex-1 bg-white/10 border border-white/20 rounded-lg p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-lg text-white">{stop.title}</h3>
                      <span className="text-xs text-[var(--gold)] bg-white/10 px-2 py-0.5 rounded-full">⏱ {stop.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="font-display text-3xl text-navy mb-2 gold-divider-left">Getting to Casablanca</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[var(--border-warm)] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <Train className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-lg text-navy">High-Speed Train (ONCF)</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">The Al Boraq high-speed train connects Tanger Ville station to Casablanca Casa Voyageurs in approximately 2 hours 20 minutes. A comfortable, reliable option — we can arrange a drop-off at Tanger Ville and meet you on arrival in Casablanca.</p>
              <p className="text-gray-500 text-xs">Journey: ~2h20 · Departs from Tanger Ville station</p>
            </div>
            <div className="bg-white border border-[var(--border-warm)] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-lg text-navy">Private Transfer</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Door-to-door from your Tangier hotel to your Casablanca hotel, or directly to the first tour stop. Approximately 3.5 hours via the A1 motorway. Most comfortable for families and larger groups.</p>
              <p className="text-gray-500 text-xs">Journey: ~3.5 hrs · From $180 per vehicle</p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <h2 className="font-display text-2xl text-navy text-center mb-6">Related Tours &amp; Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Tangier Jewish Heritage Tour", href: "/jewish-heritage-tours/tangier", icon: BookOpen },
              { label: "Private Transfers (Tangier–Casa)", href: "/tours/private-morocco-transfers", icon: MapPin },
              { label: "Jewish Heritage Hub", href: "/jewish-heritage-tours", icon: Users },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="flex items-center gap-3 border border-[var(--gold)] rounded-lg p-4 hover:bg-[var(--gold)] hover:text-white transition-colors group">
                  <Icon className="w-5 h-5 text-[var(--gold)] group-hover:text-white flex-shrink-0" />
                  <span className="text-sm font-semibold text-navy group-hover:text-white">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-navy py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-white text-center mb-2 gold-divider">Guest Experiences</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/10 border border-white/20 rounded-lg p-5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 pt-3 border-t border-white/20">
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
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book the Casablanca Jewish Heritage Tour</h2>
          <BookingForm tourOptions={["Casablanca Jewish Heritage Tour", "Casablanca Jewish Tour + City Tour", "Tangier + Casablanca Combined (2-day)"]} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

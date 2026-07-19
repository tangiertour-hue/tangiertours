import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Clock, Users, Star, ArrowRight, BookOpen, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tangier Jewish Heritage Tour — Mellah, Synagogues & History | TangierTours",
  description:
    "Explore the Tangier Jewish quarter on a private guided tour. Visit Ben Chimol Synagogue, the Jewish Cemetery, and the Tangier Mellah. Expert Hebrew-speaking guide Idrissi.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier Jewish Heritage Tour",
  description: "A private guided walking tour of Tangier's Jewish heritage — Mellah, synagogues, cemetery, and historic community buildings.",
  url: "https://www.tangiertours.ma/jewish-heritage-tours/tangier",
  provider: { "@type": "LocalBusiness", name: "TangierTours" },
  offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  itinerary: [
    { "@type": "TouristAttraction", name: "Tangier Mellah (Jewish Quarter)" },
    { "@type": "TouristAttraction", name: "Ben Chimol Synagogue" },
    { "@type": "TouristAttraction", name: "Jewish Cemetery Tangier" },
    { "@type": "TouristAttraction", name: "Former Jewish Schools & Community Buildings" },
    { "@type": "TouristAttraction", name: "Grand Socco" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is the Tangier Jewish Heritage Tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The walking tour takes 3–4 hours at a relaxed pace. It can be combined with a broader Tangier private tour for a full-day experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do genealogy research during the Tangier Jewish tour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guide Idrissi has extensive experience helping families trace their Moroccan Jewish roots. He can access local records and cemetery inscriptions, and advise on archival resources for deeper research.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Ben Chimol Synagogue open to visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The synagogue is generally accessible with advance arrangement, which we coordinate on your behalf. Visits are conducted respectfully and with the blessing of the community — modest dress is appreciated.",
      },
    },
  ],
};

const itinerary = [
  {
    step: "01",
    title: "Tangier Mellah — The Jewish Quarter",
    duration: "45 min",
    desc: "We begin where the community lived for centuries. The Tangier Mellah sits at the eastern edge of the Medina, a labyrinth of narrow lanes, ornate doorways, and balconied houses that speak of a prosperous, confident community. Unlike the Mellahs of Fez or Marrakech, Tangier's Jewish quarter was never fully walled — reflecting the city's uniquely cosmopolitan character as an international zone. Your guide Idrissi traces the neighbourhood's evolution from the 15th century to the post-1948 emigrations, explaining how it looked and sounded at its height, and how it survives today.",
  },
  {
    step: "02",
    title: "Ben Chimol Synagogue",
    duration: "30 min",
    desc: "One of the last active synagogues in northern Morocco, Ben Chimol is a treasure hidden behind an unassuming street facade. Step inside and discover a beautifully maintained sanctuary — handmade tiles, painted wooden ceilings, and Torah scrolls that have survived centuries of history. Idrissi explains the synagogue's significance to the dwindling but devoted Tangier Jewish community, and the meaning of the religious objects and texts you see around you. Visits are coordinated with the community and conducted with respect.",
  },
  {
    step: "03",
    title: "Jewish Cemetery of Tangier",
    duration: "40 min",
    desc: "The Jewish cemetery is one of the most moving sites in Tangier — hundreds of white-marble tombs spread across a hillside, many bearing names and dates that stretch back 300 years. For families with Moroccan Jewish heritage, this is often the emotional centre of the visit. Idrissi helps identify family names, reads Hebrew and Judeo-Arabic inscriptions, and shares what is known about notable families buried here. Genealogical research assistance is available with advance notice.",
  },
  {
    step: "04",
    title: "Former Jewish Schools & Community Buildings",
    duration: "30 min",
    desc: "The Alliance Israélite Universelle operated schools across Morocco from the 1860s onwards, educating generations of Moroccan Jews in French alongside Hebrew and Arabic. Tangier's former AIU school building still stands, as do several other community institutions that shaped Jewish life in the city. Idrissi narrates the role of education in the community's rise and adaptation, and the bittersweet fate of these buildings after the mass emigrations.",
  },
  {
    step: "05",
    title: "Grand Socco — Where Cultures Converged",
    duration: "20 min",
    desc: "We end at the Grand Socco, the great square that connects the Medina to the European city — and for centuries, the marketplace where Jewish merchants, Muslim traders, Berber farmers, and European diplomats all converged. Idrissi brings this crossroads to life with stories of the Jewish commercial families who once dominated the import-export trade and financed the city's growth. A fitting finale to a tour that is, above all, a story of extraordinary human resilience.",
  },
];

const testimonials = [
  {
    name: "Yael B.",
    origin: "Tel Aviv, Israel",
    text: "My family left Tangier in 1967. Idrissi walked me to the house my grandfather described in his letters — it was still there. I stood in front of it in silence for a long time. He understood exactly what that moment meant. I cannot recommend this experience highly enough.",
    stars: 5,
  },
  {
    name: "Robert M.",
    origin: "Miami, USA",
    text: "The cemetery visit alone was worth the entire trip to Morocco. Idrissi found my great-grandmother's grave within minutes and read the inscription as though he'd been expecting us. His knowledge and his humanity made this an experience I'll carry for the rest of my life.",
    stars: 5,
  },
];

const faqs = [
  { q: "How long is the Tangier Jewish Heritage Tour?", a: "The walking tour takes 3–4 hours at a relaxed pace. It can be extended or combined with a broader Tangier city tour for a full-day experience." },
  { q: "Can I do genealogy research during the tour?", a: "Yes. Idrissi has extensive experience helping families trace Moroccan Jewish roots. He can access local records, read cemetery inscriptions, and advise on archival resources." },
  { q: "Is the Ben Chimol Synagogue open to visitors?", a: "Generally accessible with advance arrangement, which we coordinate on your behalf. Visits are conducted respectfully and with the blessing of the local community." },
];

export default function TangierJewishTourPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Jewish Heritage Tours", href: "/jewish-heritage-tours" }, { label: "Tangier" }]} />
            <h1 className="font-display text-4xl md:text-5xl text-white mt-6 mb-6 leading-tight gold-divider">
              Tangier Jewish Heritage Tour —<br />The Mellah, Synagogues &amp; Living History
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[var(--gold)]" /> 3–4 hours</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[var(--gold)]" /> Private group</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[var(--gold)]" /> Walking tour — Tangier Medina</span>
            </div>
          </div>
        </section>

        {/* Historical Intro */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="font-display text-2xl text-navy mb-6 gold-divider-left">A Community Rooted in Ancient Soil</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              The Jewish community of Tangier is among the oldest in the western Mediterranean. Jewish traders are believed to have first settled in the region during the Phoenician era, establishing themselves at the northern tip of Africa where the Atlantic meets the Mediterranean — the strategic crossroads they would occupy and shape for the next two and a half millennia. Under the Romans, who knew the city as <em>Tingis</em>, the community grew and built its first permanent institutions. Under successive Berber dynasties, it prospered. And when the Muslim Arab armies swept across North Africa in the 7th century, the Jewish community found a modus vivendi that, for all its tensions and occasional ruptures, proved remarkably durable.
            </p>
            <p>
              The great transformation came in 1492, when Spain expelled its Jewish population under Ferdinand and Isabella. Tens of thousands of Sephardic Jews — heirs to the rich Iberian Jewish civilisation — crossed the Strait of Gibraltar and settled in Moroccan cities, bringing with them their Ladino language, their unique traditions, and a profound sense of loss that shaped their culture for generations. Tangier's Jewish population swelled. New synagogues were built, new family dynasties established, new trades founded. The Moroccan sultans, recognising the value of these immigrants as merchants, diplomats, and translators, extended royal protection to the community — protection that was, on the whole, honoured.
            </p>
            <p>
              By the time Tangier became an international zone in 1923, its Jewish community was one of the most cosmopolitan in the world — Sephardic families who had been in Morocco for centuries rubbing shoulders with Ashkenazi refugees from Eastern Europe, with Italian and British Jews who had followed commerce to this peculiar stateless city, and with Moroccan-born intellectuals educated at Alliance Israélite schools in French and Hebrew simultaneously. At its height in the 1940s, Tangier&apos;s Jewish population numbered over 12,000. The establishment of Israel in 1948 and the subsequent Arab-Israeli conflicts triggered a gradual emigration that has reduced the community to a few hundred today — but the physical traces of that extraordinary world remain, waiting to be read by those who know where to look.
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

        {/* Genealogy Section */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white border border-[var(--border-warm)] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <Search className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h2 className="font-display text-2xl text-navy">Genealogy Research</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many visitors come not just to learn history in general, but to find <em>their</em> history in particular. Idrissi has spent years developing expertise in Moroccan Jewish genealogical research and has helped dozens of families trace their roots to specific streets, homes, synagogues, and gravestones in Tangier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are travelling to Tangier to research your family background, please share what you know when booking — family names, the city or quarter they lived in, approximate dates of emigration. With this information, Idrissi can prepare targeted research before your arrival, cross-referencing cemetery records, community registers, and local oral history to make the most of your visit.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              He can also advise on remote archival resources — including the Mimouna Association in Casablanca, the Alliance Israélite Universelle archives in Paris, and the database of the National Library of Israel — for those who wish to continue research after returning home.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <h2 className="font-display text-2xl text-navy text-center mb-6">Related Tours &amp; Information</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Casablanca Jewish Heritage Tour", href: "/jewish-heritage-tours/casablanca", icon: BookOpen },
              { label: "About Guide Idrissi", href: "/about", icon: Users },
              { label: "Jewish Heritage Hub", href: "/jewish-heritage-tours", icon: MapPin },
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
          <h2 className="font-display text-2xl text-navy text-center mb-8">Book the Tangier Jewish Heritage Tour</h2>
          <BookingForm tourOptions={["Tangier Jewish Heritage Tour", "Tangier Jewish Tour + Full-Day Tangier", "Tangier + Casablanca Combined (2-day)"]} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

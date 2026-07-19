import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "The Complete Guide to Morocco's Jewish Heritage Sites | TangierTours Blog",
  description:
    "Discover Morocco's extraordinary 2,000-year Jewish history. A complete guide to the Mellah, synagogues, museums, and cemeteries of Tangier, Casablanca, Fez and beyond — written by a specialist local guide.",
  keywords:
    "Jewish heritage Morocco, Morocco Jewish history, Mellah Morocco, Jewish sites Morocco, Tangier Jewish quarter, Casablanca Jewish heritage, Museum of Moroccan Judaism",
  openGraph: {
    title: "The Complete Guide to Morocco's Jewish Heritage Sites",
    description:
      "2,000 years of Moroccan Jewish history — Mellah quarters, synagogues, museums, and cemeteries across Tangier, Casablanca, Fez and beyond.",
    type: "article",
    publishedTime: "2025-09-15",
    authors: ["Idrissi — TangierTours"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Complete Guide to Morocco's Jewish Heritage Sites",
  description:
    "A comprehensive guide to Morocco's 2,000-year Jewish history, covering the Mellah quarters, synagogues, cemeteries and museums of Tangier, Casablanca, Fez and Marrakech.",
  author: { "@type": "Person", name: "Idrissi", url: "https://www.tangiertours.ma/about" },
  publisher: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  datePublished: "2025-09-15",
  dateModified: "2025-09-15",
  url: "https://www.tangiertours.ma/blog/jewish-heritage-morocco",
  image: "https://www.tangiertours.ma/blog-jewish-heritage-guide.jpg",
  mainEntityOfPage: "https://www.tangiertours.ma/blog/jewish-heritage-morocco",
  keywords: "Jewish heritage Morocco, Morocco Jewish history, Mellah, Tangier, Casablanca",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

const tocItems = [
  { anchor: "intro",     label: "Introduction" },
  { anchor: "history",   label: "2,000 Years of History" },
  { anchor: "tangier",   label: "Jewish Heritage: Tangier" },
  { anchor: "casablanca",label: "Jewish Heritage: Casablanca" },
  { anchor: "fez",       label: "Jewish Heritage: Fez" },
  { anchor: "marrakech", label: "Jewish Heritage: Marrakech" },
  { anchor: "practical", label: "Planning Your Visit" },
  { anchor: "faq",       label: "FAQ" },
];

const citySites = [
  {
    city: "Tangier",
    anchor: "tangier",
    intro: "Tangier's Jewish community is one of the oldest in Morocco, with roots stretching back to Phoenician and Roman times. At its peak in the early 20th century, Jewish residents made up roughly one-third of the city's population, shaping its architecture, commerce, and cultural identity in ways that are still legible today.",
    sites: [
      { name: "The Tangier Mellah", type: "Historic Quarter", desc: "The Jewish quarter of Tangier, established in the 15th century near the Grand Socco, was the commercial and social heart of the community. Unlike the enclosed Mellahs of Fez or Marrakech, Tangier's Jewish quarter was more open — a reflection of the city's unusually cosmopolitan, international character. Walking its streets today, you can still spot the characteristic tall, narrow houses with interior courtyards, Hebrew inscriptions above doorways, and the architectural DNA of a community that was simultaneously Moroccan, Sephardic, and European." },
      { name: "Ben Chimol Synagogue", type: "Active Synagogue", desc: "One of the last functioning synagogues in northern Morocco, the Ben Chimol Synagogue is a beautiful example of Moroccan-Jewish sacred architecture. Still used by the small remaining Jewish community for High Holiday services, it is occasionally open to respectful visitors through a guided tour — an experience that connects 500 years of continuous religious practice." },
      { name: "Jewish Cemetery of Tangier", type: "Cemetery", desc: "Stretching across a hillside near the Kasbah, Tangier's Jewish cemetery contains thousands of graves dating back several centuries. The white-painted tombs, Hebrew inscriptions, and family names — many recognisable to Sephardic families in France, Israel, and the Americas — make this one of the most moving sites on any Jewish heritage tour. Many visitors come specifically to trace family graves." },
      { name: "American Legation Museum", type: "Museum", desc: "While not exclusively a Jewish heritage site, the American Legation — the only US National Historic Landmark on foreign soil — contains important material on Tangier's Jewish community during the International Zone period (1923–1956), when Jews played a central role in the city's banking, diplomacy, and cultural life." },
    ],
  },
  {
    city: "Casablanca",
    anchor: "casablanca",
    intro: "Casablanca was home to the largest Jewish community in the Arab world — over 80,000 people at its peak in the 1950s. The community's influence on the city's commerce, architecture, and cultural life was immense. Today, while most have emigrated to France, Israel, Canada, and Spain, the physical legacy remains extraordinary.",
    sites: [
      { name: "Museum of Moroccan Judaism", type: "Museum", desc: "The jewel of Moroccan Jewish heritage travel: the only museum dedicated to Jewish culture in the Arab world. Located in the Oasis neighbourhood, its collection of over 1,000 objects — Torah scrolls, Hanukkah menorahs, marriage contracts (ketubot), Passover plates, embroidered textiles, and personal photographs — tells the story of 2,000 years of Jewish life in Morocco with extraordinary depth and care. The museum was founded in 1997 by Simon Levy and is a deeply moving experience for any visitor, regardless of background." },
      { name: "Beth El Synagogue", type: "Active Synagogue", desc: "Built in 1913 in a striking Moorish-Revival style, Beth El is one of the most beautiful synagogues in the Mediterranean world. Still functioning, it serves Casablanca's remaining Jewish community of approximately 2,500 people — one of the largest in the Arab world. The interior features carved stucco, mosaic floors, and a magnificent ark. Entry is by arrangement, usually through a guided tour." },
      { name: "Habous Quarter (New Mellah)", type: "Historic Quarter", desc: "Built in the 1930s by the French Protectorate administration as a planned neighbourhood blending Moroccan medina planning with European urban design, the Habous Quarter was largely populated by the Jewish community and retains strong traces of that history. Its arcaded streets, covered markets, kosher butchers (now mostly closed), and distinctive architecture make it one of the most atmospheric neighbourhoods in Casablanca." },
      { name: "Jewish Cemetery of Casablanca", type: "Cemetery", desc: "One of the largest Jewish cemeteries in North Africa, with over 50,000 graves spanning two centuries. Many prominent Casablanca Jewish families are buried here, and the cemetery is actively maintained by the local community. An essential stop for genealogy research and a quiet, dignified space for reflection." },
    ],
  },
  {
    city: "Fez",
    anchor: "fez",
    intro: "Fez contains what is perhaps the most intact and atmospheric Jewish quarter in Morocco — the Mellah, established in 1438 and one of the oldest in the country. At its height, the Fez Mellah housed over 10,000 Jewish residents in a densely packed neighbourhood of tall houses, covered markets, and synagogues.",
    sites: [
      { name: "Fez Mellah", type: "Historic Quarter", desc: "Established by the Merinid Sultan in 1438, the Fez Mellah is the oldest in Morocco and one of the most historically significant Jewish quarters in the world. The characteristic architecture — tall houses with ornate balconies overhanging the narrow streets, designed to maximise living space within the walls — is unique and immediately recognisable. The gold and jewellery souk at its entrance was historically dominated by Jewish craftsmen." },
      { name: "Ibn Danan Synagogue", type: "Historic Synagogue", desc: "A magnificently restored 17th-century synagogue, now a museum. The Ibn Danan Synagogue is considered one of the finest examples of Moroccan Jewish sacred architecture, with its hand-painted wooden ceiling, silver-decorated Torah arks, and underground mikveh (ritual bath) still intact. Restored with funding from the Moroccan government and American Jewish philanthropists, it is a testament to Morocco's commitment to preserving its Jewish heritage." },
      { name: "Haim Pinto Synagogue", type: "Pilgrimage Site", desc: "The tomb of Rabbi Haim Pinto — one of the most venerated figures in Moroccan Jewish tradition — draws pilgrims from Israel, France, and the Americas each year on his hillula (anniversary of death). The site remains an active place of prayer and reflection." },
    ],
  },
  {
    city: "Marrakech",
    anchor: "marrakech",
    intro: "The Marrakech Mellah, established in the 16th century by the Saadian dynasty, was at various points home to over 30,000 Jewish residents. Today the community has largely emigrated, but the physical heritage remains remarkably well-preserved.",
    sites: [
      { name: "Marrakech Mellah", type: "Historic Quarter", desc: "Located directly adjacent to the Royal Palace, the Marrakech Mellah has a unique character: its streets are wider than those of Fez or Tangier, its houses taller, and its balconies more ornate. The neighbourhood retains Jewish-owned shops, the famed gold and jewellery souk that Jewish craftsmen once dominated, and several synagogues in various states of preservation." },
      { name: "Lazama Synagogue", type: "Historic Synagogue", desc: "The most visited synagogue in Marrakech, founded in 1492 by Sephardic Jews expelled from Spain. Set around a beautiful courtyard with orange trees and a fountain, Lazama was recently restored and is open to visitors. Its whitewashed interior, painted in vivid blue and gold, is one of the most photogenic Jewish heritage sites in Morocco." },
      { name: "Jewish Cemetery of Marrakech", type: "Cemetery", desc: "A vast, atmospheric cemetery containing thousands of tombs, many painted brilliant white against the ochre Marrakech sky. The graves of several revered rabbis make this a site of pilgrimage as well as heritage tourism." },
    ],
  },
];

const faqs = [
  {
    q: "Is Morocco safe for Jewish travellers?",
    a: "Yes — Morocco is widely regarded as one of the safest and most welcoming countries in the world for Jewish visitors. King Mohammed VI has been a consistent champion of Morocco's Jewish heritage, funding the restoration of synagogues and cemeteries, and maintaining a royal tradition of friendship with the Jewish community that dates back centuries. The country normalised relations with Israel in 2020. Jewish visitors regularly report feeling not just safe, but genuinely welcomed.",
  },
  {
    q: "Do I need a specialist guide for Jewish heritage sites?",
    a: "For the deepest and most meaningful experience, yes. A specialist guide who speaks Hebrew, knows the historical context, and has relationships with the custodians of synagogues and cemeteries will unlock doors — literally and figuratively — that a standard tourist visit cannot. Many synagogues are not permanently open and require arrangement in advance.",
  },
  {
    q: "Can I research my family's Moroccan Jewish roots during a tour?",
    a: "Absolutely. Many Jewish families from Israel, France, Canada and the US have Moroccan roots, and heritage tours can be combined with genealogical research. The Museum of Moroccan Judaism in Casablanca maintains archives, and local guide Idrissi can help navigate cemeteries, community records, and local contacts to support family history research.",
  },
  {
    q: "What is the best time of year to visit Morocco for Jewish heritage travel?",
    a: "Spring (March–May) and autumn (September–November) offer the most comfortable temperatures for walking heritage sites. Passover (April) is a particularly meaningful time to visit, as some synagogues hold services. Avoid mid-summer (July–August) when heat can be intense, especially in inland cities like Fez and Marrakech.",
  },
  {
    q: "Can I combine Tangier and Casablanca on the same Jewish heritage trip?",
    a: "Yes, and it makes for an exceptional itinerary. Tangier and Casablanca are connected by Morocco's Al Boraq high-speed train (2h10), making a 3–4 day Jewish heritage journey — starting in Tangier and continuing to Casablanca — very comfortable. With private guide Idrissi, both cities can be combined into a single curated experience.",
  },
];

export default function BlogJewishHeritagePage() {
  faqSchema.mainEntity = faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* HERO */}
        <HeroSection />

        {/* ARTICLE BODY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

            {/* MAIN CONTENT */}
            <article className="min-w-0">
              <IntroSection />
              <HistorySection />
              <CitySitesSection />
              <PracticalSection />
              <FaqSection faqs={faqs} />
              <AuthorCta />
            </article>

            {/* SIDEBAR */}
            <Sidebar tocItems={tocItems} />
          </div>
        </div>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

/* ─── Sub-components ─── */

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "420px" }}>
      <Image
        src="/blog-jewish-heritage-guide.jpg"
        alt="Ancient synagogue interior Morocco with golden menorahs and zellige tiles"
        fill priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.68) 0%,rgba(15,31,61,0.52) 55%,rgba(15,31,61,0.82) 100%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Jewish Heritage Morocco" }]} />
        <div className="mt-6">
          <span className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Jewish Heritage · Morocco Culture
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            The Complete Guide to<br />
            <span className="text-gold">Morocco&apos;s Jewish Heritage Sites</span>
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Idrissi — TangierTours</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 15 September 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 12 min read</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="intro" className="mb-12">
      <p className="text-lg text-charcoal leading-relaxed mb-4 font-medium">
        Morocco is home to one of the oldest, richest, and most fascinating Jewish communities on earth. Long before the Arab conquests, before the Byzantine empire reshaped North Africa, Jewish families were already settled in the cities that would become Tangier, Fez, and Volubilis — merchants, scholars, and craftsmen whose descendants would build a civilisation that survived 2,500 years of change without losing its distinctiveness.
      </p>
      <p className="text-muted-text leading-relaxed mb-4">
        For travellers with Moroccan Jewish roots, this is a journey home. For those without, it is one of the most surprising and moving chapters in world history — a story of coexistence, culture, and continuity that challenges every assumption about the Middle East and North Africa.
      </p>
      <p className="text-muted-text leading-relaxed">
        This guide covers the essential Jewish heritage sites in the four major cities: Tangier, Casablanca, Fez, and Marrakech. I have written it as someone who has guided hundreds of Jewish families through these places, who speaks Hebrew, and who has spent fifteen years studying the history they embody. I hope it is useful — and I hope it inspires you to visit.
      </p>
      <p className="text-sm text-muted-text mt-4 italic border-l-4 border-gold pl-4">
        — Idrissi, Licensed Tour Guide, TangierTours
      </p>
    </section>
  );
}

function HistorySection() {
  return (
    <section id="history" className="mb-14">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">
        2,000 Years of Jewish History in Morocco
      </h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>
          The first Jewish communities in Morocco arrived with Phoenician traders, possibly as early as the 8th century BCE. By the time of the Roman Empire, Jewish settlements were established along the Atlantic and Mediterranean coasts — in the cities known today as Tangier, Volubilis, and Sala Colonia (near Rabat). These were not refugees or exiles, but active participants in the commercial and cultural life of the ancient Mediterranean world.
        </p>
        <p>
          The arrival of Islam in Morocco in the 7th century CE did not end Jewish community life — it transformed it. Under the <em>dhimmi</em> system, Jews and Christians were granted protected status as &ldquo;People of the Book,&rdquo; permitted to practise their religion and manage their own community affairs in exchange for the payment of a special tax. The relationship was complex and sometimes difficult, but it produced something extraordinary: fourteen centuries of continuous Jewish life in an Islamic country.
        </p>
        <p>
          The most transformative event in Moroccan Jewish history came in 1492, when the Spanish monarchs Ferdinand and Isabella expelled all Jews from Spain and its territories. Rather than convert, hundreds of thousands chose exile — and many chose Morocco. The Sephardic Jews who arrived brought with them the culture, language (Ladino), liturgy, and craftsmanship of medieval Spain. They settled in Fez, Marrakech, Meknes, Tetouan, and Tangier, revitalising existing communities and founding new ones. Their influence on Moroccan Jewish culture — its music, its cuisine, its religious practice — is still felt today.
        </p>
        <p>
          The 20th century brought dramatic change. The establishment of the State of Israel in 1948, combined with the tensions of the Arab-Israeli conflict, led to a wave of emigration that reduced Morocco&apos;s Jewish population from approximately 300,000 in 1948 to fewer than 3,000 today. Most went to Israel, France, Canada, and Spain. But many chose to stay — and those who remain are a living link to a history that Morocco&apos;s royal family has consistently honoured and preserved.
        </p>
        <div className="bg-navy/5 border-l-4 border-gold pl-5 py-3 rounded-r">
          <p className="text-navy font-semibold text-sm">
            King Mohammed VI has funded the restoration of dozens of synagogues and Jewish cemeteries across Morocco, stating publicly that &ldquo;Moroccan Jews are an integral part of the Moroccan nation.&rdquo; This royal commitment to Jewish heritage is unique in the Arab world — and it is the foundation of a tourism experience that is genuine, not performative.
          </p>
        </div>
      </div>
    </section>
  );
}
function CitySitesSection() {
  const typeColors: Record<string, string> = {
    "Historic Quarter": "bg-navy/10 text-navy",
    "Active Synagogue": "bg-green-100 text-green-800",
    "Historic Synagogue": "bg-gold/15 text-yellow-800",
    "Museum": "bg-blue-100 text-blue-800",
    "Cemetery": "bg-gray-100 text-gray-700",
    "Pilgrimage Site": "bg-purple-100 text-purple-800",
  };
  return (
    <div>
      {citySites.map((city) => (
        <section key={city.city} id={city.anchor} className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3 gold-divider-left">
            Jewish Heritage in {city.city}
          </h2>
          <p className="text-muted-text leading-relaxed mt-5 mb-7">{city.intro}</p>
          <div className="space-y-5">
            {city.sites.map((site) => (
              <div key={site.name} className="bg-white border border-border-warm rounded overflow-hidden">
                <div className="h-1 bg-gold" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-navy">{site.name}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${typeColors[site.type] ?? "bg-gray-100 text-gray-700"}`}>
                      {site.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-text leading-relaxed">{site.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {city.city === "Tangier" && (
            <div className="mt-6 bg-ivory border border-border-warm rounded p-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-muted-text">
                <strong className="text-navy">Book a specialist Tangier Jewish Heritage Tour</strong> — guided by Idrissi, Hebrew-speaking, 3–4 hours.
              </p>
              <Link href="/jewish-heritage-tours/tangier" className="shrink-0 inline-flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-4 py-2 rounded hover:bg-navy/90 transition">
                View Tour <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
          {city.city === "Casablanca" && (
            <div className="mt-6 bg-ivory border border-border-warm rounded p-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm text-muted-text">
                <strong className="text-navy">Book a specialist Casablanca Jewish Heritage Tour</strong> — full day, includes Museum of Moroccan Judaism & Beth El Synagogue.
              </p>
              <Link href="/jewish-heritage-tours/casablanca" className="shrink-0 inline-flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-4 py-2 rounded hover:bg-navy/90 transition">
                View Tour <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
function PracticalSection() {
  return (
    <section id="practical" className="mb-14">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">
        Planning Your Jewish Heritage Trip to Morocco
      </h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>
          A focused Jewish heritage trip to Morocco can be designed around 3 to 7 days, depending on how many cities you want to cover. A Tangier + Casablanca itinerary (3–4 days) is the most popular for travellers arriving by air into Tangier or Casablanca; a full northern Morocco circuit (5–7 days) adds Fez, Meknes, and optionally Marrakech.
        </p>
        <h3 className="font-display text-xl font-bold text-navy mt-6 mb-3">Suggested Itineraries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "3-Day: Tangier & Casablanca", items: ["Day 1: Tangier Mellah, Ben Chimol Synagogue, Jewish Cemetery", "Day 2: Al Boraq train to Casablanca", "Day 3: Museum of Moroccan Judaism, Beth El Synagogue, Habous Quarter"] },
            { title: "5-Day: Northern Morocco Heritage", items: ["Day 1–2: Tangier Jewish heritage + Medina", "Day 3: Drive to Fez via Meknes", "Day 4: Fez Mellah, Ibn Danan Synagogue", "Day 5: Casablanca Museum of Moroccan Judaism"] },
          ].map((itin) => (
            <div key={itin.title} className="bg-white border border-border-warm rounded p-4">
              <div className="font-semibold text-navy mb-2 text-sm">{itin.title}</div>
              <ul className="space-y-1">
                {itin.items.map((item) => (
                  <li key={item} className="text-xs text-muted-text flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold text-navy mt-6 mb-3">Essential Tips</h3>
        <ul className="space-y-2">
          {[
            "Book synagogue visits in advance — most require arrangement through a guide or community contact. They are not simply open like churches.",
            "Dress modestly at synagogues and cemeteries: covered shoulders and knees for both men and women. Men should have a kippah (head covering) for synagogue interiors.",
            "Shabbat (Friday sunset to Saturday night) affects opening hours of Jewish-run sites. Plan accordingly — or, if meaningful to you, experience Shabbat in Morocco.",
            "The Museum of Moroccan Judaism in Casablanca is the single most important site on any heritage tour. Allow at least 90 minutes. Entrance fee applies.",
            "Photography policies vary by site — always ask before photographing inside synagogues or cemeteries.",
            "Consider combining your heritage tour with genealogy research. Local guides and the Museum of Moroccan Judaism can assist with family archive searches.",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2.5 text-sm">
              <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section id="faq" className="mt-14">
      <h2 className="font-display text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-border-warm rounded group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors">
              {f.q}
              <span className="text-gold ml-2 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
function AuthorCta() {
  return (
    <section id="cta" className="mt-12 bg-navy rounded-lg p-8 text-white text-center">
      <div className="text-3xl mb-3">✡️</div>
      <h2 className="font-display text-2xl font-bold mb-3">Ready to Explore Morocco&apos;s Jewish Heritage?</h2>
      <p className="text-white/75 leading-relaxed max-w-xl mx-auto mb-6">
        I offer private specialist Jewish heritage tours in Tangier and Casablanca — conducted in English, French, Spanish, Arabic, or Hebrew. Every tour is tailored to your family history, interests, and schedule. No group to wait for. No rushed itinerary.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/jewish-heritage-tours" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition inline-flex items-center gap-2">
          View Jewish Heritage Tours <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/contact" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">
          Book a Custom Itinerary
        </Link>
      </div>
      <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">👨‍💼</div>
        <div className="text-left">
          <div className="font-semibold text-sm">Idrissi</div>
          <div className="text-white/55 text-xs">Licensed Tour Guide · Tangier, Morocco · Hebrew speaker</div>
        </div>
      </div>
    </section>
  );
}
function Sidebar({ tocItems }: { tocItems: { anchor: string; label: string }[] }) {
  return (
    <aside className="hidden lg:block sticky top-24 space-y-6">
      {tocItems.length > 0 && (
        <div className="bg-white border border-border-warm rounded p-5">
          <h3 className="font-display text-base font-bold text-navy mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold" /> Table of Contents
          </h3>
          <ol className="space-y-2">
            {tocItems.map((t) => (
              <li key={t.anchor}>
                <a href={`#${t.anchor}`} className="text-sm text-muted-text hover:text-gold transition-colors block py-0.5 border-l-2 border-transparent hover:border-gold pl-3">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="bg-navy rounded p-5 text-white text-center">
        <div className="text-2xl mb-2">✡️</div>
        <h3 className="font-display text-base font-bold mb-2">Book a Heritage Tour</h3>
        <p className="text-white/70 text-xs mb-4 leading-relaxed">Private guided tours of Morocco&apos;s Jewish sites with Hebrew-speaking guide Idrissi.</p>
        <Link href="/jewish-heritage-tours" className="block bg-gold text-navy text-sm font-bold px-4 py-2.5 rounded hover:opacity-90 transition mb-2">
          View Heritage Tours
        </Link>
        <a href="https://wa.me/212668702424" target="_blank" rel="noopener noreferrer" className="block bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-[#20BA5A] transition">
          WhatsApp Idrissi
        </a>
      </div>
      <div className="bg-white border border-border-warm rounded p-5">
        <h3 className="font-display text-sm font-bold text-navy mb-3">Related Articles</h3>
        <div className="space-y-3 text-sm">
          <Link href="/destinations/tangier" className="flex items-center gap-2 text-muted-text hover:text-gold transition-colors group">
            <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" /> Tangier Destination Guide
          </Link>
          <Link href="/destinations/casablanca" className="flex items-center gap-2 text-muted-text hover:text-gold transition-colors group">
            <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" /> Casablanca Travel Guide
          </Link>
          <Link href="/jewish-heritage-tours/tangier" className="flex items-center gap-2 text-muted-text hover:text-gold transition-colors group">
            <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" /> Tangier Jewish Heritage Tour
          </Link>
          <Link href="/jewish-heritage-tours/casablanca" className="flex items-center gap-2 text-muted-text hover:text-gold transition-colors group">
            <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" /> Casablanca Jewish Heritage Tour
          </Link>
        </div>
      </div>
    </aside>
  );
}

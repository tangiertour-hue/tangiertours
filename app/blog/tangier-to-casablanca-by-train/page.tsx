import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Train, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tangier to Casablanca by Bullet Train — The Complete Guide | TangierTours Blog",
  description:
    "Everything you need to know about the Al Boraq high speed train from Tangier to Casablanca — tickets, schedule, tips, what to see, and how to make it a perfect day trip with a private guide.",
  keywords:
    "Tangier to Casablanca by train, Al Boraq train Tangier Casablanca, bullet train Morocco, Tangier Casablanca day trip, Morocco high speed train guide",
  openGraph: {
    title: "Tangier to Casablanca by Bullet Train — The Complete Guide",
    description:
      "Africa's fastest train connects Tangier and Casablanca in 2h10. Here's everything you need to know — tickets, tips, and how to turn it into a perfect guided day trip.",
    type: "article",
    publishedTime: "2025-10-01",
    authors: ["Idrissi — TangierTours"],
  },
};

// ── Schema ──────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Tangier to Casablanca by Bullet Train — The Complete Guide",
  description: "A comprehensive guide to the Al Boraq high speed train between Tangier and Casablanca, including tickets, schedule, tips, and how to combine the journey with a private guided day trip.",
  author: { "@type": "Person", name: "Idrissi", url: "https://www.tangiertours.ma/about" },
  publisher: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  datePublished: "2025-10-01",
  dateModified: "2025-10-01",
  url: "https://www.tangiertours.ma/blog/tangier-to-casablanca-by-train",
  image: "https://www.tangiertours.ma/hero-train-dayttrip.jpg",
  mainEntityOfPage: "https://www.tangiertours.ma/blog/tangier-to-casablanca-by-train",
  keywords: "Al Boraq, Tangier Casablanca train, Morocco bullet train, day trip",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

// ── Content data ─────────────────────────────────────────
const toc = [
  { anchor: "what-is-al-boraq", label: "What is the Al Boraq?" },
  { anchor: "tickets",          label: "How to Buy Tickets" },
  { anchor: "schedule",         label: "Schedule & Journey Time" },
  { anchor: "on-board",         label: "What It's Like On Board" },
  { anchor: "casablanca",       label: "What to Do in Casablanca" },
  { anchor: "day-trip",         label: "Turn It Into a Day Trip" },
  { anchor: "tips",             label: "Practical Tips" },
  { anchor: "faq",              label: "FAQ" },
];

const faqs = [
  { q: "How long does the Al Boraq take from Tangier to Casablanca?", a: "The Al Boraq covers the 340km between Tangier Ville and Casablanca Casa-Voyageurs in approximately 2 hours 10 minutes — the fastest land journey in Africa." },
  { q: "How much does a Tangier to Casablanca train ticket cost?", a: "Second class (2ème classe) costs approximately 100–130 MAD (€9–12) each way. First class (1ère classe) costs around 160–200 MAD (€15–18). Prices vary slightly by date and booking method." },
  { q: "Can I do Casablanca as a day trip from Tangier by train?", a: "Absolutely — it is one of the best day trips in Morocco. The first Al Boraq departs Tangier at around 06:00, giving you a full day in Casablanca and returning easily by 20:00." },
  { q: "Do I need to book Al Boraq tickets in advance?", a: "For weekdays and off-peak travel, same-day tickets are usually available at the station. For weekends, holidays, and peak summer travel (July–August), book online at oncf.ma at least 2–3 days in advance." },
  { q: "Is there wifi on the Al Boraq?", a: "Yes — the Al Boraq offers free on-board wifi in both classes, power sockets at every seat, and air conditioning throughout. It is comfortably the best way to travel between these two cities." },
  { q: "What station does the Al Boraq use in Tangier?", a: "The Al Boraq departs from Tangier Ville station, located in the new part of the city about 3km from the Medina. Taxis and petit taxis are readily available from the Medina to the station." },
];

export default function BlogTrainPage() {
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
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            <article className="min-w-0">
              <WhatIsAlBoraq />
              <TicketsSection />
              <ScheduleSection />
              <OnBoardSection />
              <CasablancaSection />
              <DayTripSection />
              <TipsSection />
              <FaqSection />
              <AuthorCta />
            </article>
            <Sidebar toc={toc} />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

// ── Article sections ─────────────────────────────────────

function WhatIsAlBoraq() {
  return (
    <section id="what-is-al-boraq" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">What is the Al Boraq?</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>The <strong className="text-navy">Al Boraq</strong> — named after the mythological creature that, in Islamic tradition, carried the Prophet Mohammed on his night journey — is Africa's first and only high speed rail line. Inaugurated on 15 November 2018 by King Mohammed VI and French President Emmanuel Macron, it connects Tangier in the north to Casablanca in the south at a top commercial speed of <strong className="text-navy">320 km/h</strong>, covering 340 kilometres in just <strong className="text-navy">2 hours and 10 minutes</strong>.</p>
        <p>The line was built in partnership with SNCF (the French national railway) and runs Alstom Euroduplex trainsets — the same double-deck high speed trains used on French TGV routes. It is, by any measure, a world-class passenger experience: smooth, quiet, punctual, and spectacular. For much of the journey, the track runs parallel to the Atlantic coastline, offering sweeping ocean views through the panoramic windows.</p>
        <p>Before the Al Boraq, the Tangier–Casablanca journey by conventional train took around 4.5 hours. Today it takes 2h10. The transformation has been remarkable — and for travellers based in either city, it has made a full day trip between the two not just possible but genuinely comfortable.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {[
            { val: "320 km/h", label: "Top speed" },
            { val: "2h 10m", label: "Journey time" },
            { val: "340 km", label: "Distance" },
            { val: "2018", label: "Opened" },
          ].map((s) => (
            <div key={s.label} className="bg-navy rounded p-4 text-center">
              <div className="font-display text-xl font-bold text-gold">{s.val}</div>
              <div className="text-white/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TicketsSection() {
  return (
    <section id="tickets" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">How to Buy Tickets</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Tickets for the Al Boraq can be purchased in three ways:</p>
        <div className="space-y-3">
          {[
            { method: "Online at oncf.ma", detail: "The official ONCF website sells Al Boraq tickets up to 30 days in advance. You can pay by credit card and receive an e-ticket to print or show on your phone. This is the most convenient method, especially for peak travel dates.", rec: true },
            { method: "At the station ticket office", detail: "Tickets are available at Tangier Ville and Casablanca Casa-Voyageurs stations. For off-peak weekday travel, same-day tickets are usually available. For weekends and holidays, arrive early." },
            { method: "Via a travel agent or guide", detail: "If you book a guided day trip with TangierTours, Idrissi handles the ticket booking for you as part of the tour package — one less thing to organise." },
          ].map((item) => (
            <div key={item.method} className={`rounded p-4 border ${item.rec ? "border-gold bg-gold/5" : "border-border-warm bg-white"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-navy text-sm">{item.method}</span>
                {item.rec && <span className="text-xs bg-gold text-navy font-bold px-2 py-0.5 rounded-full">Recommended</span>}
              </div>
              <p className="text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy/5 border border-navy/10 rounded p-4 mt-4">
          <p className="text-sm text-navy font-semibold mb-1">💡 Price Guide (approximate, 2025)</p>
          <ul className="text-sm text-muted-text space-y-1">
            <li>• 2nd class (2ème): <strong className="text-navy">100–130 MAD</strong> (~€9–12) each way</li>
            <li>• 1st class (1ère): <strong className="text-navy">160–200 MAD</strong> (~€15–18) each way</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section id="schedule" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">Schedule & Journey Time</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>The Al Boraq runs approximately <strong className="text-navy">6–8 times daily</strong> in each direction, from early morning until late evening. Exact schedules vary seasonally — always check the current timetable at <a href="https://www.oncf.ma" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">oncf.ma</a> before travelling.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-2.5 text-left">Direction</th>
                <th className="px-4 py-2.5 text-left">First train</th>
                <th className="px-4 py-2.5 text-left">Last train</th>
                <th className="px-4 py-2.5 text-left">Journey time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dir: "Tangier → Casablanca", first: "~06:00", last: "~21:00", time: "2h 10min" },
                { dir: "Casablanca → Tangier", first: "~06:00", last: "~21:30", time: "2h 10min" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-ivory"}>
                  <td className="px-4 py-2.5 border-b border-border-warm font-medium text-navy">{row.dir}</td>
                  <td className="px-4 py-2.5 border-b border-border-warm">{row.first}</td>
                  <td className="px-4 py-2.5 border-b border-border-warm">{row.last}</td>
                  <td className="px-4 py-2.5 border-b border-border-warm text-gold font-semibold">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-text">Times are approximate. Always verify current schedule at oncf.ma.</p>
      </div>
    </section>
  );
}

function OnBoardSection() {
  return (
    <section id="on-board" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">What It&apos;s Like On Board</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>The Al Boraq is genuinely impressive — a world-class rail experience that would not feel out of place in France, Japan, or Spain. Here is what to expect:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: "💺", title: "Comfortable seating", desc: "Both classes offer spacious, reclining seats with ample legroom. First class includes wider seats and more privacy." },
            { icon: "📶", title: "Free WiFi", desc: "Reliable on-board wifi throughout the journey — useful for planning your Casablanca day while you travel." },
            { icon: "🔌", title: "Power sockets", desc: "Every seat has a power socket — charge your phone or laptop throughout the journey." },
            { icon: "❄️", title: "Air conditioning", desc: "Fully climate-controlled throughout — a welcome feature on hot Moroccan summer days." },
            { icon: "🌊", title: "Atlantic views", desc: "For much of the journey the tracks run along the coast — the ocean glitters beside you as you travel." },
            { icon: "⏱️", title: "Punctuality", desc: "The Al Boraq has an excellent punctuality record. Departures and arrivals are reliable." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-border-warm rounded p-4 flex gap-3">
              <span className="text-2xl shrink-0">{f.icon}</span>
              <div>
                <div className="font-semibold text-navy text-sm mb-1">{f.title}</div>
                <p className="text-xs text-muted-text leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasablancaSection() {
  return (
    <section id="casablanca" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">What to Do in Casablanca</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Casablanca is not the Morocco most visitors expect — and that is exactly why it surprises and delights. It is modern, cosmopolitan, and architecturally extraordinary. Here are the essential stops for a day visit:</p>
        <div className="space-y-3">
          {[
            { name: "Hassan II Mosque", time: "2–3 hours", desc: "One of the world's largest mosques, built dramatically on a promontory above the Atlantic. Its 210-metre minaret is the tallest in the world. Non-Muslim visitors are welcome on guided interior tours — a breathtaking experience." },
            { name: "Habous Quarter (New Mellah)", time: "1 hour", desc: "Built in the 1930s as a planned neighbourhood blending Moroccan medina layout with French urban design. Arcaded streets, patisseries, bookshops, and the history of Casablanca's once-thriving Jewish community." },
            { name: "Museum of Moroccan Judaism", time: "1.5 hours", desc: "The only Jewish museum in the Arab world — an extraordinary collection spanning 2,000 years of Moroccan Jewish life. Essential for Jewish heritage travellers." },
            { name: "Boulevard Mohammed V (Art Deco)", time: "45 mins", desc: "Over 300 protected Art Deco buildings from the 1920s–40s. One of the world's great Art Deco cities, rivalling Miami Beach. A leisurely walk reveals ornate facades, arcaded pavements, and decorative ironwork." },
            { name: "Corniche & Ain Diab", time: "1 hour", desc: "The Atlantic seafront promenade — cafés, beach clubs, ocean views, and the modern face of a young, dynamic city." },
          ].map((item) => (
            <div key={item.name} className="bg-white border border-border-warm rounded p-4">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-semibold text-navy text-sm">{item.name}</span>
                <span className="text-xs bg-navy/5 text-navy px-2 py-0.5 rounded-full shrink-0">{item.time}</span>
              </div>
              <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/destinations/casablanca" className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline">
            Read the full Casablanca Travel Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DayTripSection() {
  return (
    <section id="day-trip" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">Turn It Into a Guided Day Trip</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Travelling independently on the Al Boraq is straightforward — but combining the train journey with a private guided day trip transforms it from a transit experience into a genuinely memorable one. Here is why:</p>
        <ul className="space-y-2">
          {[
            "No need to figure out taxis, directions, or entrance queues in an unfamiliar city",
            "A local expert brings context — Hassan II Mosque is beautiful; understanding its history makes it extraordinary",
            "Hidden spots and local restaurants that no guidebook mentions",
            "Train tickets arranged and managed as part of the package",
            "Fully private — just your group, your guide, your pace",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>{item}
            </li>
          ))}
        </ul>
        <div className="bg-navy rounded p-6 mt-6 text-white">
          <h3 className="font-display text-lg font-bold mb-2">TangierTours — Tangier–Casablanca Day Trip</h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4">Private guide Idrissi manages everything: train tickets, transfers, Hassan II Mosque tour, Museum of Moroccan Judaism, local lunch, and Art Deco walk. Available in both directions.</p>
          <Link href="/tours/tangier-casablanca-day-trip" className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-2.5 rounded hover:opacity-90 transition text-sm">
            View Full Day Trip Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TipsSection() {
  return (
    <section id="tips" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-5 gold-divider-left">Practical Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {[
          { icon: "🎫", tip: "Book tickets online", detail: "Use oncf.ma — faster, cheaper, and guaranteed your seat, especially at weekends." },
          { icon: "🕐", tip: "Take the early train", detail: "The 06:00–07:00 departure gives you maximum time in Casablanca. Return by 18:00–20:00 comfortably." },
          { icon: "🚕", tip: "Tangier Ville station", detail: "3km from the Medina. Allow 15–20 minutes by petit taxi. Don't confuse it with the old Tangier Morora station." },
          { icon: "💶", tip: "Carry Dirhams", detail: "Casablanca is Morocco — Dirhams are the currency. Change money at the station bureau de change on arrival, or use an ATM." },
          { icon: "🌡️", tip: "Summer heat", detail: "Casablanca in July–August can reach 35°C. Start early, stay hydrated, and schedule the Corniche walk for evening." },
          { icon: "📸", tip: "Photography tips", detail: "Hassan II Mosque is most photogenic at sunrise or golden hour. The Art Deco district is best in the morning before crowds." },
        ].map((item) => (
          <div key={item.tip} className="bg-white border border-border-warm rounded p-4 flex gap-3">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <div className="font-semibold text-navy text-sm mb-1">{item.tip}</div>
              <p className="text-xs text-muted-text leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-6 gold-divider-left">Frequently Asked Questions</h2>
      <div className="space-y-3 mt-6">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-border-warm rounded group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors text-sm">
              {f.q}<span className="text-gold ml-2 group-open:rotate-180 transition-transform shrink-0">▾</span>
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
    <section className="mt-12 bg-navy rounded-lg p-8 text-white text-center">
      <span className="text-3xl block mb-3">🚄</span>
      <h2 className="font-display text-2xl font-bold mb-3">Ready to Make the Journey?</h2>
      <p className="text-white/75 leading-relaxed max-w-xl mx-auto mb-6">
        Book a private guided day trip — Tangier to Casablanca or Casablanca to Tangier. Idrissi handles the tickets, the tours, the lunch, and the logistics. You just enjoy the ride.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/tours/tangier-casablanca-day-trip" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition inline-flex items-center gap-2">
          Book the Day Trip <ArrowRight className="w-4 h-4" />
        </Link>
        <a href="https://wa.me/212668702424" target="_blank" rel="noopener noreferrer"
          className="border border-white/40 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">
          WhatsApp Idrissi
        </a>
      </div>
      <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg shrink-0">👨‍💼</div>
        <div className="text-left">
          <div className="font-semibold text-sm">Idrissi</div>
          <div className="text-white/50 text-xs">Licensed Tour Guide · Born in Fez · Raised in Tangier</div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "420px" }}>
      <Image
        src="/hero-train-dayttrip.jpg"
        alt="Al Boraq high speed bullet train Morocco between Tangier and Casablanca"
        fill priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.70) 0%,rgba(15,31,61,0.52) 55%,rgba(15,31,61,0.85) 100%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Al Boraq Train Guide" }]} />
        <div className="mt-6">
          <span className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Morocco Travel · Train Travel
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Tangier to Casablanca<br />
            <span className="text-gold">by Bullet Train — The Complete Guide</span>
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Idrissi — TangierTours</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 1 October 2025</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 10 min read</span>
            <span className="flex items-center gap-1.5"><Train className="w-4 h-4" /> 2h10 · 320 km/h</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sidebar({ toc }: { toc: { anchor: string; label: string }[] }) {
  return (
    <aside className="hidden lg:block sticky top-24 space-y-6">
      <div className="bg-white border border-border-warm rounded p-5">
        <h3 className="font-display text-base font-bold text-navy mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gold" /> Table of Contents
        </h3>
        <ol className="space-y-2">
          {toc.map((t) => (
            <li key={t.anchor}>
              <a href={`#${t.anchor}`} className="text-sm text-muted-text hover:text-gold transition-colors block py-0.5 border-l-2 border-transparent hover:border-gold pl-3">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <div className="bg-navy rounded p-5 text-white text-center">
        <span className="text-2xl block mb-2">🚄</span>
        <h3 className="font-display text-base font-bold mb-2">Book a Guided Day Trip</h3>
        <p className="text-white/70 text-xs mb-4 leading-relaxed">Private guide Idrissi manages everything — train tickets, transfers, tours, lunch.</p>
        <Link href="/tours/tangier-casablanca-day-trip" className="block bg-gold text-navy text-sm font-bold px-4 py-2.5 rounded hover:opacity-90 transition mb-2">
          View Day Trip Tour
        </Link>
        <a href="https://wa.me/212668702424" target="_blank" rel="noopener noreferrer" className="block bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-[#20BA5A] transition">
          WhatsApp Idrissi
        </a>
      </div>
      <div className="bg-white border border-border-warm rounded p-5">
        <h3 className="font-display text-sm font-bold text-navy mb-3">Related</h3>
        <div className="space-y-3 text-sm">
          {[
            { label: "Casablanca Travel Guide", href: "/destinations/casablanca" },
            { label: "Jewish Heritage Casablanca", href: "/jewish-heritage-tours/casablanca" },
            { label: "Private Morocco Transfers", href: "/tours/private-morocco-transfers" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="flex items-center gap-2 text-muted-text hover:text-gold transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" />{l.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

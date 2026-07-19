import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star, CheckCircle, ArrowRight, Train, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tangier–Casablanca Day Trip by High Speed Train | TangierTours",
  description:
    "Private day trip between Tangier and Casablanca on the Al Boraq high speed train. Expert guide, hassle-free logistics, Jewish heritage, Hassan II Mosque & more. Book with Idrissi.",
  keywords:
    "Tangier Casablanca day trip, Al Boraq train tour, Casablanca day trip from Tangier, Tangier from Casablanca private tour, Morocco high speed train tour",
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Tangier–Casablanca Day Trip by Al Boraq High Speed Train",
  description: "A private guided day trip between Tangier and Casablanca aboard Morocco's Al Boraq high speed train, with expert local guide Idrissi.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  touristType: "Private",
  url: "https://www.tangiertours.ma/tours/tangier-casablanca-day-trip",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [] as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[],
};

// ── data ────────────────────────────────────────────────
const breadcrumb = [{ label: "Tours", href: "/tours" }, { label: "Tangier–Casablanca Day Trip" }];
const highlights = [
  { icon: "🚄", title: "Al Boraq — Africa's First High Speed Train", desc: "Travel at 320 km/h aboard Morocco's flagship train. Modern, comfortable, air-conditioned, and scenically spectacular — the Atlantic coast flashes past your window." },
  { icon: "🕌", title: "Hassan II Mosque", desc: "One of the world's largest mosques, built on the Atlantic Ocean. Its 210-metre minaret is the tallest in the world — open to non-Muslim visitors on guided tours." },
  { icon: "✡️", title: "Jewish Heritage of Casablanca", desc: "The Museum of Moroccan Judaism, Beth El Synagogue, and the Habous Quarter — a moving and extraordinary chapter of Moroccan history, guided by Hebrew-speaking Idrissi." },
  { icon: "🏛️", title: "Art Deco Casablanca", desc: "Casablanca is one of the world's great Art Deco cities — over 300 protected buildings from the 1920s–40s French Protectorate era line its elegant boulevards." },
  { icon: "🔵", title: "Tangier Medina & Kasbah", desc: "For visitors arriving from Casablanca: a full private walking tour of Tangier's Medina, Kasbah, Grand Socco, and panoramic Cape Spartel viewpoint." },
  { icon: "🍽️", title: "Local Lunch Included", desc: "A sit-down lunch at a carefully chosen local restaurant — Moroccan cuisine at its finest, away from tourist traps, chosen by your guide Idrissi." },
];

const itineraryTangierFirst = [
  { time: "07:30", stop: "Hotel pickup — Tangier", desc: "Idrissi meets you at your Tangier hotel or riad and transfers you to Tangier Ville train station." },
  { time: "08:00", stop: "Al Boraq departs Tangier", desc: "Board Africa's first high speed train. Settle in, enjoy the Atlantic coastline scenery, and arrive in Casablanca in just over 2 hours." },
  { time: "10:15", stop: "Arrive Casablanca Casa-Voyageurs", desc: "Idrissi's Casablanca contact or private transfer meets you at the station." },
  { time: "10:45", stop: "Hassan II Mosque", desc: "Guided visit of the exterior and interior — an architectural marvel unlike anything else in Morocco." },
  { time: "13:00", stop: "Lunch — Habous Quarter", desc: "Authentic Moroccan lunch in the Habous (New Mellah), the historic Jewish-French quarter of Casablanca." },
  { time: "14:30", stop: "Museum of Moroccan Judaism", desc: "The only Jewish museum in the Arab world — deeply moving collection of 2,000 years of Moroccan Jewish life." },
  { time: "16:00", stop: "Corniche & Art Deco walk", desc: "A leisurely stroll along the Atlantic Corniche and through the Art Deco heart of Boulevard Mohammed V." },
  { time: "18:00", stop: "Al Boraq returns to Tangier", desc: "Board the high speed train back north." },
  { time: "20:15", stop: "Arrive Tangier — hotel drop-off", desc: "Transfer back to your hotel. Full day complete." },
];

const itineraryCasaFirst = [
  { time: "07:30", stop: "Hotel pickup — Casablanca", desc: "Idrissi meets you at your Casablanca hotel and transfers you to Casa-Voyageurs station." },
  { time: "08:00", stop: "Al Boraq departs Casablanca", desc: "2h10 scenic train journey north along the Atlantic coast to Tangier." },
  { time: "10:15", stop: "Arrive Tangier Ville", desc: "Idrissi meets you at Tangier station." },
  { time: "10:45", stop: "Tangier Medina walking tour", desc: "Grand Socco, Petit Socco, the labyrinthine Medina streets, local artisans and souks." },
  { time: "12:30", stop: "Kasbah & panoramic viewpoint", desc: "The ancient Kasbah above the port, Dar el-Makhzen palace exterior, and the breathtaking view over the Strait of Gibraltar." },
  { time: "14:00", stop: "Lunch — Café Hafa or Medina restaurant", desc: "Famous Tangier café perched on the cliffs above the Atlantic, or a traditional Medina restaurant." },
  { time: "15:30", stop: "Cape Spartel & Caves of Hercules", desc: "Africa's northwestern tip — the lighthouse where the Atlantic meets the Mediterranean, and the mythological Caves of Hercules." },
  { time: "17:30", stop: "Al Boraq returns to Casablanca", desc: "Transfer to Tangier Ville station, board the high speed train south." },
  { time: "19:45", stop: "Arrive Casablanca — hotel drop-off", desc: "Back at your hotel, memories made." },
];

const included = [
  "Private licensed guide (Idrissi) for the full day",
  "Al Boraq train tickets (2nd class — upgradeable to 1st class)",
  "All transfers to/from train stations",
  "Entrance fees to Hassan II Mosque interior tour",
  "Entrance fee to Museum of Moroccan Judaism",
  "Local lunch at a hand-picked restaurant",
  "Bottled water throughout the day",
  "All taxes and service charges",
];

const notIncluded = [
  "Personal spending and souvenirs",
  "Tips (appreciated but never obligatory)",
  "Additional food and drinks beyond lunch",
  "Travel insurance (strongly recommended)",
];

const faqs = [
  { q: "Can I do this as a day trip from Casablanca to Tangier?", a: "Absolutely — the tour runs equally well in both directions. Many visitors staying in Casablanca choose to spend a day in Tangier with Idrissi as their guide, returning the same evening on the Al Boraq." },
  { q: "How long is the Al Boraq train journey?", a: "The Al Boraq high speed train covers the 340km between Tangier and Casablanca in approximately 2 hours 10 minutes, travelling at up to 320 km/h. It is Africa's first high speed rail line, opened in 2018." },
  { q: "Is the Jewish heritage tour part of this day trip?", a: "Yes — for the Tangier-first itinerary, the Museum of Moroccan Judaism and Beth El Synagogue in Casablanca are included as standard. For the Casablanca-first itinerary, the Tangier Mellah and Jewish Cemetery can be incorporated. Just let Idrissi know your interest when booking." },
  { q: "Can I upgrade to first class on the train?", a: "Yes. First class on the Al Boraq is very comfortable and adds approximately 80–120 MAD per person per journey. Let us know when booking and we'll arrange the upgrade." },
  { q: "What is the minimum group size?", a: "There is no minimum — even solo travellers are welcome. The tour is always private: just you and Idrissi." },
];

export default function TangierCasablancaDayTripPage() {
  faqSchema.mainEntity = faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <HeroSection />
        <IntroSection />
        <TrainSection />
        <HighlightsSection highlights={highlights} />
        <ItinerarySection a={itineraryTangierFirst} b={itineraryCasaFirst} />
        <IncludedSection included={included} notIncluded={notIncluded} />
        <FaqSection faqs={faqs} />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "460px" }}>
      <Image src="/hero-train-dayttrip.jpg" alt="Morocco Al Boraq high speed train at station" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.70) 0%,rgba(15,31,61,0.55) 55%,rgba(15,31,61,0.82) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb items={breadcrumb} />
        <div className="max-w-3xl mt-6">
          <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Train className="w-3.5 h-3.5" /> Al Boraq · Africa&apos;s Fastest Train · 320 km/h
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Tangier–Casablanca Day Trip<br />
            <span className="text-gold">by High Speed Train</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
            Two of Morocco&apos;s most fascinating cities in one unforgettable day — connected by Africa&apos;s first high speed rail line. Private guide, seamless logistics, zero stress.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm text-white/70">
            {[
              { icon: <Clock className="w-4 h-4 text-gold" />, text: "Full day (10–12 hrs)" },
              { icon: <Train className="w-4 h-4 text-gold" />, text: "Al Boraq — 2h10 each way" },
              { icon: <Users className="w-4 h-4 text-gold" />, text: "Fully private" },
              { icon: <Star className="w-4 h-4 text-gold" />, text: "4.9★ rated guide" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">{b.icon}{b.text}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#booking" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">Book This Tour</a>
            <a href="#itinerary" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">See Itinerary</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="intro" className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">Two Cities. One Extraordinary Day.</h2>
      <div className="space-y-4 text-muted-text leading-relaxed mt-6">
        <p>Tangier and Casablanca are Morocco's two most internationally connected cities — and they couldn't be more different. Tangier is ancient, layered, intimate: a Medina of winding alleys, a Kasbah above the sea, a city where Africa and Europe face each other across 14km of open water. Casablanca is modern, cosmopolitan, grand: Art Deco boulevards, the world's most spectacular mosque, a vibrant Jewish heritage, and a pace of life that feels genuinely metropolitan.</p>
        <p>Thanks to the Al Boraq — Africa's first high speed train, which connects the two cities in just 2 hours 10 minutes at 320 km/h — experiencing both in a single day is not only possible but genuinely comfortable. Private guide Idrissi manages every detail: the train tickets, the transfers, the guided tours, the restaurant, the museum entrances. You simply arrive, follow, discover, and enjoy.</p>
        <p>This tour runs in both directions: starting from Tangier and spending the day in Casablanca, or starting from Casablanca and spending the day in Tangier. Both itineraries are detailed below — choose the one that fits your base.</p>
      </div>
    </section>
  );
}

function TrainSection() {
  return (
    <section id="train" className="bg-navy py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-3xl mb-3">🚄</span>
            <h2 className="font-display text-3xl font-bold text-white mb-4">The Al Boraq — Africa&apos;s First High Speed Train</h2>
            <p className="text-white/75 leading-relaxed mb-4">Opened in November 2018, the Al Boraq (named after the mythological creature that carried the Prophet Mohammed to Jerusalem) was a landmark moment for Morocco and for Africa. Built in partnership with SNCF of France, it runs Alstom Euroduplex trainsets — the same family used on French TGV routes — and reaches a top speed of 320 km/h.</p>
            <p className="text-white/75 leading-relaxed">The journey hugs the Atlantic coast for much of the route, offering sweeping ocean views. Trains run approximately every hour from early morning to late evening, making day trips in both directions entirely practical.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "320 km/h", label: "Top speed" },
              { val: "2h 10m", label: "Tangier ↔ Casablanca" },
              { val: "340 km", label: "Distance covered" },
              { val: "2018", label: "Year opened" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded p-4 text-center">
                <div className="font-display text-2xl font-bold text-gold">{s.val}</div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function HighlightsSection({ highlights }: { highlights: { icon: string; title: string; desc: string }[] }) {
  if (!highlights.length) return null;
  return (
    <section id="highlights" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">Tour Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-ivory border border-border-warm rounded p-5">
              <span className="text-3xl block mb-3">{h.icon}</span>
              <h3 className="font-display text-base font-bold text-navy mb-2">{h.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ItinerarySection({ a, b }: { a: { time: string; stop: string; desc: string }[]; b: { time: string; stop: string; desc: string }[] }) {
  if (!a.length) return null;
  return (
    <section id="itinerary" className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">Choose Your Direction</h2>
      <p className="text-center text-muted-text mt-6 mb-12 max-w-xl mx-auto">Same great experience — two different starting points. Select whichever fits your itinerary.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[{ title: "🚄 Starting from Tangier", items: a }, { title: "🚄 Starting from Casablanca", items: b }].map((dir) => (
          <div key={dir.title} className="bg-white border border-border-warm rounded overflow-hidden">
            <div className="bg-navy px-5 py-3">
              <h3 className="font-display text-lg font-bold text-white">{dir.title}</h3>
            </div>
            <div className="p-5 space-y-4">
              {dir.items.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-9 h-9 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center text-xs font-bold text-navy">{step.time.split(":")[0]}<span className="text-[9px]">:{step.time.split(":")[1]}</span></div>
                    {i < dir.items.length - 1 && <div className="w-0.5 h-full bg-gold/20 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <div className="font-semibold text-navy text-sm">{step.stop}</div>
                    <div className="text-xs text-muted-text leading-relaxed mt-0.5">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IncludedSection({ included, notIncluded }: { included: string[]; notIncluded: string[] }) {
  if (!included.length) return null;
  return (
    <section id="included" className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="font-semibold text-navy mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Included</h3>
            <ul className="space-y-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-text">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-muted-text" /> Not Included</h3>
            <ul className="space-y-2">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-text">
                  <span className="text-muted-text shrink-0 mt-0.5">–</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-gold/10 border border-gold/30 rounded p-5 flex items-start gap-4">
          <Train className="w-6 h-6 text-gold shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-navy mb-1">Train tickets are handled for you</div>
            <p className="text-sm text-muted-text">Idrissi books and manages all Al Boraq tickets. Standard 2nd class is comfortable and modern. Upgrade to 1st class available on request — please mention when booking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 py-14">
      <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Frequently Asked Questions</h2>
      <div className="space-y-3 mt-6">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white border border-border-warm rounded group">
            <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors">
              {f.q}<span className="text-gold ml-2 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
function BookingSection() {
  return (
    <section id="booking" className="max-w-2xl mx-auto px-4 pb-20">
      <h2 className="font-display text-2xl font-bold text-navy mb-6 text-center gold-divider">Book This Day Trip</h2>
      <div className="mt-6">
        <BookingForm tourOptions={["Tangier → Casablanca Day Trip (Al Boraq)", "Casablanca → Tangier Day Trip (Al Boraq)", "Custom itinerary"]} />
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Camera, Sun, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Chefchaouen Travel Guide — The Blue City Morocco | TangierTours",
  description:
    "Everything you need to know about visiting Chefchaouen, Morocco's Blue City. Best spots, photography tips, when to visit, and how to get there from Tangier.",
  keywords:
    "Chefchaouen guide, blue city Morocco, Chefchaouen travel tips, visiting Chefchaouen, Chefchaouen photography, Rif Mountains Morocco",
};

const attractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Chefchaouen",
  description:
    "Chefchaouen, the Blue City of Morocco, is a stunning mountain town in the Rif Mountains known for its striking blue-painted streets, vibrant souks, and breathtaking mountain scenery.",
  url: "https://www.tangiertours.ma/destinations/chefchaouen",
  touristType: ["Photography Tourism", "Cultural Tourism", "Nature Tourism"],
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Uta el-Hammam Square" },
    { "@type": "TouristAttraction", name: "Spanish Mosque Viewpoint" },
    { "@type": "TouristAttraction", name: "Chefchaouen Medina" },
    { "@type": "TouristAttraction", name: "Ras El Maa Waterfall" },
  ],
};

const photoSpots = [
  {
    name: "Plaza Uta el-Hammam",
    desc: "The main square at the heart of the medina — surrounded by blue-washed walls, the Grand Mosque, and the restored 15th-century kasbah. Cafe terraces ring the plaza, making it a perfect spot to sit and soak in the atmosphere.",
    bestTime: "Early morning (7–9am) before crowds arrive",
  },
  {
    name: "The Blue Staircase (Escalera Azul)",
    desc: "A cascading staircase painted in deep cobalt blue, adorned with flower pots, lanterns, and hand-painted tiles. One of the most photographed spots in all of Morocco — get there early for unobstructed shots.",
    bestTime: "Golden hour — 8am or 5pm",
  },
  {
    name: "Spanish Mosque Viewpoint",
    desc: "A 20-minute hike up the hillside above the medina rewards you with the most iconic panoramic view of Chefchaouen — the entire blue city nestled in its mountain valley, seen from above. Spectacular at sunset.",
    bestTime: "Late afternoon / sunset (4–6pm)",
  },
  {
    name: "Ras El Maa Waterfall",
    desc: "A natural waterfall at the edge of the medina where locals wash clothes in the traditional manner. The crystal-clear Rif Mountain water flows right through the town — a surprisingly tranquil and photogenic corner away from the main tourist trail.",
    bestTime: "Morning, when light filters through the trees",
  },
];

const attractions = [
  {
    title: "Chefchaouen Medina",
    icon: "🔵",
    desc: "The ancient medina — a UNESCO-protected historic centre — is a labyrinth of blue and white alleyways, arched doorways draped in bougainvillea, and tiny squares where cats sleep undisturbed. Getting 'lost' here is the whole point.",
  },
  {
    title: "Kasbah Museum",
    icon: "🏯",
    desc: "The restored 15th-century kasbah built by Moulay Ali Ben Rachid when he founded the city. Today it houses a small museum of local ethnography and a tranquil Andalusian garden. Climb to the tower for sweeping medina views.",
  },
  {
    title: "Local Souks & Crafts",
    icon: "🧵",
    desc: "Chefchaouen is famous for its woollen blankets, Berber rugs, hand-woven textiles, and kif pipes. The souks are small, relaxed, and refreshingly low-pressure compared to Marrakech — genuine artisans selling genuine crafts.",
  },
  {
    title: "Rif Mountain Hiking",
    icon: "🏔️",
    desc: "The city is a gateway to serious hiking in the Rif Mountains. Day hikes to Jbel el-Kelaa or the Talassemtane National Park offer dramatic gorges, cedar forests, and Barbary macaque sightings.",
  },
];

const practicalInfo = [
  { label: "Distance from Tangier", value: "120 km — approximately 2.5 hours by private car through the Rif Mountains" },
  { label: "Best way to arrive", value: "Private car or transfer with TangierTours — CTM buses run but are slow (3–4 hrs)" },
  { label: "Best season", value: "April–June and September–October. July–August is hot and very busy with visitors." },
  { label: "How long to spend", value: "Half a day is possible; a full day is ideal; stay overnight for the magical dawn light" },
  { label: "Altitude", value: "600 metres — noticeably cooler than the coast, especially at night" },
  { label: "Blue paint?", value: "The city has been painted blue since the 1930s–50s, associated with the local Jewish community and later adopted widely. The tradition continues to this day." },
];

export default function ChefchaouenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* HERO */}
        <section className="relative pt-16 overflow-hidden" style={{ minHeight: "480px" }}>
          <Image
            src="/hero-dest-chefchaouen.jpg"
            alt="Aerial view of Chefchaouen blue city Morocco nestled in Rif Mountains valley"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.55) 0%,rgba(15,31,61,0.42) 50%,rgba(15,31,61,0.80) 100%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Breadcrumb items={[{ label: "Destinations", href: "/destinations" }, { label: "Chefchaouen" }]} />
            <div className="max-w-3xl mt-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <MapPin className="w-3.5 h-3.5" /> Rif Mountains · 120 km from Tangier
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Chefchaouen —<br />
                <span className="text-gold">Morocco&apos;s Enchanting Blue City</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                Nestled in a valley of the Rif Mountains, Chefchaouen is one of the world&apos;s most visually arresting cities — a centuries-old medina painted almost entirely in shades of sky blue, cobalt, and indigo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/tours/chefchaouen-day-trip-from-tangier" className="bg-gold text-navy font-bold px-6 py-3 rounded hover:opacity-90 transition">
                  Book a Day Trip from Tangier
                </Link>
                <Link href="/contact" className="border border-white/60 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition">
                  Ask About Overnight Stays
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">About Chefchaouen</h2>
          <div className="space-y-4 text-muted-text leading-relaxed mt-6">
            <p>
              Founded in 1471 by Moulay Ali Ben Rachid as a small fortress to resist Portuguese incursions, Chefchaouen — meaning &ldquo;look at the horns&rdquo; in Berber, after the twin peaks above the city — grew into a refuge for Muslims and Jews expelled from Spain after 1492. The Sephardic Jewish community that settled here is widely credited with beginning the tradition of painting the town blue, a practice that spread across the medina in the 20th century and today makes Chefchaouen one of the most photographed places on earth.
            </p>
            <p>
              What makes Chefchaouen genuinely special, beyond the extraordinary visual impact, is its human scale and its authentic feel. It is a working town of 45,000 people — not a theme park. Locals go about their daily lives in those blue alleyways: children play football against painted walls, women hang laundry over cobalt doorways, old men sip mint tea in the shade of the Grand Mosque. The tourist infrastructure exists, but has not overwhelmed the soul of the place.
            </p>
            <p>
              From Tangier, Chefchaouen is 120 kilometres by road — a spectacular 2.5-hour drive through the Rif Mountains that is itself part of the experience. With a private guide like Idrissi, you avoid the confusion of taxis and buses, and arrive with context and knowledge that transforms the visit.
            </p>
          </div>
        </section>

        {/* PHOTO SPOTS */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-2 gold-divider">
              Best Photography Spots in Chefchaouen
            </h2>
            <p className="text-center text-muted-text mt-6 mb-12 max-w-xl mx-auto">
              Chefchaouen rewards photographers at every corner. Here are the four spots no visit should miss.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photoSpots.map((spot, i) => (
                <div key={spot.name} className="bg-ivory border border-border-warm rounded p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-display font-bold text-lg shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy mb-1">{spot.name}</h3>
                    <p className="text-sm text-muted-text leading-relaxed mb-2">{spot.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold">
                      <Sun className="w-3 h-3" /> Best time: {spot.bestTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATTRACTIONS */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">What to Do in Chefchaouen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
              {attractions.map((a) => (
                <div key={a.title} className="bg-white border border-border-warm rounded p-5">
                  <span className="text-3xl block mb-3">{a.icon}</span>
                  <h3 className="font-display text-base font-bold text-navy mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-text leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy mb-8 gold-divider-left">
              Practical Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {practicalInfo.map((item) => (
                <div key={item.label} className="bg-ivory border border-border-warm rounded p-4">
                  <div className="text-xs font-bold text-gold uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-sm text-charcoal leading-relaxed">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-navy/5 border border-navy/10 rounded p-5 flex items-start gap-4">
              <Camera className="w-6 h-6 text-navy shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-navy mb-1">Photography Tip</div>
                <p className="text-sm text-muted-text">The blue paint reflects strongly in harsh midday light. For the richest colours and softest shadows, visit the medina in the first 2 hours after sunrise or the last 90 minutes before sunset. Your guide Idrissi knows exactly where to be and when.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOURS CTA */}
        <section className="bg-navy py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Visit Chefchaouen with a Private Guide
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Skip the confusion of taxis and buses. Idrissi picks you up from your Tangier hotel, drives you through the Rif Mountains, guides you through every photogenic corner of the Blue City, and brings you back safely — all in one seamless private day trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours/chefchaouen-day-trip-from-tangier" className="bg-gold text-navy font-bold px-8 py-4 rounded hover:opacity-90 transition inline-flex items-center gap-2">
                Chefchaouen Day Trip <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/luxury-morocco-tours" className="border border-gold/50 text-gold font-semibold px-8 py-4 rounded hover:bg-gold/10 transition">
                Luxury Multi-Day Morocco Tour
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Also visiting Tangier?{" "}
              <Link href="/destinations/tangier" className="text-gold hover:underline">Read our Tangier destination guide →</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

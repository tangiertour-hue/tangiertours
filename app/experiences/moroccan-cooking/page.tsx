import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Moroccan Cooking Experience in Tangier & Casablanca | TangierTours",
  description:
    "An authentic Moroccan cooking experience in Tangier or Casablanca. Discover local ingredients, traditional techniques and genuine Moroccan hospitality. Private and small-group options available.",
  keywords:
    "Moroccan cooking class Tangier, cooking class Tangier, Moroccan cooking experience Casablanca, private Moroccan cooking class, authentic Moroccan cooking experience, Moroccan culinary experience",
};

const experienceSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Moroccan Cooking Experience in Tangier & Casablanca",
  description: "An authentic hands-on Moroccan cooking experience for international visitors in Tangier and Casablanca, Morocco.",
  provider: { "@type": "Organization", name: "TangierTours", url: "https://www.tangiertours.ma" },
  url: "https://www.tangiertours.ma/experiences/moroccan-cooking",
  touristType: ["Cultural Tourism", "Culinary Tourism"],
};

// ── data ────────────────────────────────────────────────
const whatGuestsMayExperience = [
  "Visit a traditional local market and explore Moroccan ingredients, spices and herbs with your host",
  "Learn about Moroccan spices, their origins, uses and cultural significance",
  "Prepare authentic Moroccan dishes alongside a local host in a genuine kitchen setting",
  "Discover traditional techniques for dishes such as tagine, couscous, Moroccan salads, traditional breads or pastries",
  "Learn about the cultural and family traditions that surround Moroccan food",
  "Sit down and enjoy the meal you have prepared together",
  "Experience genuine Moroccan hospitality and conversation with local people",
];

const whatsIncluded = [
  "Private guide and coordination throughout the experience",
  "Introduction to the host and the cooking setting",
  "All ingredients for the session",
  "Recipes to take home",
  "The meal shared together at the end of the experience",
  "Tea and refreshments",
  "Transport arrangements available on request",
];

const whyChoose = [
  { icon: "🏠", title: "A Genuine Local Experience", desc: "This is not a tourist cooking school. You are welcomed into a real Moroccan kitchen environment and guided by someone who cooks this food every day." },
  { icon: "🌿", title: "Beyond the Recipe", desc: "The focus is on understanding — the stories behind the dishes, the role of food in Moroccan family life, and the ingredients that define the cuisine." },
  { icon: "👥", title: "Private & Personalised", desc: "Suitable for couples, families, friends and small groups. The experience is arranged around your party — never shared with strangers unless you prefer it." },
  { icon: "🗺️", title: "Two Cities", desc: "Choose Tangier or Casablanca depending on your itinerary. Both offer distinct culinary traditions and the same warmth of Moroccan hospitality." },
  { icon: "🍽️", title: "Eat What You Make", desc: "The session ends with a shared meal — the food you have prepared together, enjoyed at the table with your host." },
  { icon: "📖", title: "Take the Recipes Home", desc: "Recipes are provided so you can recreate the dishes at home and share a piece of Morocco with family and friends." },
];

const faqs = [
  { q: "Is the cooking experience suitable for children?", a: "Yes — the experience can be adapted for families with children, with age-appropriate participation in the cooking. Please mention the ages of your children when booking." },
  { q: "Do I need any cooking experience?", a: "None at all. The experience is designed for all levels, including complete beginners. Your host guides you through every step at a relaxed, enjoyable pace." },
  { q: "Can dietary requirements be accommodated?", a: "Please inform us of any dietary requirements, allergies or restrictions when booking and we will do our best to accommodate them." },
  { q: "Is the experience available in languages other than English?", a: "The experience can be arranged in English, French, Spanish or Arabic. Please mention your preferred language when requesting availability." },
  { q: "Can I choose what dishes we prepare?", a: "Yes — to some extent. When you request availability, let us know if there are particular dishes or aspects of Moroccan cuisine you are most interested in, and we will do our best to incorporate your preferences." },
];

export default function MoroccanCookingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }} />
      <Navbar />
      <main className="bg-ivory min-h-screen">
        <HeroSection />
        <IntroSection />
        <WhySection />
        <WhatSection />
        <IncludedSection />
        <LocationSection />
        <FaqSection />
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ minHeight: "480px" }}>
      <Image src="/hero-cooking.jpg" alt="Authentic Moroccan cooking experience — preparing tagine and traditional dishes with a local host" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,31,61,0.65) 0%,rgba(15,31,61,0.48) 55%,rgba(15,31,61,0.82) 100%)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumb items={[{ label: "Experiences" }, { label: "Moroccan Cooking" }]} />
        <div className="max-w-3xl mt-6">
          <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🍽️ Tangier · Casablanca · Private & Small Group
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Moroccan Cooking Experience<br />
            <span className="text-gold">in Tangier &amp; Casablanca</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
            Discover Moroccan cuisine from the inside — through the hands, the kitchen, and the stories of local people. A genuine cultural encounter, not simply a cooking lesson.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm text-white/70">
            {[
              { icon: <MapPin className="w-4 h-4 text-gold" />, text: "Tangier or Casablanca" },
              { icon: <Users className="w-4 h-4 text-gold" />, text: "Private & small group" },
              { icon: <Clock className="w-4 h-4 text-gold" />, text: "Duration on request" },
            ].map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">{b.icon}{b.text}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#booking" className="bg-gold text-navy font-bold px-7 py-3 rounded hover:opacity-90 transition">Book Your Cooking Experience</a>
            <a href="#what" className="border border-white/50 text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition">What to Expect</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-4 gold-divider-left">More Than a Cooking Class</h2>
      <div className="space-y-8 mt-6">

        {/* Paragraph 1 */}
        <p className="text-muted-text leading-relaxed text-lg">
          Moroccan cuisine is inseparable from Moroccan life. It is built around shared meals, slow cooking, careful spicing, and the art of hospitality — the idea that a guest is always to be welcomed, nourished, and made to feel at home. To understand the food is to understand something essential about the culture.
        </p>

        {/* 2 food photos side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-md border border-border-warm">
            <Image
              src="/cooking-couscous.jpg"
              alt="Traditional Moroccan couscous with vegetables and chickpeas — Moroccan cooking experience"
              fill
              className="object-cover object-center"
              sizes="(max-width:640px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-md border border-border-warm">
            <Image
              src="/cooking-brochettes.jpg"
              alt="Moroccan chicken brochettes with peppers — traditional Moroccan cooking class"
              fill
              className="object-cover object-center"
              sizes="(max-width:640px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Paragraph 2 */}
        <p className="text-muted-text leading-relaxed text-lg">
          This experience offers international visitors a genuine encounter with that tradition. You work alongside a local host in a real kitchen setting, learning through doing — chopping, mixing, seasoning, and cooking at a relaxed pace while conversation flows naturally. The market visit, where available, brings the ingredients to life before you cook them. And the meal at the end is eaten together, at the same table, in the Moroccan way.
        </p>

        {/* Paragraph 3 */}
        <p className="text-muted-text leading-relaxed text-lg">
          Available in both Tangier and Casablanca, the experience can be arranged privately for individuals, couples, families or small groups — and adapted to your interests, dietary requirements and available time.
        </p>

      </div>
    </section>
  );
}
function WhySection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">Why Choose This Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {whyChoose.map((item) => (
            <div key={item.title} className="bg-ivory border border-border-warm rounded p-5">
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-display text-base font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatSection() {
  return (
    <section id="what" className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy mb-2 gold-divider-left">What Guests May Experience</h2>
      <p className="text-muted-text text-sm mt-4 mb-8">Depending on the experience selected, the session may include:</p>
      <ul className="space-y-3">
        {whatGuestsMayExperience.map((item, i) => (
          <li key={i} className="flex items-start gap-3 bg-white border border-border-warm rounded p-4">
            <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted-text mt-5 italic">Activities may vary depending on the experience selected, location, season and availability. Please discuss your preferences when requesting availability.</p>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="bg-navy py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-white text-center mb-10 gold-divider">What&apos;s Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whatsIncluded.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/10 border border-white/20 rounded p-4">
              <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="text-sm text-white/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-white/45 text-xs text-center mt-6">Exact inclusions are confirmed when your experience is arranged. Inclusions may vary by location and experience type.</p>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="locations" className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h2 className="font-display text-3xl font-bold text-navy text-center mb-10 gold-divider">Choose Your Location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {[
          {
            city: "Tangier",
            flag: "🕌",
            desc: "Tangier's cuisine reflects its unique position at the meeting point of Africa and Europe — Mediterranean influences, Atlantic fish, Andalusian spices, and the deep Moroccan culinary tradition. A Tangier cooking experience takes place in the city where all of these threads come together.",
            link: "/destinations/tangier",
          },
          {
            city: "Casablanca",
            flag: "🏙️",
            desc: "Morocco's most cosmopolitan city has a rich culinary culture shaped by its diverse communities — including a strong French and Andalusian influence alongside traditional Moroccan cooking. A Casablanca experience offers the full depth of urban Moroccan cuisine in a modern, welcoming setting.",
            link: "/destinations/casablanca",
          },
        ].map((loc) => (
          <div key={loc.city} className="bg-white border border-border-warm rounded overflow-hidden">
            <div className="h-1 bg-gold" />
            <div className="p-6">
              <span className="text-3xl block mb-3">{loc.flag}</span>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{loc.city}</h3>
              <p className="text-sm text-muted-text leading-relaxed mb-4">{loc.desc}</p>
              <Link href={loc.link} className="text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Explore {loc.city} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function FaqSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-navy mb-6 gold-divider-left">Frequently Asked Questions</h2>
        <div className="space-y-3 mt-6">
          {faqs.map((f, i) => (
            <details key={i} className="bg-ivory border border-border-warm rounded group">
              <summary className="px-5 py-4 cursor-pointer font-semibold text-navy flex justify-between list-none hover:text-gold transition-colors text-sm">
                {f.q}<span className="text-gold ml-2 group-open:rotate-180 transition-transform shrink-0">▾</span>
              </summary>
              <div className="px-5 pb-4 text-muted-text text-sm leading-relaxed border-t border-border-warm pt-3">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="bg-ivory border-t border-border-warm py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-4xl mb-4">🍽️</div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
          Book Your Moroccan Cooking Experience
        </h2>
        <p className="text-muted-text leading-relaxed mb-2 max-w-xl mx-auto">
          To request availability or ask any questions, contact us with your preferred city, travel dates, group size and any dietary requirements or preferences.
        </p>
        <p className="text-navy font-semibold mb-8">We will get back to you within 2 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://wa.me/212668702424?text=Hi%20Abdelhamid%2C%20I%20am%20interested%20in%20the%20Moroccan%20Cooking%20Experience.%20Please%20send%20me%20availability%20and%20details."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded hover:bg-[#20BA5A] transition">
            WhatsApp — Request Availability
          </a>
          <a href="mailto:tangiertour@gmail.com?subject=Moroccan%20Cooking%20Experience%20Enquiry"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded hover:bg-navy/90 transition">
            Email Us
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-text">
          <span className="flex items-center gap-1.5">✅ Private options available</span>
          <span className="flex items-center gap-1.5">✅ Suitable for all levels</span>
          <span className="flex items-center gap-1.5">✅ Dietary needs accommodated</span>
          <span className="flex items-center gap-1.5">✅ English, French, Spanish, Arabic</span>
        </div>
        <div className="mt-8 pt-6 border-t border-border-warm flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/destinations/tangier" className="text-gold hover:underline flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Tangier Guide</Link>
          <Link href="/destinations/casablanca" className="text-gold hover:underline flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Casablanca Guide</Link>
          <Link href="/tours/tangier-private-tours" className="text-gold hover:underline flex items-center gap-1"><ArrowRight className="w-3.5 h-3.5" /> Tangier Private Tours</Link>
        </div>
      </div>
    </section>
  );
}

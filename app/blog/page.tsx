import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Morocco Travel Blog — Tips, Heritage & Itineraries | TangierTours",
  description:
    "Expert Morocco travel insights from local guide Idrissi. Discover travel tips, Jewish heritage sites, cultural guides, and Morocco itineraries from someone who lives it every day.",
};

interface Category {
  slug: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const categories: Category[] = [
  {
    slug: "travel-tips",
    title: "Travel Tips",
    description: "Practical advice on getting around Morocco, what to pack, visa rules, safety, and saving money.",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    icon: "🧳",
  },
  {
    slug: "jewish-heritage-morocco",
    title: "Jewish Heritage Morocco",
    description: "In-depth guides to Morocco's extraordinary Sephardic history, synagogues, mellah neighbourhoods, and Jewish museums.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    icon: "✡️",
  },
  {
    slug: "morocco-culture",
    title: "Morocco Culture",
    description: "Understanding Moroccan traditions, cuisine, customs, festivals, and the remarkable diversity of the Kingdom's identity.",
    color: "bg-green-50 border-green-200 text-green-700",
    icon: "🕌",
  },
  {
    slug: "morocco-itineraries",
    title: "Morocco Itineraries",
    description: "Day-by-day itinerary guides for every duration and travel style — from weekend trips to month-long explorations.",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    icon: "🗺️",
  },
];

interface FeaturedArticle {
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  readTime: string;
}

const featuredArticles: FeaturedArticle[] = [
  {
    title: "First Time in Tangier? 10 Things You Must Know Before You Go",
    excerpt:
      "Tangier is Morocco's most misunderstood city — written off by some, adored by those who give it a proper chance. Idrissi shares the local knowledge that turns a confusing first visit into a revelation.",
    category: "Travel Tips",
    categorySlug: "travel-tips",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "8 min read",
  },
  {
    title: "The Complete Guide to Morocco's Jewish Heritage Sites",
    excerpt:
      "Morocco was once home to over 250,000 Jewish residents, and the evidence of their remarkable civilisation is preserved across the country. This comprehensive guide covers the must-visit synagogues, mellahs, cemeteries, and museums.",
    category: "Jewish Heritage Morocco",
    categorySlug: "jewish-heritage-morocco",
    categoryColor: "bg-amber-100 text-amber-700",
    readTime: "12 min read",
  },
  {
    title: "Tangier to Chefchaouen: The Ultimate Day Trip Guide",
    excerpt:
      "The 3-hour drive from Tangier to Chefchaouen through the Rif Mountains is itself part of the experience. Here is everything you need to know to make the most of a single day in Morocco's famous blue city.",
    category: "Morocco Itineraries",
    categorySlug: "morocco-itineraries",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: "10 min read",
  },
  {
    title: "Is Morocco Safe for Solo Travellers? An Honest Guide",
    excerpt:
      "Morocco receives millions of solo travellers every year and the vast majority have a wonderful experience. Idrissi gives an honest, nuanced answer — addressing real concerns without either dismissing them or sensationalising them.",
    category: "Travel Tips",
    categorySlug: "travel-tips",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <WhatsAppButton variant="floating" />

      <main className="pt-16 bg-ivory min-h-screen">
        {/* Hero */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[{ label: "Blog" }]} />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4 gold-divider">
              Morocco Travel Blog —<br />
              Expert Insights from a Local Guide
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
              Idrissi shares the insider knowledge that only a local guide with decades of experience can offer.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex gap-5 items-start bg-white border border-[var(--border-warm)] rounded-lg p-6">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[var(--navy)] flex items-center justify-center text-2xl">
              🇲🇦
            </div>
            <div>
              <h2 className="font-semibold text-[var(--navy)] mb-2">About This Blog</h2>
              <p className="text-sm text-[var(--charcoal)] leading-relaxed">
                Idrissi has guided travellers through Morocco for over 15 years. Every article on this blog is drawn from genuine field experience — the hidden passages of the Tangier medina, the families who still maintain the last functioning synagogue in Tetuan, the exact hour the blue streets of Chefchaouen glow at golden hour. These are not aggregated travel tips: they are lessons learned on the ground, shared to help you travel better.
              </p>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-6 gold-divider-left">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/${c.slug}`}
                className={`border rounded-lg p-5 flex gap-4 hover:shadow-md transition-shadow group ${c.color}`}
              >
                <span className="text-3xl shrink-0">{c.icon}</span>
                <div>
                  <div className="font-semibold text-base mb-1">{c.title}</div>
                  <p className="text-sm opacity-80 leading-relaxed">{c.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs font-medium group-hover:underline">
                    Browse articles <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="bg-white border-y border-[var(--border-warm)] py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-2 gold-divider-left">
              Featured Articles
            </h2>
            <p className="text-[var(--muted-text)] mt-4 mb-8 text-sm">
              Our most-read guides — essential reading before any Morocco trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((a) => (
                <article
                  key={a.title}
                  className="bg-ivory border border-[var(--border-warm)] rounded-lg p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.categoryColor}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {a.category}
                    </span>
                    <span className="text-xs text-[var(--muted-text)] flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {a.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--navy)] mb-3 leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[var(--charcoal)] leading-relaxed flex-1 mb-4">
                    {a.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-[var(--navy)] font-semibold text-sm hover:text-[var(--gold)] transition-colors group"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Ready to Experience Morocco in Person?
            </h2>
            <p className="text-white/70 mb-8">
              Reading about Morocco is just the beginning. Let Idrissi guide you through it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-8 py-4 rounded hover:opacity-90 transition"
              >
                Book a Private Tour <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton label="WhatsApp Idrissi" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

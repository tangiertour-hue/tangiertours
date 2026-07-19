import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import GalleryGrid from "@/components/GalleryGrid";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Camera, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Gallery — TangierTours | Tangier, Morocco",
  description:
    "Browse authentic photos from TangierTours — Tangier Medina, Kasbah, Chefchaouen blue city, camel rides, Jewish heritage sites, and more. Private tours with licensed guide Idrissi.",
  keywords:
    "Tangier Morocco photos, Chefchaouen photos, Morocco tour gallery, Tangier Kasbah pictures, camel ride Morocco photos",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">

        {/* Header */}
        <section className="bg-navy pt-20 pb-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[{ label: "Gallery" }]} />
            <div className="mt-6 inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <Camera className="w-3.5 h-3.5" /> Authentic Photos from Real Tours
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Gallery — Morocco Through Our Lens
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Every photo here was taken on a real tour with Idrissi. Browse by destination or experience — then imagine yourself in the frame.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <GalleryGrid showFilter={true} />
        </section>

        {/* CTA */}
        <section className="bg-white border-t border-border-warm py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-muted-text mb-8 leading-relaxed">
              Every tour is private, unhurried, and designed around your interests. Book with Idrissi and return home with photos like these — and stories better than any photograph.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded hover:bg-navy/90 transition"
              >
                Book Your Tour <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/212668702424"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded hover:bg-[#20BA5A] transition"
              >
                WhatsApp Idrissi
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

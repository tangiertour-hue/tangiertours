import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReviewForm from "./ReviewForm";

export const metadata: Metadata = {
  title: "Leave a Review — TangierTours | Share Your Experience",
  description:
    "Share your experience with TangierTours. Tell us about your private tour, shore excursion or Morocco experience with licensed guide Abdelhamid Idrissi.",
};

export default function LeaveAReviewPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ivory min-h-screen">
        {/* HERO */}
        <section className="bg-navy py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb items={[{ label: "Reviews", href: "/reviews" }, { label: "Leave a Review" }]} />
            <div className="mt-6 text-4xl mb-4">⭐</div>
            <h1 className="font-display text-4xl font-bold text-white mb-4 gold-divider">
              Share Your Experience
            </h1>
            <p className="text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
              Your feedback matters — and helps other travellers discover authentic Morocco. We read every review personally and reply to every message.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
          <ReviewForm />
        </section>

        {/* NOTE */}
        <section className="max-w-2xl mx-auto px-4 pb-14 text-center">
          <div className="bg-white border border-border-warm rounded p-6">
            <p className="text-sm text-muted-text leading-relaxed">
              <strong className="text-navy">How it works:</strong> Your review is sent directly to Abdelhamid. With your permission, genuine reviews may be featured on the TangierTours website and shared on our platforms. We never publish reviews without consent.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}

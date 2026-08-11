"use client";
import { useState } from "react";
import { Send, CheckCircle, Star } from "lucide-react";

const tourOptions = [
  "Tangier Private Tour",
  "Shore Excursion",
  "Chefchaouen Day Trip",
  "Jewish Heritage Tour — Tangier",
  "Jewish Heritage Tour — Casablanca",
  "Tangier–Casablanca Day Trip (Al Boraq)",
  "Gibraltar Day Trip",
  "Tarifa Day Trip",
  "Camel Ride Experience",
  "Private Transfer",
  "Casablanca Layover Tour",
  "Moroccan Cooking Experience",
  "Aerial Experience",
  "Airport Meet & Greet",
  "Other / Multiple services",
];

type FormState = {
  name: string;
  country: string;
  email: string;
  tour: string;
  rating: number;
  review: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  country: "",
  email: "",
  tour: "",
  rating: 0,
  review: "",
  consent: false,
};

export default function ReviewForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) { setErrorMsg("Please select a star rating."); return; }
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-border-warm rounded p-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold text-navy mb-2">Thank You, {form.name}!</h2>
        <p className="text-muted-text leading-relaxed mb-4">
          Your review has been sent to Abdelhamid. He reads every message personally and will be in touch if he has any questions.
        </p>
        <p className="text-sm text-muted-text">
          We appreciate you taking the time to share your experience.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border-warm rounded shadow-sm overflow-hidden">
      <div className="bg-navy px-6 py-4">
        <h2 className="font-display text-xl font-bold text-white">Write Your Review</h2>
        <p className="text-white/60 text-sm mt-1">All fields marked * are required</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Name + Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="name">Full Name *</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
              placeholder="Your name" className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="country">Country *</label>
            <input id="country" name="country" type="text" required value={form.country} onChange={handleChange}
              placeholder="e.g. United States" className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Optional — only used if we need to follow up" className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition" />
        </div>

        {/* Tour */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="tour">Tour or Service *</label>
          <select id="tour" name="tour" required value={form.tour} onChange={handleChange}
            className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition bg-white">
            <option value="">Select the tour or service...</option>
            {tourOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-2">Your Rating *</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button"
                onClick={() => setForm((p) => ({ ...p, rating: star }))}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                aria-label={`Rate ${star} stars`}
                className="p-1 transition-transform hover:scale-110">
                <Star className={`w-8 h-8 transition-colors ${star <= (hover || form.rating) ? "text-gold fill-gold" : "text-border-warm"}`} />
              </button>
            ))}
            {form.rating > 0 && (
              <span className="ml-2 text-sm text-muted-text self-center">
                {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][form.rating]}
              </span>
            )}
          </div>
          {errorMsg && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
        </div>

        {/* Review text */}
        <div>
          <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="review">Your Review *</label>
          <textarea id="review" name="review" rows={5} required value={form.review} onChange={handleChange}
            placeholder="Tell us about your experience — what did you enjoy most? What would you recommend to other travellers?"
            className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition resize-none" />
          <p className="text-xs text-muted-text mt-1">{form.review.length} characters</p>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-border-warm text-gold" />
          <label htmlFor="consent" className="text-sm text-muted-text leading-relaxed cursor-pointer">
            I give permission for TangierTours to feature this review on their website and social media platforms. My review may be attributed by first name and country only.
          </label>
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">
            Something went wrong. Please try again or send your review directly via WhatsApp.
          </div>
        )}

        <button type="submit" disabled={status === "loading"}
          className="w-full bg-navy text-white font-semibold py-3 rounded hover:bg-navy/90 transition flex items-center justify-center gap-2 disabled:opacity-60">
          {status === "loading"
            ? <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            : <Send className="w-4 h-4" />}
          {status === "loading" ? "Sending..." : "Submit My Review"}
        </button>
      </div>
    </form>
  );
}

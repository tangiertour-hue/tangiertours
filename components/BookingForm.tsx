"use client";
import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import DepositPayment from "@/components/DepositPayment";

interface BookingFormProps {
  tourOptions?: string[];
  showCruiseField?: boolean;
}

export default function BookingForm({
  tourOptions = [
    "Tangier Private Tour (Half-Day)",
    "Tangier Private Tour (Full-Day)",
    "Shore Excursion",
    "Chefchaouen Day Trip",
    "Camel Ride Experience",
    "Private Morocco Transfer",
    "Luxury Morocco Tour",
    "Tangier Jewish Heritage Tour",
    "Casablanca Jewish Heritage Tour",
    "Custom / Other",
  ],
  showCruiseField = false,
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    date: "",
    groupSize: "",
    cruiseShip: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-border-warm rounded p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-navy mb-2">Booking Request Received!</h3>
        <p className="text-muted-text mb-6">
          Thank you, {form.name}! Abdelhamid will confirm within 2 hours. To secure your booking, send a <strong className="text-navy">€85 deposit</strong> using the details below.
        </p>
        <DepositPayment tourName={form.tour || "your tour"} depositAmount="€85" />
      </div>
    );
  }

  return (
    <div className="bg-white border border-border-warm rounded shadow-sm">
      <div className="bg-navy px-6 py-4 rounded-t">
        <h3 className="font-display text-xl font-bold text-white">Request Your Tour</h3>
        <p className="text-white/65 text-sm mt-1">We reply within 2 hours · No payment required to enquire</p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="name">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="phone">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="groupSize">
              Group Size *
            </label>
            <select
              id="groupSize"
              name="groupSize"
              required
              value={form.groupSize}
              onChange={handleChange}
              className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition bg-white"
            >
              <option value="">Select...</option>
              {["1", "2", "3-4", "5-6", "7-10", "10+"].map((s) => (
                <option key={s} value={s}>{s} {s === "1" ? "person" : "people"}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="tour">
            Tour of Interest *
          </label>
          <select
            id="tour"
            name="tour"
            required
            value={form.tour}
            onChange={handleChange}
            className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition bg-white"
          >
            <option value="">Select a tour...</option>
            {tourOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="date">
              Preferred Travel Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
            />
          </div>
          {showCruiseField && (
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="cruiseShip">
                Cruise Ship Name
              </label>
              <input
                id="cruiseShip"
                name="cruiseShip"
                type="text"
                value={form.cruiseShip}
                onChange={handleChange}
                placeholder="e.g. MSC Grandiosa"
                className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-charcoal mb-1" htmlFor="message">
            Special Requests or Questions
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your interests, mobility requirements, dietary needs, etc."
            className="w-full border border-border-warm rounded px-3 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-navy text-white font-semibold py-3 rounded hover:bg-navy/90 transition flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {loading ? "Sending..." : "Send Booking Request"}
        </button>

        <p className="text-xs text-muted-text text-center">
          Or contact us instantly:{" "}
          <a
            href="https://wa.me/212668702424"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline"
          >
            WhatsApp +212 668-702-424
          </a>
        </p>
      </form>
    </div>
  );
}

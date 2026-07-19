"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/useLocale";
import { locales, localeNames, localeFlags } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-white/80 hover:text-gold transition-colors text-sm font-semibold px-2 py-1.5 rounded"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* dropdown */}
          <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-border-warm rounded shadow-xl z-50 overflow-hidden">
            {locales.map((l: Locale) => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left
                  ${l === locale
                    ? "bg-navy text-white font-semibold"
                    : "text-charcoal hover:bg-ivory hover:text-navy"
                  }`}
              >
                <span className="text-base">{localeFlags[l]}</span>
                <span>{localeNames[l]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

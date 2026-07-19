"use client";
import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale } from "./translations";
import type { Locale } from "./translations";

export function useLocale(): { locale: Locale; switchLocale: (l: Locale) => void } {
  const pathname = usePathname();
  const router = useRouter();

  // Detect locale from URL prefix /en/ /es/ /ru/
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0] as Locale;
  const locale: Locale = locales.includes(first) ? first : defaultLocale;

  const switchLocale = (newLocale: Locale) => {
    // Replace or prepend locale prefix
    let newPath: string;
    if (locales.includes(first)) {
      // swap existing prefix
      newPath = "/" + [newLocale, ...segments.slice(1)].join("/");
    } else {
      // prepend new prefix
      newPath = "/" + newLocale + (pathname === "/" ? "" : pathname);
    }
    router.push(newPath);
  };

  return { locale, switchLocale };
}

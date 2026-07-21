import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AgentationGuard } from "@/components/AgentationGuard";
import { HappySeedsWatermark } from "@/components/HappySeedsWatermark";
import "./globals.css";
import jsonMetadata from "../metadata.json";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://www.tangiertours.ma";

export const metadata: Metadata = {
  ...jsonMetadata,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/favicon.png", sizes: "32x32" },
  },
  // Google Search Console verification — replace with your real token
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* hreflang — tells Google which language version to serve to which users */}
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/es/`} />
        <link rel="alternate" hrefLang="ru" href={`${BASE_URL}/ru/`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        {children}
        <HappySeedsWatermark />
        <AgentationGuard />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

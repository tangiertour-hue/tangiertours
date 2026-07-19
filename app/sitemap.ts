import { MetadataRoute } from "next";

const BASE_URL = "https://www.tangiertours.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Core
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Tours
    { url: `${BASE_URL}/tours`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tours/tangier-private-tours`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tours/tangier-shore-excursions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tours/chefchaouen-day-trip-from-tangier`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/tours/camel-ride-morocco`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tours/private-morocco-transfers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tours/tangier-casablanca-day-trip`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Luxury
    { url: `${BASE_URL}/luxury-morocco-tours`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Jewish Heritage
    { url: `${BASE_URL}/jewish-heritage-tours`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/jewish-heritage-tours/tangier`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/jewish-heritage-tours/casablanca`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Trust pages
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Destinations
    { url: `${BASE_URL}/destinations`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinations/tangier`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinations/casablanca`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/destinations/chefchaouen`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // Gallery
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Blog
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog/jewish-heritage-morocco`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Pricing
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Legal
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}

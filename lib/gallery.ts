/**
 * TangierTours Photo Gallery
 * ============================================================
 * HOW TO ADD YOUR OWN PHOTOS:
 *
 * 1. Copy your photo file into:  public/gallery/your-photo.jpg
 * 2. Add a new entry to the `galleryPhotos` array below.
 * 3. Save the file — the gallery updates automatically.
 *
 * CATEGORIES (use exactly one per photo):
 *   "tangier"         — Tangier city, Medina, Kasbah, beaches
 *   "chefchaouen"     — Blue City photos
 *   "jewish-heritage" — Synagogues, Mellah, heritage sites
 *   "camel"           — Camel rides, Cape Spartel
 *   "luxury"          — Riads, fine dining, premium experiences
 *   "culture"         — Food, mint tea, souks, daily life
 *
 * Set  featured: true  to show the photo on the homepage gallery.
 * ============================================================
 */

export type GalleryCategory =
  | "tangier"
  | "chefchaouen"
  | "jewish-heritage"
  | "camel"
  | "luxury"
  | "culture"
  | "all";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
  featured: boolean;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/gallery/tangier-medina-tour.jpg",
    alt: "Tour guide leading visitors through the narrow colourful alleyways of Tangier Medina",
    caption: "Exploring the heart of Tangier's ancient Medina",
    category: "tangier",
    featured: true,
  },
  {
    src: "/gallery/tangier-kasbah-view.jpg",
    alt: "Panoramic view over Tangier Kasbah rooftops and the blue Mediterranean Sea",
    caption: "The Kasbah viewpoint — where Africa meets Europe",
    category: "tangier",
    featured: true,
  },
  {
    src: "/gallery/chefchaouen-blue-stairs.jpg",
    alt: "Chefchaouen blue painted staircase with flowerpots and lanterns in morning light",
    caption: "Chefchaouen's iconic blue staircase at golden hour",
    category: "chefchaouen",
    featured: true,
  },
  {
    src: "/gallery/cape-spartel-lighthouse.jpg",
    alt: "Cape Spartel lighthouse Morocco at sunset with Atlantic ocean waves on rocky cliffs",
    caption: "Cape Spartel — where the Atlantic meets the Mediterranean",
    category: "tangier",
    featured: false,
  },
  {
    src: "/gallery/moroccan-mint-tea.jpg",
    alt: "Traditional Moroccan mint tea ceremony with silver teapot and painted glasses on zellige table",
    caption: "The Moroccan ritual of mint tea — hospitality in a glass",
    category: "culture",
    featured: true,
  },
  {
    src: "/gallery/camel-ride-sunset.jpg",
    alt: "Tourists on camel ride at Atlantic sand dunes near Tangier Morocco at sunset",
    caption: "Camel ride at Cape Spartel dunes — a golden hour to remember",
    category: "camel",
    featured: true,
  },
  // ── Real photos from Abdelhamid Idrissi / TangierTours ──
  {
    src: "/gallery/guide-cruise-port.jpg",
    alt: "Abdelhamid Idrissi at the cruise port in Tangier, Morocco with a cruise ship in the background",
    caption: "Meeting cruise guests at Tangier port — ready to explore Morocco",
    category: "tangier",
    featured: true,
  },
  {
    src: "/gallery/casablanca-jewish-tour.jpg",
    alt: "Guide with Jewish heritage tour guests at Place Mohammed V in Casablanca Morocco",
    caption: "Jewish heritage tour — Casablanca city centre",
    category: "jewish-heritage",
    featured: true,
  },
  {
    src: "/gallery/jewish-synagogue-interior.jpg",
    alt: "Interior of a Moroccan synagogue with Torah ark, menorahs and traditional textiles",
    caption: "Inside a historic Moroccan synagogue",
    category: "jewish-heritage",
    featured: true,
  },
  {
    src: "/gallery/jewish-heritage-star-david.jpg",
    alt: "Gold Star of David pendant held in hands — Jewish heritage in Morocco",
    caption: "Jewish heritage — a living tradition in Morocco",
    category: "jewish-heritage",
    featured: false,
  },
  {
    src: "/gallery/chefchaouen-group-tour.jpg",
    alt: "Abdelhamid Idrissi with a group of tourists at a historic gate in Chefchaouen Morocco",
    caption: "A private group tour at the gates of Chefchaouen",
    category: "chefchaouen",
    featured: true,
  },
  {
    src: "/gallery/tangier-group-tour.jpg",
    alt: "Group of tourists and guides in traditional Moroccan dress at Grand Socco Tangier",
    caption: "A warm welcome at Grand Socco, Tangier",
    category: "tangier",
    featured: false,
  },
  {
    src: "/gallery/tangier-fish-market-tour.jpg",
    alt: "Tour group enjoying a visit to Tangier fish market with their guide",
    caption: "Tangier's vibrant fish market — local life at its best",
    category: "tangier",
    featured: true,
  },
  {
    src: "/gallery/tangier-medina-souk.webp",
    alt: "Tourist visiting the Tangier Medina souk under historic archways with colourful craft stalls",
    caption: "The Tangier Medina souk — crafts, textiles and local colour",
    category: "tangier",
    featured: false,
  },
  {
    src: "/gallery/tangier-souk-shopping.webp",
    alt: "Two tourists browsing leather goods and crafts at a Tangier Medina market stall",
    caption: "Shopping for Moroccan crafts in the Medina",
    category: "culture",
    featured: false,
  },
  {
    src: "/gallery/moroccan-berber-culture.jpg",
    alt: "Moroccan Amazigh woman in traditional Berber dress with colourful amber and silver jewellery",
    caption: "Morocco's Amazigh heritage — traditional dress and craftsmanship",
    category: "culture",
    featured: true,
  },
  {
    src: "/gallery/private-transport-van.jpg",
    alt: "Black Mercedes-Benz Vito private tour vehicle with Moroccan licence plate",
    caption: "Private air-conditioned transport for all tours",
    category: "tangier",
    featured: false,
  },
  {
    src: "/gallery/american-legation-tangier.webp",
    alt: "Commemorative coin of the American Legation in Tangier — 200 years of US-Morocco friendship 1821-2021",
    caption: "The American Legation in Tangier — 200 years of friendship",
    category: "tangier",
    featured: false,
  },
];

export const categoryLabels: Record<GalleryCategory, string> = {
  all: "All Photos",
  tangier: "Tangier",
  chefchaouen: "Chefchaouen",
  "jewish-heritage": "Jewish Heritage",
  camel: "Camel Ride",
  luxury: "Luxury Tours",
  culture: "Morocco & Culture",
};

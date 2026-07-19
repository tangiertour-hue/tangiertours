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
];

export const categoryLabels: Record<GalleryCategory, string> = {
  all: "All Photos",
  tangier: "Tangier",
  chefchaouen: "Chefchaouen",
  "jewish-heritage": "Jewish Heritage",
  camel: "Camel Ride",
  luxury: "Luxury Tours",
  culture: "Moroccan Culture",
};

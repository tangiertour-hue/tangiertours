"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryPhotos, categoryLabels } from "@/lib/gallery";
import type { GalleryCategory, GalleryPhoto } from "@/lib/gallery";

interface GalleryGridProps {
  /** Only show photos tagged featured=true (used on homepage) */
  featuredOnly?: boolean;
  /** Show category filter tabs */
  showFilter?: boolean;
  /** Max photos to display (0 = all) */
  limit?: number;
}

export default function GalleryGrid({
  featuredOnly = false,
  showFilter = true,
  limit = 0,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive visible photos
  const base = featuredOnly ? galleryPhotos.filter((p) => p.featured) : galleryPhotos;
  const filtered =
    activeCategory === "all" ? base : base.filter((p) => p.category === activeCategory);
  const photos: GalleryPhoto[] = limit > 0 ? filtered.slice(0, limit) : filtered;

  // Present categories that actually have photos
  const usedCategories = Array.from(new Set(base.map((p) => p.category)));
  const filterTabs: GalleryCategory[] = ["all", ...usedCategories];

  // Lightbox navigation
  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), [photos.length]);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null)), [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  if (photos.length === 0) {
    return (
      <div className="text-center py-16 text-muted-text">
        <div className="text-4xl mb-3">📷</div>
        <p className="font-semibold text-navy mb-1">No photos yet</p>
        <p className="text-sm">Add your photos to <code className="bg-navy/5 px-1 rounded">public/gallery/</code> and register them in <code className="bg-navy/5 px-1 rounded">lib/gallery.ts</code>.</p>
      </div>
    );
  }

  return (
    <>
      {/* Filter Tabs */}
      {showFilter && filterTabs.length > 2 && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-navy border-border-warm hover:border-navy"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square overflow-hidden rounded bg-navy/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-end p-3">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{photo.caption}</p>
              </div>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-5 h-5 text-white drop-shadow" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors z-10 p-2"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          {/* Photo */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                sizes="(max-width:1280px) 90vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
            {/* Caption */}
            <div className="mt-3 text-center px-4">
              <p className="text-white font-semibold text-sm sm:text-base">
                {photos[lightboxIndex].caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors z-10 p-2"
              aria-label="Next photo"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

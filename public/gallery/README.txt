HOW TO ADD YOUR OWN PHOTOS
===========================
1. Copy your photo files into this folder (public/gallery/)
2. Supported formats: .jpg  .jpeg  .png  .webp
3. Then open  lib/gallery.ts  and add an entry for your photo.

Each photo entry looks like this:
  {
    src: "/gallery/your-photo.jpg",
    alt: "Describe what is in the photo",
    caption: "Caption shown below the photo",
    category: "tangier",   // tangier | chefchaouen | jewish-heritage | camel | luxury | transfers
    featured: true,        // show on homepage? true or false
  },

That's it! No coding needed beyond editing that one file.

/** Map portfolio project slugs → local /products/*.webp image filenames. */
export const portfolioImage: Record<string, string> = {
  "automotive-tail-lamp-covers": "taillamp-2",
  "motorcycle-mudguards": "mudguard-1",
  "water-cooler-bodies": "aircooler-1",
  "thermos-jugs-cups": "jug-2",
  "instrument-boxes-enclosures": "enclosure-1",
  "table-legs-furniture-parts": "mudguard-2",
  "screw-caps-closures": "lids-1",
};

/** Gallery filenames for a portfolio project (3 images, slideshow-ready). */
export const portfolioGallery: Record<string, string[]> = {
  "automotive-tail-lamp-covers": ["taillamp-2", "taillamp-1", "mudguard-1"],
  "motorcycle-mudguards": ["mudguard-1", "mudguard-2", "enclosure-1"],
  "water-cooler-bodies": ["aircooler-1", "aircooler-2", "thermos-1"],
  "thermos-jugs-cups": ["jug-2", "jug-1", "thermos-2"],
  "instrument-boxes-enclosures": ["enclosure-1", "enclosure-2", "lids-1"],
  "table-legs-furniture-parts": ["mudguard-2", "mudguard-1", "enclosure-2"],
  "screw-caps-closures": ["lids-1", "lids-2", "jug-1"],
};

export function projectImage(slug: string): string {
  const f = portfolioImage[slug] || "aircooler-1";
  return `/products/${f}.webp`;
}
export function projectGallery(slug: string): string[] {
  return (portfolioGallery[slug] || ["aircooler-1", "aircooler-2", "jug-2"]).map((f) => `/products/${f}.webp`);
}

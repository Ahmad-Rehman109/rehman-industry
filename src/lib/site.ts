/**
 * Single source of truth for all business details.
 *
 * Everything below feeds BOTH the visible site and the SEO structured data
 * (JSON-LD), sitemap, and metadata. When you have the real details, edit this
 * one file and the whole site updates.
 *
 * ⚠️  Fields marked TODO are placeholders — replace before going live.
 */

export const site = {
  name: "Rehman Industry",
  shortName: "Rehman Industry",
  legalName: "Rehman Industry",
  domain: "rehmanindustry.com",
  url: "https://rehmanindustry.com",

  tagline: "Precision Plastic Injection Moulding",
  description:
    "Rehman Industry is a plastic injection moulding contract manufacturer in Gujranwala, Pakistan. We deliver precision moulded plastic components, custom tooling and reliable contract production for businesses across Pakistan and for export.",

  // --- Contact ---
  phone: "+92 300 9642762", // display format
  phoneHref: "+923009642762", // tel: format
  whatsapp: "923009642762", // wa.me format: country code + number, no + or spaces
  email: "info@rehmanindustry.com", // TODO: set up this mailbox (see email setup notes)

  // --- Location ---
  address: {
    street: "Link Sui Gas Road",
    city: "Gujranwala",
    region: "Punjab",
    postalCode: "", // optional — add if you want it shown
    country: "Pakistan",
    countryCode: "PK",
  },
  // Approximate Gujranwala coordinates — refine to the exact factory pin if you like
  geo: { lat: 32.1877, lng: 74.1945 },

  foundingYear: 1985, // ≈ 40+ years in business — set the exact year if known
  experienceYears: 40,
  registration: "FBR registered", // Federal Board of Revenue (Pakistan)

  // Human-readable hours (shown on the site)
  hours: [{ days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" }],
  // Machine-readable hours (JSON-LD)
  openingHours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],

  // --- Social (TODO: add real profile URLs; leave blank to hide) ---
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Full street address as a single line (skips any blank parts). */
export function formattedAddress() {
  const a = site.address;
  return [a.street, a.city, [a.region, a.postalCode].filter(Boolean).join(" "), a.country]
    .filter(Boolean)
    .join(", ");
}

/** Build a wa.me deep link, optionally pre-filled with a message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Resolve a path to an absolute URL (for canonicals / JSON-LD). */
export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

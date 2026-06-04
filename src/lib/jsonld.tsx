/**
 * Structured data (JSON-LD) — this is what wins local + rich search results.
 * Builders return plain objects; <JsonLd> renders them into the page <head>/body.
 */
import { absoluteUrl, formattedAddress, site } from "@/lib/site";
import type { Faq, Service } from "@/lib/content";

const BUSINESS_ID = absoluteUrl("/#business");

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide LocalBusiness — the heart of local SEO. Rendered once in layout. */
export function localBusinessSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    image: absoluteUrl("/opengraph-image"),
    priceRange: "$$",
    foundingDate: String(site.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Gujranwala" },
      { "@type": "State", name: "Punjab" },
    ],
    knowsAbout: [
      "Plastic injection moulding",
      "Mould making and tooling",
      "Plastic contract manufacturing",
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    areaServed: { "@type": "Country", name: "Pakistan" },
    provider: {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: site.name,
      address: formattedAddress(),
      telephone: site.phoneHref,
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

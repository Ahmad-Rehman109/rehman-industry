import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/content";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/capabilities"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/industries"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // /portfolio is redirected → /products; not listed in sitemap.
    { url: absoluteUrl("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/machines"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/tooling"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: absoluteUrl(`/products/${p.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...productPages];
}

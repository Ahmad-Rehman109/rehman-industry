import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Allow Google, Bing, Yandex, DuckDuckGo and friends. Sitemap is explicitly
 * declared so every crawler finds every page — same sitemap works for all
 * (Bing reads sitemap.xml just like Google).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "Yandex", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}

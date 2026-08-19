import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://rehmanindustry.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force HTTPS. Cloudflare passes the client's scheme through as
      // `x-forwarded-proto` (verified: "https" over TLS, "http" otherwise), so
      // this can never loop — the redirected request arrives with "https" and
      // no longer matches. Without it Google indexes http:// and https:// as
      // two separate sites and splits the ranking signals between them.
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },

      // Permanent redirects: /portfolio → /products (the canonical product directory).
      // Old slugs remain crawlable via 301 to the matching product page where it exists.
      { source: "/portfolio", destination: "/products", permanent: true },
      // map the project slugs → their /products counterparts
      { source: "/portfolio/automotive-tail-lamp-covers", destination: "/products/toyota-aqua-tail-lamp-covers", permanent: true },
      { source: "/portfolio/motorcycle-mudguards", destination: "/products/motorcycle-mudguards", permanent: true },
      { source: "/portfolio/water-cooler-bodies", destination: "/products/air-cooler-bodies", permanent: true },
      { source: "/portfolio/thermos-jugs-cups", destination: "/products/thermos-bodies", permanent: true },
      { source: "/portfolio/instrument-boxes-enclosures", destination: "/products/instrument-boxes", permanent: true },
      { source: "/portfolio/table-legs-furniture-parts", destination: "/products", permanent: true },
      { source: "/portfolio/screw-caps-closures", destination: "/products/lids-and-closures", permanent: true },
    ];
  },
};

export default nextConfig;

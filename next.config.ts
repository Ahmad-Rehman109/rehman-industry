import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects: /portfolio → /products (the canonical product directory).
  // Old slugs remain crawlable via 301 to the matching product page where it exists.
  async redirects() {
    return [
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

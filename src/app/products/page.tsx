import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Plastic Products — What We Make",
  description:
    "Plastic products moulded by Rehman Industry in Gujranwala, Pakistan: Toyota Aqua tail-lamp covers, motorcycle mudguards, air-cooler bodies, thermos, jugs & cups, poultry mats, lids and instrument boxes.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Products | Rehman Industry", url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Parts we make"
        description="A look at the plastic components we mould today — for automotive, appliance, housewares, agriculture, packaging and electrical."
        image="/products/aircooler-1.webp"
        imageAlt="Plastic injection moulded products"
        crumbs={[{ name: "Home", href: "/" }, { name: "Products" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/products/${p.imgs[0]}.webp`}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  {p.tag}
                </span>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
    </>
  );
}

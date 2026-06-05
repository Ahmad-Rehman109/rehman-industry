import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Articles — Plastic Injection Moulding Guides",
  description:
    "Buyer's guides, cost breakdowns and process explainers for plastic injection moulding in Pakistan — from Rehman Industry, Gujranwala (GRW).",
  alternates: { canonical: "/articles" },
  openGraph: { title: "Articles | Rehman Industry", url: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Plain-English guides for plastic buyers"
        description="Honest, jargon-free guides to plastic injection moulding in Pakistan — cost, materials, tooling, contract manufacturing. Written for buyers, not engineers."
        image="/products/hero-2.webp"
        imageAlt="Plastic injection moulding articles and buyer guides"
        crumbs={[{ name: "Home", href: "/" }, { name: "Articles" }]}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-8">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[280px_1fr] sm:p-8"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.heroImg}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Guide · {a.readingMinutes} min read
                </div>
                <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight">
                  {a.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                  Read article
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
          { name: "Articles", path: "/articles" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Rehman Industry — Articles",
          description: "Plastic injection moulding guides for Pakistani buyers.",
          blogPost: articles.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: `/articles/${a.slug}`,
            datePublished: a.publishedAt,
          })),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { IMG, px } from "@/lib/img";
import { projectImage } from "@/lib/portfolio-image";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Portfolio — Plastic Moulding Projects",
  description:
    "A selection of plastic injection moulding projects by Rehman Industry in Gujranwala, Pakistan — packaging, automotive, electrical, medical and consumer parts.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Portfolio | Rehman Industry", url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Parts we've made"
        description="A look at the range of plastic components we mould — across packaging, automotive, electrical, medical and consumer products. Most work is contract, so client names stay confidential."
        image={px(IMG.line, 1800)}
        imageAlt="Plastic injection moulded parts on the production line"
        crumbs={[{ name: "Home", href: "/" }, { name: "Portfolio" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-lg leading-relaxed text-neutral-700">
          Rehman Industry runs <strong>contract injection moulding</strong> for
          businesses across Pakistan. The projects below show the variety of
          parts, materials and industries we serve — from{" "}
          <strong>caps and closures</strong> to{" "}
          <strong>automotive clips</strong>,{" "}
          <strong>electrical enclosures</strong> and{" "}
          <strong>medical components</strong>. Have something similar in mind?{" "}
          <Link href="/contact" className="text-orange-500 underline-offset-4 hover:underline">
            Tell us about it
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectImage(p.slug)}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  {p.industry}
                </span>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {p.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                  View project
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
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portfolio — Rehman Industry",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            about: p.industry,
            url: `/portfolio/${p.slug}`,
          })),
        }}
      />
    </>
  );
}

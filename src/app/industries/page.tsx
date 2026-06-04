import type { Metadata } from "next";
import { industries } from "@/lib/content";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Rehman Industry supplies custom moulded plastic components to automotive, electrical, packaging, household, agriculture and construction businesses across Pakistan.",
  alternates: { canonical: "/industries" },
  openGraph: { title: "Industries We Serve | Rehman Industry", url: "/industries" },
};

const iconBg = [
  "bg-blue-50 text-blue-600",
  "bg-amber-50 text-amber-600",
  "bg-emerald-50 text-emerald-600",
  "bg-rose-50 text-rose-600",
  "bg-violet-50 text-violet-600",
  "bg-sky-50 text-sky-600",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Plastic parts for the sectors that move Pakistan"
        description="We supply moulded components to manufacturers across many industries — each with its own demands on fit, finish and durability."
        image={px(IMG.line, 1800)}
        imageAlt="Industrial manufacturing line"
        crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-lg leading-relaxed text-neutral-700">
          From automotive clips to electrical enclosures, packaging closures to
          household goods, Rehman Industry moulds plastic components for a wide
          range of industries across Pakistan. Don&apos;t see yours? Get in touch
          — chances are we can still make your part.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="rounded-3xl border border-neutral-200 p-7 transition-shadow hover:shadow-lg"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg[i % iconBg.length]}`}
              >
                <ind.Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{ind.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {ind.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Need parts for your industry?" />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
    </>
  );
}

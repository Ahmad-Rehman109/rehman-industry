import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps, services } from "@/lib/content";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { QuickAnswer } from "@/components/quick-answer";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Plastic injection moulding, custom mould making & tooling, and contract manufacturing in Gujranwala, Pakistan — from your design to finished parts.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Our Services | Rehman Industry", url: "/services" },
};

const serviceImg: Record<string, string> = {
  "plastic-injection-moulding": IMG.hall,
  "mould-making": IMG.cnc,
  "contract-manufacturing": IMG.caps,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Plastic moulding services, end to end"
        description="Three core services that take you from tooling to finished, ready-to-use plastic parts — all under one roof in Gujranwala."
        image={px(IMG.factory, 1800)}
        imageAlt="Injection moulding factory floor in Gujranwala"
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      <section className="mx-auto max-w-3xl px-5 pt-10 sm:px-8">
        <QuickAnswer question="What services does Rehman Industry offer?">
          Rehman Industry offers three core plastic services in Gujranwala, Pakistan:
          (1) <strong>plastic injection moulding</strong> — moulding custom plastic parts
          from your drawing or sample; (2) <strong>mould making and tooling</strong> —
          designing, building and repairing injection moulds in-house; and
          (3) <strong>contract plastic manufacturing</strong> — full-service plastic
          production for other brands. Established 2006. FBR-registered.
        </QuickAnswer>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <p className="text-lg leading-relaxed text-neutral-700">
          Bring a drawing, a sample or just a requirement — we handle the rest,
          from tooling to quality-checked production. All three services run
          under one roof in our Gujranwala plant, which keeps lead times short
          and feedback loops tight.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={px(serviceImg[s.slug], 800)}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {s.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            A clear, predictable process — you always know what&apos;s next.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((p, i) => (
              <li key={p.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-orange-500">0{i + 1}</div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Check } from "lucide-react";
import { machines, materials } from "@/lib/content";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Plastic injection moulding capabilities at Rehman Industry, Gujranwala — four Japanese presses (80–385t), a wide range of materials, in-house tooling, secondary operations and quality control.",
  alternates: { canonical: "/capabilities" },
  openGraph: { title: "Capabilities | Rehman Industry", url: "/capabilities" },
};

const numColor = ["text-orange-500", "text-amber-600", "text-emerald-600", "text-rose-600"];

const secondary = [
  "Assembly of multi-part components",
  "Insert moulding and fitted hardware",
  "Pad printing and marking",
  "Trimming, finishing and de-gating",
  "Custom packing for dispatch",
];

const quality = [
  "First-article inspection before production",
  "Dimensional checks against your drawing",
  "Visual inspection on every lot",
  "Consistent process settings, batch to batch",
  "Material traceability on request",
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What we can make — and how we make it well"
        description="From precise technical parts to larger housings, backed by Japanese presses, in-house tooling and quality checks on every job."
        image={px(IMG.cnc, 1800)}
        imageAlt="Precision machining and tooling"
        crumbs={[{ name: "Home", href: "/" }, { name: "Capabilities" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-lg leading-relaxed text-neutral-700">
          Rehman Industry runs <strong>four Japanese Niigata &amp; Nissei
          injection moulding presses</strong> from <strong>80 to 385 tonnes</strong>,
          letting us mould everything from small precision components to larger
          housings. With in-house tooling, a wide material range and checks on
          every batch, we cover the full job — not just the moulding.
        </p>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our presses
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Four clamping forces — we match the press to your part.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {machines.map((m, i) => (
              <div key={m.tonnage} className="rounded-3xl border border-neutral-200 bg-white p-8">
                <div className={`text-6xl font-semibold tracking-tight tabular-nums ${numColor[i]}`}>
                  {m.tonnage}
                  <span className="ml-1 text-xl font-normal text-neutral-400">t</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                  {m.suited}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Materials we mould</h2>
        <p className="mt-3 max-w-xl text-neutral-600">
          A wide range of commodity and engineering plastics — not sure which
          suits your part? We&apos;ll recommend one.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {materials.map((m) => (
            <span
              key={m.abbr}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
            >
              <span className="font-semibold text-neutral-900">{m.abbr}</span>
              <span className="mx-1.5 text-neutral-300">·</span>
              {m.name}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Secondary operations
            </h2>
            <p className="mt-3 text-neutral-600">
              Moulding is often only part of the job. We finish parts so they
              arrive ready to use.
            </p>
            <ul className="mt-6 space-y-3">
              {secondary.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-neutral-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Quality control
            </h2>
            <p className="mt-3 text-neutral-600">
              Consistency is the whole point of moulding. Here&apos;s how we keep
              it.
            </p>
            <ul className="mt-6 space-y-3">
              {quality.map((q) => (
                <li key={q} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <span className="text-neutral-700">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Tell us about your part" />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
        ])}
      />
    </>
  );
}

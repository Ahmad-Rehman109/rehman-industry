import type { Metadata } from "next";
import { Check } from "lucide-react";
import { materials } from "@/lib/content";
import { PageHero } from "@/components/page-hero-v2";
import { QuickAnswer } from "@/components/quick-answer";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding Capabilities — Gujranwala (GRW), Pakistan",
  description:
    "Plastic injection moulding capabilities in Gujranwala (GRW), Pakistan — wide working range, in-house tooling, full material range, secondary operations and quality control. Trusted Pakistani plastic moulding contract manufacturer since 2006.",
  keywords: [
    "plastic injection moulding Pakistan",
    "injection moulding Gujranwala",
    "GRW plastic moulding",
    "plastic moulding company Pakistan",
    "Pakistan plastic factory",
    "Gujranwala plastic manufacturer",
    "plastic parts manufacturer Pakistan",
    "contract injection moulding Pakistan",
    "Rehman Industry Gujranwala",
    "custom plastic moulding Pakistan",
  ],
  alternates: { canonical: "/capabilities" },
  openGraph: { title: "Capabilities | Rehman Industry — Plastic Moulding GRW Pakistan", url: "/capabilities" },
};

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

const pillars = [
  { t: "Established since 2006", d: "Two decades of plastic injection moulding experience serving customers across Pakistan and for export." },
  { t: "Made in Gujranwala", d: "Our plant is based in Gujranwala (GRW) — Pakistan's industrial heartland — with easy supply across the country." },
  { t: "Wide working range", d: "From small precision components to larger housings, we have the capacity to mould a broad variety of plastic parts." },
  { t: "Full material range", d: "Commodity and engineering plastics — PP, PE, ABS, PS, PVC, Nylon (PA), PC, POM and more. We'll recommend the right one." },
  { t: "In-house tooling", d: "Mould design, build and repair handled in-house. No waiting on outside tool-makers, faster turnaround on changes." },
  { t: "Reliable supply", d: "Realistic timelines, on-time dispatch across Pakistan and export — the kind of consistency contract buyers actually need." },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Plastic injection moulding done properly"
        description="A trusted Pakistani plastic injection moulding contract manufacturer in Gujranwala (GRW) — established, experienced, and dependable for everything from automotive parts to housewares, packaging and industrial components."
        image="/products/hero-1.webp"
        imageAlt="Plastic injection moulding capabilities at Rehman Industry, Gujranwala, Pakistan"
        crumbs={[{ name: "Home", href: "/" }, { name: "Capabilities" }]}
      />

      <section className="mx-auto max-w-3xl px-5 pt-10 sm:px-8">
        <QuickAnswer question="Is Rehman Industry a reliable plastic injection moulding company in Pakistan?">
          Yes. Rehman Industry has been a Pakistani plastic injection moulding
          contract manufacturer since <strong>2006</strong> — two decades of
          continuous operation in <strong>Gujranwala (GRW)</strong>. We mould
          everything from small precision parts to large housings, with full
          in-house tooling, food-safe and engineering materials, and supply
          across Pakistan plus export. FBR-registered.
        </QuickAnswer>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <h2 className="text-3xl font-semibold tracking-tight">
          A trusted name in <span className="text-orange-500">plastic injection moulding</span> in Pakistan
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-700">
          Rehman Industry is one of <strong>Gujranwala&apos;s most established
          plastic injection moulding</strong> contract manufacturers. For two
          decades, businesses across <strong>Pakistan</strong> — from{" "}
          <strong>automotive and motorcycle</strong> brands to{" "}
          <strong>appliance, household, packaging</strong> and <strong>industrial</strong>{" "}
          customers — have trusted us to mould the plastic components their
          products are built from.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Whether you need a small precision plastic part, a larger moulded housing
          or a high-volume contract production run, our <strong>Gujranwala
          (GRW)</strong> plant is set up to deliver it consistently, batch after
          batch.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          <strong>Established. Experienced. Reliable.</strong> That&apos;s what a
          plastic moulding partner in Pakistan should be — and what Rehman Industry
          has been since <strong>2006</strong>.
        </p>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Pakistani brands choose Rehman Industry
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Six things that have kept customers coming back for two decades.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.t} className="rounded-3xl border border-neutral-200 bg-white p-7">
                <h3 className="text-lg font-semibold text-neutral-900">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Materials we mould</h2>
        <p className="mt-3 max-w-xl text-neutral-600">
          A wide range of commodity and engineering plastics — not sure which suits
          your part? We&apos;ll recommend one.
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
            <h2 className="text-2xl font-semibold tracking-tight">Secondary operations</h2>
            <p className="mt-3 text-neutral-600">
              Moulding is often only part of the job. We finish parts so they arrive
              ready to use.
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
            <h2 className="text-2xl font-semibold tracking-tight">Quality control</h2>
            <p className="mt-3 text-neutral-600">
              Consistency is the whole point of moulding. Here&apos;s how we keep it.
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

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight">
          Looking for a plastic injection moulding company in Pakistan?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          If you&apos;re searching for a <strong>reliable plastic moulding
          manufacturer in Gujranwala</strong> or anywhere in <strong>Pakistan</strong>,
          Rehman Industry is one of the country&apos;s most established names in
          the field. We handle <strong>contract injection moulding</strong>,{" "}
          <strong>mould making</strong> and <strong>full plastic part manufacturing</strong>{" "}
          — from your drawing or sample, all the way through to finished, packed
          and dispatched parts.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Based in <strong>Gujranwala (GRW)</strong>, we supply customers across
          Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Peshawar and beyond, as
          well as for export.
        </p>
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

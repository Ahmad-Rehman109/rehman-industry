import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "In-House Mould Tooling — Milling, Lathe (Kharad), EDM",
  description:
    "Rehman Industry's in-house mould-making workshop in Gujranwala, Pakistan — milling, kharad (lathe), EDM, drilling, grinding and hand-finishing. We build and repair injection moulds under one roof.",
  alternates: { canonical: "/tooling" },
};

const tools = [
  { id: "8865187", title: "CNC milling", desc: "Milling mould cavities, cores and steel inserts to spec." },
  { id: "20607184", title: "Vertical milling", desc: "Profile milling and pocketing on tooling steel." },
  { id: "28929510", title: "Kharad (lathe)", desc: "Turning round mould features — bushings, sprues, ejector pins." },
  { id: "28929513", title: "Lathe operations", desc: "Precision turning for cylindrical mould components." },
  { id: "8956445", title: "High-speed cutting", desc: "Coolant-assisted cutting for tight tolerances." },
  { id: "8865189", title: "Steel finishing", desc: "Cavity finishing for clean, blemish-free part surfaces." },
  { id: "33748048", title: "Detailed inserts", desc: "Small precise inserts for multi-cavity moulds." },
  { id: "7480233", title: "Hand-finishing", desc: "Skilled hand-polishing and final fit on the bench." },
  { id: "10406128", title: "CNC machining", desc: "Detailed metalwork for accurate mating faces." },
];

const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export default function ToolingPage() {
  return (
    <>
      <PageHero
        eyebrow="In-house mould tooling"
        title="Mould design, build & repair — under one roof"
        description="A fully-equipped tool room means we design, build and refurbish injection moulds ourselves. Milling, kharad (lathe), drilling, grinding, hand-finishing — no waiting on an outside tool-maker."
        image={px("8865187", 1800)}
        imageAlt="CNC machining for mould tooling at Rehman Industry"
        crumbs={[{ name: "Home", href: "/" }, { name: "Tooling" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-lg leading-relaxed text-neutral-700">
          A clean moulded part starts with a clean, accurate mould. Our in-house tool
          room runs <strong>milling, kharad (lathe), drilling, grinding</strong> and{" "}
          <strong>hand-finishing</strong> work — for designing, fabricating, repairing
          and refurbishing injection moulds. Short feedback loops on design tweaks,
          faster sampling, and tooling that holds spec production after production.
        </p>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          The moulds we build here run on{" "}
          <Link href="/machines" className="font-medium text-orange-500 underline-offset-4 hover:underline">
            our injection moulding fleet <ArrowRight className="inline h-4 w-4 -mt-0.5" />
          </Link>{" "}
          — see the machines they ship parts from.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div
              key={t.id}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={px(t.id, 900)}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tooling", path: "/tooling" },
        ])}
      />
    </>
  );
}

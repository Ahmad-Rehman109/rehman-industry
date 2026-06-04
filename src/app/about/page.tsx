import type { Metadata } from "next";
import { CalendarDays, Factory, MapPin, Users } from "lucide-react";
import { stats, whyUs } from "@/lib/content";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rehman Industry is a plastic injection moulding and contract manufacturing business in Gujranwala, Pakistan, established 1985 — built on consistent quality and reliable supply.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Rehman Industry", url: "/about" },
};

const numLight = ["text-blue-400", "text-amber-400", "text-emerald-400", "text-rose-400"];

const facts = [
  { Icon: CalendarDays, label: "Established", value: "1985" },
  { Icon: MapPin, label: "Location", value: "Gujranwala, Pakistan" },
  { Icon: Factory, label: "Focus", value: "Plastic injection moulding" },
  { Icon: Users, label: "We serve", value: "Pakistan + export" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A plastics partner you can build on"
        description="For forty years, Rehman Industry has made one thing easy: getting plastic parts made right, on time, every time."
        image={px(IMG.factory, 1800)}
        imageAlt="Rehman Industry factory floor"
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Who we are
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700">
              <p>
                Rehman Industry is a plastic injection moulding business based in
                Gujranwala — one of Pakistan&apos;s busiest manufacturing cities.
                Established in 1985, we work primarily on a contract basis: other
                businesses bring us their products, parts and requirements, and we
                handle the moulding, the quality and the supply.
              </p>
              <p>
                We built the business around consistency: well-made tooling on
                Japanese presses, careful process control,
                and checks on every lot before it leaves the floor. The result is
                parts that come out the same, batch after batch.
              </p>
              <p>
                Today we make components for businesses across many sectors, from
                small precision parts to larger housings. Whether you need a trial
                run or ongoing high-volume production, our aim is the same: to be
                the dependable plastics arm of your business.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                At a glance
              </h2>
              <dl className="mt-4 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-orange-500">
                      <f.Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs text-neutral-500">{f.label}</dt>
                      <dd className="font-semibold">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className={`text-5xl font-semibold tracking-tight ${numLight[i]}`}>
                {s.value}
              </div>
              <div className="mt-2 text-sm text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How we work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          The principles that decide how we run every job.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((v) => (
            <div key={v.title} className="rounded-3xl border border-neutral-200 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-orange-500">
                <v.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Let's make something together" />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}

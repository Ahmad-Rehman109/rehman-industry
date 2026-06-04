import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import {
  industries,
  materials,
  processSteps,
  services,
  stats,
  whyUs,
} from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { Button, Card, Container, Section, SectionHeading } from "@/components/ui";

/* --------------------------------------------------------------- StatsBand */

export function StatsBand() {
  return (
    <section className="bg-brand-600">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-12 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-4xl font-bold text-white">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium text-brand-100">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- ServicesGrid */

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="group block"
        >
          <Card className="flex h-full flex-col">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <s.Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {s.short}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Card>
        </Link>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- WhyUs */

export function WhyUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((v) => (
        <Card key={v.title}>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <v.Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-semibold text-ink">{v.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {v.desc}
          </p>
        </Card>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------- ProcessTimeline */

export function ProcessTimeline() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((s, i) => (
        <li
          key={s.title}
          className="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <s.Icon className="h-5 w-5" />
            </span>
            <span className="text-3xl font-bold text-slate-200">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {s.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------ IndustriesGrid */

export function IndustriesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind) => (
        <Card key={ind.name}>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <ind.Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-semibold text-ink">{ind.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {ind.blurb}
          </p>
        </Card>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- MaterialsList */

export function MaterialsList() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {materials.map((m) => (
        <span
          key={m.abbr}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm"
        >
          <span className="font-bold text-brand-700">{m.abbr}</span>
          <span className="text-slate-400">·</span>
          {m.name}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ CtaBand */

export function CtaBand({
  title = "Ready for precise, reliable plastic parts?",
  description = "Send us your drawing, sample or idea. We'll review it and get back to you — usually within one business day — with honest advice and a quote.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="white" size="lg">
              Get a Quote
            </Button>
            <Button
              href={whatsappLink(
                "Hello Rehman Industry, I'd like a quote for plastic injection moulding.",
              )}
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ small inline helper */

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

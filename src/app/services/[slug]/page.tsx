import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { processSteps, services } from "@/lib/content";
import { absoluteUrl, site, whatsappLink } from "@/lib/site";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";

const serviceImg: Record<string, string> = {
  "plastic-injection-moulding": IMG.hall,
  "mould-making": IMG.cnc,
  "contract-manufacturing": IMG.caps,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: absoluteUrl(path),
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.short}
        image={px(serviceImg[service.slug] ?? IMG.factory, 1800)}
        imageAlt={service.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-neutral-700">
              {service.intro}
            </p>
            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              What you get
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold">
                Get a quote for {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Send your drawing, sample or requirement. We usually reply within
                a business day.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Request a quote
                </Link>
                <a
                  href={whatsappLink(
                    `Hello Rehman Industry, I'd like a quote for ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white hover:bg-[#1ebe5d]"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900"
                >
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((p, i) => (
              <li key={p.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-blue-600">0{i + 1}</div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-semibold tracking-tight">More services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group flex items-center gap-5 rounded-3xl border border-neutral-200 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={px(serviceImg[r.slug] ?? IMG.factory, 400)}
                alt={r.title}
                className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{r.short}</p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Need ${service.title.toLowerCase()}?`} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { absoluteUrl, site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: `/products/${p.slug}` },
  };
}

export default async function ProductPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  const wa = whatsappLink(`Hello Rehman Industry, I'm interested in ${p.title}. Please share details.`);

  return (
    <>
      <PageHero
        eyebrow={p.tag}
        title={p.title}
        description={p.desc}
        image={`/products/${p.imgs[0]}.webp`}
        imageAlt={p.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: p.title },
        ]}
      />

      {/* Quick facts strip */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8">
          {[
            { l: "Material", v: p.material },
            { l: "Industry", v: p.industry },
            { l: "Made in", v: "Gujranwala, Pakistan" },
            { l: "Lead time", v: "On request" },
          ].map((m) => (
            <div key={m.l} className="bg-neutral-50 py-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{m.l}</div>
              <div className="mt-1 text-sm font-medium text-neutral-900">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-tight">About this product</h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700">{p.intro}</p>

        <h3 className="mt-12 text-xl font-semibold tracking-tight">What you get</h3>
        <ul className="mt-4 space-y-3">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-neutral-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(180deg,#ff9d3c,#ff6a00)" }}
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white"
          >
            WhatsApp us
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 text-sm font-semibold text-neutral-800"
          >
            {site.phone}
          </a>
        </div>
      </section>

      {/* Gallery */}
      {p.imgs.length > 1 && (
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.imgs.map((im, i) => (
              <div key={im} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/products/${im}.webp`} alt={`${p.title} — image ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">More products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/products/${r.imgs[0]}.webp`} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">{r.tag}</span>
                  <h3 className="mt-2 font-semibold">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need ${p.title.toLowerCase()}?`}
        description="Send a drawing, a sample or just your requirement — we usually reply within a business day."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: p.title, path: `/products/${p.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          description: p.metaDescription,
          category: p.industry,
          material: p.material,
          image: absoluteUrl(`/products/${p.imgs[0]}.webp`),
          brand: { "@type": "Brand", name: site.name },
          manufacturer: { "@id": absoluteUrl("/#business") },
          url: absoluteUrl(`/products/${p.slug}`),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url: `/articles/${a.slug}`, type: "article" },
  };
}

/** Render a paragraph with **bold** runs supported, or an h3 for a "### " line. */
function Para({ text }: { text: string }) {
  if (text.startsWith("### ")) {
    return <h3 className="mt-8 text-xl font-semibold tracking-tight">{text.slice(4)}</h3>;
  }
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
      {parts.map((seg, i) => {
        if (seg.startsWith("**") && seg.endsWith("**")) {
          return <strong key={i}>{seg.slice(2, -2)}</strong>;
        }
        return <span key={i}>{seg}</span>;
      })}
    </p>
  );
}

export default async function ArticlePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Article · ${a.readingMinutes} min read`}
        title={a.title}
        description={a.excerpt}
        image={a.heroImg}
        imageAlt={a.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: a.title },
        ]}
      />

      {/* Body */}
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-neutral-200 pb-6 text-sm text-neutral-500">
          <span>
            <span className="font-medium text-neutral-700">By Rehman Industry</span>
            <span className="mx-2 text-neutral-300">·</span>
            <span>Gujranwala, Pakistan</span>
          </span>
          <span className="mx-1 text-neutral-300">·</span>
          <time dateTime={a.updatedAt || a.publishedAt}>
            Updated {new Date(a.updatedAt || a.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span className="mx-1 text-neutral-300">·</span>
          <span>{a.readingMinutes} min read</span>
        </div>
        {a.body.map((section, i) => (
          <section key={section.h2} className={i === 0 ? "" : "mt-12"}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.h2}</h2>
            {section.paragraphs.map((p, j) => <Para key={j} text={p} />)}
          </section>
        ))}

        {/* In-article CTA */}
        <div className="mt-14 rounded-3xl border border-orange-200 bg-orange-50 p-7">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
            Need a quote for your part?
          </h3>
          <p className="mt-2 text-neutral-700">
            Send us your drawing, sample or just a description. We&apos;ll reply within a business day with real numbers.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(180deg,#ff9d3c,#ff6a00)" }}
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">More articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/articles/${r.slug}`} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.heroImg} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">Guide</span>
                  <h3 className="mt-2 font-semibold leading-tight">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: a.title, path: `/articles/${a.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.metaDescription,
          datePublished: a.publishedAt,
          dateModified: a.updatedAt || a.publishedAt,
          author: { "@type": "Organization", name: site.name },
          publisher: {
            "@type": "Organization",
            name: site.name,
            logo: { "@type": "ImageObject", url: absoluteUrl("/brand/mark.svg") },
          },
          image: absoluteUrl(a.heroImg),
          url: absoluteUrl(`/articles/${a.slug}`),
          keywords: a.keywords.join(", "),
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/articles/${a.slug}`) },
        }}
      />
    </>
  );
}

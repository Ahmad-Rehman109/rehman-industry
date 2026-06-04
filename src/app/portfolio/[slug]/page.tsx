import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { IMG, px } from "@/lib/img";
import { projectGallery, projectImage } from "@/lib/portfolio-image";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.industry}
        title={project.title}
        description={project.summary}
        image={projectImage(project.slug)}
        imageAlt={project.title}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: project.title },
        ]}
      />

      {/* Meta strip */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8">
          {[
            { label: "Client", value: project.client },
            { label: "Year", value: project.year },
            { label: "Industry", value: project.industry },
            { label: "Material", value: project.material },
          ].map((m) => (
            <div key={m.label} className="bg-neutral-50 py-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {m.label}
              </div>
              <div className="mt-1 text-sm font-medium text-neutral-900">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-tight">The brief</h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          {project.objective}
        </p>
        <h2 className="mt-12 text-2xl font-semibold tracking-tight">
          What it needed
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          {project.requirements}
        </p>
      </section>

      {/* Key challenges */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            How we solved it
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {project.features.map((f, i) => (
              <div key={f} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-orange-500">
                  0{i + 1}
                </div>
                <p className="mt-3 leading-relaxed text-neutral-700">{f}</p>
              </div>
            ))}
          </div>

          {/* Project stats */}
          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {project.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <dt className="text-sm text-neutral-500">{s.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-neutral-900">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <figure className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <Quote className="h-8 w-8 text-orange-500" />
            <blockquote className="mt-4 text-xl font-medium leading-relaxed text-neutral-800">
              “{project.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-neutral-500">
              — {project.testimonial.author}
            </figcaption>
          </figure>
        </section>
      )}

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {projectGallery(project.slug).map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-500"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>

      <CtaBand
        title="Need something similar?"
        description="Send your drawing, sample or requirement. We'll advise on material, tooling and volume — usually within a business day."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.metaDescription,
          about: project.industry,
          material: project.material,
          url: absoluteUrl(`/portfolio/${project.slug}`),
          image: absoluteUrl("/products/taillamp-2.webp"),
          creator: { "@id": absoluteUrl("/#business") },
        }}
      />
    </>
  );
}

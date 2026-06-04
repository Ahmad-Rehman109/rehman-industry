import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

export type Crumb = { name: string; href?: string };

/** Consistent dark hero for inner pages, with an optional breadcrumb trail. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 lg:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
              {crumbs.map((c, i) => (
                <li key={c.name} className="inline-flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-slate-200">{c.name}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-slate-600" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <Eyebrow invert>{eyebrow}</Eyebrow>}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}

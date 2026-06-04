import Link from "next/link";

export type Crumb = { name: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        className="h-[46vh] min-h-[340px] w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-neutral-950/70" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 lg:pb-14">
          {crumbs && crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                {crumbs.map((c, i) => (
                  <li key={c.name} className="inline-flex items-center gap-1.5">
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.name}
                      </Link>
                    ) : (
                      <span className="text-white/90">{c.name}</span>
                    )}
                    {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-300">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg text-white/80">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

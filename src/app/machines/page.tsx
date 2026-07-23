import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Our Plastic Injection Moulding Capacity",
  description:
    "Rehman Industry — established plastic injection moulding capacity in Gujranwala, Pakistan. Decades of production experience, a wide working range, and a factory floor that runs almost around the clock.",
  alternates: { canonical: "/machines" },
};

const tiles = [
  { id: "14804699", title: "Production hall", desc: "Our main moulding floor in Gujranwala, Pakistan." },
  { id: "34221993", title: "Steady output", desc: "Built for repeatable runs, batch after batch." },
  { id: "17937669", title: "Reliable production", desc: "Consistency is what contract customers come back for." },
  { id: "18631424", title: "Volume capability", desc: "From everyday housewares to industrial parts." },
  { id: "31985602", title: "Established setup", desc: "Refined over two decades of plastic manufacturing." },
  { id: "18631423", title: "Quality across the floor", desc: "Every lot is checked before it ships." },
  { id: "12951627", title: "Factory in Gujranwala", desc: "Centrally located for nationwide and export supply." },
  { id: "32972128", title: "Skilled team", desc: "Operators with years of moulding experience." },
];

const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export default function MachinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our capacity"
        title="Built for volume, tuned for precision"
        description="A look at our plastic injection moulding capacity in Gujranwala, Pakistan — established for decades, broad enough to handle a wide variety of parts, and dependable enough that customers keep coming back."
        image={px("14804699", 1800)}
        imageAlt="Plastic injection moulding production hall — Rehman Industry, Gujranwala"
        crumbs={[{ name: "Home", href: "/" }, { name: "Our capacity" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight">A trusted name in plastic moulding</h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          For <strong>two decades</strong>, Rehman Industry has been one of
          Gujranwala&apos;s most established <strong>plastic injection moulding</strong>{" "}
          contract manufacturers. From <strong>automotive parts</strong> and{" "}
          <strong>household products</strong> to <strong>industrial components</strong>{" "}
          and <strong>packaging</strong>, our factory has shaped plastic for businesses
          across <strong>Pakistan</strong> and for export.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Customers choose us not because we are the biggest, but because we are{" "}
          <strong>reliable</strong>. Our floor is set up for consistent runs, our team
          for steady quality, and our schedule for on-time delivery. Whether you need a
          small precision part or a large moulded housing, we have the working range to
          handle it.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Established. Experienced. Dependable. That is what an injection moulding
          partner should be — and what Rehman Industry has been since <strong>2006</strong>.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
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
          { name: "Our capacity", path: "/machines" },
        ])}
      />
    </>
  );
}

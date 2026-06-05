import type { Metadata } from "next";
import { CalendarDays, Factory, MapPin, Users } from "lucide-react";
import { stats, whyUs } from "@/lib/content";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Rehman Industry — Plastic Moulding in Gujranwala Since 1985",
  description:
    "Rehman Industry — one of Pakistan's most established plastic injection moulding contract manufacturers, based in Gujranwala (GRW) since 1985. Decades of experience, in-house tooling, nationwide supply.",
  keywords: [
    "Rehman Industry",
    "plastic injection moulding Pakistan",
    "Gujranwala plastic factory",
    "GRW plastic moulding",
    "Pakistani plastic manufacturer since 1985",
  ],
  alternates: { canonical: "/about" },
  openGraph: { title: "About Rehman Industry", url: "/about" },
};

const numLight = ["text-orange-400", "text-amber-400", "text-emerald-400", "text-rose-400"];

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
        title="Four decades of plastic, made in Gujranwala"
        description="Rehman Industry is one of Pakistan's longest-running plastic injection moulding contract manufacturers — established 1985, family-built, and trusted across the country."
        image="/products/hero-1.webp"
        imageAlt="Rehman Industry — plastic injection moulding factory, Gujranwala"
        crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Who we are</h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                <strong>Rehman Industry</strong> is a plastic injection moulding and
                contract manufacturing business based in <strong>Gujranwala (GRW)</strong>,
                Pakistan — one of the country&apos;s busiest industrial cities.
                Established in <strong>1985</strong>, we have spent four decades doing
                one thing well: turning plastic into the precise, reliable components
                that other businesses need to build their products.
              </p>
              <p>
                We work primarily on a <strong>contract basis</strong>. Other businesses
                bring us their drawings, samples or just an idea, and we handle the
                rest — mould making, production, quality control and supply. The
                brand&apos;s name goes on the product. Ours rarely does. That has
                been our quiet role in Pakistani manufacturing for the last forty
                years.
              </p>
              <p>
                Today, parts moulded by Rehman Industry sit inside Pakistani cars
                (tail-lamp covers for Toyota Aqua and other models), on motorcycles
                (mudguards and body parts), in homes (air-cooler bodies, thermoses,
                jugs, cups, household containers), on poultry farms (slatted floor
                mats), in workshops (instrument enclosures) and on supermarket
                shelves (FMCG caps, lids and closures).
              </p>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">At a glance</h2>
              <dl className="mt-4 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
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

      {/* Our story */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight">Our story</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              Rehman Industry was founded in <strong>1985</strong> in Gujranwala,
              when Pakistani plastic manufacturing was still finding its feet.
              We started small — a single workshop, a few moulds, and a focus
              on doing repeat work for local businesses who needed reliable
              plastic parts faster than the imports could arrive.
            </p>
            <p>
              Over the years the operation grew. We invested in better presses,
              built our own <strong>in-house tool room</strong> so we could make
              and repair moulds without depending on outside tool-makers, and
              widened the range of plastics we mould. By the 2000s we were
              shipping components to brands across <strong>Lahore, Karachi,
              Islamabad, Faisalabad, Sialkot and Peshawar</strong>, and handling
              export orders for buyers further afield.
            </p>
            <p>
              Through every phase, the company has stayed family-built and
              relationship-driven. Most of our customers have worked with us
              for over a decade. Some have run the same parts for over twenty
              years. That kind of longevity is rare in Pakistani manufacturing —
              and we treat it as the most honest measure of whether we&apos;re
              still doing this right.
            </p>
            <p>
              We are <strong>FBR-registered</strong> and run our books straight.
              We sign NDAs by default for contract work. Visitors are welcome at
              the factory by appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label}>
              <div className={`text-5xl font-semibold tracking-tight ${numLight[i] || "text-orange-400"}`}>{s.value}</div>
              <div className="mt-2 text-sm text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why customers come back */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">Why customers keep coming back</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-700">
          <p>
            The plastic moulding industry in Pakistan is competitive. Customers
            have options. What has kept ours coming back for so long, we believe,
            comes down to four things:
          </p>
          <p>
            <strong>Consistency.</strong> Plastic injection moulding is fundamentally
            a repeatability business. The first part has to look the same as the
            ten-thousandth. We have spent decades refining process control, mould
            maintenance and in-line quality checks specifically to keep that
            consistency tight. Customers know what they&apos;re going to get.
          </p>
          <p>
            <strong>In-house tooling.</strong> Most Pakistani moulders subcontract
            their mould making. We build, repair and refurbish moulds in-house —
            milling, kharad (lathe), drilling, grinding and hand finishing, all
            under one roof. When you need a design tweak mid-production, we can
            usually act on it the same week rather than waiting on an outside
            tool-maker.
          </p>
          <p>
            <strong>Honest quoting.</strong> We quote what we mean. No bait-and-switch,
            no hidden surcharges, no inflated promises on lead time. If a job will
            take eight weeks, we say eight. Most buyers we work with eventually tell
            us this is the most underrated thing about us.
          </p>
          <p>
            <strong>Confidentiality.</strong> Contract work runs on trust. We sign NDAs
            by default. Your designs, suppliers and customers stay with you. We
            don&apos;t talk about other buyers&apos; work, and we won&apos;t talk about
            yours.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            The principles that decide how we run every job.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((v) => (
              <div key={v.title} className="rounded-3xl border border-neutral-200 bg-white p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <v.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Who we work with</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-700">
          <p>
            Our customers fall into a few buckets. <strong>Automotive and motorcycle
            parts suppliers</strong> who need plastic body components, lamp covers,
            mudguards, clips and trim moulded to OEM-grade tolerances.
            <strong> Appliance brands</strong> who need cabinet bodies, water-cooler
            housings and finished sub-assemblies. <strong>FMCG and packaging companies</strong>{" "}
            for caps, lids and closures at high volume. <strong>Housewares brands</strong> for
            thermoses, jugs, cups and storage containers. <strong>Agricultural and poultry
            equipment suppliers</strong> for slat-flooring and crates. And{" "}
            <strong>electrical manufacturers</strong> for switch housings, junction
            boxes and instrument enclosures.
          </p>
          <p>
            We supply across <strong>Pakistan</strong> — Lahore, Karachi, Islamabad,
            Faisalabad, Sialkot, Peshawar and beyond — and handle <strong>export</strong>{" "}
            orders for buyers across the region. Whether you&apos;re a single-product
            startup or a multi-product brand running ongoing contracts, we&apos;ll
            scale to what you need.
          </p>
        </div>
      </section>

      {/* Visit / contact */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Visit us</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              We&apos;re at <strong>Link Sui Gas Road, Gujranwala, Punjab, Pakistan</strong>.
              The factory is open <strong>24/7 except Fridays</strong>. We welcome
              visitors by appointment — call or WhatsApp first so the right
              person can meet you.
            </p>
            <p>
              If you&apos;d rather start with a quote, send your part details by
              WhatsApp, phone or the contact form. We usually reply within a
              business day.
            </p>
          </div>
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

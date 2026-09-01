import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { CtaBand } from "@/components/cta-v2";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding FAQs",
  description:
    "Common questions about plastic injection moulding, tooling, materials, order quantities and lead times — answered by Rehman Industry, Gujranwala.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | Rehman Industry", url: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="The things buyers most often ask us about plastic injection moulding. Still unsure? Just message us — we're happy to help."
        image={px(IMG.caps, 1800)}
        imageAlt="Moulded plastic caps"
        crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="divide-y divide-neutral-200 overflow-hidden rounded-3xl border border-neutral-200">
          {faqs.map((f) => (
            <details key={f.q} className="group faq-item">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold transition-colors">
                <span className="faq-q">{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-neutral-600">
                <p className="leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title="Still have a question?" />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
    </>
  );
}

import type { Metadata } from "next";
import { HomeV3 } from "@/components/home-v3";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";
import { services, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rehman Industry — Plastic Injection Moulding in Gujranwala, Pakistan",
  description:
    "Rehman Industry is a plastic injection moulding factory in Gujranwala, Pakistan — custom tooling, contract manufacturing and moulded parts for automotive, housewares, packaging and agriculture. 20+ years, Japanese presses, FBR registered.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <HomeV3 />
      {services.map((s) => (
        <JsonLd key={s.slug} data={serviceSchema(s)} />
      ))}
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}

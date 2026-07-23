import type { Metadata } from "next";
import { HomeV3 } from "@/components/home-v3";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/jsonld";
import { services, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding in Gujranwala, Pakistan",
  description:
    "Rehman Industry — precision plastic injection moulding, custom tooling and contract manufacturing in Gujranwala, Pakistan. Tail-lamp covers, mudguards, air-cooler bodies, thermos, poultry mats, caps and custom parts. 20+ years, Japanese presses, FBR registered.",
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

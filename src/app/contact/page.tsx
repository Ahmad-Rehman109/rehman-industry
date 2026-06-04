import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { formattedAddress, site, whatsappLink } from "@/lib/site";
import { IMG, px } from "@/lib/img";
import { PageHero } from "@/components/page-hero-v2";
import { ContactForm } from "@/components/contact-form";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description:
    "Get a quote for plastic injection moulding from Rehman Industry, Gujranwala. Send your drawing, sample or requirement by form, phone or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Rehman Industry", url: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Link Sui Gas Road, Gujranwala, Pakistan",
)}&z=12&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote"
        description="Tell us about your part and we'll get back to you — usually within a business day — with honest advice and a price."
        image={px(IMG.worker, 1800)}
        imageAlt="Rehman Industry operator at an injection moulding machine"
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Send an enquiry
            </h2>
            <p className="mt-2 text-neutral-600">
              The more detail you share, the more accurate our reply.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="text-lg font-semibold">Reach us directly</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">{formattedAddress()}</span>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-center gap-3 text-neutral-700 hover:text-blue-600"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-blue-600" />
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-neutral-700 hover:text-blue-600"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-blue-600" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(
                      "Hello Rehman Industry, I'd like a quote for plastic injection moulding.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-700 hover:text-blue-600"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
                    Message on WhatsApp
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-neutral-700">
                    {site.hours[0].days}
                    <br />
                    {site.hours[0].time}
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200">
              <iframe
                src={mapSrc}
                title="Map of Rehman Industry, Link Sui Gas Road, Gujranwala"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}

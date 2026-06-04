import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const DEFAULT_IMG =
  "https://images.pexels.com/photos/11765538/pexels-photo-11765538.jpeg?auto=compress&cs=tinysrgb&w=1800";

export function CtaBand({
  title = "Let's make your part.",
  description = "Send a drawing, a sample, or just a requirement. We usually reply within a business day.",
  image = DEFAULT_IMG,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  const wa = whatsappLink(
    "Hello Rehman Industry, I'd like a quote for plastic injection moulding.",
  );
  return (
    <section className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        className="h-[64vh] min-h-[440px] w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-neutral-950/72" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/80">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
              <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

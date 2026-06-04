import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Let's make your part.",
  description = "Send a drawing, a sample, or just a requirement. We usually reply within a business day.",
}: {
  title?: string;
  description?: string;
}) {
  const wa = whatsappLink(
    "Hello Rehman Industry, I'd like a quote for plastic injection moulding.",
  );
  return (
    <section className="relative bg-neutral-950">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(700px 360px at 20% 0%, rgba(255,122,24,.18), transparent 60%), radial-gradient(800px 420px at 80% 100%, rgba(46,125,255,.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title.split(" your part.")[0]}
            {title.includes(" your part.") && (
              <span className="font-serif italic" style={{ color: "#ff9d3c" }}>
                {" "}
                your part.
              </span>
            )}
          </h2>
          <p className="mt-5 max-w-md text-lg text-white/75">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(180deg,#ff9d3c,#ff6a00)" }}
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
            <a href={`tel:${site.phoneHref}`} className="hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

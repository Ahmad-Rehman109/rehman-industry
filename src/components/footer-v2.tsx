import Link from "next/link";
import { formattedAddress, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";

const company = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Tooling", href: "/tooling" },
  { label: "Articles", href: "/articles" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 text-lg font-semibold text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark.svg" alt="" width={28} height={28} className="rounded-md" />
            Rehman <span style={{ color: "#ff7a18" }}>Industry</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Precision plastic injection moulding &amp; contract manufacturing in
            Gujranwala, Pakistan — since 1985.
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            FBR-registered · 40+ years · Japanese presses
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-medium hover:text-white"
                style={{ color: "#ff9d3c" }}
              >
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>{formattedAddress()}</li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.emailAlt}`} className="hover:text-white">
                {site.emailAlt}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              {site.hours[0].days}, {site.hours[0].time}
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-orange-500 hover:text-orange-500"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13.5 9H16V6h-2.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.5l.5-3H13V9.7c0-.4.3-.7.5-.7z"/>
                </svg>
              </a>
            )}
            {site.social.tiktok && (
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-orange-500 hover:text-orange-500"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M16.6 5.5a4.7 4.7 0 0 1-3.3-1.5h-2.6v11a2.4 2.4 0 1 1-2.4-2.4c.3 0 .6 0 .8.1V10a5.2 5.2 0 1 0 4.5 5.2V9.4a7.2 7.2 0 0 0 3 .9V7.6a4.6 4.6 0 0 1-0-2.1z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-5 py-6 text-xs sm:flex-row sm:px-8">
        <span>© {year} Rehman Industry. All rights reserved.</span>
        <span>Plastic Injection Moulding · Gujranwala, Pakistan</span>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { formattedAddress, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";

const company = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-lg font-semibold text-white">
            Rehman <span className="text-blue-400">Industry</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Precision plastic injection moulding &amp; contract manufacturing in
            Gujranwala, Pakistan — since 1985.
          </p>
          <p className="mt-3 text-xs text-neutral-500">
            FBR-registered · 40+ years · Niigata &amp; Nissei presses
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
              <Link href="/services" className="text-blue-400 hover:text-blue-300">
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
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-5 py-6 text-xs sm:flex-row sm:px-8">
        <span>© {year} Rehman Industry. All rights reserved.</span>
        <span>Plastic Injection Moulding · Gujranwala, Pakistan</span>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  const active = (h: string) => pathname === h || pathname.startsWith(h + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark.svg" alt="" width={30} height={30} className="rounded-lg" />
          Rehman <span className="text-blue-600">Industry</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-600 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all ${
                active(n.href)
                  ? "text-blue-600 after:w-full"
                  : "hover:text-neutral-900 after:w-0 hover:after:w-full"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden text-sm text-neutral-600 hover:text-neutral-900 xl:block"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 sm:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-900 hover:bg-neutral-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-medium text-white"
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

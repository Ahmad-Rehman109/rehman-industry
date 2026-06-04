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

/** Subpage nav — themed to match the new homepage (dark glass + molten accent). */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const active = (h: string) => pathname === h || pathname.startsWith(h + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-neutral-950/80 backdrop-blur"
          : "border-b border-transparent bg-gradient-to-b from-neutral-950/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark.svg" alt="" width={30} height={30} className="rounded-lg" />
          Rehman <span style={{ color: "#ff7a18" }}>Industry</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative py-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:transition-all ${
                active(n.href)
                  ? "text-white after:w-full"
                  : "hover:text-white after:w-0 hover:after:w-full"
              }`}
              style={{ ["--tw-color-after" as never]: "#ff7a18" } as React.CSSProperties}
            >
              {n.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all"
                style={{
                  width: active(n.href) ? "100%" : 0,
                  background: "#ff7a18",
                }}
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden text-sm text-white/70 hover:text-white xl:block"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
            style={{ background: "linear-gradient(180deg,#ff9d3c,#ff6a00)" }}
          >
            Get a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-neutral-950 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(180deg,#ff9d3c,#ff6a00)" }}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

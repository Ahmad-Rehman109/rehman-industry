"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Mail, Menu, Phone, X } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-ink text-slate-300 lg:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {site.hours[0].days}: {site.hours[0].time}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all",
          scrolled
            ? "border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75"
            : "border-transparent bg-white",
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <Link href="/" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href={whatsappLink()} variant="ghost" size="sm">
              WhatsApp
            </Button>
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-slate-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-b border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium",
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-800 hover:bg-slate-100",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Button href="/contact" size="lg">
                Get a Quote
              </Button>
              <Button href={whatsappLink()} variant="whatsapp" size="lg">
                Message us on WhatsApp
              </Button>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

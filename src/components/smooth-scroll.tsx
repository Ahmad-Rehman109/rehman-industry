"use client";

import { useEffect } from "react";

/**
 * Global smooth scroll. Skipped on mobile and reduced-motion users.
 * The earlier "first-200px crawl then 10x fast" bug was caused by
 *   1) CSS `html { scroll-behavior: smooth }` fighting Lenis, and
 *   2) Lenis being instantiated while the page had a stale scroll offset.
 * Both are addressed here: the CSS rule was removed in globals.css, and we
 * snap scroll to 0 before Lenis grabs hold so its internal targetScroll
 * matches reality.
 */
declare global {
  interface Window {
    Lenis?: new (opts: object) => {
      raf: (t: number) => void;
      destroy: () => void;
      scrollTo: (n: number, opts?: object) => void;
    };
  }
}

const LENIS_CDN = "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const wantsSmooth = window.matchMedia("(min-width: 900px)").matches
      && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wantsSmooth) return;

    type LenisInstance = { raf: (t: number) => void; destroy: () => void };
    let lenis: LenisInstance | null = null;
    let raf = 0;

    function start() {
      const Ctor = window.Lenis;
      if (!Ctor) return;
      // Snap to top BEFORE Lenis takes over so its internal scroll matches reality.
      window.scrollTo(0, 0);
      document.documentElement.classList.add("lenis", "lenis-smooth");
      lenis = new Ctor({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        // Important: don't try to "smooth" anchor scrolls — they jitter.
        autoResize: true,
      });
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    }

    if (window.Lenis) start();
    else {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${LENIS_CDN}"]`);
      if (existing) existing.addEventListener("load", start, { once: true });
      else {
        const s = document.createElement("script");
        s.src = LENIS_CDN; s.async = true;
        s.onload = start;
        document.head.appendChild(s);
      }
    }
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);
  return null;
}

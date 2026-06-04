"use client";

import { useEffect, useState } from "react";

/**
 * Full-bleed hero background that cross-fades through several images.
 * Pure CSS opacity transitions — light, no library. Respects the
 * prefers-reduced-motion setting by holding on the first image.
 */
export function HeroSlideshow({
  images,
  interval = 5000,
  className = "h-[82vh] min-h-[540px]",
}: {
  images: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      {/* Dark gradient — strongest at the bottom where the text sits, so the
          headline stays readable over any image. */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/55 to-neutral-950/35" />

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

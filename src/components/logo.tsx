import { cn } from "@/lib/cn";

/**
 * Rehman Industry logo — a hexagon (polymer cell) holding a droplet of
 * molten plastic, beside the wordmark. Pure SVG, no asset needed.
 */
export function Logo({
  className,
  variant = "dark",
  showWordmark = true,
}: {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}) {
  const light = variant === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[1.15rem] font-extrabold tracking-tight",
              light ? "text-white" : "text-ink",
            )}
          >
            Rehman
            <span className={light ? "text-brand-300" : "text-brand-600"}>
              {" "}
              Industry
            </span>
          </span>
          <span
            className={cn(
              "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
              light ? "text-slate-400" : "text-slate-500",
            )}
          >
            Plastic Injection Moulding
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Rehman Industry"
    >
      <defs>
        <linearGradient id="ri-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#355ff0" />
          <stop offset="100%" stopColor="#1a35b6" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.2 28.8 8.6v14.8L16 30.8 3.2 23.4V8.6z"
        fill="url(#ri-mark)"
      />
      <path
        d="M16 8.5c2.7 3.2 5 5.6 5 8.6a5 5 0 1 1-10 0c0-3 2.3-5.4 5-8.6z"
        fill="#ffffff"
      />
      <circle cx="14.3" cy="17.4" r="1.5" fill="#90b2ff" />
    </svg>
  );
}

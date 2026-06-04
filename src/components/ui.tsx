import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ----------------------------------------------------------------- Container */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------- Section */

type Tone = "default" | "muted" | "dark";

export function Section({
  id,
  tone = "default",
  container = true,
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  container?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const tones: Record<Tone, string> = {
    default: "bg-white",
    muted: "bg-slate-50",
    dark: "bg-ink text-white",
  };
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}
    >
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}

/* ------------------------------------------------------------------- Eyebrow */

export function Eyebrow({
  children,
  invert,
  className,
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-sm font-semibold uppercase tracking-[0.16em]",
        invert ? "text-brand-300" : "text-brand-600",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------ SectionHeading */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow invert={invert}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            invert ? "text-slate-300" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- Button */

type Variant =
  | "primary"
  | "accent"
  | "outline"
  | "white"
  | "ghost"
  | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  accent: "bg-accent-500 text-white shadow-sm hover:bg-accent-600",
  outline: "border border-slate-300 text-ink hover:bg-slate-50",
  white: "bg-white text-brand-700 shadow-sm hover:bg-slate-100",
  ghost: "text-slate-700 hover:bg-slate-100",
  whatsapp: "bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5d]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors",
    variants[variant],
    sizes[size],
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonClasses(variant, size), className);
  if (!href) {
    return (
      <button className={classes} {...(rest as ComponentProps<"button">)}>
        {children}
      </button>
    );
  }
  const external = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/* ---------------------------------------------------------------------- Card */

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

import { ArrowRight, MessageCircle } from "lucide-react";
import { machines, materials, services } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { CtaBand } from "@/components/cta-v2";

const px = (path: string, w = 1400) =>
  `https://images.pexels.com/photos/${path}?auto=compress&cs=tinysrgb&w=${w}`;

const IMG = {
  hero: px("31352672/pexels-photo-31352672.jpeg", 1800),
  moulding: px("14804699/pexels-photo-14804699.jpeg", 1100),
  tooling: px("8865187/pexels-photo-8865187.jpeg", 1100),
  contract: px(
    "31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg",
    1100,
  ),
  band: px("34221993/pexels-photo-34221993.jpeg", 1800),
};

const serviceImg = [IMG.moulding, IMG.tooling, IMG.contract];

const gallery = [
  {
    src: px(
      "31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg",
      900,
    ),
    label: "Closures & caps",
  },
  {
    src: px("28248443/pexels-photo-28248443/free-photo-of-tetra-pak-lids.jpeg", 900),
    label: "Lids & packaging",
  },
  { src: px("7722570/pexels-photo-7722570.jpeg", 900), label: "Medical components" },
  { src: px("13524778/pexels-photo-13524778.jpeg", 900), label: "Footwear parts" },
  {
    src: px("19757403/pexels-photo-19757403/free-photo-of-pile-of-pellets.jpeg", 900),
    label: "Raw polymer",
  },
  {
    src: px(
      "34286024/pexels-photo-34286024/free-photo-of-recycled-plastic-granules-in-hand-outdoors.jpeg",
      900,
    ),
    label: "Recycled material",
  },
];

const palette = [
  { tint: "bg-blue-50", num: "text-blue-600" },
  { tint: "bg-amber-50", num: "text-amber-600" },
  { tint: "bg-emerald-50", num: "text-emerald-600" },
  { tint: "bg-rose-50", num: "text-rose-600" },
];
const numLight = ["text-blue-400", "text-amber-400", "text-emerald-400", "text-rose-400"];

const stats = [
  ["40+", "Years in plastics"],
  ["4", "Japanese presses"],
  ["80–385t", "Clamping force"],
  ["FBR", "Registered business"],
];

const wa = whatsappLink(
  "Hello Rehman Industry, I'd like a quote for plastic injection moulding.",
);

const whiteBtn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200";
const waBtn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5d]";

export default function Home() {
  return (
    <>
      {/* ----------------------------------------------- HERO (full-bleed) */}
      <section id="top" className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.hero}
          alt="Rehman Industry injection moulding factory floor in Gujranwala"
          className="h-[82vh] min-h-[540px] w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-neutral-950/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:pb-20">
            <p className="animate-fade-up mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/70">
              Gujranwala, Pakistan · Since 1985
            </p>
            <h1
              className="animate-fade-up max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl"
              style={{ animationDelay: "0.08s" }}
            >
              Precision plastic parts,{" "}
              <span className="text-blue-400">moulded at scale.</span>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg text-white/85"
              style={{ animationDelay: "0.16s" }}
            >
              Custom injection moulding on Japanese Niigata &amp; Nissei presses —
              80 to 385 tonnes — with four decades of contract experience for
              businesses across Pakistan.
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "0.24s" }}
            >
              <a href="/contact" className={whiteBtn}>
                Get a quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={waBtn}>
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ STATEMENT (big) */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <h2 className="reveal text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
          When a part has to be{" "}
          <span className="text-blue-600">right ten thousand times</span>, you
          want a moulder who&apos;s been getting it right for forty years.
        </h2>
      </section>

      {/* -------------------------------------- SERVICES (full-bleed bands) */}
      <div id="services">
        {services.map((s, i) => {
          const even = i % 2 === 0;
          return (
            <section key={s.slug} className="grid items-stretch lg:grid-cols-2">
              <div className={`relative min-h-[56vh] ${even ? "" : "lg:order-2"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={serviceImg[i]}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className={`flex items-center px-6 py-16 sm:px-12 lg:px-20 ${palette[i].tint} ${
                  even ? "" : "lg:order-1"
                }`}
              >
                <div className="reveal max-w-lg">
                  <span className={`text-sm font-semibold uppercase tracking-wide ${palette[i].num}`}>
                    0{i + 1} — Service
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-neutral-600">
                    {s.intro}
                  </p>
                  <a
                    href={`/services/${s.slug}`}
                    className={`mt-7 inline-flex items-center gap-1.5 text-sm font-medium ${palette[i].num}`}
                  >
                    Explore {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* --------------------------------------------- STATS (dark band) */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-4 lg:py-24">
          {stats.map(([n, l], i) => (
            <div key={l} className="reveal">
              <div className={`text-5xl font-semibold tracking-tight sm:text-6xl ${numLight[i]}`}>
                {n}
              </div>
              <div className="mt-2 text-sm text-neutral-400">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------- MACHINES (big numbers) */}
      <section id="machines" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Four Japanese presses.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Niigata &amp; Nissei · 80 to 385 tonnes · matched to your part, from
            small components to larger housings.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {machines.map((m, i) => (
            <div key={m.tonnage} className="reveal rounded-3xl border border-neutral-200 p-8">
              <div className={`text-6xl font-semibold tracking-tight tabular-nums ${palette[i].num}`}>
                {m.tonnage}
                <span className="ml-1 text-xl font-normal text-neutral-400">t</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-neutral-600">{m.suited}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------- IMAGE BAND (full-bleed line) */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.band}
          alt="Injection moulding machinery in production"
          className="h-[42vh] min-h-[300px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-950/45" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="reveal max-w-3xl text-center text-2xl font-medium text-white sm:text-4xl">
            Engineered for repeatability — the ten-thousandth part matches the
            first.
          </p>
        </div>
      </section>

      {/* -------------------------------------------- WORK (bigger gallery) */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="reveal max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            What we make
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Caps, closures, technical components, packaging and more — moulded to
            your spec.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.label} className="reveal group relative overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.label}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-base font-medium text-white">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ----------------------------------------- MATERIALS (colour band) */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-tight sm:text-4xl">
            Materials we mould
          </h2>
          <p className="reveal mt-3 max-w-xl text-blue-100">
            A wide range of commodity and engineering plastics — we&apos;ll
            recommend the right one for your part.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            {materials.map((m) => (
              <span
                key={m.abbr}
                className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20"
              >
                <span className="font-semibold">{m.abbr}</span>
                <span className="mx-1.5 text-white/40">·</span>
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

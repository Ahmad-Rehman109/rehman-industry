"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

declare global {
  interface Window { gsap: any; ScrollTrigger: any }
}

/* ------------------------------------------------------------------ data */
const px = (p: string, w = 1800) => `https://images.pexels.com/photos/${p}?auto=compress&cs=tinysrgb&w=${w}`;
/** Hero slideshow — your real factory hero images (Gemini-generated). */
const HERO = [
  "/products/hero-1.webp",
  "/products/hero-2.webp",
  "/products/hero-3.webp",
  "/products/hero-4.webp",
  "/products/hero-5.webp",
  "/products/hero-6.webp",
  "/products/hero-7.webp",
  "/products/hero-8.webp",
];
import { products as PRODUCTS } from "@/lib/products";
const MARQUEE = ["INJECTION MOULDING", "TOOLING", "TAIL-LAMP COVERS", "MUDGUARDS", "AIR COOLERS", "THERMOS BODIES", "POULTRY MATS", "JUGS & CUPS", "CONTRACT MFG"];
const STEPS = [
  ["01", "Consultation & DFM", "We review your drawing, sample or idea and advise on material, design and the cleanest route to a good part."],
  ["02", "Tooling & Mould", "We design and build (or adapt) the mould — engineered for accurate parts and a long, reliable life."],
  ["03", "Sampling & Approval", "You sign off on sample parts and first-article checks before any volume runs."],
  ["04", "Production", "We run your job at the volume you need, the same settings and checks on every batch."],
  ["05", "Quality & Dispatch", "Every lot is inspected, packed and dispatched on schedule — across Pakistan or for export."],
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script"); s.src = src; s.async = true;
    s.onload = () => resolve(); s.onerror = () => reject();
    document.head.appendChild(s);
  });
}

export function HomeV3() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  // sync to html[data-theme] (set by the global nav toggle) so this section
  // re-renders when the user flips theme anywhere.
  useEffect(() => {
    const sync = () => {
      const t = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "dark";
      setTheme(t);
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  // hero + product slideshows (lightweight, no libs)
  useEffect(() => {
    const timers: number[] = [];
    const hero = document.querySelectorAll<HTMLElement>(".v3 .heroimgs .hs");
    if (hero.length > 1) { let h = 0; timers.push(window.setInterval(() => { hero[h].classList.remove("on"); h = (h + 1) % hero.length; hero[h].classList.add("on"); }, 4500)); }
    document.querySelectorAll<HTMLElement>(".v3 .card").forEach((card) => {
      const imgs = card.querySelectorAll<HTMLElement>(".cimg"); if (imgs.length < 2) return;
      let i = 0; timers.push(window.setInterval(() => { imgs[i].classList.remove("on"); i = (i + 1) % imgs.length; imgs[i].classList.add("on"); }, 3200));
    });
    return () => timers.forEach(clearInterval);
  }, []);

  // GSAP + Lenis — smooth scroll that made the demo feel cinematic.
  // Lenis is disabled on mobile (touch already has native momentum) and when
  // the user prefers-reduced-motion. The lag we hunted earlier was the GSAP
  // pin, not Lenis — so this stays in.
  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
        const gsap = window.gsap; const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Global Lenis runs in <SmoothScroll /> in the layout. Tie ScrollTrigger
        // to native scroll — read off window each tick so it's safe across HMR
        // and never throws if the global hasn't latched yet.
        const onScroll = () => { window.ScrollTrigger?.update?.(); };
        window.addEventListener("scroll", onScroll, { passive: true });
        const hdr = document.getElementById("v3hdr");
        ScrollTrigger.create({ start: 60, onUpdate: (s: { scroll: () => number }) => hdr?.classList.toggle("scrolled", s.scroll() > 60) });
        gsap.to(".v3 h1 .ln span", { y: 0, duration: 1.1, stagger: 0.12, ease: "power4.out", delay: 0.15 });
        gsap.from(".v3 [data-fade]", { y: 24, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", delay: 0.5 });
        // Hero image parallax — the depth touch from the demo
        gsap.to(".v3 .heroimgs", {
          yPercent: 16, ease: "none",
          scrollTrigger: { trigger: ".v3 .hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.utils.toArray(".v3 .reveal").forEach((el: unknown) =>
          gsap.from(el as Element, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el as Element, start: "top 88%" } }));
        gsap.utils.toArray(".v3 [data-count]").forEach((node: unknown) => {
          const el = node as HTMLElement; const end = +(el.dataset.count || "0"); const suf = el.dataset.suf || "";
          ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () =>
            gsap.to({ v: 0 }, { v: end, duration: 1.5, ease: "power2.out", onUpdate() { el.textContent = Math.round((this.targets()[0] as { v: number }).v) + suf; } }) });
        });
        // Horizontal pin-scroll on the products row (desktop only). Smooth setup:
        //   scrub: 1.5  -> rounded easing, no stop/resume hiccup
        //   anticipatePin: 0  -> no 1-frame snap on entry
        //   ScrollTrigger.normalizeScroll(true)  -> consistent wheel/touch input
        const row = document.getElementById("prow");
        const workSection = document.getElementById("work");
        if (row && workSection && window.matchMedia("(min-width: 900px)").matches) {
          ScrollTrigger.normalizeScroll?.(true);
          const getDist = () => Math.max(0, row.scrollWidth - row.parentElement!.clientWidth + 56);
          gsap.to(row, {
            x: () => -getDist(),
            ease: "none",
            scrollTrigger: {
              trigger: workSection,
              start: "top top",
              end: () => "+=" + getDist(),
              scrub: 1.5,
              pin: true,
              pinSpacing: true,
              anticipatePin: 0,
              invalidateOnRefresh: true,
            },
          });
        }
        initMachine(gsap);
        cleanup = () => {
          window.removeEventListener("scroll", onScroll);
          ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill());
        };
      } catch { /* CDN blocked — page still renders */ }
    })();
    return () => cleanup();
  }, []);

  return (
    <div className="v3" data-theme={theme}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bgfx" aria-hidden><div className="orb a" /><div className="orb b" /></div>

      {/* HERO — image slideshow + kinetic headline */}
      <section className="hero" id="top">
        <div className="heroimgs">{HERO.map((src, i) => <div key={src} className={`hs${i === 0 ? " on" : ""}`} style={{ backgroundImage: `url('${src}')` }} />)}</div>
        <div className="wrap heroinner">
          <p className="eyebrow" data-fade>Gujranwala, Pakistan · Since 2006</p>
          <h1 className="disp">
            <span className="ln"><span>Precision plastic</span></span>
            <span className="ln"><span>injection moulding <em className="serif">at scale.</em></span></span>
          </h1>
          <p className="sub" data-fade>Contract injection moulding in Gujranwala, Pakistan on Japanese presses across a wide range of clamping force — two decades of experience behind every part.</p>
          <div className="cta" data-fade>
            <a className="btn lg" href="#contact">Start a project →</a>
            <a className="btn lg ghost light" href="#work">See our work</a>
          </div>
        </div>
        <div className="herometa"><div className="wrap"><span className="cue">Scroll ↓</span><span>20+ years · Japanese presses · FBR registered</span></div></div>
      </section>

      <div className="marq"><div className="track">{[...MARQUEE, ...MARQUEE].map((w, i) => <span key={i}><b>{w}</b><i className="dot" /></span>)}</div></div>

      {/* ANSWER-FIRST TLDR — placed in the top 30% of the page where 44% of
          AI-search citations come from. Direct, factual, no keyword stuffing. */}
      <section className="answerblk">
        <div className="wrap">
          <p className="answerlbl">What is Rehman Industry?</p>
          <p className="answertxt">
            <strong>Rehman Industry is a family-built plastic injection moulding contract
            manufacturer</strong> in Gujranwala (GRW), Pakistan. Established <strong>2006</strong>,
            we mould plastic components for automotive (Toyota Aqua tail-lamp
            covers, motorcycle mudguards), appliance (air-cooler bodies),
            household (thermos, jugs, cups), packaging (lids, caps), agricultural
            (poultry mats) and electrical (instrument boxes, switch housings)
            brands across Pakistan and for export. In-house tooling, FBR-registered,
            NDAs signed by default. Twenty years of plastic moulding under one roof.
          </p>
        </div>
      </section>

      {/* MACHINE — its own section */}
      <section className="blk wrap machsec" id="how">
        <div className="mach">
          <div className="reveal">
            <p className="eyebrow">How a part is made</p>
            <h2 className="lead disp">The injection<br />moulding <em className="serif">cycle.</em></h2>
            <p className="msub">Molten polymer, conveyed by a turning screw, injected into a steel mould under tonnes of clamp pressure, cooled, and ejected — the process we&apos;ve refined for 20 years.</p>
            <div className="cta"><a className="btn" href="#contact">Get a quote →</a><a className="btn ghost" href="#work">See our work</a></div>
          </div>
          <div className="mpanel reveal"><Machine /></div>
        </div>
      </section>

      {/* CAPABILITY */}
      <section className="blk wrap" id="capability">
        <p className="eyebrow reveal">What we run</p>
        <h2 className="lead disp reveal">Built for <em className="serif">volume,</em> tuned for precision.</h2>
        <div className="bento">
          <div className="cell reveal"><div className="big" data-count="20" data-suf="+">0</div><small>Years moulding plastics</small></div>
          <div className="cell reveal"><div className="big">24h</div><small>Typical quote turnaround</small></div>
          <a className="cell span2 imgcell reveal cellLink" href="/capabilities"><img src="https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Injection moulding press in operation" /><div className="ov"><h4 className="disp">Wide-range presses</h4><small>From small precision parts to large housings — what we can make →</small></div></a>
          <a className="cell span2 imgcell reveal cellLink" href="/tooling"><img src="https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="CNC mould tooling" /><div className="ov"><h4 className="disp">In-house tooling</h4><small>Mould design, build &amp; repair — CNC equipped, see the workshop →</small></div></a>
          <div className="cell reveal"><div className="big" data-count="8" data-suf="+">0</div><small>Materials mastered</small></div>
          <div className="cell reveal"><div className="big serif fbr">FBR</div><small>Registered business</small></div>
        </div>
      </section>

      {/* WORK */}
      <section className="ph" id="work">
        <div className="wrap" style={{ paddingTop: 40 }}>
          <p className="eyebrow reveal">Selected work</p>
          <h2 className="lead disp reveal">Parts we <em className="serif">make.</em></h2>
        </div>
        <div className="row" id="prow">
          {PRODUCTS.map((p) => (
            <a className="card" key={p.slug} href={`/products/${p.slug}`} aria-label={p.title}>
              <span className="tag">{p.tag}</span>
              {p.imgs.map((im, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={im} className={`cimg${j === 0 ? " on" : ""}`} src={`/products/${im}.webp`} alt={p.title} loading="lazy" />
              ))}
              <div className="lab"><h4>{p.title}</h4><p>{p.desc}</p><span className="cardlink">View details →</span></div>
            </a>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 24 }}>
          <a className="btn lg" href="/products">View all products →</a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="blk wrap" id="process">
        <p className="eyebrow reveal">How we work</p>
        <h2 className="lead disp reveal">From sketch to <em className="serif">shipped.</em></h2>
        <div className="steps">{STEPS.map((s) => <div className="step" key={s[0]}><div className="no">{s[0]}</div><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div>
      </section>

      {/* CONTACT — kicker + working form */}
      <section className="contactblk" id="contact">
        <div className="wrap contactgrid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="lead disp" style={{ marginTop: 14 }}>Let&apos;s make <em className="serif">your part.</em></h2>
            <p className="msub">Send a drawing, a sample, or just a requirement. We usually reply within a business day.</p>
            <div className="cinfo">
              <div><span>Call</span><a href="tel:+923009642762">+92 300 9642762</a></div>
              <div><span>Email</span><a href="mailto:info@rehmanindustry.com">info@rehmanindustry.com</a><a href="mailto:rehmanindustry01@gmail.com" style={{ display: "block", marginTop: 2, fontSize: 13, color: "#ff9d3c" }}>rehmanindustry01@gmail.com</a></div>
              <div><span>WhatsApp</span><a href="https://wa.me/923009642762" target="_blank" rel="noopener noreferrer">Chat now →</a></div>
              <div><span>Visit</span>Link Sui Gas Road, Gujranwala, Pakistan</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture BEFORE await — React nulls the event target after
    setStatus("sending");
    const body = JSON.stringify(Object.fromEntries(new FormData(form).entries()));
    try {
      const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body });
      if (res.ok) { form.reset(); setStatus("ok"); }
      else setStatus("err");
    } catch { setStatus("err"); }
  }
  if (status === "ok") {
    return (
      <div className="formcard ok">
        <h3>Thank you — enquiry received.</h3>
        <p>We&apos;ll be in touch, usually within a business day.</p>
        <button className="btn lg" onClick={() => setStatus("idle")}>Send another</button>
      </div>
    );
  }
  return (
    <form className="formcard" onSubmit={submit}>
      <div className="frow"><label>Name<input name="name" required placeholder="Your name" /></label><label>Company<input name="company" placeholder="Optional" /></label></div>
      <div className="frow"><label>Phone / WhatsApp<input name="phone" required placeholder="+92 3xx xxxxxxx" /></label><label>Email<input name="email" type="email" placeholder="you@company.com" /></label></div>
      <label>Estimated quantity<input name="quantity" placeholder="e.g. 5,000 pcs / month" /></label>
      <label>Your requirement<textarea name="message" required rows={4} placeholder="Tell us about the part — material, drawing or sample, quantity." /></label>
      {status === "err" && <p className="ferr">Couldn&apos;t send. Try WhatsApp instead.</p>}
      <button type="submit" className="btn lg" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry →"}</button>
    </form>
  );
}

/* ----------------------------------------------------------- machine svg */
function Machine() {
  return (
    <>
      <svg viewBox="0 0 600 340" fill="none">
        <defs><clipPath id="bc"><rect x="46" y="178" width="186" height="44" rx="22" /></clipPath></defs>
        <rect x="250" y="228" width="20" height="30" className="mb" /><rect x="498" y="228" width="44" height="30" className="mb" />
        <rect x="24" y="256" width="552" height="58" rx="10" className="ms" /><line x1="40" y1="273" x2="560" y2="273" className="mb" />
        <text x="280" y="330" className="ml" textAnchor="middle">Machine base · drives &amp; controls</text>
        <path d="M44 200 v8 a14 14 0 0 0 14 14 h166 a14 14 0 0 0 14 -14 v-8" className="mb" />
        <rect x="72" y="222" width="12" height="34" className="mb" /><rect x="196" y="222" width="12" height="34" className="mb" />
        <line x1="262" y1="160" x2="520" y2="160" className="mb" /><line x1="262" y1="240" x2="520" y2="240" className="mb" />
        <g id="gun">
          <polygon points="88,96 150,96 136,140 102,140" className="ms" /><rect x="110" y="140" width="16" height="40" className="mb" />
          <text x="118" y="86" className="ml" textAnchor="middle">Hopper</text>
          <g id="hopperFill" fill="#566273" /><g id="feed" fill="#566273" />
          <rect x="46" y="178" width="186" height="44" rx="22" className="ms" /><text x="135" y="240" className="ml" textAnchor="middle">Barrel · 230°C</text>
          <rect x="150" y="174" width="9" height="52" rx="2" className="mb2" /><rect x="178" y="174" width="9" height="52" rx="2" className="mb2" /><rect x="206" y="174" width="9" height="52" rx="2" className="mb2" />
          <g clipPath="url(#bc)"><line x1="40" y1="200" x2="232" y2="200" stroke="#56657a" strokeWidth="11" strokeLinecap="round" /><g id="flights" stroke="#6aa8ff" strokeWidth="2" opacity=".85" /></g>
          <polygon id="nozzle" points="232,193 246,200 232,207" className="mb2" />
        </g>
        <rect id="shot" x="268" y="197" width="34" height="6" rx="3" fill="#ff9a4d" opacity="0" />
        <rect x="256" y="150" width="12" height="100" rx="3" className="mb2" />
        <g><rect x="268" y="172" width="46" height="56" rx="3" className="ms" /><path d="M314 190 h-14 a8 8 0 0 0 -8 8 v4 a8 8 0 0 0 8 8 h14 z" fill="#0d1219" stroke="#37424f" strokeWidth="1" /></g>
        <text x="316" y="262" className="ml" textAnchor="middle">Mould</text>
        <g id="part" opacity="0"><path d="M302 191 h20 a7 7 0 0 1 7 7 v4 a7 7 0 0 1 -7 7 h-20 a4 4 0 0 1 -4 -4 v-10 a4 4 0 0 1 4 -4 z" fill="#2e7dff" /><rect x="322" y="194" width="8" height="12" rx="2" fill="#6aa8ff" /></g>
        <g id="moving"><rect x="314" y="172" width="46" height="56" rx="3" fill="rgba(46,125,255,.08)" stroke="#2e7dff" strokeWidth="1.6" /><rect x="360" y="150" width="12" height="100" rx="3" className="mb2" /><g id="ejector" fill="#56657a"><rect x="314" y="195.5" width="0" height="3.4" rx="1.5" /><rect x="314" y="201.5" width="0" height="3.4" rx="1.5" /></g></g>
        <text x="504" y="150" className="ml" textAnchor="middle">Hydraulic ram</text>
        <rect id="rod" x="372" y="192" width="98" height="16" rx="4" fill="#56657a" />
        <rect x="463" y="185" width="10" height="30" rx="2" className="mb2" /><rect x="470" y="174" width="84" height="52" rx="13" className="ms" />
        <line x1="492" y1="176" x2="492" y2="224" className="mb" /><line x1="514" y1="176" x2="514" y2="224" className="mb" /><rect x="554" y="168" width="10" height="64" rx="3" className="mb2" />
        <text x="474" y="60" className="ml" textAnchor="middle">Pressure</text>
        <path d="M448 94 A26 26 0 0 1 500 94" stroke="#222a35" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path id="gaugeFill" d="M448 94 A26 26 0 0 1 500 94" stroke="#2e7dff" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="82" strokeDashoffset="82" />
        <line id="needle" x1="474" y1="94" x2="474" y2="72" stroke="#6aa8ff" strokeWidth="2.5" strokeLinecap="round" /><circle cx="474" cy="94" r="4" fill="#56657a" />
      </svg>
      <div className="barfoot">
        <div className="stage" id="stage">1 · <b>Mould clamps shut</b></div>
        <div className="mdots"><span className="mdot on" /><span className="mdot" /><span className="mdot" /><span className="mdot" /><span className="mdot" /></div>
        <div className="read"><b id="pr">0</b> bar</div>
      </div>
    </>
  );
}

/* ----------------------------------------------------- machine animation */
function initMachine(gsap: any) {
  const NS = "http://www.w3.org/2000/svg";
  const C = (cx: number, cy: number, r: number) => { const c = document.createElementNS(NS, "circle"); c.setAttribute("cx", String(cx)); c.setAttribute("cy", String(cy)); c.setAttribute("r", String(r)); return c; };
  const hf = document.getElementById("hopperFill"); if (!hf) return;
  for (let y = 104; y <= 134; y += 7) { const w = (y - 96) * 0.4; for (let x = 119 - (18 - w); x <= 119 + (18 - w); x += 7) hf.appendChild(C(x + (Math.random() * 2 - 1), y, 2.6)); }
  const feed = document.getElementById("feed")!;
  for (let i = 0; i < 3; i++) { const c = C(114 + Math.random() * 8, 150, 2.6); c.setAttribute("fill", "#566273"); feed.appendChild(c); gsap.to(c, { y: 30, duration: 1.6, delay: i * 0.55, repeat: -1, ease: "power1.in", onRepeat() { c.setAttribute("cx", String(114 + Math.random() * 8)); } }); }
  const fl = document.getElementById("flights")!;
  for (let x = 40; x <= 250; x += 16) { const l = document.createElementNS(NS, "line"); l.setAttribute("x1", String(x)); l.setAttribute("y1", "189"); l.setAttribute("x2", String(x + 8)); l.setAttribute("y2", "211"); fl.appendChild(l); }
  gsap.to("#flights", { x: 16, duration: 0.7, repeat: -1, ease: "none" });
  const stages = ["1 · <b>Mould clamps shut</b>", "2 · <b>Unit forward + inject</b>", "3 · <b>Hold &amp; cool</b>", "4 · <b>Mould opens</b>", "5 · <b>Part ejected</b>"];
  const dots = document.querySelectorAll(".v3 .mdot");
  const setStage = (i: number) => { const s = document.getElementById("stage"); if (s) s.innerHTML = stages[i]; dots.forEach((d, j) => d.classList.toggle("on", j === i)); };
  const PR = document.getElementById("pr"); const prObj = { v: 0 }; const setPr = () => { if (PR) PR.textContent = String(Math.round(prObj.v)); };
  gsap.set("#needle", { svgOrigin: "474 94" }); gsap.set("#shot", { svgOrigin: "268 200" }); gsap.set("#rod", { svgOrigin: "470 200" });
  function reset() {
    gsap.set("#part", { opacity: 0, x: 0, y: 0, rotation: 0, fill: "#ff9a4d" }); gsap.set("#ejector rect", { attr: { x: 314, width: 0 } });
    gsap.set("#moving", { x: 70 }); gsap.set("#rod", { scaleX: 0.3 }); gsap.set("#gun", { x: 0 });
    gsap.set("#shot", { opacity: 0, scaleX: 0 }); gsap.set("#needle", { rotation: -90 }); gsap.set("#gaugeFill", { strokeDashoffset: 82 }); prObj.v = 0; setPr();
  }
  function build() {
    const tl = gsap.timeline({ onComplete() { reset(); build(); } });
    tl.call(() => setStage(0))
      .to("#moving", { x: 0, duration: 1.2, ease: "power2.inOut" }, 0).to("#rod", { scaleX: 1, duration: 1.2, ease: "power2.inOut" }, 0).to({}, { duration: 0.25 })
      .call(() => setStage(1))
      .to("#gun", { x: 14, duration: 0.6, ease: "power2.out" }, "fwd").to("#nozzle", { fill: "#ff9a4d", duration: 0.3 }, "fwd+=0.3")
      .fromTo("#shot", { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.out" }, "fwd+=0.4")
      .to("#part", { opacity: 1, duration: 0.6 }, "fwd+=0.7")
      .to(prObj, { v: 1400, duration: 1.3, ease: "power2.out", onUpdate: setPr }, "fwd+=0.4")
      .to("#gaugeFill", { strokeDashoffset: 24, duration: 1.3, ease: "power2.out" }, "fwd+=0.4")
      .to("#needle", { rotation: 60, duration: 1.3, ease: "power2.out" }, "fwd+=0.4").to("#shot", { opacity: 0, duration: 0.3 })
      .call(() => setStage(2))
      .to("#part", { fill: "#2e7dff", duration: 1.0 }).to("#gun", { x: 0, duration: 0.7, ease: "power1.inOut" }, "<")
      .to(prObj, { v: 0, duration: 1.1, onUpdate: setPr }, "<").to("#gaugeFill", { strokeDashoffset: 82, duration: 1.1 }, "<")
      .to("#needle", { rotation: -90, duration: 1.1, ease: "power2.inOut" }, "<").to("#nozzle", { fill: "#56657a", duration: 0.5 }, "<").to({}, { duration: 0.4 })
      .call(() => setStage(3))
      .to("#moving", { x: 70, duration: 1.2, ease: "power2.inOut" }).to("#part", { x: 70, duration: 1.2, ease: "power2.inOut" }, "<").to("#rod", { scaleX: 0.3, duration: 1.2, ease: "power2.inOut" }, "<")
      .call(() => setStage(4))
      .to("#ejector rect", { attr: { x: 298, width: 16 }, duration: 0.4, ease: "power2.out" })
      .to("#part", { x: 50, y: 118, opacity: 0, rotation: 10, duration: 1.0, ease: "power1.in" }, "<.08")
      .to("#ejector rect", { attr: { x: 314, width: 0 }, duration: 0.3 }).to({}, { duration: 0.6 });
  }
  reset(); build();
}

/* ------------------------------------------------------------------- css */
const CSS = `
.v3{--bg:#ffffff;--bg2:#f5f7fa;--ink:#0d1117;--muted:#5b6573;--line:rgba(12,17,28,.10);--blue:#ff7a18;--blue2:#ff9d3c;--card:#ffffff;--orb:.14;
  position:relative;background:var(--bg);color:var(--ink);font-family:var(--font-hanken),Inter,sans-serif;overflow-x:hidden}
.v3[data-theme="dark"]{--bg:#0a0b0d;--bg2:#101216;--ink:#f4f6f8;--muted:#9aa3ad;--line:rgba(255,255,255,.10);--blue:#ff7a18;--blue2:#ff9d3c;--card:#101216;--orb:.4}
.v3 *{box-sizing:border-box}
.v3 a{color:inherit;text-decoration:none}
.v3 .wrap{max-width:1240px;margin:0 auto;padding:0 28px}
.v3 .disp{font-weight:700;letter-spacing:-.03em;line-height:.98}
.v3 .serif{font-family:var(--font-instrument-serif),serif;font-style:italic;font-weight:400;color:var(--blue2)}
.v3 .eyebrow{font-size:12px;letter-spacing:.26em;text-transform:uppercase;color:var(--blue2);font-weight:600}
/* perf: fixed bg, lighter blur; orbs hidden on mobile to kill GPU lag */
.v3 .bgfx{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.v3 .orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:var(--orb)}
.v3 .orb.a{width:420px;height:420px;background:#3b82f6;top:-140px;left:-60px}
.v3 .orb.b{width:460px;height:460px;background:#ff6a00;bottom:-160px;right:-120px}
@media(max-width:860px){.v3 .bgfx{display:none}}
.v3>section,.v3>header,.v3>.marq,.v3>footer{position:relative;z-index:2}
/* nav */
.v3 #v3hdr{position:fixed;top:0;left:0;right:0;z-index:50;transition:background .3s,border-color .3s}
.v3 #v3hdr.scrolled{background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.v3 .nav{display:flex;align-items:center;justify-content:space-between;max-width:1240px;margin:0 auto;padding:16px 28px}
.v3 .brand{font-weight:600;font-size:19px;letter-spacing:-.02em;color:#fff;display:inline-flex;align-items:center;gap:10px}
.v3 .logomark{width:32px;height:32px;border-radius:9px;display:block}
.v3 #v3hdr.scrolled .brand{color:var(--ink)}
.v3 .brand b{color:#6aa8ff}.v3 #v3hdr.scrolled .brand b{color:var(--blue2)}
.v3 .navlinks{display:flex;gap:28px;font-size:14px;font-weight:500;color:rgba(255,255,255,.8)}
.v3 #v3hdr.scrolled .navlinks{color:var(--muted)}
.v3 .navlinks a:hover{color:#fff}.v3 #v3hdr.scrolled .navlinks a:hover{color:var(--ink)}
.v3 .navactions{display:flex;align-items:center;gap:10px}
.v3 .tgl{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:100px;width:38px;height:38px;cursor:pointer;font-size:15px;flex-shrink:0}
.v3 #v3hdr.scrolled .tgl{background:none;border-color:var(--line);color:var(--ink)}
.v3 .btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(180deg,#ff9d3c,#ff6a00);color:#fff;padding:11px 20px;border-radius:100px;font-size:14px;font-weight:600;transition:.3s;border:1px solid transparent;cursor:pointer;white-space:nowrap}
.v3 .btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px -8px #ff6a00}
.v3 .btn.lg{padding:15px 26px;font-size:15px}
.v3 .btn.ghost{background:transparent;border-color:var(--line);color:var(--ink)}
.v3 .btn.ghost.light{background:transparent;border-color:rgba(255,255,255,.4);color:#fff}
.v3 .btn.wa{background:#25D366}
.v3 .menubtn{display:none;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:10px;width:42px;height:42px;font-size:20px;cursor:pointer}
.v3 #v3hdr.scrolled .menubtn{background:none;border-color:var(--line);color:var(--ink)}
.v3 .mobilemenu{display:none;flex-direction:column;background:#0a0b0d;border-top:1px solid rgba(255,255,255,.08);padding:8px 18px 22px}
.v3 .mobilemenu a{color:#e6e8eb;padding:14px 6px;border-bottom:1px solid rgba(255,255,255,.06);font-size:16px;font-weight:500}
.v3 .mobilemenu a.btn{margin-top:14px;justify-content:center;border:none;color:#fff}
@media(max-width:860px){
  .v3 .navlinks{display:none}
  .v3 .quotebtn{display:none}
  .v3 .menubtn{display:inline-flex;align-items:center;justify-content:center}
  .v3 .mobilemenu{display:flex}
}
/* hero */
.v3 .hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;overflow:hidden}
@media(max-width:640px){.v3 .hero{min-height:92vh}}
.v3 .hero h1{word-break:break-word;overflow-wrap:anywhere}
.v3 .heroimgs{position:absolute;inset:0;z-index:0}
.v3 .hs{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.5s ease}
.v3 .hs.on{opacity:1}
.v3 .hero::after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(to top,rgba(6,8,11,.95),rgba(6,8,11,.4) 50%,rgba(6,8,11,.7))}
.v3 .heroinner{position:relative;z-index:2;padding-bottom:90px;padding-top:130px}
.v3 .hero h1{font-size:clamp(46px,8.5vw,116px);font-weight:700;margin-top:18px;color:#fff}
.v3 .hero h1 .ln{display:block;overflow:hidden}.v3 .hero h1 .ln span{display:block;transform:translateY(110%)}
.v3 .hero .sub{max-width:46ch;color:#dfe5ec;font-size:clamp(16px,1.6vw,19px);margin-top:24px;line-height:1.6}
.v3 .hero .cta{display:flex;gap:14px;margin-top:32px;flex-wrap:wrap}
.v3 .herometa{position:absolute;bottom:28px;left:0;right:0;z-index:2}
.v3 .herometa .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.7);font-size:13px}
.v3 .cue{letter-spacing:.2em;text-transform:uppercase;font-size:11px}
/* answer-first TLDR */
.v3 .answerblk{padding:60px 0 30px;background:var(--bg)}
.v3 .answerblk .wrap{max-width:820px}
.v3 .answerlbl{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#ff7a18;margin-bottom:14px}
.v3 .answertxt{font-size:clamp(17px,1.6vw,20px);line-height:1.65;color:var(--ink);font-weight:400}
.v3 .answertxt strong{color:var(--ink);font-weight:700}

/* marquee */
.v3 .marq{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:24px 0;overflow:hidden;white-space:nowrap;background:var(--bg2)}
.v3 .track{display:inline-flex;gap:46px;animation:v3scroll 34s linear infinite}
@media(prefers-reduced-motion:reduce){.v3 .track{animation:none}}
@media(max-width:560px){.v3 .marq{padding:18px 0}.v3 .track{animation-duration:50s}}
.v3 .track span{font-size:clamp(20px,2.6vw,36px);font-weight:600;color:var(--muted);display:inline-flex;align-items:center;gap:46px;opacity:.5}
.v3 .track b{color:var(--ink);font-weight:600}.v3 .track .dot{width:7px;height:7px;border-radius:50%;background:var(--blue);display:inline-block}
@keyframes v3scroll{to{transform:translateX(-50%)}}
/* sections */
.v3 .blk{padding:110px 0}
.v3 .lead{font-size:clamp(30px,4.4vw,58px);font-weight:700;max-width:16ch;margin-top:16px}
.v3 .reveal{}
/* machine */
.v3 .machsec{padding:100px 0}
.v3 .mach{display:grid;grid-template-columns:1fr 1.05fr;align-items:center;gap:48px}
@media(max-width:940px){.v3 .mach{grid-template-columns:1fr;gap:30px}}
.v3 .msub{color:var(--muted);font-size:18px;line-height:1.6;margin-top:20px;max-width:46ch}
.v3 .mach .cta{display:flex;gap:14px;margin-top:26px;flex-wrap:wrap}
.v3 .mpanel{background:linear-gradient(160deg,#10203f,#0a0b0d);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:20px}
.v3 .mpanel svg{width:100%;height:auto;display:block}
.v3 .mb{fill:none;stroke:#37424f;stroke-width:1.5}.v3 .mb2{fill:none;stroke:#56657a;stroke-width:1.5}.v3 .ms{fill:rgba(255,255,255,.02);stroke:#37424f;stroke-width:1.5}
.v3 .ml{font-size:9.5px;fill:#8b95a1;letter-spacing:.08em;text-transform:uppercase}
.v3 .barfoot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:14px;border-top:1px solid rgba(255,255,255,.08)}
.v3 .stage{font-weight:600;font-size:15px;color:#eef2f6}.v3 .stage b{color:#6aa8ff}
.v3 .mdots{display:flex;gap:6px}.v3 .mdot{width:20px;height:4px;border-radius:4px;background:#222a35}.v3 .mdot.on{background:#2e7dff}
.v3 .read{font-size:12px;color:#8b95a1}.v3 .read b{color:#eef2f6}
/* bento */
.v3 .bento{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:50px}
.v3 .cell{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:28px;min-height:170px;display:flex;flex-direction:column;justify-content:space-between;transition:.3s;position:relative;overflow:hidden}
.v3 .cell:hover{border-color:color-mix(in srgb,var(--blue) 45%,transparent);transform:translateY(-4px)}
.v3 .cell .big{font-size:clamp(38px,5vw,60px);font-weight:700;letter-spacing:-.03em;color:var(--blue2)}
.v3 .cell .big.fbr{font-style:italic}.v3 .cell small{color:var(--muted);font-size:14px}
.v3 .cell.span2{grid-column:span 2}
.v3 .imgcell{padding:0;justify-content:flex-end}
.v3 .cellLink{display:flex;text-decoration:none;color:inherit}
.v3 .cellLink:hover img{transform:scale(1.04)}
.v3 .imgcell img{transition:transform .7s ease}
.v3 .imgcell img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.v3 .imgcell .ov{position:relative;padding:26px;background:linear-gradient(to top,rgba(8,10,14,.92),rgba(8,10,14,.15) 70%);width:100%}
.v3 .imgcell h4{font-size:24px;color:#fff}.v3 .imgcell small{color:#cdd5de}
@media(max-width:860px){.v3 .bento{grid-template-columns:repeat(2,1fr)}}
/* work — desktop: GSAP pin-scrub. Mobile: native swipe-scroll. */
.v3 .ph{overflow:hidden;background:var(--bg)}
.v3 .row{display:flex;gap:24px;padding:40px 28px;will-change:transform}
.v3 .card{position:relative;flex:0 0 auto;width:clamp(260px,32vw,400px);height:clamp(340px,44vw,520px);border-radius:24px;overflow:hidden;border:1px solid var(--line);background:#0a0b0d;text-decoration:none;color:inherit;display:block;transition:transform .35s ease,box-shadow .35s ease}
.v3 .card:hover{transform:translateY(-4px);box-shadow:0 24px 60px -20px rgba(255,122,24,.35)}
.v3 .card .cimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1s ease}
.v3 .card .cimg.on{opacity:1}
.v3 .card .lab{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:24px;background:linear-gradient(to top,rgba(7,9,12,.94),rgba(7,9,12,.15) 60%);z-index:2}
.v3 .card .lab h4{font-size:23px;font-weight:600;color:#fff}.v3 .card .lab p{color:#aeb6c0;font-size:14px;margin-top:6px}
.v3 .card .cardlink{display:inline-block;margin-top:12px;color:#ff9d3c;font-size:13px;font-weight:600;letter-spacing:.02em}
.v3 .card .tag{position:absolute;top:16px;left:16px;z-index:3;background:rgba(255,122,24,.18);border:1px solid rgba(255,122,24,.5);color:#ffd9b3;font-size:12px;padding:5px 12px;border-radius:100px}
/* Mobile: swipe-scroll horizontally with snap, kill GSAP pin */
@media(max-width:760px){
  .v3 .ph .row{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:24px 20px}
  .v3 .ph .row::-webkit-scrollbar{display:none}
  .v3 .ph .card{scroll-snap-align:center;width:80vw;height:70vw;min-height:380px}
}
/* steps */
.v3 .steps{margin-top:46px;border-top:1px solid var(--line)}
.v3 .step{display:grid;grid-template-columns:80px 1fr;gap:28px;padding:34px 0;border-bottom:1px solid var(--line);transition:.3s}
.v3 .step:hover{padding-left:12px}
.v3 .step .no{font-size:28px;font-weight:700;color:var(--muted);opacity:.5;transition:.3s}.v3 .step:hover .no{color:var(--blue2);opacity:1}
.v3 .step h3{font-size:clamp(21px,2.8vw,30px);font-weight:600}
.v3 .step p{color:var(--muted);margin-top:8px;max-width:62ch;line-height:1.6}
/* cta */
.v3 .cta-big{padding:130px 0;text-align:center}
.v3 .cta-big h2{font-size:clamp(40px,7vw,104px);font-weight:700}
.v3 .cta-big p{color:var(--muted);margin:22px auto 0;max-width:46ch;font-size:18px}
.v3 .cta-big .cta{justify-content:center;display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
/* contact section */
.v3 .contactblk{padding:120px 0;border-top:1px solid var(--line);background:var(--bg2)}
.v3 .contactgrid{display:grid;grid-template-columns:1fr 1.05fr;gap:54px;align-items:start}
@media(max-width:880px){.v3 .contactgrid{grid-template-columns:1fr;gap:34px}}
.v3 .cinfo{margin-top:30px;display:grid;grid-template-columns:1fr 1fr;gap:18px 32px}
.v3 .cinfo div{display:flex;flex-direction:column;gap:4px;font-size:15px;color:var(--ink)}
.v3 .cinfo span{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);font-weight:600}
.v3 .cinfo a{color:var(--ink)}.v3 .cinfo a:hover{color:#ff7a18}
.v3 .formcard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:14px}
.v3 .formcard.ok{align-items:flex-start;gap:14px}.v3 .formcard.ok h3{font-size:22px;font-weight:700}
.v3 .frow{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:520px){.v3 .frow{grid-template-columns:1fr}}
.v3 .formcard label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--muted);font-weight:600}
.v3 .formcard input,.v3 .formcard textarea{background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:11px 13px;font-size:14px;color:var(--ink);font-family:inherit;outline:none;transition:border-color .2s}
.v3 .formcard input:focus,.v3 .formcard textarea:focus{border-color:#ff7a18}
.v3 .formcard textarea{resize:vertical;min-height:90px}
.v3 .ferr{color:#ef4444;font-size:13px}
.v3 .formcard .btn{align-self:flex-start;background:linear-gradient(180deg,#ff9d3c,#ff6a00);color:#fff;border:none}
`;

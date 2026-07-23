/**
 * Structured site content — services, industries, materials, process, FAQs.
 * This is the SEO substance of the site. Edit freely as the business grows.
 */
import {
  Boxes,
  ClipboardCheck,
  Cog,
  Factory,
  Gauge,
  Layers,
  PackageCheck,
  Recycle,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  Icon: LucideIcon;
  intro: string;
  features: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "plastic-injection-moulding",
    title: "Plastic Injection Moulding",
    short:
      "High-precision injection moulded plastic components, produced to spec and at volume.",
    Icon: Factory,
    intro:
      "Our core service. We mould precision plastic parts from your design or sample — consistent, repeatable and ready for assembly. From small technical components to larger housings, we run production in the materials and volumes your job demands.",
    features: [
      "Custom parts moulded from your drawing, sample or 3D file",
      "Wide range of engineering and commodity plastics",
      "Low, medium and high-volume production runs",
      "Tight, repeatable tolerances batch after batch",
      "In-house quality checks on every production lot",
      "Secondary operations: assembly, printing, inserts and packing",
    ],
    keywords: [
      "plastic injection moulding Pakistan",
      "injection moulding Gujranwala",
      "plastic parts manufacturer Pakistan",
      "custom plastic moulding",
      "injection moulding services",
    ],
    metaTitle:
      "Plastic Injection Moulding in Pakistan | Rehman Industry, Gujranwala",
    metaDescription:
      "Precision plastic injection moulding in Gujranwala, Pakistan. Custom moulded plastic components from your design or sample — low to high volume, tight tolerances, on-time delivery.",
  },
  {
    slug: "mould-making",
    title: "Mould Making & Tooling",
    short:
      "Custom moulds and tooling engineered for clean parts and a long production life.",
    Icon: Wrench,
    intro:
      "A good part starts with a good mould. We design and build custom injection moulds and tooling, and refurbish existing tools, so your parts come out clean, accurate and consistent — run after run. We also advise on part design for manufacturability before steel is ever cut.",
    features: [
      "New mould design and fabrication",
      "Design-for-manufacture (DFM) review before tooling",
      "Single-cavity and multi-cavity tools",
      "Repair, modification and refurbishment of existing moulds",
      "Tool maintenance to protect your investment",
      "Sampling and first-article approval before production",
    ],
    keywords: [
      "mould making Pakistan",
      "injection mould design Gujranwala",
      "plastic mould manufacturer Pakistan",
      "tooling and die making",
      "mould repair Pakistan",
    ],
    metaTitle:
      "Plastic Mould Making & Tooling in Pakistan | Rehman Industry",
    metaDescription:
      "Custom injection mould design, fabrication, repair and refurbishment in Gujranwala, Pakistan. DFM review, multi-cavity tooling and reliable sampling before production.",
  },
  {
    slug: "contract-manufacturing",
    title: "Contract Manufacturing",
    short:
      "Outsource your plastic production to a dependable partner — we run it as if it were our own.",
    Icon: Boxes,
    intro:
      "Most of what we do is contract work: you bring the product or the requirement, and we handle the moulding, quality and supply. We become the reliable plastics arm of your business — flexible on volume, consistent on quality, and straightforward to deal with.",
    features: [
      "End-to-end production from tooling to finished parts",
      "Flexible batch sizes and repeat ordering",
      "Consistent quality with documented checks",
      "Confidential — your designs stay yours",
      "Scheduled and on-demand production runs",
      "Local supply across Pakistan, with export capability",
    ],
    keywords: [
      "plastic contract manufacturing Pakistan",
      "contract injection moulding",
      "outsourced plastic manufacturing Gujranwala",
      "job work plastic moulding Pakistan",
    ],
    metaTitle:
      "Plastic Contract Manufacturing in Pakistan | Rehman Industry",
    metaDescription:
      "Reliable plastic contract manufacturing in Gujranwala, Pakistan. Outsource injection moulding with flexible volumes, consistent quality and on-time supply across Pakistan and export.",
  },
];

export type Industry = { name: string; Icon: LucideIcon; blurb: string };

export const industries: Industry[] = [
  {
    name: "Automotive & Motorcycle",
    Icon: Cog,
    blurb:
      "Clips, housings, connectors and trim components for vehicle and bike manufacturers and their suppliers.",
  },
  {
    name: "Electrical & Electronics",
    Icon: Gauge,
    blurb:
      "Switch parts, enclosures, junction boxes and insulating components moulded to tight tolerances.",
  },
  {
    name: "Packaging",
    Icon: PackageCheck,
    blurb:
      "Caps, closures, containers and rigid packaging for food, chemical and consumer goods.",
  },
  {
    name: "Household & Consumer",
    Icon: Boxes,
    blurb:
      "Everyday plastic goods, fittings and durable consumer products built to last.",
  },
  {
    name: "Agriculture",
    Icon: Recycle,
    blurb:
      "Hardy components and fittings designed for demanding outdoor and farm use.",
  },
  {
    name: "Construction & Hardware",
    Icon: Wrench,
    blurb:
      "Fittings, fasteners, conduit parts and hardware components for the building trade.",
  },
];

export type Material = { name: string; abbr: string };

export const materials: Material[] = [
  { name: "Polypropylene", abbr: "PP" },
  { name: "Polyethylene (HDPE / LDPE)", abbr: "PE" },
  { name: "Acrylonitrile Butadiene Styrene", abbr: "ABS" },
  { name: "Polystyrene", abbr: "PS" },
  { name: "Polyvinyl Chloride", abbr: "PVC" },
  { name: "Nylon / Polyamide", abbr: "PA" },
  { name: "Polycarbonate", abbr: "PC" },
  { name: "Acetal", abbr: "POM" },
];

export type Machine = { tonnage: number; suited: string };

/** Our injection moulding presses, by clamping force. */
export const machines: Machine[] = [
  { tonnage: 10, suited: "Micro & small precision components" },
  { tonnage: 100, suited: "Everyday parts and medium components" },
  { tonnage: 250, suited: "Larger parts and multi-cavity tooling" },
  { tonnage: 400, suited: "High-clamp work, housings and bigger mouldings" },
];

export type Step = { title: string; desc: string; Icon: LucideIcon };

export const processSteps: Step[] = [
  {
    title: "Consultation & DFM",
    desc: "We review your drawing, sample or idea and advise on the best material, design and approach for clean, cost-effective parts.",
    Icon: ClipboardCheck,
  },
  {
    title: "Tooling & Mould",
    desc: "We design and build (or adapt) the mould, engineered for accurate parts and a long, reliable production life.",
    Icon: Wrench,
  },
  {
    title: "Sampling & Approval",
    desc: "You receive sample parts and first-article checks to sign off on before any volume production begins.",
    Icon: Ruler,
  },
  {
    title: "Production",
    desc: "We run your job in the volume you need, with the same settings and checks applied to every batch.",
    Icon: Factory,
  },
  {
    title: "Quality & Dispatch",
    desc: "Every lot is inspected, packed and dispatched on schedule — locally across Pakistan or for export.",
    Icon: Truck,
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "20+", label: "Years of experience" },
  { value: "Wide", label: "Clamping force range" },
  { value: "8+", label: "Materials mastered" },
  { value: "24h", label: "Typical quote turnaround" },
];

export type Value = { title: string; desc: string; Icon: LucideIcon };

export const whyUs: Value[] = [
  {
    title: "Consistent quality",
    desc: "Documented checks on every lot mean the 10,000th part matches the first.",
    Icon: ShieldCheck,
  },
  {
    title: "Precision tooling",
    desc: "Well-built, well-maintained moulds for accurate, repeatable parts.",
    Icon: Ruler,
  },
  {
    title: "Flexible volumes",
    desc: "From small trial runs to ongoing high-volume contracts — we scale to you.",
    Icon: Layers,
  },
  {
    title: "Reliable supply",
    desc: "Realistic timelines and on-time dispatch you can plan your business around.",
    Icon: Truck,
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is plastic injection moulding?",
    a: "Plastic injection moulding is a manufacturing process where molten plastic is injected into a custom metal mould, cooled, and ejected as a finished part. It is the most efficient way to produce identical plastic components in volume with consistent quality.",
  },
  {
    q: "Where are you located?",
    a: "We are based in Gujranwala, Pakistan, and supply customers across the country as well as for export.",
  },
  {
    q: "Can you make parts from my sample or drawing?",
    a: "Yes. You can send us a physical sample, a technical drawing or a 3D file. We review it, advise on materials and design if needed, build the tooling, and move to sampling and production.",
  },
  {
    q: "Do you build the moulds, or do I need to supply one?",
    a: "We can design and build custom moulds in-house, adapt or repair an existing mould, or run production from a tool you already own. Whatever fits your project.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "It depends on the part and material. We handle small trial runs through to ongoing high-volume contracts. Contact us with your requirement and we'll advise.",
  },
  {
    q: "Which plastics can you mould?",
    a: "We work with a wide range of commodity and engineering plastics including PP, PE, ABS, PS, PVC, Nylon (PA), PC and POM. If you're unsure which material suits your part, we'll recommend one.",
  },
  {
    q: "How long does it take to get parts?",
    a: "New tooling adds lead time up front, after which repeat production is fast. We give you realistic timelines with your quote so you can plan with confidence.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us your part details by WhatsApp, phone or the contact form with as much information as you have — drawing, sample, material, quantity. We typically respond within one business day.",
  },
  {
    q: "Do you supply across all of Pakistan?",
    a: "Yes. We deliver to customers across Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Peshawar and beyond — and also handle export orders.",
  },
  {
    q: "What is your typical lead time?",
    a: "For new parts: tooling typically takes 3–6 weeks depending on complexity, then sampling adds a few days. Once tooling is approved, repeat production runs are fast — usually days, not weeks. We quote a realistic timeline with every order.",
  },
  {
    q: "Can you mass-produce a part I designed?",
    a: "Yes. Bring your drawing, 3D file or physical sample. We'll review it for manufacturability (DFM), advise on the best material, build the mould, and run sampling before any volume production starts.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard terms are an advance on tooling (so we can start the mould) and balanced payments on production lots. We're flexible for long-term contract clients. Discuss with us directly.",
  },
  {
    q: "Do you sign NDAs / keep my designs confidential?",
    a: "Absolutely. Most of our work is contract moulding for other brands — confidentiality is the default. We can sign your NDA before sharing any drawings or samples.",
  },
  {
    q: "Can you handle low-volume / small runs?",
    a: "Yes. We accept small trial runs (a few hundred parts) as well as ongoing high-volume contracts. Smaller runs do have a higher unit cost since tooling amortises over fewer parts — we'll be upfront about that.",
  },
  {
    q: "Do you do secondary operations like printing or assembly?",
    a: "Yes — pad printing, hot stamping, simple assembly, inserts, packing and labelling are all available as add-ons.",
  },
  {
    q: "Where exactly are you located?",
    a: "Link Sui Gas Road, Gujranwala, Punjab, Pakistan. Visitors are welcome by appointment — call or WhatsApp first so the right person can meet you.",
  },
  {
    q: "Can I visit the factory before placing an order?",
    a: "Yes, we encourage it for serious enquiries. Call or WhatsApp any time to schedule. We're closed Fridays.",
  },
  {
    q: "Are your products food-safe / medical-grade?",
    a: "We mould in food-safe PP, PE and similar grades when the project requires it. For medical-grade work we follow the relevant material certification — discuss your spec with us up-front.",
  },
];

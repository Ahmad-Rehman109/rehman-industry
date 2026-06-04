/**
 * Portfolio / project case studies.
 *
 * Based on REAL products Rehman Industry has moulded. Client names are kept
 * confidential (contract work). The IMAGES below still use generic stock —
 * replace with real photos of these actual parts when available (add them to
 * src/lib/img.ts and update the `image` / `gallery` keys here).
 */
import { IMG } from "@/lib/img";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  industry: string;
  image: keyof typeof IMG;
  gallery: (keyof typeof IMG)[];
  summary: string;
  objective: string;
  requirements: string;
  features: string[];
  stats: { value: string; label: string }[];
  material: string;
  testimonial?: { quote: string; author: string };
  metaTitle: string;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "automotive-tail-lamp-covers",
    title: "Car Tail-Lamp (Backlight) Covers",
    client: "Confidential — automotive parts supplier",
    year: "2024",
    industry: "Automotive",
    image: "line",
    gallery: ["line", "cnc", "factory"],
    summary:
      "Backlight / tail-lamp covers moulded for multiple car models, with a clean lens surface and accurate fit to the housing.",
    objective:
      "Produce tail-lamp (backlight) covers for several car models that fit the lamp housing accurately and carry a clean, consistent lens finish.",
    requirements:
      "A smooth, defect-free lens surface, accurate locating features so each cover seats correctly, and repeatable quality across different model variants.",
    features: [
      "Clean, defect-free lens surface on every part",
      "Accurate fit to the lamp housing across car models",
      "Consistent colour and finish batch to batch",
    ],
    stats: [
      { value: "Multiple models", label: "Coverage" },
      { value: "ABS / Acrylic", label: "Materials" },
      { value: "360–385T", label: "Presses used" },
    ],
    material: "ABS / Acrylic (PMMA)",
    testimonial: {
      quote:
        "The covers fit right and the finish is consistent — a dependable supply for our assembly line.",
      author: "Procurement, automotive client",
    },
    metaTitle: "Car Tail-Lamp / Backlight Cover Moulding | Rehman Industry",
    metaDescription:
      "Plastic tail-lamp (backlight) cover injection moulding in Gujranwala, Pakistan — clean lens finish, accurate housing fit, consistent quality across car models.",
  },
  {
    slug: "motorcycle-mudguards",
    title: "Motorcycle Mudguards & Body Parts",
    client: "Confidential — motorcycle parts maker",
    year: "2024",
    industry: "Automotive & Motorcycle",
    image: "worker",
    gallery: ["worker", "line", "hall"],
    summary:
      "Bike mudguards and body components moulded to be tough, well-finished and a true fit on the frame.",
    objective:
      "Mould motorcycle mudguards and related body parts that stand up to road use, keep a clean surface finish, and fit the bike accurately.",
    requirements:
      "A durable, impact-resistant material, a good cosmetic finish on visible faces, and consistent dimensions so parts fit first time on assembly.",
    features: [
      "Impact-resistant material for real road use",
      "Clean cosmetic finish on visible surfaces",
      "Accurate fit to the bike frame and fixings",
    ],
    stats: [
      { value: "385T", label: "High-clamp press" },
      { value: "PP / ABS", label: "Materials" },
      { value: "Repeat", label: "Order type" },
    ],
    material: "PP / ABS",
    metaTitle: "Motorcycle Mudguard & Body Part Moulding | Rehman Industry",
    metaDescription:
      "Motorcycle mudguard and body component injection moulding in Pakistan — durable impact-resistant plastic, clean finish and accurate fit for bike assembly.",
  },
  {
    slug: "water-cooler-bodies",
    title: "Water Cooler Bodies & Large Housings",
    client: "Confidential — appliance manufacturer",
    year: "2023",
    industry: "Household & Appliance",
    image: "hall",
    gallery: ["hall", "factory", "line"],
    summary:
      "Large water-cooler bodies and housings moulded on our high-clamp presses with consistent wall strength.",
    objective:
      "Mould large water-cooler bodies and housings with even wall thickness, structural strength and a clean exterior finish.",
    requirements:
      "High clamping force for the large part size, even wall thickness to avoid weak spots or warping, and a tidy finish on visible surfaces.",
    features: [
      "High-clamp moulding for large body parts",
      "Even wall thickness for strength and no warping",
      "Clean exterior finish ready for assembly",
    ],
    stats: [
      { value: "385T", label: "High-clamp press" },
      { value: "PP / HDPE", label: "Materials" },
      { value: "Large parts", label: "Capability" },
    ],
    material: "PP / HDPE",
    metaTitle: "Water Cooler Body & Large Housing Moulding | Rehman Industry",
    metaDescription:
      "Large plastic water-cooler body and housing injection moulding in Gujranwala, Pakistan — high-clamp presses, even wall thickness and clean finish.",
  },
  {
    slug: "thermos-jugs-cups",
    title: "Thermos Bodies, Jugs & Cups",
    client: "Confidential — housewares brand",
    year: "2024",
    industry: "Household & Consumer",
    image: "lids",
    gallery: ["lids", "caps", "hall"],
    summary:
      "Everyday housewares — thermos bodies, jugs and cups — moulded at volume with a clean look and reliable fit.",
    objective:
      "Produce thermos bodies, jugs and cups at volume with a clean appearance, comfortable fit of lids and parts, and consistent quality.",
    requirements:
      "A food-safe, good-looking material, accurate fit between bodies, lids and handles, and the volume capacity for ongoing housewares supply.",
    features: [
      "Clean, retail-ready appearance",
      "Accurate fit between bodies, lids and handles",
      "Volume capacity for ongoing supply",
    ],
    stats: [
      { value: "PP / PS", label: "Materials" },
      { value: "High", label: "Volume" },
      { value: "Multi-part", label: "Assemblies" },
    ],
    material: "PP / PS",
    metaTitle: "Thermos, Jug & Cup Plastic Moulding | Rehman Industry",
    metaDescription:
      "Thermos body, jug and cup injection moulding in Pakistan — food-safe materials, clean finish, accurate fit and high-volume housewares production.",
  },
  {
    slug: "instrument-boxes-enclosures",
    title: "Instrument Boxes & Enclosures",
    client: "Confidential — instrument manufacturer",
    year: "2023",
    industry: "Electrical & Instruments",
    image: "cnc",
    gallery: ["cnc", "factory", "hall"],
    summary:
      "Protective boxes and enclosures for instruments, moulded with accurate mating faces and a clean finish.",
    objective:
      "Mould instrument boxes and enclosures that close accurately, protect the contents, and present a clean, professional finish.",
    requirements:
      "Accurate mating faces for a proper close, consistent wall thickness for protection, and a tidy surface finish on visible parts.",
    features: [
      "Accurate mating faces for a clean close",
      "Consistent wall thickness for protection",
      "Tidy finish on visible surfaces",
    ],
    stats: [
      { value: "ABS", label: "Material" },
      { value: "160–360T", label: "Presses used" },
      { value: "First-article", label: "Sign-off" },
    ],
    material: "ABS",
    metaTitle: "Instrument Box & Enclosure Moulding | Rehman Industry",
    metaDescription:
      "Instrument box and enclosure injection moulding in Gujranwala, Pakistan — accurate mating faces, protective wall thickness and clean professional finish.",
  },
  {
    slug: "table-legs-furniture-parts",
    title: "Table Legs & Furniture Components",
    client: "Confidential — furniture maker",
    year: "2023",
    industry: "Furniture & Hardware",
    image: "factory",
    gallery: ["factory", "worker", "line"],
    summary:
      "Sturdy moulded table legs and furniture fittings made to carry load and keep a consistent shape.",
    objective:
      "Mould table legs and furniture components that are strong enough to carry load, dimensionally consistent, and clean in appearance.",
    requirements:
      "A strong, rigid material able to carry weight, consistent dimensions for stable assembly, and a finish suited to visible furniture parts.",
    features: [
      "Strong, rigid material for load-bearing parts",
      "Consistent dimensions for stable assembly",
      "Finish suited to visible furniture components",
    ],
    stats: [
      { value: "PP / Nylon", label: "Materials" },
      { value: "360T", label: "Press used" },
      { value: "Load-bearing", label: "Capability" },
    ],
    material: "PP / Nylon (PA)",
    metaTitle: "Table Leg & Furniture Component Moulding | Rehman Industry",
    metaDescription:
      "Plastic table leg and furniture component injection moulding in Pakistan — strong rigid materials, consistent dimensions and clean finish for furniture makers.",
  },
  {
    slug: "screw-caps-closures",
    title: "Screw Caps & Closures",
    client: "Confidential — packaging brand",
    year: "2024",
    industry: "Packaging",
    image: "caps",
    gallery: ["caps", "lids", "hall"],
    summary:
      "Lightweight screw caps and closures moulded at volume with a consistent thread and seal on every piece.",
    objective:
      "Produce high-volume screw caps with a reliable thread fit and seal, holding the same quality from the first piece to the last.",
    requirements:
      "Tight, repeatable thread tolerances, a clean sealing surface, and multi-cavity tooling to keep unit cost low at volume.",
    features: [
      "Multi-cavity tooling for low cost-per-part",
      "Repeatable thread and seal tolerances",
      "In-line quality checks on every lot",
    ],
    stats: [
      { value: "5,000+/day", label: "Production rate" },
      { value: "PP / HDPE", label: "Materials" },
      { value: "Multi-cavity", label: "Tooling" },
    ],
    material: "Polypropylene (PP) / HDPE",
    metaTitle: "Screw Cap & Closure Moulding | Rehman Industry",
    metaDescription:
      "High-volume plastic screw cap and closure moulding in Gujranwala, Pakistan — multi-cavity tooling, consistent thread and seal, on-time supply.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

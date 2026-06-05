/**
 * Dedicated product pages — each ranks on its own.
 * Keep one entry per card. Slug = URL segment under /products/<slug>.
 */
export type Product = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  imgs: string[]; // filename(s) under /public/products without extension
  material: string;
  industry: string;
  intro: string; // 2–3 paragraphs
  highlights: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "toyota-aqua-tail-lamp-covers",
    tag: "Automotive",
    title: "Toyota Aqua Tail-Lamp Covers",
    desc: "ABS / acrylic · multiple car models",
    imgs: ["taillamp-1", "taillamp-2"],
    material: "ABS / Acrylic (PMMA)",
    industry: "Automotive",
    intro:
      "We mould rear tail-lamp (backlight) covers used on the Toyota Aqua and similar hatchbacks. Each lens is produced in a translucent candy-red polycarbonate / acrylic shell with internal reflector facets, fitting the lamp housing cleanly and carrying a consistent finish from the first piece to the last. Multiple models supported. Tooling is in-house, so design tweaks and refurbishments are fast.",
    highlights: [
      "Translucent ABS / acrylic with internal reflector detail",
      "Accurate housing fit across multiple car models",
      "Consistent colour, gloss and finish batch to batch",
      "Tooling refurb and DFM tweaks done in-house",
    ],
    keywords: [
      "Toyota Aqua tail lamp cover Pakistan",
      "car backlight manufacturer Gujranwala",
      "automotive lens moulding Pakistan",
      "plastic tail-light supplier",
    ],
    metaTitle: "Toyota Aqua Tail-Lamp Covers — Plastic Moulding | Rehman Industry",
    metaDescription:
      "Plastic injection-moulded Toyota Aqua tail-lamp (backlight) covers — ABS / acrylic, accurate fit, consistent finish. Made in Gujranwala, Pakistan since 1985.",
  },
  {
    slug: "motorcycle-mudguards",
    tag: "Motorcycle",
    title: "Motorcycle Mudguards",
    desc: "PP / ABS · impact-resistant body parts",
    imgs: ["mudguard-1", "mudguard-2"],
    material: "PP / ABS",
    industry: "Motorcycle / Two-Wheeler",
    intro:
      "Front and rear plastic mudguards (fenders) for motorcycles — moulded in tough PP / ABS so they take road impact and stand up to weather. Smooth aerodynamic curves, accurate mounting tabs, and a clean cosmetic finish on the visible faces. Available in black, red, white and custom colour matches for OEM and aftermarket runs.",
    highlights: [
      "Tough, impact-resistant material for daily road use",
      "Accurate mounting tabs — fits the frame first time",
      "Clean cosmetic finish on visible surfaces",
      "OEM colour-match and aftermarket runs",
    ],
    keywords: [
      "motorcycle mudguard manufacturer Pakistan",
      "bike fender plastic Gujranwala",
      "two wheeler plastic parts supplier",
    ],
    metaTitle: "Motorcycle Mudguards & Body Parts — Plastic Moulding | Rehman Industry",
    metaDescription:
      "Impact-resistant plastic motorcycle mudguards and body parts moulded in Gujranwala, Pakistan — PP / ABS, accurate fit, clean finish.",
  },
  {
    slug: "air-cooler-bodies",
    tag: "Appliance",
    title: "Air Cooler Bodies",
    desc: "Moulded cabinet, grille & tank",
    imgs: ["aircooler-1", "aircooler-2"],
    material: "PP / HDPE",
    industry: "Appliance",
    intro:
      "Full moulded plastic bodies for evaporative room air coolers (the Pakistani-style desert coolers): cabinet, front louver grille, water tank and control-panel housing. Moulded on our high-clamp presses with consistent wall thickness, a clean exterior, and accurate mating between parts so assembly is fast on your line.",
    highlights: [
      "Cabinet, front grille, water tank and panel — all in-house",
      "Even wall thickness for strength and no warping",
      "Clean exterior finish, ready for assembly",
      "Multi-cavity tooling supported for high-volume runs",
    ],
    keywords: [
      "air cooler body manufacturer Pakistan",
      "evaporative cooler plastic Gujranwala",
      "room cooler cabinet moulding",
      "desert cooler parts supplier Pakistan",
    ],
    metaTitle: "Air Cooler Bodies & Cabinets — Plastic Moulding | Rehman Industry",
    metaDescription:
      "Full moulded bodies, grilles and tanks for evaporative room air coolers. Strong PP/HDPE construction, clean finish, made in Gujranwala, Pakistan.",
  },
  {
    slug: "thermos-bodies",
    tag: "Household",
    title: "Thermos & Water Bottle Bodies",
    desc: "Insulated plastic bodies",
    imgs: ["thermos-1", "thermos-2"],
    material: "PP / ABS",
    industry: "Household",
    intro:
      "Outer shells and bodies for insulated water thermoses and bottles — cobalt blue, red, cream and custom colours, with ribbed grip detail, moulded handles and screw-lid threads. Food-safe materials, a clean glossy finish, and the volume capacity for ongoing housewares brands.",
    highlights: [
      "Food-safe plastic, glossy retail-ready finish",
      "Accurate fit between body, lid and handle",
      "Multiple colour & pattern options",
      "Volume capacity for housewares brands",
    ],
    keywords: [
      "plastic thermos body manufacturer Pakistan",
      "insulated bottle shell Gujranwala",
      "housewares plastic supplier Pakistan",
    ],
    metaTitle: "Plastic Thermos & Water Bottle Bodies | Rehman Industry",
    metaDescription:
      "Insulated plastic thermos and water-bottle bodies moulded in Gujranwala, Pakistan — food-safe materials, glossy finish, multiple colours.",
  },
  {
    slug: "jugs-and-cups",
    tag: "Household",
    title: "Jugs & Cups",
    desc: "Glossy moulded housewares",
    imgs: ["jug-1", "jug-2"],
    material: "PP / PS",
    industry: "Household",
    intro:
      "Matching jug-and-cup sets for everyday household use — glossy moulded plastic in cool blue, white and custom prints, with comfortable handles and stable bases. Designed for retail packaging, batch consistency and a finish that looks premium on the shelf.",
    highlights: [
      "Matching set: jug + 4–6 cups",
      "Comfortable handles, stable bases",
      "Decorated and plain-finish options",
      "Retail-ready packaging",
    ],
    keywords: [
      "plastic jug manufacturer Pakistan",
      "household jug and cup set Gujranwala",
      "moulded housewares Pakistan",
    ],
    metaTitle: "Plastic Jugs & Cups — Moulded Housewares | Rehman Industry",
    metaDescription:
      "Matching plastic jug-and-cup sets moulded in Gujranwala, Pakistan — glossy finish, comfortable handles, retail-ready packaging.",
  },
  {
    slug: "poultry-floor-mats",
    tag: "Agriculture",
    title: "Poultry Floor Mats",
    desc: "Plastic slat & rubber flooring",
    imgs: ["poultrymat-1", "poultrymat-2"],
    material: "PP / Rubber",
    industry: "Agriculture / Poultry",
    intro:
      "Plastic slat-flooring panels and rubber poultry mats for chicken sheds — perforated grid tiles with rounded drainage slots, an anti-slip raised texture and interlocking edges. Easy to clean, kind to bird feet, and dimensionally stable across a long-life run. Sized to common shed layouts; custom dimensions supported.",
    highlights: [
      "Anti-slip raised texture — safer for birds",
      "Rounded drainage slots, easy to wash down",
      "Interlocking edges for fast install",
      "UV-stabilised, long-life construction",
    ],
    keywords: [
      "poultry plastic mat Pakistan",
      "chicken slat flooring Gujranwala",
      "poultry shed flooring supplier",
      "rubber mat poultry farm Pakistan",
    ],
    metaTitle: "Poultry Floor Mats — Plastic Slat & Rubber | Rehman Industry",
    metaDescription:
      "Plastic slat poultry mats and rubber flooring for chicken sheds. Anti-slip texture, drainage slots, interlocking install. Made in Gujranwala, Pakistan.",
  },
  {
    slug: "lids-and-closures",
    tag: "Packaging",
    title: "Lids & Closures",
    desc: "Snap-fit, multi-cavity",
    imgs: ["lids-1", "lids-2"],
    material: "PP / HDPE",
    industry: "Packaging / FMCG",
    intro:
      "Snap-on lids and closures for FMCG packaging — secure snap fit, clean retail-ready appearance, and steady high-volume supply. Multi-cavity tooling keeps unit cost low. White, custom-coloured and patterned options available.",
    highlights: [
      "Multi-cavity tooling for high volume at low unit cost",
      "Secure, repeatable snap fit",
      "Retail-ready cosmetic finish",
      "Documented in-line QC",
    ],
    keywords: [
      "plastic lid manufacturer Pakistan",
      "FMCG closure supplier Gujranwala",
      "snap on plastic lid Pakistan",
    ],
    metaTitle: "Plastic Lids & Closures — Snap-Fit | Rehman Industry",
    metaDescription:
      "Multi-cavity moulded plastic lids and closures for FMCG packaging — secure snap fit, clean finish, high-volume supply from Gujranwala, Pakistan.",
  },
  {
    slug: "instrument-boxes",
    tag: "Electrical",
    title: "Instrument Boxes & Enclosures",
    desc: "ABS enclosures",
    imgs: ["enclosure-1", "enclosure-2"],
    material: "ABS",
    industry: "Electrical / Instruments",
    intro:
      "Protective ABS enclosures and instrument boxes — clean mating faces, recessed screw bosses, ventilation slots, and a tidy finish on visible surfaces. Engineered for accurate close, foam-insert compatibility, and a long service life.",
    highlights: [
      "Accurate mating faces — clean, repeatable close",
      "Recessed screw bosses",
      "Ventilation slots & foam insert compatibility",
      "Matte / glossy finish options",
    ],
    keywords: [
      "instrument box manufacturer Pakistan",
      "ABS plastic enclosure Gujranwala",
      "electrical enclosure supplier Pakistan",
    ],
    metaTitle: "Instrument Boxes & Plastic Enclosures | Rehman Industry",
    metaDescription:
      "ABS plastic instrument boxes and enclosures moulded in Gujranwala, Pakistan — clean mating faces, recessed screw bosses, durable construction.",
  },
  {
    slug: "plastic-furniture-components",
    tag: "Furniture",
    title: "Plastic Furniture Components",
    desc: "Table legs, chair bases, fittings",
    imgs: ["mudguard-1", "mudguard-2"],
    material: "PP / Nylon (PA)",
    industry: "Furniture / Hardware",
    intro:
      "Load-bearing plastic furniture components — table legs, chair feet, connector blocks and frame fittings. Moulded in rigid materials that hold their shape under everyday loads, with clean visible faces and accurate threaded inserts where needed. Black, white and wood-tone finishes available.",
    highlights: [
      "Load-bearing rigid materials — PP, Nylon (PA)",
      "Accurate threaded inserts for assembly",
      "Smooth visible faces, retail-ready finish",
      "Black, white and wood-tone colour options",
    ],
    keywords: [
      "plastic table leg manufacturer Pakistan",
      "furniture plastic parts Gujranwala",
      "chair fitting moulded plastic",
      "plastic furniture connector Pakistan",
    ],
    metaTitle: "Plastic Furniture Components — Table Legs & Fittings | Rehman Industry",
    metaDescription:
      "Moulded plastic furniture components in Gujranwala, Pakistan — table legs, chair feet, connector blocks. Rigid materials, clean finish, ready for assembly.",
  },
  {
    slug: "electrical-switch-housings",
    tag: "Electrical",
    title: "Electrical Switch Housings",
    desc: "Flame-class ABS / PC",
    imgs: ["enclosure-1", "enclosure-2"],
    material: "ABS / Polycarbonate (PC)",
    industry: "Electrical",
    intro:
      "Insulating plastic switch housings, junction boxes and accessory shells. Moulded with flame-class ABS or polycarbonate, accurate locating features for clean board-fit, and a clean cosmetic finish on visible surfaces. Engineered for safe, repeatable assembly on Pakistani electrical-product lines.",
    highlights: [
      "Flame-class material options (ABS / PC)",
      "Accurate locating features for fast assembly",
      "Clean cosmetic finish on visible faces",
      "Custom colour matching available",
    ],
    keywords: [
      "switch housing manufacturer Pakistan",
      "electrical plastic enclosure Gujranwala",
      "moulded switchgear shell Pakistan",
      "junction box plastic supplier",
    ],
    metaTitle: "Electrical Switch Housings & Plastic Shells | Rehman Industry",
    metaDescription:
      "Moulded plastic electrical switch housings, junction boxes and accessory shells from Gujranwala, Pakistan — flame-class ABS / PC, accurate fit, clean finish.",
  },
  {
    slug: "household-containers",
    tag: "Household",
    title: "Household Containers & Boxes",
    desc: "Storage, organisers, kitchenware",
    imgs: ["lids-1", "lids-2"],
    material: "PP / HDPE",
    industry: "Household",
    intro:
      "Plastic storage containers, kitchen boxes and organisers for everyday use. Moulded in food-safe PP and HDPE, with secure-fit lids, stackable bases and a clean glossy finish. From small spice boxes to large multi-litre storage tubs — patterns, colours and custom shapes supported.",
    highlights: [
      "Food-safe PP / HDPE construction",
      "Secure-fit lids, stackable bases",
      "Clean glossy retail-ready finish",
      "Custom colours, patterns and shapes",
    ],
    keywords: [
      "plastic container manufacturer Pakistan",
      "household plastic boxes Gujranwala",
      "kitchen storage container moulded",
      "plastic organiser supplier Pakistan",
    ],
    metaTitle: "Plastic Household Containers & Boxes | Rehman Industry",
    metaDescription:
      "Plastic storage containers, kitchen boxes and organisers moulded in Gujranwala, Pakistan — food-safe PP / HDPE, secure-fit lids, retail-ready finish.",
  },
  {
    slug: "plastic-crates-trays",
    tag: "Industrial",
    title: "Plastic Crates & Trays",
    desc: "Stackable, vented, heavy-duty",
    imgs: ["poultrymat-1", "poultrymat-2"],
    material: "HDPE / PP",
    industry: "Industrial / Logistics",
    intro:
      "Heavy-duty stackable plastic crates and trays for industrial, agricultural and logistics use. Moulded in tough HDPE and PP with reinforced corners, vented walls for airflow, and nesting / stacking geometry that saves space empty and loaded. Sizes from small parts trays to large produce crates.",
    highlights: [
      "Reinforced corners, heavy-duty construction",
      "Vented walls for airflow (produce, poultry)",
      "Stackable loaded, nestable empty",
      "Custom sizes and colours",
    ],
    keywords: [
      "plastic crate manufacturer Pakistan",
      "industrial plastic tray Gujranwala",
      "stackable plastic crate supplier",
      "produce crate plastic Pakistan",
    ],
    metaTitle: "Plastic Crates & Trays — Stackable, Heavy-Duty | Rehman Industry",
    metaDescription:
      "Moulded plastic crates and trays from Gujranwala, Pakistan — heavy-duty HDPE / PP, vented for airflow, stackable and nestable. Industrial, agricultural and logistics use.",
  },
  {
    slug: "automotive-trim-clips",
    tag: "Automotive",
    title: "Automotive Trim & Clips",
    desc: "Precision fasteners & body components",
    imgs: ["taillamp-1", "mudguard-1"],
    material: "Nylon (PA) / ABS",
    industry: "Automotive",
    intro:
      "Precision plastic trim, clips and fastening components for cars and motorcycles. Snap-fit geometry held to tight tolerances, durable engineering plastic that survives repeated loading, and OEM colour-match for invisible fits on visible panels. Supplied to vehicle manufacturers and aftermarket auto-parts suppliers across Pakistan.",
    highlights: [
      "Tight tolerances for snap-fit assembly",
      "Durable engineering plastic (Nylon / ABS)",
      "OEM colour-match available",
      "OEM and aftermarket runs supported",
    ],
    keywords: [
      "automotive clip manufacturer Pakistan",
      "car trim plastic Gujranwala",
      "motorcycle plastic fastener supplier",
      "OEM auto-parts plastic moulding Pakistan",
    ],
    metaTitle: "Automotive Trim, Clips & Plastic Body Parts | Rehman Industry",
    metaDescription:
      "Precision moulded automotive trim, clips and plastic body parts from Gujranwala, Pakistan — tight tolerances, durable engineering plastic, OEM and aftermarket.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

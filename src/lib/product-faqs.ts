/**
 * Per-product FAQs. Added to each product detail page with FAQPage JSON-LD
 * — currently the highest-impact structured-data type for AI citations
 * (Google AI Overviews, ChatGPT, Perplexity, Claude). Three short, factual
 * Q&A pairs per product keep the page eligible for direct quotes without
 * any keyword stuffing.
 */
export type FAQ = { q: string; a: string };

export const productFAQs: Record<string, FAQ[]> = {
  "toyota-aqua-tail-lamp-covers": [
    {
      q: "Do you make tail-lamp covers for cars other than the Toyota Aqua?",
      a: "Yes. The Aqua is one model we mould for, but we also produce tail-lamp lens covers for several other car models. Send the model name and we'll confirm fit and tooling status.",
    },
    {
      q: "Which plastic is used for the tail-lamp lens?",
      a: "Translucent ABS or acrylic (PMMA) for the red and amber sections. Both are tough, weather-resistant and accept the high-gloss finish needed for an automotive lens.",
    },
    {
      q: "Can the colour be matched to a specific OEM standard?",
      a: "Yes. We colour-match to OEM specification when supplied. For aftermarket runs we use standard automotive candy-red and amber tones unless otherwise instructed.",
    },
  ],
  "motorcycle-mudguards": [
    {
      q: "What plastic do you use for motorcycle mudguards?",
      a: "Polypropylene (PP) or ABS, depending on the use case. PP is lighter and more flexible; ABS is more rigid and takes a glossier finish. Both are impact-resistant enough for road use.",
    },
    {
      q: "Can you mould the mudguard to match a specific bike's mounting points?",
      a: "Yes — provide the mounting drawing, sample or measurements and we tool the mudguard to fit. We also adapt existing moulds for OEM and aftermarket variants.",
    },
    {
      q: "Do you supply both front and rear mudguards?",
      a: "Yes, both. Plus huggers, side panels and other plastic body parts depending on the bike model.",
    },
  ],
  "air-cooler-bodies": [
    {
      q: "Do you make the entire air-cooler body or just parts of it?",
      a: "Both. We mould the full cabinet (front grille, side panel, water tank, control panel housing) or just specific components as needed. Most appliance customers take the full body assembly.",
    },
    {
      q: "What plastic is used for an evaporative air-cooler cabinet?",
      a: "Polypropylene (PP) or HDPE. Both are UV-stable enough for the warm Pakistani indoor environment, food-safe (relevant for the water tank), and offer the clean finish needed on visible faces.",
    },
    {
      q: "Can you produce coolers in our brand's own colours and design?",
      a: "Yes. We mould to your design, in colours you specify, with logos applied via pad printing or in-mould decoration. Most of our appliance work is private-label production for Pakistani brands.",
    },
  ],
  "thermos-bodies": [
    {
      q: "Are the thermos plastics food-safe?",
      a: "Yes — we use food-grade PP and ABS grades. The plastic body is the outer insulating shell; the inner liner (typically glass or stainless steel) is supplied separately and food-safe by spec.",
    },
    {
      q: "Can you mould thermos bodies with custom prints or patterns?",
      a: "Yes. Floral, plain, gradient, and brand-specific patterns are all available — via in-mould decoration or post-mould pad printing.",
    },
    {
      q: "What sizes do you produce?",
      a: "From small flask-sized (~500 ml) up to large household thermoses (~2 litres). Send your dimensions and we'll quote tooling or use existing.",
    },
  ],
  "jugs-and-cups": [
    {
      q: "Do you sell the jug-and-cup sets directly or only to brands?",
      a: "We are a contract manufacturer — we produce jug-and-cup sets for brands who then sell them under their own label. Most of the jug-and-cup sets sold in Pakistani housewares stores come from contract moulders like us.",
    },
    {
      q: "Is the plastic safe for hot drinks?",
      a: "Standard PP grades we use are safe for warm liquids up to about 100°C. For routinely-hot use (tea, coffee), we recommend a higher-temperature grade or polycarbonate (PC).",
    },
    {
      q: "How many cups come in a typical set?",
      a: "Most jug-and-cup sets are configured as a single jug with 4 or 6 matching cups. We mould both individually and pack as sets — quantities are flexible.",
    },
  ],
  "poultry-floor-mats": [
    {
      q: "What size are your poultry slat mats?",
      a: "Standard panels are roughly 60×60 cm and interlock to cover any shed floor area. Custom sizes are available — send your shed dimensions for a quote.",
    },
    {
      q: "Are the mats safe on the birds' feet?",
      a: "Yes — the grid slots are sized so chick and adult feet don't get stuck, and the raised anti-slip texture prevents slipping. Drainage slots keep the floor dry, which lowers disease pressure.",
    },
    {
      q: "How long does a plastic poultry mat last?",
      a: "Properly cleaned, the moulded PP slat mats last 5–8 years in continuous poultry use. They survive routine power-washing and standard disinfectants.",
    },
  ],
  "lids-and-closures": [
    {
      q: "What kind of lids do you produce?",
      a: "Snap-on lids and screw-cap closures for FMCG packaging — for food, paint, chemicals, lubricants, and household products. We tool to your bottle/container neck spec.",
    },
    {
      q: "Can you tool multi-cavity moulds for high volume?",
      a: "Yes. For high-volume closure work (millions of pieces per year), multi-cavity tooling pays back quickly. We commonly run 4, 8 and 16-cavity moulds for caps and lids.",
    },
    {
      q: "Do you offer tamper-evident designs?",
      a: "Yes — including pilfer-proof bands, snap-off rings and induction-seal-compatible designs. Specify your requirement at the DFM stage.",
    },
  ],
  "instrument-boxes": [
    {
      q: "What plastic do you use for instrument enclosures?",
      a: "ABS is the default — rigid, takes a matte finish, machine-able for post-mould holes. For applications needing UV resistance or higher impact, we switch to polycarbonate (PC) or ABS-PC blend.",
    },
    {
      q: "Can the enclosure be supplied with foam inserts?",
      a: "Yes — we can supply with custom-cut foam to hold tools, instruments or accessories inside. Tell us the items to fit and we'll cut to shape.",
    },
    {
      q: "Are vent slots and mounting bosses included in the mould?",
      a: "Standard moulds include ventilation slots and recessed mounting bosses. Custom layouts are easy to add at tooling stage — much harder to add later, so specify up front.",
    },
  ],
  "plastic-furniture-components": [
    {
      q: "Are the plastic table legs strong enough to hold a heavy table?",
      a: "Yes — we use rigid PP and Nylon (PA) grades engineered for load-bearing use. A standard moulded leg easily supports the load of a typical dining table.",
    },
    {
      q: "Do the parts include threaded inserts for assembly?",
      a: "Yes. We can mould-in metal threaded inserts, or use plastic threads — depending on how often the joint will be assembled/disassembled.",
    },
    {
      q: "Can you match a wood-grain or specific colour finish?",
      a: "Yes — black, white, beige, wood-tone and custom colours are available. For premium wood-grain looks, we recommend in-mould film transfer.",
    },
  ],
  "electrical-switch-housings": [
    {
      q: "Are your electrical housings flame-retardant?",
      a: "Yes — we mould in flame-class (UL94 V-0 and V-2) ABS and polycarbonate grades when the application requires it. Specify the standard at the DFM stage.",
    },
    {
      q: "Can you mould housings to fit a specific switch or socket standard?",
      a: "Yes. Provide the standard (BS, ISI, IEC, etc.) and the internal mechanism dimensions and we'll tool the housing to fit.",
    },
    {
      q: "Do you produce just the housing or the full switch assembly?",
      a: "We mould the plastic housing. Final assembly with the metal contacts and electrical components is typically handled by the customer or a partner — though we can coordinate.",
    },
  ],
  "household-containers": [
    {
      q: "Are the containers safe for storing food?",
      a: "Yes — we mould in food-safe PP and HDPE grades. For airtight storage we add a silicone gasket; for dry-goods storage standard snap-on lids work fine.",
    },
    {
      q: "Are the lids interchangeable across container sizes?",
      a: "We tool lids to match specific container mouths. For modular ranges we design a common lid size across multiple container bodies — a small DFM tweak that saves SKU complexity for your brand.",
    },
    {
      q: "Can you make microwave-safe containers?",
      a: "Yes — PP is microwave-safe up to typical reheating temperatures. For routinely-hot use we recommend high-temperature PP grades.",
    },
  ],
  "plastic-crates-trays": [
    {
      q: "What weight can your plastic crates hold?",
      a: "Standard moulded HDPE/PP crates routinely hold 20–30 kg of produce or industrial goods. Heavy-duty designs go higher — specify your load and we'll recommend a wall thickness and material grade.",
    },
    {
      q: "Are the crates stackable when loaded?",
      a: "Yes — our standard designs have stacking lips for safe vertical stacking when loaded, and nest-down geometry for empty stacking to save return-transport space.",
    },
    {
      q: "Can crates be made with vents for poultry or produce?",
      a: "Yes — vented walls and floors are standard for produce, fish and poultry crates to keep airflow up and reduce spoilage.",
    },
  ],
  "automotive-trim-clips": [
    {
      q: "What tolerances can you hold on snap-fit clips?",
      a: "Typical tolerances are ±0.05 mm on critical features for snap-fit assembly. Nylon (PA) and ABS both hold tight tolerances batch-to-batch when the mould is well-built.",
    },
    {
      q: "Do you supply OEMs or only the aftermarket?",
      a: "Both. We've supplied automotive OEM tier suppliers and aftermarket parts sellers. NDAs are signed by default for OEM work.",
    },
    {
      q: "Can you colour-match to a specific car model's interior?",
      a: "Yes — supply the colour code or a sample and we'll match the masterbatch. Standard interior tones (black, grey, beige) are stock.",
    },
  ],
};

export function getProductFAQs(slug: string): FAQ[] {
  return productFAQs[slug] || [];
}

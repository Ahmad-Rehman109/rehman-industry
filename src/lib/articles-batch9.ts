/**
 * Batch 9 — Week 7 articles.
 *
 * Topic selection from Search Console, unfiltered, 3 months:
 *   - The site earns impressions for the "plastic industry" family
 *     ("plastic industry in pakistan", "plastic factory gujranwala" at
 *     position 41.6) but has no page that actually answers those queries.
 *     Every existing page is about our services, not about the industry.
 *   - "injection molding machine for sale in gujranwala", "hand molding
 *     machine gujranwala" and "injection moulding machine service"
 *     (1 click, position 8) already draw impressions with nothing to land on.
 *
 * Both carry FAQPage JSON-LD and contextual internal links to the
 * service and product pages, which previously received none from articles.
 */
import type { Article } from "./articles";

export const articlesBatch9: Article[] = [
  // ===================================================================
  // ARTICLE 23 — Pakistan's plastic industry, by region
  // ===================================================================
  {
    slug: "plastic-industry-in-pakistan",
    title: "The Plastic Industry in Pakistan — Who Makes What, and Where",
    excerpt:
      "A buyer's map of Pakistan's plastic manufacturing sector: which cities specialise in which processes, how injection moulding differs from blow moulding and extrusion, what the industry actually runs on, and how to find the right factory for your part.",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
    readingMinutes: 12,
    keywords: [
      "plastic industry in Pakistan",
      "plastic manufacturing companies in Pakistan",
      "plastic factory Gujranwala",
      "plastic industry Gujranwala",
      "plastic parts manufacturers Pakistan",
      "injection moulding industry Pakistan",
      "plastic products manufacturer Punjab",
    ],
    heroImg: "/products/hero-7.webp",
    metaTitle: "The Plastic Industry in Pakistan — Cities, Processes and Suppliers (2026)",
    metaDescription:
      "Which Pakistani cities make which plastic products, how injection moulding compares to blow moulding and extrusion, and how to pick the right factory for your part.",
    body: [
      {
        h2: "The short answer",
        paragraphs: [
          "Pakistan's plastic industry is **regional and specialised**, not general purpose. Karachi dominates packaging, films and large-volume consumer goods. Lahore and Gujranwala dominate engineered and industrial parts — automotive components, electrical housings, housewares and agricultural products. Faisalabad and Sialkot serve their own local industries. Peshawar and Quetta are comparatively small.",
          "Almost nobody does everything. A factory that blow-moulds bottles usually cannot injection-mould a switch housing, because the machines, the tooling and the skills are completely different. **Choosing a supplier starts with choosing the process, not the city.**",
          "The sector is overwhelmingly made of small and medium private firms. Very few publish capability data, most take orders by phone or WhatsApp, and there is no national directory that is both current and honest. That is precisely why buyers struggle to find the right factory — and why this guide is organised by what you are trying to make.",
        ],
      },
      {
        h2: "The four processes, and how to tell which one you need",
        paragraphs: [
          "Nearly every plastic product in Pakistan comes off one of four processes. Get this wrong and you will spend weeks talking to factories that physically cannot make your part.",
          "### Injection moulding",
          "Molten plastic is forced into a steel mould under high pressure, cooled, and ejected as a finished solid part. This is the process behind switch housings, bottle caps, crates, automotive clips, furniture fittings, appliance parts and almost anything with precise dimensions or a rigid three-dimensional shape.",
          "Use it when the part is **solid, dimensionally precise, and repeated in volume**. It carries the highest upfront tooling cost and the lowest per-part cost, which is why it needs volume to make sense. See [what injection moulding actually involves](/services/plastic-injection-moulding).",
          "### Blow moulding",
          "A hollow tube of plastic is inflated against a mould to form a hollow container. Bottles, jerry cans, drums, water tanks. If your product holds liquid and has a neck, it is almost certainly blow moulded, not injection moulded — although the **cap is injection moulded**, which is why bottle brands routinely deal with two different suppliers.",
          "### Extrusion",
          "Plastic is pushed continuously through a die to make a long constant profile: pipes, sheets, films, cables, window profiles, packaging film. If your product is sold by the metre or the kilogram rather than by the piece, it is extruded.",
          "### Thermoforming and rotomoulding",
          "Thermoforming heats a sheet and vacuums it over a shape — disposable trays, clamshell packaging, thin covers. Rotomoulding tumbles powder inside a heated hollow mould — large water tanks, road barriers, big hollow items. Both have far cheaper tooling than injection moulding and far looser tolerances.",
        ],
      },
      {
        h2: "The regional map: which city makes what",
        paragraphs: [
          "### Karachi",
          "The largest concentration by volume. Packaging, films, PET bottles, containers, houseware and large FMCG-driven runs. Karachi's advantage is the port — imported resin lands there first, so material is cheapest and most available. Its disadvantage for an inland buyer is freight, and the fact that the biggest plants are geared to high-volume FMCG contracts and are not especially interested in a 20,000-piece order.",
          "### Lahore and Gujranwala",
          "The engineered-parts belt. This is where Pakistan's automotive parts, electrical accessories, appliance components, housewares and agricultural plastics are made. It is also where most of the country's **local tool rooms** sit — the workshops that actually cut moulds — which matters more than people realise, because if your moulder cannot repair or modify a tool in-house you will lose weeks every time a dimension needs correcting.",
          "Gujranwala in particular is an engineering city first and a plastics city second. Its fan, appliance, sanitary and auto-parts industries created the demand for moulded components locally, and the moulding factories grew up serving them. That is why a Gujranwala moulder tends to be comfortable with **metal inserts, tight tolerances and functional parts** rather than thin-wall packaging.",
          "### Faisalabad",
          "Textile-driven. Bobbins, cones, spools, machine parts and packaging for the textile trade, plus general household goods.",
          "### Sialkot",
          "Serves the sports goods, surgical instrument and leather industries — mostly smaller, precision and cosmetic parts, often with export-grade finish requirements because the end products are exported.",
          "### Islamabad, Peshawar, Quetta and interior Sindh",
          "Comparatively thin. Mostly local-market goods and pipe or tank production. A buyer needing engineered components will usually end up sourcing from Punjab or Karachi regardless of where they are based — and freight within Pakistan is cheap enough that this is rarely the deciding factor.",
        ],
      },
      {
        h2: "What the industry actually runs on",
        paragraphs: [
          "**Imported resin.** Pakistan produces some PVC and PTA domestically, but the polypropylene, polyethylene, ABS, nylon and polycarbonate that engineered parts are made from are largely imported. This has one consequence every buyer should understand: **material price is not under your supplier's control**. It moves with the dollar rate and with international resin markets. A quote that was accurate in March may not hold in September, and any moulder who pretends otherwise is either absorbing the risk or planning to renegotiate later.",
          "**Second-hand machinery, mostly Japanese and Chinese.** Very few plants in Pakistan buy new presses. The market runs on imported used machines — Japanese ones are prized for build quality and control stability, Chinese ones for price and parts availability. What matters to you as a buyer is not the badge but whether the clamp tonnage and shot weight suit your part, and whether the machine holds settings consistently across a long run.",
          "**In-house versus outsourced tooling.** This is the single biggest quality divider in the Pakistani market. Factories with their own tool room can cut, modify and repair moulds themselves. Factories without one send the tool out, which turns a two-day correction into a three-week one and means nobody quite owns the problem. Ask this question before you ask about price. Our own [mould making and tooling](/services/mould-making) is in-house for exactly this reason.",
          "**Informality.** A large share of the sector operates with limited documentation. Registered, tax-compliant suppliers who invoice properly are a minority, and if you are a corporate buyer or an exporter that distinction is not optional — you cannot claim input tax on an invoice that does not exist.",
        ],
      },
      {
        h2: "Why sourcing is genuinely hard here",
        paragraphs: [
          "**Almost nobody publishes their capabilities.** Most factories have no website, or a website that lists nothing useful — no machine sizes, no tonnage range, no materials handled, no minimum order. You cannot screen suppliers on paper, so you screen them by phoning twenty of them.",
          "**Directories are stale.** The listings you find on aggregator sites are years old, full of closed businesses and duplicated entries, and ranked by who paid rather than who can do the work.",
          "**Traders present themselves as manufacturers.** A significant share of the companies that answer a plastics enquiry do not own a press. They subcontract, add a margin, and stand between you and the people who actually make your part — which is fine until something needs fixing and they cannot fix it.",
          "**Capability is rarely stated honestly.** Very few suppliers will say no. Ask whether a factory can hold a tight tolerance on a glass-filled nylon part and the answer is usually yes, regardless of whether it is true. This is the failure mode that costs buyers the most time.",
        ],
      },
      {
        h2: "How to pick a factory without visiting twenty of them",
        paragraphs: [
          "**Ask for the machine list.** Clamp tonnage range, shot weight, number of presses. A supplier who cannot produce this in five minutes does not own the machines. Ours is published on the [machines and capacity page](/machines).",
          "**Ask whether the tool room is in-house.** Then ask who cut the last mould they delivered and how long a typical modification takes.",
          "**Ask what they already make that resembles your part.** Similar wall thickness, similar material, similar size. A factory that runs thin-wall packaging all day is not the right home for a glass-filled structural bracket, and the reverse is equally true. Our [product range](/products) is the honest version of that answer for us.",
          "**Ask for the tooling ownership terms in writing.** Who owns the mould once it is paid for, where it is stored, and what happens if you move. This is where most supplier relationships turn sour, and it is trivially avoidable by settling it before any steel is cut.",
          "**Ask for a first-article sample before the full run.** Any competent moulder expects this. Anyone who resists it is telling you something.",
          "**Check registration.** An NTN and sales tax registration is a five-second question and it filters out a large share of the market before you have wasted a week.",
        ],
      },
      {
        h2: "Where the industry is going",
        paragraphs: [
          "**Import substitution is the growth engine.** Every year more components that used to be imported — auto parts, appliance internals, electrical accessories — are made locally, because the exchange rate keeps making imports more expensive relative to domestic production. This is the strongest tailwind the sector has, and it favours factories that can build tooling rather than just run it.",
          "**Regulation is tightening on single-use plastics** in several provinces. This mostly affects bags, films and thin packaging. It has little effect on engineered and durable moulded parts, which is where the industry has been quietly shifting anyway.",
          "**Recycled material is now normal, not fringe.** Pakistan has a large informal recycling network, and regrind and recycled grades are widely used in non-critical parts. Used correctly this is a legitimate cost saving. Used dishonestly — recycled material in a part quoted as virgin — it is the most common quality fraud in the market. Specify virgin in writing when it matters, particularly for food-contact and structural parts.",
          "**Energy cost is the constraint nobody advertises.** Electricity pricing and reliability shape which factories survive. It is worth asking a prospective supplier what happens to your delivery date during a load-shedding week, because the answer differs enormously between plants.",
        ],
      },
      {
        h2: "Bottom line",
        paragraphs: [
          "Pakistan's plastic industry is capable, competitively priced and well established — it is simply badly documented. The difficulty is not finding a factory, it is finding out which factory can actually make your part, and there is no shortcut except asking specific questions and expecting specific answers.",
          "Start from the process, narrow to the region, then screen on tool room, machine list and comparable work. Three good questions will eliminate most of a shortlist in a single phone call.",
          "We are an injection moulding factory in Gujranwala, running since 2006, with our own tool room and Japanese presses. If you have a part in mind, [send us the drawing or a sample](/contact) and you will get real numbers within a business day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which city in Pakistan is best for plastic manufacturing?",
        a: "It depends on the process. Karachi leads in packaging, films and high-volume consumer plastics because imported resin lands at the port there. Lahore and Gujranwala lead in engineered injection-moulded parts — automotive components, electrical housings, housewares and agricultural products — because that is where most of the country's tool rooms and engineering industries are. Faisalabad serves textiles and Sialkot serves sports goods and surgical instruments.",
      },
      {
        q: "How is Gujranwala's plastic industry different from Karachi's?",
        a: "Gujranwala is an engineering city, so its moulding factories grew up supplying local fan, appliance, sanitary and auto-parts manufacturers. That makes them comfortable with functional parts, metal inserts and tighter tolerances, usually in medium volumes. Karachi's plants are geared toward high-volume packaging and FMCG work, with cheaper material access through the port but less appetite for smaller engineered runs.",
      },
      {
        q: "How do I know if a plastic supplier in Pakistan is a real manufacturer or a trader?",
        a: "Ask for their machine list — clamp tonnage range, shot weight and number of presses. A genuine manufacturer answers in minutes; a trader deflects or promises to send it later. Then ask whether their tool room is in-house and what they currently make that resembles your part. Traders subcontract, so they cannot answer specifically about machines they do not own.",
      },
      {
        q: "Why do plastic prices in Pakistan change so often?",
        a: "Because the polypropylene, polyethylene, ABS and nylon used in engineered parts are largely imported. Material cost moves with the dollar exchange rate and with international resin markets, neither of which a local moulder controls. A quote given several months ago may no longer hold, so ask how long a quoted price is valid and whether material is priced at order or at delivery.",
      },
      {
        q: "Is injection moulding or blow moulding right for my product?",
        a: "Injection moulding suits solid, dimensionally precise parts made in volume — housings, caps, crates, clips, fittings. Blow moulding suits hollow containers with a neck, such as bottles, jerry cans and tanks. If your product holds liquid and has a narrow opening it is blow moulded, although its cap will be injection moulded, which is why bottle brands often use two suppliers.",
      },
      {
        q: "Is recycled plastic common in Pakistani manufacturing?",
        a: "Yes. Pakistan has a large informal recycling network and recycled or regrind material is routinely used in non-critical parts, which is a legitimate way to reduce cost. The problem is undisclosed substitution — recycled material used in a part that was quoted as virgin. Specify virgin resin in writing for food-contact, structural and cosmetic parts, and ask for material documentation.",
      },
    ],
  },

  // ===================================================================
  // ARTICLE 24 — Buy a moulding machine, or outsource?
  // ===================================================================
  {
    slug: "buy-injection-moulding-machine-or-outsource-pakistan",
    title: "Should You Buy an Injection Moulding Machine, or Outsource?",
    excerpt:
      "What a moulding machine really costs to buy and to run in Pakistan, the hidden costs nobody quotes you, the break-even volume where owning beats outsourcing, and how to decide without spending a rupee on the wrong answer.",
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-02",
    readingMinutes: 12,
    keywords: [
      "injection moulding machine price Pakistan",
      "injection molding machine for sale in Gujranwala",
      "buy injection moulding machine Pakistan",
      "injection moulding machine service",
      "second hand injection moulding machine Pakistan",
      "moulding machine running cost",
      "outsource plastic moulding Pakistan",
    ],
    heroImg: "/products/hero-3.webp",
    metaTitle: "Buy an Injection Moulding Machine or Outsource? Pakistan Costs (2026)",
    metaDescription:
      "Machine prices, hidden running costs, break-even volumes and the honest comparison between buying an injection moulding machine in Pakistan and outsourcing production.",
    body: [
      {
        h2: "The short answer",
        paragraphs: [
          "Buying a machine makes sense when you have **one high-volume part you will run for years**, when you already employ people who can set and run a press, and when you have somewhere to put it with three-phase power. It rarely makes sense for a company whose real business is selling a product rather than making one.",
          "The number that decides it is not the machine price. It is **utilisation**. A press earns nothing while it sits idle, but it still costs you the capital, the floor space, the operator and the maintenance. Most first-time buyers plan on paper for a machine that runs eight hours a day and discover in practice that it runs three.",
          "The honest rule of thumb: below roughly a **continuous single-shift load on one part family**, outsourcing wins on total cost and wins overwhelmingly on risk. Above it, owning starts to pay — provided you can staff it.",
        ],
      },
      {
        h2: "What a machine actually costs in Pakistan",
        paragraphs: [
          "Almost nothing is bought new. The market runs on imported second-hand presses, and prices move constantly with the exchange rate, so treat every figure here as a shape rather than a quote.",
          "**Small presses (roughly 50-120 tonne).** Suitable for caps, small housings, clips, fittings. These are the machines most commonly advertised in Gujranwala and Lahore, and the cheapest entry point into owning.",
          "**Mid-range (roughly 150-350 tonne).** The workhorse band for housewares, appliance parts, automotive components and mid-size housings. Most engineered parts in Pakistan are moulded here.",
          "**Large (450 tonne and above).** Crates, bumpers, large panels, big housings. Substantially more expensive to buy, to power and to house, and far harder to keep busy.",
          "Two things buyers consistently underestimate. First, **tonnage is chosen by the part, not by the budget** — a machine too small physically cannot hold the mould closed and will flash every shot, and a machine much too large wastes energy and is harder to control on small shots. Second, **the machine is not the purchase**; the mould is a separate cost, and for a first part it is often comparable to the price of a small press.",
        ],
      },
      {
        h2: "The costs nobody puts in the quotation",
        paragraphs: [
          "**Installation and power.** Three-phase supply, cabling, a suitable floor, and space around the machine for the operator, the material and the finished parts. Retrofitting power to a building that does not have it is a genuine project.",
          "**Auxiliaries.** A press alone does not make parts. You need a chiller or cooling tower, a hopper dryer for hygroscopic materials such as nylon, ABS and polycarbonate, a material loader, a granulator for regrind, an air compressor, and a crane or hoist to change moulds. Together these are a serious fraction of the machine cost and they are routinely left out of the plan.",
          "**People.** A setter who can hang a mould, dial in a process and troubleshoot short shots and sink marks is a skilled, scarce hire — much scarcer than an operator. This is the single most common reason a bought machine underperforms: the steel arrived and the skill did not.",
          "**Electricity.** A press is a continuous heavy load: barrel heaters, hydraulics or servo drive, plus the chiller running alongside it. Energy is a large share of moulding cost in Pakistan and it does not scale down when your order book does.",
          "**Maintenance and spares.** Hydraulic seals, heater bands, thermocouples, screw and barrel wear. Used machines need this sooner. Spares availability is a real reason buyers favour common models over an unusual import, however good the latter looks.",
          "**Scrap while you learn.** Your first weeks on a new tool produce rejects. An established moulder absorbs that in their yield. You will absorb it in material.",
        ],
      },
      {
        h2: "How to work out your own break-even",
        paragraphs: [
          "Do not compare machine price against outsourced part price. Compare **total annual cost of owning** against **total annual cost of buying the parts**, and be honest about the middle column.",
          "### 1. Take your real annual volume",
          "Not your hoped-for volume. The one you actually shipped last year, or the one your customer has committed to in writing.",
          "### 2. Work out machine hours",
          "Divide annual pieces by cavities per shot to get shots, then multiply by cycle time. A 30-second cycle in a two-cavity tool makes about 240 parts an hour. A quarter of a million parts a year is therefore roughly 1,000 machine hours — well under half a single shift. That is the calculation that stops most purchases, and it is worth doing before anything else.",
          "### 3. Add every ownership cost",
          "Capital or finance cost, electricity, the setter and operators, maintenance, floor space, auxiliaries, and scrap. Divide by your real annual volume to get a true per-part cost.",
          "### 4. Compare against a real quote",
          "Get an actual [moulding quote](/contact) for the same part at the same annual volume. Compare like for like, including the tooling, which you pay for either way.",
          "### 5. Price the risk you are taking on",
          "If the machine breaks, your production stops and you own the problem. If your volume halves, the machine cost does not. If your product changes, the tooling may not fit the press you bought. An outsourced supplier absorbs all three of those.",
        ],
      },
      {
        h2: "When buying is genuinely the right call",
        paragraphs: [
          "**You have one part, at high volume, for years.** A single stable high-runner is the classic case for owning. Predictable load, one setup, no changeovers.",
          "**Moulding is on your critical path.** If a delay at your moulder stops your assembly line, bringing it in-house buys control that is worth paying for.",
          "**Your design is genuinely confidential** and you would rather not have it outside your walls, even under an NDA.",
          "**You already have the skills.** Companies that run other machinery and employ maintenance staff absorb a press far more easily than a company whose first machine it is.",
          "**You want to sell moulding capacity too.** Some buyers buy a press and fill spare hours with contract work. This works, but it makes you a moulding business, with all that entails.",
        ],
      },
      {
        h2: "When outsourcing wins",
        paragraphs: [
          "**Several different parts at moderate volume.** Changeovers destroy the economics of a single owned press. A contract moulder with a floor of machines absorbs variety as a matter of routine — this is exactly what [contract manufacturing](/services/contract-manufacturing) exists to do.",
          "**Your volume is uncertain or seasonal.** Outsourced cost falls when your orders fall. An owned machine's cost does not.",
          "**You are still iterating on the design.** Buying a press before the design is frozen locks you into a tonnage that may not suit the final part.",
          "**You are launching a new product.** Get to market on someone else's machine, prove the demand, and decide about steel afterwards. This is the cheapest possible way to be wrong.",
          "**You need a range of tonnages.** A part family that spans small clips and large housings needs more than one press. Outsourcing gives you every size at once.",
        ],
      },
      {
        h2: "If you do buy second-hand, inspect these",
        paragraphs: [
          "**Watch it mould a part before you pay.** Not a dry cycle with no material — an actual shot. A machine that will not run in front of a buyer has a reason.",
          "**Check shot-to-shot consistency.** Run twenty shots and weigh the parts. Drifting weights mean a worn screw and barrel or an unstable check ring, which is one of the more expensive repairs.",
          "**Inspect the platens and tie bars** for wear, scoring or misalignment. Platen or tie-bar damage is a machine-level problem, not a service item.",
          "**Test the heater zones.** Every zone should reach and hold its setpoint. Dead zones and drifting thermocouples are cheap to fix but tell you how the machine was kept.",
          "**Look under it.** Hydraulic leaks and a heavily contaminated oil tank are a maintenance history you can read directly.",
          "**Ask about spares and manuals.** An orphan model with no parts channel becomes an expensive ornament the first time something fails.",
          "**Confirm the shot weight and tie-bar spacing suit your mould** before, not after. A tool that will not physically fit between the tie bars is a common and entirely avoidable mistake.",
        ],
      },
      {
        h2: "A middle path most buyers overlook",
        paragraphs: [
          "You do not have to choose one or the other permanently. **Own the tooling, rent the capacity.** Pay for your own mould, keep it in your name with the ownership terms written down, and have a contract moulder run it. You get exclusivity over the design and the ability to move if the relationship sours, without buying a press, hiring a setter or paying for idle hours.",
          "This is how most sensible Pakistani product companies operate, and it is the arrangement we default to: the [mould is built](/services/mould-making) for the customer, the customer owns it, and production runs on our machines. If volume later grows enough to justify a press of your own, the tool comes with you.",
          "The other staged approach: outsource until one part clearly outgrows the arrangement, then buy a press sized for that one part and keep everything else outsourced. Buying a general-purpose machine for a general-purpose hope is how presses end up idle.",
        ],
      },
      {
        h2: "Bottom line",
        paragraphs: [
          "A moulding machine is not expensive because of its price. It is expensive because of everything that has to exist around it — power, auxiliaries, a skilled setter, maintenance, and enough work to keep it busy. Do the machine-hours calculation before you do anything else; it answers the question honestly in about ten minutes.",
          "If you have one big part and the people to run it, buy. If you have several parts, uncertain volume, or no setter, outsource and own your tooling instead. Our [machine list and capacity](/machines) is published if you want to compare against what a floor of presses actually looks like.",
          "Not sure which side of the line you are on? [Send us your part and your annual volume](/contact) and we will tell you plainly — including when the answer is that you would be better off with your own machine.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an injection moulding machine cost in Pakistan?",
        a: "Nearly all machines sold in Pakistan are imported second-hand, and prices move with the exchange rate, so there is no stable figure. What is stable is the structure: a small 50-120 tonne press is the cheapest entry point, mid-range 150-350 tonne presses cost several times that, and 450 tonne and above is a different bracket again. The machine is also only part of the spend — the mould, a chiller, a dryer, a compressor and three-phase installation all come on top.",
      },
      {
        q: "What size injection moulding machine do I need?",
        a: "Tonnage is set by the part, not the budget. It depends on the projected area of the part and runner and on the injection pressure the material needs. Too little tonnage and the mould opens slightly under pressure, producing flash on every shot. Far too much tonnage wastes energy and makes small shots harder to control. Send your part drawing to a moulder and they will tell you the required tonnage in minutes, before you go looking at machines.",
      },
      {
        q: "Is it cheaper to buy a moulding machine or outsource production?",
        a: "Calculate machine hours first. Divide your annual volume by cavities per shot, multiply by cycle time, and see how many hours the press would actually run. Most first-time buyers find their volume fills well under half a shift, which means the capital, the operator, the electricity and the maintenance are spread across an idle machine. Below roughly a continuous single-shift load on one part family, outsourcing is cheaper and carries far less risk.",
      },
      {
        q: "What should I check when buying a second-hand injection moulding machine?",
        a: "Watch it mould real parts, not a dry cycle. Run twenty shots and weigh them — drifting part weight indicates a worn screw, barrel or check ring. Inspect platens and tie bars for wear or misalignment, confirm every heater zone reaches and holds its setpoint, look underneath for hydraulic leaks, and confirm spares and manuals are available for that model. Finally, check the tie-bar spacing and shot weight against the mould you intend to run.",
      },
      {
        q: "Can I own the mould but have someone else run production?",
        a: "Yes, and it is the arrangement most product companies should use. You pay for the tool, it is registered as yours in writing, and a contract moulder runs it on their machines. You keep design exclusivity and the ability to move the tool elsewhere, without buying a press, hiring a setter or paying for idle hours. Settle ownership, storage and transfer terms in writing before any steel is cut.",
      },
      {
        q: "What hidden costs come with owning a moulding machine?",
        a: "Three-phase power and installation, a chiller or cooling tower, a hopper dryer for nylon, ABS or polycarbonate, a material loader, a granulator, an air compressor and a hoist for mould changes. Then the running costs: electricity, hydraulic seals, heater bands, thermocouples, screw and barrel wear, and the scrap produced while your team learns the process. The biggest cost of all is a skilled setter, who is far harder to hire than an operator.",
      },
    ],
  },
];

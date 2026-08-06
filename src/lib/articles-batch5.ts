/**
 * Batch 5 — Week 4 articles (2 of 2–3/week cadence).
 */
import type { Article } from "./articles";

export const articlesBatch5: Article[] = [
  // ===================================================================
  // ARTICLE 15 — Plastic packaging manufacturing
  // ===================================================================
  {
    slug: "plastic-packaging-manufacturing-pakistan",
    title: "Plastic Packaging Manufacturing in Pakistan — Caps, Containers, Crates & Closures",
    excerpt:
      "Which packaging parts are actually injection moulded, what they cost per piece in Pakistan, how food-contact requirements change the job, and how to plan a packaging launch without wasting tooling money.",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-06",
    readingMinutes: 10,
    keywords: [
      "plastic packaging manufacturer Pakistan",
      "injection moulded packaging Pakistan",
      "plastic caps and closures Pakistan",
      "plastic crates manufacturer Pakistan",
      "food grade plastic containers Pakistan",
      "packaging moulding Gujranwala",
    ],
    heroImg: "/products/hero-7.webp",
    metaTitle: "Plastic Packaging Manufacturing in Pakistan — Caps, Containers & Crates (2026)",
    metaDescription:
      "What packaging parts are injection moulded in Pakistan, real per-piece costs, food-contact requirements, and how to plan a packaging launch without wasting tooling money.",
    body: [
      {
        h2: "The short answer",
        paragraphs: [
          "Injection moulding produces the **rigid** parts of plastic packaging: caps, closures, containers and tubs, buckets and pails, lids, crates, trays, and the preforms that later become PET bottles. It does not produce bottles, films, bags or shrink sleeves — those come from blow moulding and extrusion.",
          "In Pakistan, packaging is one of the highest-volume applications of injection moulding, and volume is exactly what makes the economics work. A cap that costs PKR 3 to mould at 5,000 pieces costs closer to PKR 1.60 at 500,000 — and packaging buyers are usually ordering in the hundreds of thousands.",
          "This article covers what can and can't be moulded, what it costs, what changes when the part touches food, and how to plan a packaging launch so you don't pay for the wrong tooling.",
        ],
      },
      {
        h2: "What injection moulding makes in packaging — and what it doesn't",
        paragraphs: [
          "Getting this right at the start saves you from quoting the wrong process. Injection moulding is the right process for:",
          "**Caps and closures.** Flip-tops, screw caps, dispensing caps, child-resistant closures, spouts. Almost always multi-cavity — an 8, 16 or 32-cavity tool is normal because volumes are huge and the parts are small.",
          "**Containers, tubs and pots.** Ghee and margarine tubs, ice cream containers, yoghurt pots, paint and chemical containers, cosmetic jars. Thin-wall moulding territory — fast cycles, high injection pressure.",
          "**Buckets and pails.** Paint buckets, food-grade pails, agricultural buckets, along with their lids and handles.",
          "**Crates and trays.** Fruit and vegetable crates, bottle crates, bakery trays, poultry and hatchery trays, industrial stacking bins. Large parts, big presses, long cycle times, but very durable and reusable.",
          "**PET preforms.** The small test-tube-shaped piece that becomes a PET bottle is injection moulded, then stretch-blow moulded into the final bottle. Two different processes, two different suppliers, often confused by first-time buyers.",
          "Injection moulding is the **wrong** process for: bottles and jerry cans (extrusion blow moulding), plastic bags, films and wrappers (film extrusion), pipes and straws (profile extrusion), and thin disposable clamshells and trays made from sheet (thermoforming). If a supplier quotes you injection moulding for a bottle, they are either misunderstanding the part or subcontracting it.",
        ],
      },
      {
        h2: "What packaging parts actually cost in Pakistan",
        paragraphs: [
          "Packaging economics are dominated by two things: **cavity count** and **cycle time**. Because the parts are small and the volumes are enormous, the tooling conversation is very different from a one-off custom part.",
          "**Tooling.** A single-cavity cap mould is almost never worth building. Realistic tooling for packaging-scale work in Pakistan: a 4–8 cavity closure mould lands around PKR 400,000–900,000; a 16-cavity closure tool runs into the low millions; a single-cavity crate mould (large part, big tool) is typically PKR 1,200,000 and up. Container and tub tooling sits between the two depending on size and cavitation.",
          "**Per-part cost.** Rough Pakistani ranges at production volume: **PKR 1.5–6 for caps and closures**, **PKR 8–35 for tubs and containers** depending on wall thickness and size, **PKR 60–180 for buckets and pails with lids**, and **PKR 250–900 for crates**, which are heavy and use a lot of resin.",
          "**The volume rule that decides everything.** Multi-cavity tooling costs roughly 2.5–3× a single-cavity tool but produces 4× the parts per cycle. If your annual volume is above roughly 100,000 pieces, multi-cavity is not a luxury — it is the only way your per-part cost will be competitive. Below about 20,000 pieces a year, you are usually better off buying a stock off-the-shelf container than commissioning custom tooling at all.",
          "That last point is the honest one most moulders won't lead with. If you need 5,000 branded jars, buying a standard jar and printing a label on it will beat custom tooling every time. Custom packaging tooling makes sense when the shape itself is part of the product, or when your volume is high enough to amortise it.",
        ],
      },
      {
        h2: "Food-contact packaging — what actually changes",
        paragraphs: [
          "If your packaging touches food, medicine or cosmetics, four things change and each of them costs money. Any moulder who tells you nothing changes is not doing food work.",
          "**Virgin resin only, no regrind.** Normal moulding recycles sprues and rejects back into the batch. Food-contact work uses virgin food-grade PP or HDPE with no reground material, because you cannot certify what was in the regrind. Expect a material cost premium of roughly 8–15%.",
          "**Food-grade colour masterbatch.** The pigment has to be food-approved too. Cheap industrial masterbatch in a yoghurt pot is a real failure mode, not a theoretical one.",
          "**Barrel purge and line segregation.** The machine has to be purged before a food run, and ideally the tool is not run immediately after a filled-nylon or heavily pigmented job. This is machine time you are paying for.",
          "**Documentation.** For domestic sale you will want the resin maker's food-grade certificate and, depending on the product, PSQCA marking. For export, buyers routinely ask for FDA or EU 10/2011 compliance statements on the resin and the masterbatch. The moulder cannot invent these — they come from the raw material supplier and get passed through to you.",
          "Ask for those certificates **before** the tooling is cut, not after the first production run. Discovering that your resin has no food-grade documentation when a buyer audits you is an expensive way to learn this.",
        ],
      },
      {
        h2: "The details that separate packaging moulders from general moulders",
        paragraphs: [
          "Packaging buyers care about things a general custom-parts buyer never asks about. If you are sourcing packaging, these are the questions worth asking:",
          "**Lot-to-lot colour consistency.** Your tub has to be the same shade in January and in July, across different resin batches. Ask how colour is matched and whether they keep a retained sample for reference.",
          "**Dimensional consistency on sealing surfaces.** A cap that seals on one lot and leaks on the next is a recall. The sealing diameter and thread profile are the critical dimensions — ask whether they are checked every run or only at first-article.",
          "**Weight control.** Packaging is sold by the piece but costed by the gram. A container that drifts from 18 g to 20 g quietly destroys your margin across 200,000 pieces. Serious packaging moulders monitor shot weight.",
          "**Stacking and nesting behaviour.** Crates that don't stack squarely and tubs that jam when nested cause warehouse and filling-line problems that never show up on a sample of five pieces.",
          "**In-mould labelling (IML), if you need it.** IML places the label in the cavity before injection so it becomes part of the wall — premium finish, no separate labelling step, but it requires robotics and specific tooling. It is available in Pakistan but not from every moulder, and it changes the tooling spec, so raise it at quoting stage or not at all.",
        ],
      },
      {
        h2: "Planning a packaging launch without wasting money",
        paragraphs: [
          "The most common expensive mistake is committing to production tooling before the pack design is settled. A sensible sequence:",
          "**Step 1 — fix the volume and the fill.** Know your realistic monthly volume and exactly what goes inside. Wall thickness, material and closure type all follow from the contents.",
          "**Step 2 — check whether a stock item already fits.** If a standard container and a printed label solve the problem, take that route and spend the tooling money on marketing instead.",
          "**Step 3 — if you need custom, prototype first.** 3D print the pack, fill it, cap it, drop it, stack it, put it on a shelf. Design faults are free to fix at this stage and expensive to fix in steel.",
          "**Step 4 — consider a soft or low-cavity tool for the launch.** A 2-cavity tool for the first 20,000–50,000 pieces validates the market. If the product sells, cut the 8 or 16-cavity production tool with everything you learned. If it doesn't sell, you lost a fraction of the money.",
          "**Step 5 — only then commit to production tooling.** By this point you know the shape works, the fill works, and the volume is real.",
          "Lead times to plan around in Pakistan: roughly 3–6 weeks to build a straightforward closure or container tool, 6–10 weeks for a large crate tool or a high-cavitation closure tool, then 1–2 weeks for trials and first-article approval before regular production starts.",
        ],
      },
      {
        h2: "Local versus imported packaging",
        paragraphs: [
          "Imported packaging from China is genuinely cheap per piece at very high volume, and for some commodity items it is hard to beat. But packaging is bulky, and that changes the maths in ways the unit price hides.",
          "**Freight is charged by volume, not weight.** Empty containers and crates are mostly air. A container-load of empty tubs costs the same to ship as a container-load of something dense and valuable, which is why imported packaging economics collapse below very large order sizes.",
          "**Minimum order quantities are brutal.** Importing usually means committing to a full container of one SKU in one colour — often 6–12 months of stock, paid upfront, sitting in your warehouse.",
          "**Reorder speed.** Running out of caps with a local moulder means a 1–2 week reorder. Running out with an imported supply chain means 8–14 weeks including shipping and clearance, and a production line standing idle.",
          "**Tooling control.** A locally-held mould can be inspected, modified and repaired. A mould sitting in a factory overseas effectively belongs to that factory in every practical sense.",
          "The pattern that works for most Pakistani packaging buyers: source locally for anything you reorder frequently or might need to change, and import only stable, very high-volume commodity items where you can absorb the stock.",
        ],
      },
      {
        h2: "Bottom line",
        paragraphs: [
          "Injection-moulded packaging is a volume game. Get the process right (moulding for rigid parts, blow moulding for bottles), get the cavitation right for your real volume, and be honest with yourself about whether the pack needs to be custom at all.",
          "If it touches food, sort out virgin resin, food-grade masterbatch and certificates before the tooling is cut. If it's a launch, prototype and use a low-cavity tool before committing to production steel. And if you reorder often, keep the tooling and the supplier close to home.",
          "Rehman Industry moulds packaging components in Gujranwala — crates, containers, bins, buckets, closures and custom parts — with tooling built and maintained in-house. Send us the part, the material and your monthly volume, and we'll come back within a business day with tooling cost, per-piece cost at three or four volume tiers, and a realistic lead time.",
        ],
      },
    ],
  },

  // ===================================================================
  // ARTICLE 16 — Switching moulding supplier
  // ===================================================================
  {
    slug: "switching-plastic-moulding-supplier-pakistan",
    title: "How to Switch Your Plastic Parts Supplier Without Stopping Production",
    excerpt:
      "Late deliveries and lot-to-lot quality drift are fixable — by changing moulders. Here's who owns your mould, how to move it, and how to run the switch without a single day of production downtime.",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-06",
    readingMinutes: 10,
    keywords: [
      "change plastic parts supplier Pakistan",
      "switch injection moulding supplier",
      "who owns the injection mould",
      "transfer mould to another moulder",
      "unreliable plastic supplier Pakistan",
      "second source plastic parts Pakistan",
    ],
    heroImg: "/products/hero-6.webp",
    metaTitle: "How to Switch Your Plastic Moulding Supplier Without Downtime (Pakistan, 2026)",
    metaDescription:
      "Changing injection moulders in Pakistan: who legally owns your mould, how to transfer it, what to do if you can't get it back, and how to switch with zero production gap.",
    body: [
      {
        h2: "The short answer",
        paragraphs: [
          "You can change moulders without stopping production, but only if you sequence it correctly. The order that works is: **confirm who owns the mould, qualify the new moulder on samples, build a stock buffer, transfer the tool, approve first articles, then cut over.** Skipping straight to 'send me my mould' is how buyers end up with two weeks of downtime.",
          "The single question that decides how hard this will be is **who owns the tooling** — and most Pakistani buyers have never had that put in writing. This article covers both paths: the easy one where you get the mould back, and the harder one where you don't.",
        ],
      },
      {
        h2: "When switching is actually justified",
        paragraphs: [
          "Changing suppliers has real cost and real risk, so it is worth being honest about whether the problem is fixable with a conversation instead. These are the situations where switching is usually the right call:",
          "**Chronic late delivery.** Not one late shipment — a pattern. If you are building your own production schedule around your supplier's unreliability, you are already paying for the switch, just invisibly.",
          "**Lot-to-lot variation.** Parts fit in one batch and not the next. Colour drifts. Weight drifts. This usually means regrind is being added inconsistently, or process settings are not documented and every operator runs the tool differently.",
          "**Silent price creep.** Resin prices move, and honest moulders explain increases with reference to material cost. Unexplained increases, or increases that never come back down when resin prices fall, are a margin problem you will keep paying for.",
          "**No communication when things go wrong.** A moulder who calls you the day a machine breaks is a partner. One who goes quiet and lets you discover the delay yourself will do it again.",
          "**They will not discuss the mould.** If asking about the condition, shot count or ownership of your own tooling produces evasion, that is a signal about what happens the day you want to leave.",
          "The counter-case: if the issue is a single bad run, a specific defect, or a one-off delay, fix it with your current moulder first. Switching costs you the process knowledge they've built up on your part, and that knowledge is worth something real.",
        ],
      },
      {
        h2: "Who owns your mould — the question nobody asks early enough",
        paragraphs: [
          "This is where most supplier changes get stuck, so understand the three common arrangements before you make a call.",
          "**You paid the full tooling cost.** The mould is your property. The moulder is holding it, not owning it. This is the cleanest position and it is why paying tooling separately and openly is worth doing even when a moulder offers to 'absorb' it.",
          "**The moulder absorbed the tooling cost into the per-part price.** Very common in Pakistan, and it feels great at the start — no upfront tooling bill. But the mould belongs to the moulder, and the recovery of the tooling cost is buried in a per-piece price you cannot audit. You are, in practice, locked in. Leaving means retooling.",
          "**Cost was shared, or nobody ever wrote it down.** The most common situation of all, and the one that generates arguments. Without a written agreement, the practical outcome usually follows the paperwork that does exist — invoices, purchase orders, anything that shows a separate tooling payment.",
          "What to do right now, even if you are not switching: **find the invoice.** If tooling was billed as a separate line item and you paid it, you have a documented claim. Email your moulder a simple, non-confrontational note asking them to confirm in writing that the mould for your part is your property and is held at their facility. Most reasonable moulders will confirm without drama. The ones who won't have just told you something important.",
          "A note on what this article is not: this is practical sourcing guidance, not legal advice. If a large amount of tooling value is in dispute, talk to a lawyer rather than relying on a general article.",
        ],
      },
      {
        h2: "Path A — moving a mould you own",
        paragraphs: [
          "This is the straightforward path. Done properly it takes 2–4 weeks and costs you nothing in downtime.",
          "**Get the tool inspected before it moves.** Ask the outgoing moulder for the shot count and any repair history. When the mould arrives at the new moulder, have it opened and inspected before the first shot: cavity and core condition, ejector pins, cooling channels, guide pins, any corrosion from storage. Photograph everything on arrival. This protects both sides from an argument about who damaged what.",
          "**Expect to pay for a service.** A tool that has been running for years usually needs cleaning, polishing and possibly minor repair before it will run well elsewhere. Budget for it. A moulder who says a transferred tool needs zero work has probably not looked at it properly.",
          "**Run trial shots and approve first articles formally.** The new moulder's press, resin batch and settings are not identical to the old ones. Parts may come out slightly different on the first trial — that is normal, and it is what the trial is for. Approve first-article samples in writing against the same dimensions and appearance standards you use for incoming goods.",
          "**Move the process knowledge with the tool.** Ask the outgoing moulder for the process sheet: material grade, drying time, melt and mould temperatures, injection pressure, cycle time. You are entitled to ask, and if you get it, the new moulder saves days of trial-and-error. If you don't get it, the new moulder will redevelop settings from scratch — allow an extra week.",
          "**Do not move the tool before your buffer stock exists.** More on that below. The mould being in a truck is exactly when you cannot make parts.",
        ],
      },
      {
        h2: "Path B — when you can't get the mould back",
        paragraphs: [
          "If the moulder owns the tooling, or is refusing to release it, arguing rarely wins quickly. The practical answer is usually to retool — and it is less painful than it first sounds.",
          "**The cost.** A replacement mould is a real expense, typically PKR 80,000–200,000 for a simple part and PKR 350,000–900,000 for a medium multi-cavity tool. Weigh that against what the bad supply relationship is costing you annually in downtime, rejects and expedited freight. For most buyers with a genuine reliability problem, the retool pays back inside a year.",
          "**The timeline.** 3–6 weeks for a straightforward tool, longer for large or high-cavitation ones. This is why buffer stock matters — you need enough inventory to cover tooling plus trials.",
          "**You do not need the old mould to build a new one.** A physical sample part, or a drawing, is enough. A competent tool room reverse-engineers from a sample routinely.",
          "**The upside nobody mentions.** A retool is a chance to fix everything you have been living with: add a cavity to halve your per-part cost, correct the design flaw that has been causing a 3% reject rate, change the gate position that leaves a mark in a visible place, improve wall thickness for a faster cycle. You are not rebuilding the same tool — you are building the tool you should have had.",
          "**Get ownership in writing this time.** Pay tooling as a separate, invoiced line item, and have the invoice or agreement state plainly that the mould is your property. That one sentence is what makes the next switch easy.",
        ],
      },
      {
        h2: "How to switch with zero production downtime",
        paragraphs: [
          "This is the part that decides whether the change is smooth or a crisis. The mechanism is simple: **overlap, don't hand over.**",
          "**Build the buffer first, quietly.** Before you tell anyone anything, place a normal-looking order with your current supplier sized to cover your entire transition window — transfer or retool time, trials, first-article approval, plus two weeks of contingency. For a mould transfer that's typically 6–8 weeks of stock; for a retool, 10–14 weeks.",
          "**Qualify the new moulder in parallel.** While the buffer builds, send the new moulder a sample and a drawing, get a quote, visit the factory, and run a small trial order on a different, less critical part if you have one. You want to know how they communicate under a real order before you trust them with your main part.",
          "**Keep it professional with the outgoing supplier.** Whatever the history, you may need one thing from them: the tool, the process sheet, or one final run. Burning the relationship on the way out costs you leverage at exactly the wrong moment. A short, factual note about moving production is enough — no argument required.",
          "**Cut over only after first articles are approved.** Not after the trial shots look promising. After you have inspected parts from a proper production run and signed them off against your standard.",
          "**Run parallel for one cycle if the part is critical.** For safety-critical or high-value parts, take one more order from the old supplier while the new one produces the first production batch. Paying a small premium once is cheaper than a line stoppage.",
          "The buffer is the whole trick. Buyers who get hurt switching suppliers are almost always the ones who moved the mould before they had stock on the shelf.",
        ],
      },
      {
        h2: "How to vet the new moulder before you commit",
        paragraphs: [
          "You are switching because of reliability, so evaluate reliability rather than price. Ten minutes of the right questions tells you more than three quotes.",
          "**Visit the factory.** This is non-negotiable and it is the fastest filter that exists. Is the floor swept and stock stacked, or is material loose everywhere? Are machines maintained? Is there a QC area with actual measuring equipment, or just a table? A tidy floor genuinely predicts consistent parts, because both come from the same discipline.",
          "**Ask whether tooling is in-house.** A moulder with their own tool room fixes a worn ejector pin in two days. One who subcontracts tool work takes two weeks and charges more. Over the life of your part, this is the single biggest difference in how often your production stops.",
          "**Ask how they document process settings.** 'The operator knows' is the answer that produces lot-to-lot variation. You want to hear that settings are recorded per tool.",
          "**Ask directly about tooling ownership and get the answer in writing.** How they respond tells you as much as what they say.",
          "**Place a small paid trial order.** Not free samples — a real order with a real delivery date. You are testing the promise-keeping, not just the parts. How they handle a small order is exactly how they will handle a large one.",
          "**Ask for a reference in a similar industry** and actually call them. Ask one question: 'when something went wrong, what did they do?'",
        ],
      },
      {
        h2: "What to put in writing this time",
        paragraphs: [
          "Most supply relationships in Pakistan run on trust and a WhatsApp thread, and most of the time that is fine. But five lines in writing at the start prevent almost every dispute later:",
          "**Tooling ownership.** Who owns the mould, stated plainly, with tooling invoiced as a separate line item.",
          "**Where the tool is held and on what terms** — including that it will be released on request.",
          "**Lead time for standard reorders**, so 'late' has a definition you can point to.",
          "**The quality standard** — critical dimensions, colour reference, acceptable reject rate, and what happens to a batch that fails.",
          "**An NDA** if the part or design is yours. Any serious moulder signs one without being asked twice.",
          "None of this needs a lawyer or a twenty-page contract. An email that both sides have acknowledged is enormously better than nothing, and it is what makes your next supplier change a two-week logistics exercise instead of a fight.",
        ],
      },
      {
        h2: "Bottom line",
        paragraphs: [
          "Switching moulders is a project, not an argument. Find out who owns the tooling, build a stock buffer before anything moves, qualify the new moulder on a real paid order, approve first articles formally, and only then cut over. Done in that order, production never stops.",
          "If you cannot get the mould back, retooling is usually cheaper than another year of the same problems — and it lets you fix the design faults you have been tolerating.",
          "Rehman Industry has taken over production for buyers switching moulders many times — transferred tools, retooled from a single sample part, and run parallel supply during the changeover. Tooling is built and maintained in our own tool room in Gujranwala, tooling ownership is stated in writing, and NDAs are signed by default. Send us the part, a sample or drawing, and your current volume, and we'll come back within a business day with a transfer or retool plan and real numbers.",
        ],
      },
    ],
  },
];

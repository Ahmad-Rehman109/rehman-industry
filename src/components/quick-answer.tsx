import type { ReactNode } from "react";

/**
 * Answer-first TLDR block. Sits at the very top of a page (under the hero) and
 * directly answers the page's primary query in 30–60 words.
 *
 * Why this exists: 44% of LLM citations come from the first 30% of a page.
 * AI engines (ChatGPT, Google AI Overviews, Perplexity, Claude) extract these
 * blocks for direct answers, so the first paragraph must satisfy the query
 * without context build-up.
 */
export function QuickAnswer({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <aside
      aria-label="Quick answer"
      className="mx-auto max-w-3xl border-l-4 border-orange-500 bg-orange-50/60 px-5 py-5 sm:px-7 sm:py-6"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
        {question}
      </p>
      <div className="mt-2 text-base leading-relaxed text-neutral-800 sm:text-lg">
        {children}
      </div>
    </aside>
  );
}

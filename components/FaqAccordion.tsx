"use client";

import type { FaqItem } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="card group"
          onToggle={(event) => {
            if (event.currentTarget.open) {
              trackEvent("faq_expand", { question: item.q });
            }
          }}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-display text-lg font-semibold text-brand-deep">
            <span>{item.q}</span>
            <span aria-hidden="true" className="text-brand-accent text-2xl leading-none group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden text-2xl leading-none text-brand-accent group-open:inline">
              −
            </span>
          </summary>
          <div className="border-t border-border px-5 pb-5 pt-4">
            <p className="prose-measure text-text-primary">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

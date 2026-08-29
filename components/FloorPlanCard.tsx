"use client";

import { useEffect, useRef } from "react";
import type { Collection } from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { trackEvent } from "@/lib/analytics";

export function FloorPlanCard({ collection }: { collection: Collection }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !seen.current) {
          seen.current = true;
          trackEvent("floor_plan_view", { collection: collection.name });
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [collection.name]);

  return (
    <article ref={ref} className="card flex h-full flex-col p-6">
      <h3 className="font-display text-2xl font-semibold text-brand-deep">{collection.name}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between gap-4 border-b border-border py-2">
          <dt className="text-text-muted">Sizes</dt>
          <dd>{collection.sizes}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-border py-2">
          <dt className="text-text-muted">Starting price</dt>
          <dd>{collection.startingPrice}</dd>
        </div>
      </dl>
      <p className="mt-4 flex-1 text-[16px]">{collection.line}</p>
      <p className="mt-3 text-sm text-text-muted">{collection.note}</p>
      <CtaLink href="/register" location={`collection_${collection.slug}`} className="mt-6 w-full sm:w-auto">
        Register for release notification
      </CtaLink>
    </article>
  );
}

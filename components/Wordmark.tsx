import Link from "next/link";
import { WORDMARK } from "@/lib/content";

export function Wordmark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex flex-col">
      <span
        className={`font-display font-semibold leading-none ${
          compact ? "text-[1.05rem] leading-tight sm:text-lg md:text-xl" : "text-xl md:text-2xl"
        } ${inverted ? "text-surface" : "text-brand-deep"}`}
      >
        {WORDMARK}
      </span>
      <span className="mt-1 block h-px w-16 bg-brand-accent" aria-hidden="true" />
    </span>
  );
}

export function WordmarkLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label={`${WORDMARK} home`}>
      <Wordmark inverted={inverted} compact />
    </Link>
  );
}

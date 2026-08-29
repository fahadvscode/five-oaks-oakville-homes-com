import type { ReactNode } from "react";
import { SectionHeading } from "./LayoutBits";

export function AnswerFirstSummary({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="section-space pt-16 md:pt-20" aria-labelledby="answer-heading">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHeading id="answer-heading">{heading}</SectionHeading>
        <div className="card mt-6 bg-surface-alt p-6 md:p-8">
          <div className="prose-measure space-y-4 text-text-primary">{children}</div>
        </div>
      </div>
    </section>
  );
}

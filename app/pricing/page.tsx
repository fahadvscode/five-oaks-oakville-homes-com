import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { DepositScheduleTable } from "@/components/DepositScheduleTable";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Prose, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import { PricingTable } from "@/components/PricingTable";
import { PricingComparablesTable } from "@/components/ComparisonTable";
import { LINKS, PAGE_META, PRICING_ANSWER, SPECS_DISCLAIMER } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.pricing();

export default function PricingPage() {
  const meta = PAGE_META.pricing;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={PRICING_ANSWER} />
      <AnswerFirstSummary heading="How much do homes at Five Oaks Oakville cost?">
        <p>{PRICING_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="status">
        <SectionHeading id="status">Pricing status by home type</SectionHeading>
        <div className="mt-8">
          <PricingTable />
        </div>
        <p className="mt-6 text-sm text-text-muted">{SPECS_DISCLAIMER}</p>
      </Section>
      <Section alt labelledBy="deposit">
        <SectionHeading id="deposit">Deposit structure</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.pricing.deposit.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <div className="mt-8">
          <DepositScheduleTable />
        </div>
        <p className="mt-6 text-sm text-text-muted">{SPECS_DISCLAIMER}</p>
      </Section>
      <Section labelledBy="comparables">
        <SectionHeading id="comparables">Nearby comparable pricing for context</SectionHeading>
        <div className="mt-8">
          <PricingComparablesTable />
        </div>
        <div className="mt-8">
          <Prose>
            <p>{COPY.pricing.comparableNote}</p>
            <p>
              <TextLink href={LINKS.pricingNotify.href}>{LINKS.pricingNotify.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Register to be notified when pricing is released"
        body="Registered buyers receive confirmed price lists and deposit terms first."
        href="/register"
        label="Join the Priority List"
        location="pricing_cta"
      />
    </>
  );
}

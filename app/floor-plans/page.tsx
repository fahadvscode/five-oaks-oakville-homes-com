import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Prose, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import { COLLECTIONS, FLOOR_PLANS_ANSWER, LINKS, PAGE_META } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.floorPlans();

export default function FloorPlansPage() {
  const meta = PAGE_META.floorPlans;
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
          { name: "Floor Plans", path: "/floor-plans" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={FLOOR_PLANS_ANSWER} />
      <AnswerFirstSummary heading="What lot sizes are available at Five Oaks Oakville?">
        <p>{FLOOR_PLANS_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="known">
        <SectionHeading id="known">What is known about Five Oaks floor plans</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.floorPlans.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.pricingStatus.href}>{LINKS.pricingStatus.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="collections">
        <SectionHeading id="collections">Planned collections</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((collection) => (
            <FloorPlanCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </Section>
      <CtaBlock
        heading="Register to receive floor plans when they are released"
        body="Priority registration is free and does not create a purchase obligation."
        href="/register"
        label="Join the Priority List"
        location="floor_plans_cta"
      />
    </>
  );
}

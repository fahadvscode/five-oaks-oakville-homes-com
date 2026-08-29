import { Hero } from "@/components/Hero";
import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { QuickFacts } from "@/components/QuickFacts";
import { FloorPlanCard } from "@/components/FloorPlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import { CtaBlock, Prose, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import {
  COLLECTIONS,
  FAQS,
  FAQ_PREVIEW_INDICES,
  HOME_ANSWER,
  LINKS,
  PAGE_META,
  REGISTER_BENEFITS,
} from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import {
  breadcrumbSchema,
  heroImageSchema,
  residenceSchema,
  webPageSchema,
} from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.home();

export default function HomePage() {
  const previewFaqs = FAQ_PREVIEW_INDICES.map((index) => FAQS[index]);
  const meta = PAGE_META.home;

  return (
    <>
      <JsonLd data={residenceSchema()} />
      <JsonLd data={heroImageSchema()} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <AnswerFirstSummary heading="What is Five Oaks and who is building it?">
        <p>{HOME_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="quick-facts">
        <SectionHeading id="quick-facts">Five Oaks at a glance</SectionHeading>
        <div className="mt-8">
          <QuickFacts />
        </div>
        <SpecsDisclaimer className="mt-4" />
      </Section>
      <Section alt labelledBy="overview">
        <SectionHeading id="overview">Project overview</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.home.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.floorPlans.href}>{LINKS.floorPlans.text}</TextLink>.{" "}
              <TextLink href={LINKS.pricing.href}>{LINKS.pricing.text}</TextLink>.{" "}
              <TextLink href={LINKS.register.href}>{LINKS.register.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <Section labelledBy="home-types">
        <SectionHeading id="home-types">Five Oaks floor plans — collection tiers</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((collection) => (
            <FloorPlanCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </Section>
      <Section alt labelledBy="faq-preview">
        <SectionHeading id="faq-preview">Frequently asked questions</SectionHeading>
        <div className="mt-8">
          <FaqAccordion items={previewFaqs} />
        </div>
        <p className="mt-8">
          <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
        </p>
      </Section>
      <Section labelledBy="register-home">
        <SectionHeading id="register-home">Join the priority list</SectionHeading>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          {REGISTER_BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8">
          Use the form at the top of this page, or{" "}
          <TextLink href="/register">open the dedicated registration page</TextLink>.
        </p>
      </Section>
      <CtaBlock
        heading="Get floor plans and pricing when they are released"
        body="Registration is free and creates no purchase obligation."
        href="/register"
        label="Join the Priority List"
        location="home_footer_cta"
      />
    </>
  );
}

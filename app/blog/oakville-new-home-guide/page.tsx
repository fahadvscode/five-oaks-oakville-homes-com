import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Prose, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import { GUIDE_ANSWER, LINKS, PAGE_META } from "@/lib/content";
import { GUIDE } from "@/lib/guide";
import { metadataByKey } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.guide();

export default function GuidePage() {
  const meta = PAGE_META.guide;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={articleSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Oakville New Home Guide", path: meta.path },
        ])}
      />
      <PageHeader h1={meta.h1} lede={GUIDE.opening} />
      <AnswerFirstSummary heading="What are the best new pre-construction communities in Oakville?">
        <p>{GUIDE_ANSWER}</p>
      </AnswerFirstSummary>
      {GUIDE.sections.map((section, index) => (
        <Section key={section.id} alt={index % 2 === 0} labelledBy={section.id}>
          <SectionHeading id={section.id}>{section.h2}</SectionHeading>
          <div className="mt-8">
            <Prose>
              {section.paragraphs.map((paragraph) => {
                if (paragraph.includes("Learn more about Five Oaks on this site's project overview.")) {
                  const [before] = paragraph.split(
                    "Learn more about Five Oaks on this site's project overview.",
                  );
                  return (
                    <p key={paragraph.slice(0, 40)}>
                      {before}
                      <TextLink href={LINKS.home.href}>{LINKS.home.text}</TextLink>.
                    </p>
                  );
                }
                if (paragraph.includes("Learn more about Five Oaks, then join the priority list")) {
                  const [before] = paragraph.split("Learn more about Five Oaks, then join");
                  return (
                    <p key={paragraph.slice(0, 40)}>
                      {before}
                      <TextLink href={LINKS.home.href}>{LINKS.home.text}</TextLink>, then join the
                      priority list on this site when ready.
                    </p>
                  );
                }
                return <p key={paragraph.slice(0, 40)}>{paragraph}</p>;
              })}
            </Prose>
          </div>
        </Section>
      ))}
      <CtaBlock
        heading="Join the Five Oaks priority list"
        body="Free registration. No purchase obligation."
        href="/register"
        label="Join the Priority List"
        location="guide_cta"
      />
    </>
  );
}

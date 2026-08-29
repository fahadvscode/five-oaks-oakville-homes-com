import { LastUpdated } from "@/components/Disclaimer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import { COPY } from "@/lib/copy";
import { FAQ_NOTES, FAQS, LAST_UPDATED, LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.faq();

export default function FaqPage() {
  const meta = PAGE_META.faq;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={COPY.faq.intro} />
      <Section labelledBy="faq-list">
        <SectionHeading id="faq-list">Five Oaks questions and answers</SectionHeading>
        <LastUpdated className="mt-4" />
        <p className="mt-2 text-sm text-text-muted">Last updated: {LAST_UPDATED}</p>
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
        <div className="mt-12 space-y-4">
          {FAQ_NOTES.map((note) => (
            <article key={note.title} className="card p-5">
              <h3 className="font-display text-lg font-semibold text-brand-deep">{note.title}</h3>
              <p className="mt-2 prose-measure text-text-primary">{note.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <TextLink href={LINKS.location.href}>{LINKS.location.text}</TextLink>.
        </p>
      </Section>
      <CtaBlock
        heading="Still have questions? Join the priority list"
        href="/register"
        label="Join the Priority List"
        location="faq_cta"
      />
    </>
  );
}

import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Prose, Section } from "@/components/LayoutBits";
import { PAGE_META } from "@/lib/content";
import { TERMS_SECTIONS } from "@/lib/legal";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.terms();

export default function TermsPage() {
  const meta = PAGE_META.terms;
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
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      <PageHeader h1={meta.h1} />
      <Section labelledBy="terms">
        <div id="terms" className="space-y-10">
          {TERMS_SECTIONS.map((section) => (
            <article key={section.h2}>
              <h2 className="font-display text-2xl font-semibold text-brand-deep">{section.h2}</h2>
              <div className="mt-4">
                <Prose>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

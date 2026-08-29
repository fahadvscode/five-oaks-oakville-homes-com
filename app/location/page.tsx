import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Prose, Section, SectionHeading, TextLink } from "@/components/LayoutBits";
import { LocationMap } from "@/components/LocationMap";
import { LINKS, LOCATION_ANSWER, PAGE_META } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, placeSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.location();

export default function LocationPage() {
  const meta = PAGE_META.location;
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd data={placeSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Location", path: "/location" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={LOCATION_ANSWER} />
      <AnswerFirstSummary heading="Does Five Oaks Oakville back onto a ravine?">
        <p>{LOCATION_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="map">
        <SectionHeading id="map">Map — 1303 Dundas Street West, Oakville</SectionHeading>
        <div className="mt-8">
          <LocationMap />
        </div>
      </Section>
      <Section alt labelledBy="transit">
        <SectionHeading id="transit">Transit and highways</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.transit.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="natural">
        <SectionHeading id="natural">Natural setting — Sixteen Mile Creek and Lions Valley Park</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.natural.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="schools">
        <SectionHeading id="schools">Schools near Five Oaks Oakville</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.schools.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="confused">
        <SectionHeading id="confused">Frequently confused with — Bronte Trails</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.confused.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="parks">
        <SectionHeading id="parks">Parks and recreation</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.location.parks.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="comparison">
        <SectionHeading id="comparison">Five Oaks vs nearby Oakville communities</SectionHeading>
        <div className="mt-8">
          <ComparisonTable />
        </div>
        <div className="mt-8">
          <Prose>
            {COPY.location.comparison.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.faq.href}>{LINKS.faq.text}</TextLink>.
            </p>
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Register for location and launch updates"
        href="/register"
        label="Join the Priority List"
        location="location_cta"
      />
    </>
  );
}

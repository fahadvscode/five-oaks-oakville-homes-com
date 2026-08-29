import { AnswerFirstSummary } from "@/components/AnswerFirstSummary";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader, Section, SectionHeading } from "@/components/LayoutBits";
import { PAGE_META, REGISTER_ANSWER, REGISTER_BENEFITS } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.register();

export default function RegisterPage() {
  const meta = PAGE_META.register;
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
          { name: "Register", path: "/register" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={REGISTER_ANSWER} />
      <AnswerFirstSummary heading="How do I join the priority list for Five Oaks Oakville?">
        <p>{REGISTER_ANSWER}</p>
      </AnswerFirstSummary>
      <Section labelledBy="benefits">
        <SectionHeading id="benefits">What priority registration provides</SectionHeading>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          {REGISTER_BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl">
          <p className="mb-8 max-w-[68ch]">{COPY.register.intro[0]}</p>
          <LeadForm id="register-page" />
        </div>
      </Section>
    </>
  );
}

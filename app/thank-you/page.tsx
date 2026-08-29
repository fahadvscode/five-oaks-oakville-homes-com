import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Section } from "@/components/LayoutBits";
import { ThankYouEvents } from "@/components/ThankYouEvents";
import { LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.thankYou();

export default function ThankYouPage() {
  const meta = PAGE_META.thankYou;
  return (
    <>
      <ThankYouEvents />
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
          { name: "Thank you", path: "/thank-you" },
        ])}
      />
      <PageHeader h1={meta.h1} lede="Your priority-list registration has been received." />
      <Section labelledBy="next">
        <h2 id="next" className="font-display text-2xl font-semibold text-brand-deep">
          What happens next
        </h2>
        <p className="mt-4 max-w-[68ch]">
          The Project Information Team will notify you when Five Oaks floor plans, pricing and the
          public sales-launch date are released by Caivan Communities. There is no purchase
          obligation.
        </p>
        <p className="mt-6">
          <Link href={LINKS.faq.href} className="text-brand underline underline-offset-2">
            {LINKS.faq.text}
          </Link>
        </p>
        <p className="mt-3">
          <Link href="/" className="text-brand underline underline-offset-2">
            Return to the Five Oaks overview
          </Link>
        </p>
      </Section>
    </>
  );
}

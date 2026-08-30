import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { CtaBlock, PageHeader, Prose, Section, SectionHeading } from "@/components/LayoutBits";
import { GALLERY_ITEMS, IMAGE_AI_DISCLAIMER, PAGE_META } from "@/lib/content";
import { COPY } from "@/lib/copy";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, galleryImageSchemas, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.gallery();

export default function GalleryPage() {
  const meta = PAGE_META.gallery;
  const imageSchemas = galleryImageSchemas();
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
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      {imageSchemas.map((schema) => (
        <JsonLd key={schema.contentUrl as string} data={schema} />
      ))}
      <PageHeader h1={meta.h1} lede={COPY.gallery.intro[0]} />
      <Section labelledBy="gallery-grid">
        <SectionHeading id="gallery-grid">Five Oaks renderings and site imagery</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.gallery.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <li key={item.id} className="card overflow-hidden">
              <Image
                src={`/images/${item.filename}`}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="p-5">
                <p className="font-semibold text-brand-deep">{item.label}</p>
                {item.aiGenerated ? (
                  <p className="mt-2 inline-block rounded-sm bg-surface-alt px-2 py-1 text-xs font-semibold uppercase tracking-wide text-brand-deep">
                    AI-generated illustration
                  </p>
                ) : (
                  <p className="mt-2 inline-block rounded-sm bg-surface-alt px-2 py-1 text-xs font-semibold uppercase tracking-wide text-brand-deep">
                    Official marketing image
                  </p>
                )}
                <p className="mt-2 text-sm text-text-muted">{item.caption}</p>
                {item.aiGenerated ? (
                  <p className="mt-2 text-xs text-text-muted">{IMAGE_AI_DISCLAIMER}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[68ch] text-sm text-text-muted">{IMAGE_AI_DISCLAIMER}</p>
      </Section>
      <Section alt labelledBy="amenities">
        <SectionHeading id="amenities">Nearby retail and everyday amenities</SectionHeading>
        <div className="mt-8">
          <Prose>
            {COPY.gallery.amenities.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <CtaBlock
        heading="Register to receive official imagery when it is released"
        href="/register"
        label="Join the Priority List"
        location="gallery_cta"
      />
    </>
  );
}

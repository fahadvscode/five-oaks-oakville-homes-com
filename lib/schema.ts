/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * NO Offer/AggregateOffer until Caivan publishes official pricing.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  ADDRESS_LINE,
  BUILDER,
  FAQS,
  GALLERY_ITEMS,
  GEO,
  HERO_IMAGE,
  HOME_ANSWER,
  LAST_UPDATED_ISO,
  PAGE_META,
  PROJECT_NAME,
  SITE_NAME,
  SITE_ORG_NAME,
  SITE_URL,
  STATUS,
  STREET_ADDRESS,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    description:
      "An independent information and registration resource for Five Oaks, not affiliated with or endorsed by Caivan Communities.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: PROJECT_NAME,
    description:
      "A pre-construction community of approximately 140 single-detached homes and freehold townhomes at 1303 Dundas Street West, Oakville, Ontario, developed by Caivan Communities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: "Oakville",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    numberOfRooms: "Approximately 140 planned units",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/five-oaks-aerial-rendering.svg`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Adjacent to Sixteen Mile Creek" },
      { "@type": "LocationFeatureSpecification", name: "Adjacent to Lions Valley Park" },
      {
        "@type": "LocationFeatureSpecification",
        name: "Ravine and greenspace backdrop (select lots)",
      },
    ],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Builder", value: BUILDER },
      { "@type": "PropertyValue", name: "Status", value: STATUS },
      {
        "@type": "PropertyValue",
        name: "Home types",
        value: "Single-detached (40'/42'/50' lots), freehold townhomes",
      },
      { "@type": "PropertyValue", name: "Address", value: ADDRESS_LINE },
      {
        "@type": "PropertyValue",
        name: "Pricing status",
        value: `Not released as of ${LAST_UPDATED_ISO}`,
      },
    ],
  };
}

/*
 * Activate AggregateOffer only after official pricing is confirmed:
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "AggregateOffer",
 *   "priceCurrency": "CAD",
 *   "lowPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "highPrice": "[CONFIRM BEFORE ACTIVATING]",
 *   "availability": "https://schema.org/PreOrder",
 *   "validFrom": "[CONFIRM BEFORE ACTIVATING]"
 * }
 */

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    dateModified: LAST_UPDATED_ISO,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function placeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: PROJECT_NAME,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: "Oakville",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
  };
}

export function articleSchema() {
  const meta = PAGE_META.guide;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical(meta.path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en-CA",
    mainEntityOfPage: canonical(meta.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
  };
}

export function imageObjectSchema(opts: {
  filename: string;
  caption: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}/images/${opts.filename}`,
    caption: opts.caption,
    description: opts.description,
  };
}

export function galleryImageSchemas() {
  return GALLERY_ITEMS.map((item) =>
    imageObjectSchema({
      filename: item.filename,
      caption: item.caption,
      description: item.alt,
    }),
  );
}

export function heroImageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${HERO_IMAGE.src}`,
    caption: HERO_IMAGE.caption,
    description: HERO_IMAGE.alt,
    width: HERO_IMAGE.width,
    height: HERO_IMAGE.height,
  };
}

export { HOME_ANSWER, SITE_NAME };

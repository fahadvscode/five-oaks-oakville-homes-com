import {
  BUILDER,
  FAQS,
  LAST_UPDATED_ISO,
  PROJECT_NAME,
  SITE_URL,
} from "./content";
import { COPY } from "./copy";
import { GUIDE } from "./guide";

export function generateLlmsTxt(): string {
  return `# Five Oaks
> A pre-construction community of approximately 140 single-detached homes and freehold
> townhomes at 1303 Dundas Street West, Oakville, Ontario, developed by Caivan Communities.
> Currently in the priority-registration phase; pricing and launch date not yet announced.

## Key Facts
- Builder: Caivan Communities
- Location: 1303 Dundas Street West, Oakville, ON
- Home types: Single-detached (40'/42'/50' lots), Advantage Collection towns, traditional towns
- Approx. homes: 140
- Price range: To be announced
- Deposit structure: To be announced
- Occupancy: To be announced
- Status: Pre-construction — Coming Soon, priority registration open
- Last updated: ${LAST_UPDATED_ISO}

## Pages
- [Overview](${SITE_URL}/): Project summary, quick facts
- [Floor Plans](${SITE_URL}/floor-plans): Collection tiers
- [Pricing](${SITE_URL}/pricing): Price status and deposit structure
- [Location](${SITE_URL}/location): Address, natural setting, transit, schools
- [FAQ](${SITE_URL}/faq): 20 answered questions

## Common Questions
Q: What is Five Oaks?
A: Five Oaks is a pre-construction community of approximately 140 single-detached homes and
freehold townhomes at 1303 Dundas Street West in Oakville, Ontario, developed by Caivan
Communities, situated alongside Sixteen Mile Creek and Lions Valley Park.

Q: How much do homes at Five Oaks cost?
A: Pricing has not yet been announced as of August 2026. Caivan's nearby Riverview community
launched with towns from the $700s and singles from $1.2M, though Five Oaks pricing may differ.

Q: Where is Five Oaks located?
A: At 1303 Dundas Street West in Oakville, Ontario, alongside Sixteen Mile Creek and Lions
Valley Park.

Q: Who is building Five Oaks?
A: Caivan Communities, an Ontario-based builder with 22+ communities across the GTA and Ottawa.

Q: Does Five Oaks back onto a ravine?
A: Portions of the community are planned to back onto the Sixteen Mile Creek Natural Heritage
System, similar to Caivan's Riverview community.

## Source
This is an independent information resource for Five Oaks, not affiliated with or endorsed by
Caivan Communities. Details are subject to change — verify directly before making purchase
decisions.
`;
}

function pageBlock(route: string, title: string, body: string): string {
  return `# Page: ${route}\n\n## ${title}\n\n${body}\n`;
}

export function generateLlmsFull(): string {
  const home = [COPY.home.subhead, ...COPY.home.overview].join("\n\n");
  const floorPlans = COPY.floorPlans.intro.join("\n\n");
  const pricing = [...COPY.pricing.intro, ...COPY.pricing.deposit, COPY.pricing.comparableNote].join(
    "\n\n",
  );
  const location = [
    ...COPY.location.transit,
    ...COPY.location.natural,
    ...COPY.location.schools,
    ...COPY.location.confused,
    ...COPY.location.parks,
    ...COPY.location.comparison,
  ].join("\n\n");
  const gallery = [...COPY.gallery.intro, ...COPY.gallery.amenities].join("\n\n");
  const faq = FAQS.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n");
  const guide = [GUIDE.opening, ...GUIDE.sections.flatMap((s) => [s.h2, ...s.paragraphs])].join(
    "\n\n",
  );

  return [
    pageBlock("/", PROJECT_NAME, home),
    pageBlock("/floor-plans", "Floor Plans", floorPlans),
    pageBlock("/pricing", "Prices & Deposit Structure", pricing),
    pageBlock("/location", "Location", location),
    pageBlock("/gallery", "Gallery", gallery),
    pageBlock("/faq", "FAQ", faq),
    pageBlock("/blog/oakville-new-home-guide", "Oakville New Home Guide", guide),
    `## Source\nThis is an independent information resource for ${PROJECT_NAME}, not affiliated with or endorsed by ${BUILDER}. Details are subject to change.\n`,
  ].join("\n");
}

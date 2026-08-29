/**
 * Single source of truth for every Five Oaks project fact.
 * Update `lastUpdated` any time a project fact in this file changes.
 *
 * Facts confirmed against live sources as of August 26, 2026.
 * Unverified items are rendered as "To be announced" — never as factual claims.
 */

export const SITE_URL = "https://fiveoaksoakvillehomes.com";
export const SITE_HOST = "fiveoaksoakvillehomes.com";
export const CONTACT_EMAIL = "privacy@fiveoaksoakvillehomes.com";

export const LAST_UPDATED = "August 26, 2026";
export const LAST_UPDATED_ISO = "2026-08-26";

export const PROJECT_NAME = "Five Oaks";
export const PROJECT_NAME_FULL = "Five Oaks by Caivan Communities";
export const WORDMARK = "Five Oaks Oakville";
export const BUILDER = "Caivan Communities";
export const CITY = "Oakville";
export const PROVINCE = "Ontario";
export const REGION = "Halton Region";
export const COUNTRY = "Canada";
export const STREET_ADDRESS = "1303 Dundas Street West";
export const ADDRESS_LINE = "1303 Dundas Street West, Oakville, ON";
export const ADDRESS_SHORT = "1303 Dundas St W, Oakville";

export const GEO = {
  latitude: 43.4458,
  longitude: -79.7482,
} as const;

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=1303+Dundas+Street+West,+Oakville,+ON&z=14&output=embed";

export const SITE_NAME = "Five Oaks Oakville Homes";
export const SITE_ORG_NAME = "Five Oaks Oakville Homes — Independent Project Information";

export const STATUS = "Pre-construction — Coming Soon, Priority Registration Open";
export const STATUS_BADGE = "Coming Soon — Priority Registration Open";
export const HOME_TYPES = "Single-Detached (40', 42', 50' lots), Freehold Townhomes";
export const TOTAL_HOMES = "~140";
export const TOTAL_HOMES_NUMBER = 140;
export const OWNERSHIP = "Freehold";

export const TBA = "To be announced";
export const STARTING_PRICE_DISPLAY = TBA;
export const DEPOSIT_DISPLAY = TBA;
export const OCCUPANCY_DISPLAY = TBA;
export const SIZES_DISPLAY = TBA;

export const HERO_IMAGE = {
  src: "/images/five-oaks-hero.svg",
  alt: "Five Oaks Oakville — ravine and greenspace setting alongside Sixteen Mile Creek",
  width: 1920,
  height: 1080,
  caption:
    "Neutral placeholder for the Five Oaks setting alongside Sixteen Mile Creek and Lions Valley Park, Oakville. Official community renderings have not been released as of August 26, 2026.",
} as const;

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
] as const;

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is Five Oaks and who is building it?",
    a: "Five Oaks is a pre-construction community of approximately 140 single-detached homes and freehold townhomes at 1303 Dundas Street West in Oakville, Ontario. It is being developed by Caivan Communities, an Ontario-based builder known for factory-built construction technology, and is situated alongside Sixteen Mile Creek and Lions Valley Park.",
  },
  {
    q: "How much do homes at Five Oaks Oakville cost?",
    a: "Pricing for Five Oaks has not yet been announced by Caivan Communities as of August 2026. The community is currently in the priority-registration phase ahead of its public sales launch. For comparison, Caivan's nearby Riverview community in South Oakville launched with towns from the $700s and 2-car-garage singles from $1.2M, though Five Oaks pricing may differ.",
  },
  {
    q: "What are the best new pre-construction communities in Oakville?",
    a: "Oakville's active 2026 pre-construction pipeline includes Five Oaks and Bronte Trails by Caivan Communities, Neyagawa Crossings by Sky Property Group, and Kerr Village Towns by Brightstone Developments, among dozens of smaller releases. Selection depends on budget, home type, and preferred Oakville neighbourhood.",
  },
  {
    q: "Does Five Oaks Oakville back onto a ravine?",
    a: "Yes. Five Oaks is situated alongside Sixteen Mile Creek and Lions Valley Park, and — like Caivan's nearby Riverview community — is planned to back onto the Sixteen Mile Creek Natural Heritage System, giving a portion of homes a permanent ravine and greenspace backdrop rather than a rear neighbour.",
  },
  {
    q: "What pre-construction projects are launching in Oakville in 2026?",
    a: "Oakville's 2026 pre-construction pipeline includes Five Oaks by Caivan Communities at 1303 Dundas Street West, currently in the priority-registration phase. Caivan is also marketing Bronte Trails as \"Coming Soon\" in Oakville, alongside its recently sold-out Riverview community in South Oakville.",
  },
  {
    q: "Compare Five Oaks and Riverview Oakville",
    a: "Five Oaks and Riverview are both Caivan Communities projects in Oakville sharing the same modern design language. Riverview, in South Oakville near Bronte Road, is now sold out, with towns that launched from the $700s and singles from $1.2M. Five Oaks, at 1303 Dundas Street West, remains in the pre-launch registration phase with pricing not yet announced.",
  },
  {
    q: "What schools serve Five Oaks Oakville?",
    a: "Specific school boundaries for Five Oaks at 1303 Dundas Street West have not yet been confirmed. Oakville broadly offers public and Catholic school systems, French Immersion programs, and International Baccalaureate and Advanced Placement pathways; families should confirm exact catchment schools with the relevant school board before purchasing.",
  },
  {
    q: "What lot sizes are available at Five Oaks Oakville?",
    a: "Five Oaks is planned to offer single-detached homes on 40-foot, 42-foot, and 50-foot lots, alongside two townhome formats: back-to-back and dual-front homes from the Advantage Collection, and traditional townhomes with private backyards. Exact square footage by plan has not yet been released.",
  },
  {
    q: "When will Five Oaks Oakville launch for sale?",
    a: "No public sales-launch date has been announced for Five Oaks as of August 2026. Caivan Communities describes the project as \"Coming Soon\" and is currently building a priority registration list ahead of the public release of floor plans and pricing.",
  },
  {
    q: "How many homes will be at Five Oaks?",
    a: "Five Oaks is planned to include approximately 140 homes at 1303 Dundas Street West in Oakville, combining single-detached houses on 40', 42', and 50' lots with back-to-back, dual-front, and traditional freehold townhomes.",
  },
  {
    q: "Who is building Five Oaks Oakville?",
    a: "Five Oaks is being developed by Caivan Communities, an Ontario-based builder active across the Greater Toronto Area and Ottawa with more than 22 communities. Caivan is known for factory-built construction technology, including a dedicated Summit Series factory capable of producing four to seven homes per day.",
  },
  {
    q: "Is Five Oaks Oakville a good place to raise a family?",
    a: "Five Oaks is positioned near Sixteen Mile Creek and Lions Valley Park, giving nearby families direct access to trails and greenspace, and sits within Oakville, a municipality known for its public and Catholic school systems and French Immersion, IB, and AP programs. Individual suitability depends on each family's needs — this site does not make guarantees about specific outcomes.",
  },
  {
    q: "What transit and highways serve Five Oaks Oakville?",
    a: "Five Oaks is positioned near Dundas Street and Highway 407, with further access to Highway 403 and the QEW. Oakville GO Station and Bronte GO Station both serve the wider Oakville area, and Oakville Transit provides local bus service — giving residents multiple commuting options toward Mississauga, Burlington, Hamilton, and Toronto.",
  },
  {
    q: "How do I join the priority list for Five Oaks Oakville?",
    a: "Buyers can join the priority list for Five Oaks by submitting their name, email, and phone number through this site's registration form. Registration is free, creates no purchase obligation, and provides early notification when Caivan Communities releases floor plans, pricing, and the public sales launch date.",
  },
  {
    q: "What is Caivan Communities known for?",
    a: "Caivan Communities is an Ontario-based homebuilder active in the Greater Toronto Area and Ottawa, with more than 22 communities built or in progress. The builder is known for factory-built construction methods — including a dedicated Summit Series factory producing four to seven homes daily — intended to shorten build times without sacrificing quality control.",
  },
  {
    q: "Is there a cost to join the Five Oaks priority list?",
    a: "No. Registering for Five Oaks through this site is free and creates no purchase obligation. It simply adds you to the priority list so you receive floor plans, pricing, and launch details as soon as Caivan Communities releases them.",
  },
  {
    q: "Who is the builder of Five Oaks?",
    a: "Five Oaks is being developed by Caivan Communities, an Ontario-based builder active across the Greater Toronto Area and Ottawa with more than 22 communities. Caivan is known for factory-built construction technology intended to shorten build times.",
  },
  {
    q: "What home types will be available at Five Oaks?",
    a: "Five Oaks is planned to include single-detached homes on 40', 42', and 50' lots, plus two townhome formats: back-to-back and dual-front homes from the Advantage Collection, and traditional freehold townhomes with private backyards, totaling approximately 140 homes.",
  },
  {
    q: "Are there reviews of Five Oaks available?",
    a: "No verified buyer reviews of Five Oaks currently exist, since the project has not yet launched for sale and no units have closed. This page will be updated with genuine buyer feedback as the project moves from registration through to occupancy.",
  },
  {
    q: "How is this website related to Caivan Communities?",
    a: "This website is an independent information and registration resource for Five Oaks. It is not the official website of Caivan Communities and is not affiliated with or endorsed by them. All information is compiled from publicly available sources and kept current as new details are released.",
  },
];

export const FAQ_NOTES: { title: string; body: string }[] = [
  {
    title: "Does Five Oaks offer a legal secondary suite option?",
    body: "Not confirmed. Caivan Communities offers legal secondary suite options in some of its Greater Toronto Area developments generally, but this has not been specifically confirmed for Five Oaks.",
  },
  {
    title: "Is Five Oaks the same project as Bronte Trails?",
    body: "No. Five Oaks and Bronte Trails are two separate Caivan Communities projects in Oakville, both currently marketed as \"Coming Soon.\" Five Oaks is at 1303 Dundas Street West; Bronte Trails is a separate address and community. This site covers Five Oaks only.",
  },
];

export const FAQ_PREVIEW_INDICES = [0, 3, 7, 8, 9, 19] as const;

export const HOME_ANSWER = FAQS[0].a;
export const FLOOR_PLANS_ANSWER = FAQS[7].a;
export const PRICING_ANSWER =
  "Pricing for Five Oaks has not yet been announced by Caivan Communities as of August 2026. For reference, Caivan's nearby Riverview community in South Oakville launched with townhomes from the $700s and 2-car-garage single-detached homes from $1.2M — pricing at Five Oaks has not been confirmed and may differ.";
export const LOCATION_ANSWER =
  "Five Oaks is located at 1303 Dundas Street West in Oakville, Ontario, situated alongside Sixteen Mile Creek and Lions Valley Park. The community is planned to back onto the Sixteen Mile Creek Natural Heritage System, giving portions of the site a permanent ravine and greenspace backdrop.";
export const REGISTER_ANSWER =
  "Joining the Five Oaks priority list is free, takes under a minute, and secures early notification when floor plans, pricing, and the public sales-launch date are released. There is no obligation to purchase.";
export const GUIDE_ANSWER =
  "Oakville's pre-construction market in 2026 spans large sold-out communities like Caivan's Riverview, active priority-registration projects like Five Oaks, and smaller builder-direct releases across neighbourhoods such as Bronte, Glen Abbey, and West Oak Trails. Most new low-rise supply in Oakville is concentrated in North Oakville and along the Dundas Street corridor, where larger assembled land parcels remain available.";

export const QUICK_FACTS: { label: string; value: string }[] = [
  { label: "Builder", value: BUILDER },
  { label: "Type", value: HOME_TYPES },
  { label: "Address", value: ADDRESS_LINE },
  { label: "City", value: "Oakville, Ontario" },
  { label: "Approx. Total Homes", value: TOTAL_HOMES },
  { label: "Sizes", value: SIZES_DISPLAY },
  { label: "Starting Price", value: STARTING_PRICE_DISPLAY },
  { label: "Deposit", value: DEPOSIT_DISPLAY },
  { label: "Occupancy", value: OCCUPANCY_DISPLAY },
  { label: "Status", value: STATUS },
];

export type Collection = {
  name: string;
  slug: string;
  sizes: string;
  startingPrice: string;
  note: string;
  line: string;
};

export const COLLECTIONS: Collection[] = [
  {
    name: "Single-Detached Collection — 40' / 42' / 50' Lots",
    slug: "single-detached",
    sizes: TBA,
    startingPrice: TBA,
    note: "Register for release notification.",
    line: "Single-detached homes planned on 40-foot, 42-foot, and 50-foot lots. Exact square footage by plan has not yet been released.",
  },
  {
    name: "Advantage Collection — Back-to-Back & Dual-Front Towns",
    slug: "advantage",
    sizes: TBA,
    startingPrice: TBA,
    note: "Register for release notification.",
    line: "Back-to-back and dual-front freehold townhomes from Caivan's Advantage Collection. Layouts and sizes are to be announced.",
  },
  {
    name: "Traditional Townhome Collection — Private Backyards",
    slug: "traditional-towns",
    sizes: TBA,
    startingPrice: TBA,
    note: "Register for release notification.",
    line: "Traditional freehold townhomes planned with private backyards. Exact plans and pricing have not yet been released.",
  },
];

export const PRICING_ROWS: { homeType: string; startingPrice: string; status: string }[] = [
  { homeType: "Single-Detached (40'/42'/50')", startingPrice: TBA, status: "Pre-launch" },
  { homeType: "Advantage Collection Towns", startingPrice: TBA, status: "Pre-launch" },
  { homeType: "Traditional Towns", startingPrice: TBA, status: "Pre-launch" },
];

export const DEPOSIT_SCHEDULE: { milestone: string; amount: string; due: string }[] = [
  { milestone: "On signing", amount: TBA, due: TBA },
  { milestone: "30/60/90/120 days", amount: TBA, due: TBA },
  { milestone: "Occupancy", amount: TBA, due: TBA },
];

export const PRICING_COMPARABLES: {
  community: string;
  builder: string;
  townsFrom: string;
  singlesFrom: string;
  status: string;
}[] = [
  {
    community: "Riverview, South Oakville",
    builder: BUILDER,
    townsFrom: "$700's",
    singlesFrom: "$1.2M (2-car garage)",
    status: "Sold out",
  },
  {
    community: "Five Oaks",
    builder: BUILDER,
    townsFrom: TBA,
    singlesFrom: TBA,
    status: "Pre-launch",
  },
];

export const COMPARABLES: {
  community: string;
  builder: string;
  location: string;
  status: string;
  href?: string;
}[] = [
  {
    community: "Five Oaks",
    builder: BUILDER,
    location: ADDRESS_LINE,
    status: "Pre-construction, priority registration open",
    href: "/",
  },
  {
    community: "Riverview",
    builder: BUILDER,
    location: "Bronte Road & Upper Middle Road West, South Oakville",
    status: "Sold out — towns from $700s, singles from $1.2M, occupancy Summer 2026",
  },
  {
    community: "Bronte Trails",
    builder: BUILDER,
    location: "Oakville",
    status: "Coming soon",
  },
  {
    community: "Neyagawa Crossings",
    builder: "Sky Property Group",
    location: "Neyagawa Blvd & Burnhamthorpe Rd W, Oakville",
    status: "Planning",
  },
  {
    community: "Kerr Village Towns",
    builder: "Brightstone Developments",
    location: "109 Garden Drive, Oakville",
    status: "Coming soon",
  },
];

export const REGISTER_BENEFITS = [
  "Early notice when Five Oaks floor plans are released",
  "Priority notification when pricing and the deposit schedule are announced",
  "Updates on the public sales-launch date as soon as Caivan Communities confirms it",
  "No purchase obligation — registration is free",
] as const;

export const CASL_CONSENT =
  "I consent to receive electronic communications about Five Oaks and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Five Oaks. It is not the official website of Caivan Communities and is not affiliated with or endorsed by them. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER = `Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`;

export const HERO_EYEBROW = "Pre-construction · Oakville, Ontario";
export const HERO_SUBHEAD =
  "Approximately 140 single-detached homes and freehold townhomes at 1303 Dundas Street West, alongside Sixteen Mile Creek and Lions Valley Park, by Caivan Communities.";

export const HOME_TYPE_OPTIONS = ["single_detached", "townhome", "undecided"] as const;
export const HOME_TYPE_LABELS: Record<(typeof HOME_TYPE_OPTIONS)[number], string> = {
  single_detached: "Single-detached",
  townhome: "Townhome",
  undecided: "Undecided",
};

export const BUDGET_OPTIONS = [
  "Under $800K",
  "$800K–$1M",
  "$1M–$1.4M",
  "$1.4M+",
  "Not sure yet",
] as const;

export const BUYER_TYPE_OPTIONS = ["end_user", "investor"] as const;
export const BUYER_TYPE_LABELS: Record<(typeof BUYER_TYPE_OPTIONS)[number], string> = {
  end_user: "End user / family home",
  investor: "Investor",
};

export const TIMELINE_OPTIONS = ["immediate", "6_months", "1_year", "just_browsing"] as const;
export const TIMELINE_LABELS: Record<(typeof TIMELINE_OPTIONS)[number], string> = {
  immediate: "Ready now",
  "6_months": "Within 6 months",
  "1_year": "Within 1 year",
  just_browsing: "Just browsing",
};

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Five Oaks — Pre-Construction Homes, Oakville ON",
    description:
      "~140 singles & townhomes at 1303 Dundas St W, Oakville. By Caivan Communities. Join the priority list.",
    h1: "Five Oaks — Oakville, Ontario",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Five Oaks Floor Plans — Singles & Townhomes",
    description:
      "Single-detached (40'/42'/50') and freehold townhome collections planned for Five Oaks, Oakville.",
    h1: "Five Oaks Floor Plans — Singles & Townhomes",
  },
  pricing: {
    path: "/pricing",
    title: "Five Oaks Prices & Deposit Structure",
    description:
      "Pricing status, deposit structure for Five Oaks by Caivan Communities, Oakville ON. Updated August 2026.",
    h1: "Five Oaks Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Five Oaks Location — 1303 Dundas St W, Oakville",
    description:
      "Explore the location, natural setting, transit, and schools near Five Oaks in Oakville, Ontario.",
    h1: "Five Oaks Location — 1303 Dundas Street West, Oakville",
  },
  gallery: {
    path: "/gallery",
    title: "Five Oaks Renderings — Oakville",
    description:
      "Renderings and site imagery for the Five Oaks community by Caivan Communities, Oakville.",
    h1: "Five Oaks Renderings & Site Imagery",
  },
  faq: {
    path: "/faq",
    title: "Five Oaks FAQ — Prices, Launch, Lot Sizes",
    description:
      "Answers to common questions about Five Oaks: pricing, lot sizes, schools, transit, and registration.",
    h1: "Five Oaks — Frequently Asked Questions",
  },
  register: {
    path: "/register",
    title: "Join the Priority List — Five Oaks Oakville",
    description:
      "Register free for the Five Oaks priority list. Early notice on pricing and floor plans.",
    h1: "Join the Priority List — Five Oaks Oakville",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Five Oaks Oakville",
    description:
      "Your Five Oaks priority-list registration has been received. You will be notified when floor plans and pricing are released.",
    h1: "You are on the Five Oaks priority list",
    robots: { index: false, follow: true },
  },
  guide: {
    path: "/blog/oakville-new-home-guide",
    title: "Oakville Pre-Construction Guide 2026",
    description:
      "A guide to new pre-construction homes in Oakville, Ontario, including Five Oaks and nearby communities.",
    h1: "Oakville New Home Guide — Pre-Construction in 2026",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Five Oaks Oakville Homes",
    description:
      "Privacy Policy for the independent Five Oaks information website, covering PIPEDA, cookies and data deletion.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Five Oaks Oakville Homes",
    description:
      "Terms of Use for the independent Five Oaks information website. Governing law: Ontario.",
    h1: "Terms of Use",
  },
};

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/blog/oakville-new-home-guide",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const GALLERY_ITEMS: {
  id: string;
  filename: string;
  alt: string;
  caption: string;
  label: string;
}[] = [
  {
    id: "aerial",
    filename: "five-oaks-aerial-rendering.svg",
    alt: "Five Oaks aerial rendering, Oakville, Ontario",
    caption:
      "Placeholder for a Five Oaks aerial rendering, Oakville, Ontario. Official aerial imagery has not been released as of August 26, 2026.",
    label: "Aerial context",
  },
  {
    id: "site",
    filename: "five-oaks-site-location.svg",
    alt: "Five Oaks site location alongside Sixteen Mile Creek and Lions Valley Park",
    caption:
      "Placeholder for Five Oaks site location alongside Sixteen Mile Creek and Lions Valley Park. Official site imagery has not been released as of August 26, 2026.",
    label: "Site location",
  },
  {
    id: "singles",
    filename: "five-oaks-single-detached.svg",
    alt: "Five Oaks single-detached home exterior rendering, Oakville",
    caption:
      "Placeholder for a Five Oaks single-detached home exterior rendering, Oakville. Official product renderings have not been released as of August 26, 2026.",
    label: "Single-detached collection",
  },
  {
    id: "towns",
    filename: "five-oaks-townhomes.svg",
    alt: "Five Oaks townhome streetscape rendering, Oakville",
    caption:
      "Placeholder for a Five Oaks townhome streetscape rendering, Oakville. Official streetscape imagery has not been released as of August 26, 2026.",
    label: "Townhome streetscape",
  },
];

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Five Oaks floor plans" },
  pricing: { href: "/pricing", text: "See pricing & deposit structure" },
  register: { href: "/register", text: "Join the priority list" },
  pricingStatus: { href: "/pricing", text: "View current pricing status" },
  pricingNotify: {
    href: "/register",
    text: "Register to be notified when pricing is released",
  },
  faq: { href: "/faq", text: "Read the full Five Oaks FAQ" },
  location: { href: "/location", text: "See the full location and natural setting breakdown" },
  home: { href: "/", text: "Learn more about Five Oaks" },
  footerRegister: { href: "/register", text: "Join the Priority List" },
} as const;

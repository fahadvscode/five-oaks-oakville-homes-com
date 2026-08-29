import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Analytics, GtmNoscript } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { RegisterFooter } from "@/components/RegisterFooter";
import { siteOrganizationSchema, websiteSchema } from "@/lib/schema";
import { PAGE_META, SITE_NAME, SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-source-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_META.home),
  title: {
    default: PAGE_META.home.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "PLACEHOLDER_BING_TOKEN",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "PLACEHOLDER_GSC_TOKEN";
  const bing = process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "PLACEHOLDER_BING_TOKEN";

  return (
    <html lang="en-CA" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <meta name="google-site-verification" content={gsc} />
        <meta name="msvalidate.01" content={bing} />
      </head>
      <body className="font-sans antialiased">
        <GtmNoscript />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteOrganizationSchema()} />
        <Nav />
        <main id="main">{children}</main>
        <RegisterFooter />
        <Footer />
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  );
}

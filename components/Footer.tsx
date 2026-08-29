import Link from "next/link";
import { CONTACT_EMAIL, INDEPENDENCE_DISCLAIMER, LINKS, NAV } from "@/lib/content";
import { LastUpdated } from "./Disclaimer";
import { Wordmark } from "./Wordmark";
import { CtaLink } from "./CtaLink";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-surface pb-20 md:pb-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark inverted />
            <p className="mt-5 max-w-[36ch] text-sm text-surface/75">
              Independent information and priority registration for Five Oaks, a pre-construction
              community in Oakville, Ontario.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow !text-brand-accent">Explore</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-surface/90 hover:text-surface">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CtaLink
                  href={LINKS.footerRegister.href}
                  location="footer"
                  variant="text"
                  className="text-surface/90 hover:text-surface"
                >
                  {LINKS.footerRegister.text}
                </CtaLink>
              </li>
              <li>
                <Link
                  href="/blog/oakville-new-home-guide"
                  className="text-surface/90 hover:text-surface"
                >
                  Oakville New Home Guide
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow !text-brand-accent">Project Information Team</p>
            <p className="mt-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-6">
              <CtaLink
                href="/register"
                location="footer"
                variant="text"
                className="text-brand-accent hover:underline"
              >
                Join the Priority List
              </CtaLink>
            </p>
            <LastUpdated className="mt-6 !text-surface/70" />
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-[78ch] text-sm text-surface/80">{INDEPENDENCE_DISCLAIMER}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy" className="text-surface/80 hover:text-surface hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-surface/80 hover:text-surface hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

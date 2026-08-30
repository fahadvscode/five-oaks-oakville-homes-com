import Image from "next/image";
import { HERO_EYEBROW, HERO_IMAGE, HERO_SUBHEAD, PAGE_META, STATUS_BADGE } from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { LeadForm } from "./LeadForm";
import { Wordmark } from "./Wordmark";

export function Hero() {
  const meta = PAGE_META.home;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_IMAGE.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/88 via-brand-deep/55 to-brand-deep/25" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 pb-12 pt-16 md:gap-10 md:pb-20 lg:grid-cols-2 lg:pt-20">
        <div>
          <div className="mb-6 max-w-[220px] md:max-w-[280px]">
            <Wordmark />
          </div>
          <p className="eyebrow !text-brand-accent">{HERO_EYEBROW}</p>
          <p className="badge-status mt-4">{STATUS_BADGE}</p>
          <h1 className="mt-5 max-w-[16ch] font-display font-semibold text-surface text-[clamp(2rem,8vw,3.75rem)] leading-[1.12] md:mt-6">
            {meta.h1}
          </h1>
          <p className="mt-5 max-w-[42ch] text-base text-surface/90 md:text-lg">{HERO_SUBHEAD}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#hero-register" location="hero" className="w-full sm:w-auto">
              Join the Priority List
            </CtaLink>
            <CtaLink
              href="/floor-plans"
              location="hero_secondary"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              View Floor Plans
            </CtaLink>
          </div>
          <p className="mt-6 max-w-[48ch] text-sm text-surface/75">{HERO_IMAGE.caption}</p>
        </div>
        <div className="w-full min-w-0">
          <LeadForm id="hero-register" compact />
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { CtaLink } from "./CtaLink";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-[1200px] px-5 ${className}`}>{children}</div>;
}

export function PageHeader({ h1, lede }: { h1: string; lede?: string }) {
  return (
    <header className="bg-brand-deep text-surface pt-8 pb-10 md:pt-14 md:pb-20">
      <Container>
        <h1 className="font-display font-semibold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.15] max-w-[22ch]">
          {h1}
        </h1>
        {lede ? <p className="mt-5 max-w-[62ch] text-lg text-surface/85">{lede}</p> : null}
      </Container>
    </header>
  );
}

export function Section({
  children,
  alt = false,
  id,
  labelledBy,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section-space ${alt ? "bg-surface-alt" : "bg-surface"}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-display font-semibold text-[clamp(1.5rem,3vw,2.25rem)] text-brand-deep max-w-[24ch]"
    >
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-measure space-y-4 text-text-primary">{children}</div>;
}

export function CtaBlock({
  heading,
  body,
  href,
  label,
  location,
}: {
  heading: string;
  body?: string;
  href: string;
  label: string;
  location: string;
}) {
  return (
    <section className="section-space bg-brand-deep text-surface">
      <Container>
        <h2 className="font-display font-semibold text-[clamp(1.5rem,3vw,2.25rem)] max-w-[24ch]">
          {heading}
        </h2>
        {body ? <p className="mt-4 max-w-[62ch] text-surface/85">{body}</p> : null}
        <CtaLink href={href} location={location} className="mt-8 w-full sm:w-auto">
          {label}
        </CtaLink>
      </Container>
    </section>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-brand underline underline-offset-2 hover:text-brand-deep">
      {children}
    </Link>
  );
}

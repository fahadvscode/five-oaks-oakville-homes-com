"use client";

import { usePathname } from "next/navigation";
import { LeadForm } from "./LeadForm";
import { Container } from "./LayoutBits";

export function RegisterFooter() {
  const pathname = usePathname();
  if (
    pathname === "/register" ||
    pathname === "/thank-you" ||
    pathname === "/privacy" ||
    pathname === "/terms"
  ) {
    return null;
  }

  return (
    <section className="section-space bg-surface-alt" aria-labelledby="page-register">
      <Container>
        <h2
          id="page-register"
          className="font-display font-semibold text-[clamp(1.5rem,3vw,2.25rem)] text-brand-deep max-w-[24ch]"
        >
          Join the Five Oaks priority list
        </h2>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Registration is free and creates no purchase obligation. The Project Information Team
          notifies registrants when floor plans, pricing, and the sales launch are released.
        </p>
        <div className="mt-8 max-w-3xl">
          <LeadForm id="footer-register" compact />
        </div>
      </Container>
    </section>
  );
}

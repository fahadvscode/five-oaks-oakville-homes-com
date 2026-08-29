"use client";

import { usePathname } from "next/navigation";
import { CtaLink } from "./CtaLink";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname === "/register" || pathname === "/thank-you") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface p-3 md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <CtaLink
        href={pathname === "/" ? "#hero-register" : "/register"}
        location="sticky_bar"
        className="w-full"
      >
        Join the Priority List
      </CtaLink>
    </div>
  );
}

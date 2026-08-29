"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type CtaVariant = "primary" | "ghost" | "text";

const VARIANT_CLASS: Record<CtaVariant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  text: "",
};

export function CtaLink({
  href,
  children,
  className = "",
  location,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  location: string;
  variant?: CtaVariant;
}) {
  return (
    <Link
      href={href}
      className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
      onClick={() => trackEvent("cta_click", { location })}
    >
      {children}
    </Link>
  );
}

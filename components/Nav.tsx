"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { WordmarkLink } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { CtaLink } from "./CtaLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-deep text-surface ${
        scrolled ? "border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">
        <WordmarkLink inverted />
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-surface/90 hover:text-surface"
            >
              {item.label}
            </Link>
          ))}
          <CtaLink href="/register" location="nav" className="btn-compact">
            Register
          </CtaLink>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

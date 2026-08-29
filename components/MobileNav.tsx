"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { CtaLink } from "./CtaLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-border px-3 text-sm font-semibold"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-border bg-surface px-5 py-4 shadow-card"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CtaLink href="/register" location="mobile_nav" className="mt-2 w-full">
                  Join the Priority List
                </CtaLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

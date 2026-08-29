"use client";

import { useEffect } from "react";
import { trackEvent, trackMetaLead } from "@/lib/analytics";

export function ThankYouEvents() {
  useEffect(() => {
    trackEvent("generate_lead");
    trackMetaLead();
  }, []);
  return null;
}

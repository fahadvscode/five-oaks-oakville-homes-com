import { LAST_UPDATED, LAST_UPDATED_ISO, SPECS_DISCLAIMER } from "@/lib/content";

export function LastUpdated({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm text-text-muted ${className}`}>
      Last updated: <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED}</time>
    </p>
  );
}

export function SpecsDisclaimer({ className = "" }: { className?: string }) {
  return <p className={`text-sm text-text-muted ${className}`}>{SPECS_DISCLAIMER}</p>;
}

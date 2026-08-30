"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { CASL_CONSENT } from "@/lib/content";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation";
import { captureFirstTouch, readFirstTouch } from "@/lib/utm";
import { trackEvent, trackMetaLead } from "@/lib/analytics";

const inputClass =
  "mt-1.5 w-full rounded-sm border border-border bg-surface-card px-3 py-2.5 text-text-primary";
const labelClass = "block text-[15px] font-semibold text-brand-deep";

export function LeadForm({
  id = "register",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const started = useRef(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [ts] = useState(() => String(Date.now()));

  useEffect(() => {
    captureFirstTouch();
  }, []);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      website: "",
      ts,
      page_path: pathname,
    },
  });

  const onFocusCapture = () => {
    if (started.current) return;
    started.current = true;
    try {
      if (!sessionStorage.getItem("fooh_form_start")) {
        sessionStorage.setItem("fooh_form_start", "1");
        trackEvent("form_start");
      }
    } catch {
      trackEvent("form_start");
    }
  };

  const onSubmit = form.handleSubmit(async (values) => {
    setServerError(null);
    const utm = readFirstTouch();
    const payload = {
      ...values,
      ts,
      page_path: pathname,
      ...utm,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        redirect?: string;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          Object.entries(data.fieldErrors).forEach(([key, message]) => {
            form.setError(key as keyof LeadFormValues, { message });
          });
        }
        setServerError(data.error ?? "Registration could not be completed. Please try again.");
        return;
      }

      trackEvent("form_submit");
      trackMetaLead();
      router.push(data.redirect ?? "/thank-you");
    } catch {
      setServerError("A network error occurred. Please try again.");
    }
  });

  const errors = form.formState.errors;

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      onFocusCapture={onFocusCapture}
      className={`${compact ? "card scroll-mt-28 p-5 md:p-6" : "card scroll-mt-28 p-6 md:p-8"}`}
      noValidate
    >
      {compact ? (
        <p className="mb-5 font-display text-xl font-semibold text-brand-deep">
          Join the Priority List
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first_name`} className={labelClass}>
            First name
          </label>
          <input
            id={`${id}-first_name`}
            autoComplete="given-name"
            className={inputClass}
            {...form.register("first_name")}
          />
          {errors.first_name ? (
            <p className="mt-1 text-sm text-error">{errors.first_name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={`${id}-last_name`} className={labelClass}>
            Last name
          </label>
          <input
            id={`${id}-last_name`}
            autoComplete="family-name"
            className={inputClass}
            {...form.register("last_name")}
          />
          {errors.last_name ? (
            <p className="mt-1 text-sm text-error">{errors.last_name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            className={inputClass}
            {...form.register("email")}
          />
          {errors.email ? <p className="mt-1 text-sm text-error">{errors.email.message}</p> : null}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...form.register("phone")}
          />
          {errors.phone ? <p className="mt-1 text-sm text-error">{errors.phone.message}</p> : null}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClass}>Are you a licensed real estate broker?</legend>
        <div className="mt-2 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="yes" {...form.register("is_broker")} />
            Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="no" {...form.register("is_broker")} />
            No
          </label>
        </div>
        {errors.is_broker ? (
          <p className="mt-1 text-sm text-error">{errors.is_broker.message}</p>
        ) : null}
      </fieldset>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>
      <input type="hidden" {...form.register("ts")} />

      <div className="mt-5">
        <label className="flex items-start gap-3 text-[14px] text-text-primary">
          <input type="checkbox" className="mt-1 h-4 w-4" {...form.register("casl_consent")} />
          <span>{CASL_CONSENT}</span>
        </label>
        {errors.casl_consent ? (
          <p className="mt-1 text-sm text-error">{errors.casl_consent.message}</p>
        ) : null}
      </div>

      <div aria-live="polite" className="mt-4 min-h-6 text-sm text-error">
        {serverError}
      </div>

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="btn-primary mt-2 w-full"
      >
        {form.formState.isSubmitting ? "Submitting…" : "Join the Priority List"}
      </button>
      <p className="mt-3 text-[13px] text-text-muted">
        Free to register. No purchase obligation. See the{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-brand">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

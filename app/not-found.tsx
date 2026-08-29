import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-space">
      <div className="mx-auto max-w-[1200px] px-5">
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-brand-deep">
          Page not found
        </h1>
        <p className="mt-4 max-w-[60ch]">
          That page does not exist on this Five Oaks information site.
        </p>
        <p className="mt-6">
          <Link href="/" className="text-brand underline underline-offset-2">
            Return to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
}

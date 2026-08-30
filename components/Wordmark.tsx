import Image from "next/image";
import Link from "next/link";
import { PROJECT_LOGO, WORDMARK } from "@/lib/content";

export function Wordmark({
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const height = compact ? 36 : 48;
  const width = Math.round((PROJECT_LOGO.width / PROJECT_LOGO.height) * height);

  return (
    <Image
      src={PROJECT_LOGO.src}
      alt={PROJECT_LOGO.alt}
      width={width}
      height={height}
      className="h-10 w-auto md:h-12"
    />
  );
}

export function WordmarkLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label={`${WORDMARK} home`} className="inline-flex items-center">
      <Wordmark inverted={inverted} compact />
    </Link>
  );
}

import { ADDRESS_LINE, MAPS_EMBED_SRC, PROJECT_NAME } from "@/lib/content";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title={`${PROJECT_NAME} map — ${ADDRESS_LINE}`}
        src={MAPS_EMBED_SRC}
        className="h-60 w-full md:h-[min(70vw,28rem)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

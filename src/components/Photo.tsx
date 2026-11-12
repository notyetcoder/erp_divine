import Image from "next/image";
import type { PhotoSlot } from "@/lib/images";

type Props = {
  slot: PhotoSlot;
  ratio?: string;
  className?: string;
};

export default function Photo({ slot, ratio = "aspect-[4/3]", className = "" }: Props) {
  if (!slot) return null;

  return (
    <figure className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-soft ${className}`}>
      <div className={`relative w-full ${ratio}`}>
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      {slot.caption && (
        <figcaption className="border-t border-line px-4 py-2.5 text-xs text-muted">
          {slot.caption}
        </figcaption>
      )}
    </figure>
  );
}

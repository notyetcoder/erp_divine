"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/** Click-to-load YouTube player. Nothing loads from YouTube until the visitor presses play. */
export default function VideoEmbed({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
      {on ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="flex h-full w-full flex-col items-center justify-center gap-3 text-ink transition hover:bg-brand-50" aria-label={`Play video: ${title}`}>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift"><Play size={22} aria-hidden="true" /></span>
          <span className="px-6 text-center text-sm font-semibold">{title}</span>
          <span className="text-xs text-muted">Loads from YouTube when you press play</span>
        </button>
      )}
    </div>
  );
}

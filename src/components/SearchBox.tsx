"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Entry } from "@/lib/searchIndex";

export default function SearchBox({ index }: { index: Entry[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .map((e) => {
        const title = e.title.toLowerCase();
        const hay = `${title} ${e.text.toLowerCase()} ${e.kind.toLowerCase()}`;
        if (!words.every((w) => hay.includes(w))) return null;
        return { e, score: words.reduce((s, w) => s + (title.includes(w) ? 3 : 1), 0) };
      })
      .filter((x): x is { e: Entry; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map((x) => x.e);
  }, [q, index]);

  return (
    <div>
      <label htmlFor="site-search" className="sr-only">Search the site</label>
      <div className="relative max-w-xl">
        <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input id="site-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search modules, features, GST, payroll…" className="field pl-11" autoComplete="off" />
      </div>
      <p className="mt-3 text-sm text-muted" aria-live="polite">{q.trim() ? `${results.length} result${results.length === 1 ? "" : "s"}` : `${index.length} pages to search`}</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {results.map((r) => (
          <li key={r.href + r.title}>
            <Link href={r.href} className="block py-4 transition-colors hover:bg-surface">
              <span className="font-semibold text-ink">{r.title}</span>
              <span className="ml-2 text-xs text-muted">{r.kind}</span>
              <span className="mt-1 block line-clamp-2 text-sm text-muted">{r.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

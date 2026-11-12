import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { links } from "@/lib/links";

export function Section({ title, lead, children, alt = false, id }: { title?: string; lead?: string; children: React.ReactNode; alt?: boolean; id?: string }) {
  return (
    <section id={id} className={`section ${alt ? "border-y border-line bg-surface" : ""}`}>
      <div className="container-page">
        {title && <h2 className="heading max-w-3xl">{title}</h2>}
        {lead && <p className="lead mt-4 max-w-2xl">{lead}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-snug text-ink">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-link"><Check size={14} aria-hidden="true" /></span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function LinkCard({ href, title, text, tag }: { href: string; title: string; text?: string; tag?: string }) {
  return (
    <Link href={href} className="card card-link group flex h-full flex-col">
      {tag && <span className="pill mb-3 w-fit">{tag}</span>}
      <span className="font-display text-lg font-semibold text-ink">{title}</span>
      {text && <span className="mt-1 text-sm leading-relaxed text-muted">{text}</span>}
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-link">
        Open <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}

export function OfficialLinks({ official, label = "Official page", docs = links.docs }: { official?: string; label?: string; docs?: string }) {
  return (
    <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {official && <a href={official} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">{label} <ExternalLink size={13} aria-hidden="true" /></a>}
      <a href={docs} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">Official documentation <ExternalLink size={13} aria-hidden="true" /></a>
      <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-link hover:underline">Frappe on YouTube <ExternalLink size={13} aria-hidden="true" /></a>
    </p>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((f) => (
        <li key={f.q}>
          <details className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-muted transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">+</span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-6">
      {items.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">{i + 1}</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
            <p className="mt-1 leading-relaxed text-muted">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

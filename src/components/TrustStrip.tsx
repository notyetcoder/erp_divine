import { trustAreas, trustPrimary } from "@/lib/content";

export default function TrustStrip() {
  return (
    <section aria-label="What we work with" className="border-y border-line bg-surface">
      <div className="container-page flex flex-col gap-4 py-7">
        <p className="text-sm text-muted">
          We mostly work with ERPNext, built on the Frappe framework. Areas we can help with:
        </p>
        <ul className="flex flex-wrap items-center gap-2.5">
          {trustPrimary.map((name) => (
            <li
              key={name}
              className="rounded-full bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white"
            >
              {name}
            </li>
          ))}
          {trustAreas.map((name) => (
            <li
              key={name}
              className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-medium text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

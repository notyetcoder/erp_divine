import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { groups, modules, } from "@/lib/modules";
import { moduleHref } from "@/lib/util";
import ModuleIcon from "@/components/ModuleIcon";

export function ModuleCard({ slug }: { slug: string }) {
  const m = modules.find((x) => x.slug === slug);
  if (!m) return null;
  return (
    <Link
      href={moduleHref(m.slug)}
      className="card card-link group flex h-full flex-col"
      data-track={`module_${m.slug}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-link">
        <ModuleIcon name={m.icon} />
      </span>
      <span className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</span>
      <span className="mt-1 text-sm leading-relaxed text-muted">{m.short}</span>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-link">
        Explore
        <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}

export function ModuleGrid({ grouped = false }: { grouped?: boolean }) {
  if (!grouped) {
    return (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((m) => (
          <li key={m.slug}><ModuleCard slug={m.slug} /></li>
        ))}
        <li className="sm:col-span-1 lg:col-span-2 xl:col-span-3">
          <Link
            href="/contact"
            data-track="module_something_else"
            className="card card-link flex h-full flex-col justify-center border-dashed"
          >
            <span className="font-display text-lg font-semibold text-ink">Need something else?</span>
            <span className="mt-1 text-sm leading-relaxed text-muted">
              Not sure which module you need, or looking for something not listed? Tell us what your
              business does, and we will point you the right way.
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-link">
              Talk to us <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g}>
          <h2 className="font-display text-2xl font-semibold text-ink">{g}</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.filter((m) => m.group === g).map((m) => (
              <li key={m.slug}><ModuleCard slug={m.slug} /></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

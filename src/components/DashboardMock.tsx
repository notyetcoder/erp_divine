import type { CSSProperties } from "react";
import { Check } from "lucide-react";

const stages = ["Draft", "Submitted", "In production", "Dispatched"];
const modules = ["Selling", "Stock", "Manufacturing", "Accounts"];
const week = [
  { d: "M", v: 42 },
  { d: "T", v: 58 },
  { d: "W", v: 50 },
  { d: "T", v: 74 },
  { d: "F", v: 66 },
  { d: "S", v: 38 },
];
const orders = [
  { id: "SO-0042", who: "Sample customer A", state: "In production", tone: "info" },
  { id: "SO-0041", who: "Sample customer B", state: "Ready to ship", tone: "ok" },
  { id: "SO-0040", who: "Sample customer C", state: "Payment due", tone: "warn" },
];
const tones: Record<string, string> = {
  info: "bg-brand-50 text-brand-700 ring-brand-200",
  ok: "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-800",
  warn: "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800",
};

export default function DashboardMock() {
  return (
    <figure
      className="overflow-hidden rounded-2xl border border-line bg-card shadow-lift"
      aria-label="A sample dashboard showing orders, stock and production. The numbers are illustrative."
    >
      <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3">
        <p className="text-sm font-semibold text-ink">Sample screen</p>
        <span className="pill">Illustrative data</span>
      </div>

      <div className="flex">
        <ul className="hidden w-40 shrink-0 space-y-1 border-r border-line bg-surface/60 p-3 text-sm sm:block">
          {modules.map((name, i) => (
            <li
              key={name}
              className={`rounded-lg px-3 py-2 font-medium ${
                i === 0 ? "bg-brand-100 text-link" : "text-muted"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="min-w-0 flex-1 space-y-5 p-4 sm:p-5">
          <ol className="grid grid-cols-4 gap-2" aria-label="Order workflow">
            {stages.map((stage, i) => {
              const done = i < 2;
              const current = i === 2;
              return (
                <li
                  key={stage}
                  className="flow-step"
                  style={{ "--i": i } as CSSProperties}
                  aria-current={current ? "step" : undefined}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                      done
                        ? "bg-brand-600 text-white"
                        : current
                          ? "border-2 border-brand-500 bg-card text-link"
                          : "border border-line bg-surface text-muted"
                    }`}
                  >
                    {done ? <Check size={14} aria-hidden="true" /> : i + 1}
                  </span>
                  <span className={`mt-1.5 block text-[11px] leading-tight sm:text-xs ${current ? "font-semibold text-ink" : "text-muted"}`}>
                    {stage}
                  </span>
                </li>
              );
            })}
          </ol>

          <dl className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ["Open orders", "24"],
              ["Below reorder", "7"],
              ["In production", "9"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-line bg-surface px-3 py-2.5">
                <dt className="text-[11px] text-muted sm:text-xs">{label}</dt>
                <dd className="text-xl font-semibold text-ink sm:text-2xl">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-ink">Orders this week</p>
              <svg viewBox="0 0 180 80" className="mt-2 w-full" role="img" aria-label="Bar chart of orders per day">
                {week.map((b, i) => (
                  <g key={i}>
                    <rect x={i * 30 + 4} y={64 - b.v * 0.8} width="20" height={b.v * 0.8} rx="4" className="fill-brand-500" opacity={i === 3 ? 1 : 0.55} />
                    <text x={i * 30 + 14} y="77" textAnchor="middle" fontSize="8" className="fill-muted">
                      {b.d}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold text-ink">Production</p>
              {[
                ["Style A, stitching", "w-3/5"],
                ["Style B, finishing", "w-[85%]"],
              ].map(([label, width]) => (
                <div key={label}>
                  <p className="mb-1 text-[11px] text-muted sm:text-xs">{label}</p>
                  <div className="h-1.5 overflow-hidden rounded-full bg-brand-100">
                    <div className={`flow-bar h-full rounded-full bg-brand-500 ${width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line text-xs sm:text-sm">
            {orders.map((o) => (
              <li key={o.id} className="flex items-center justify-between gap-3 px-3 py-2.5">
                <span className="min-w-0 truncate">
                  <span className="font-medium text-ink">{o.id}</span>{" "}
                  <span className="text-muted">{o.who}</span>
                </span>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${tones[o.tone]}`}>
                  {o.state}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}

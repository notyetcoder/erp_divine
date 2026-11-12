export type Tone = "info" | "ok" | "warn" | "muted";

const tones: Record<Tone, string> = {
  info: "bg-brand-50 text-brand-700 ring-brand-200",
  ok: "bg-emerald-50 text-emerald-800 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-800",
  warn: "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-800",
  muted: "bg-surface text-muted ring-line",
};

export function StatusPill({ tone = "info", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Kpi({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-line bg-surface px-4 py-3">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-0.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{value}</dd>
    </div>
  );
}

export function RowButton({
  children,
  onClick,
  label,
  disabled,
  tone = "default",
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  disabled?: boolean;
  tone?: "default" | "primary";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none ${
        tone === "primary"
          ? "bg-brand-600 text-white hover:bg-deep"
          : "border border-line bg-card text-ink hover:border-brand-300 hover:text-link"
      }`}
    >
      {children}
    </button>
  );
}

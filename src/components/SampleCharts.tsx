/**
 * Small, dependency-free charts used in the "sample screens" section.
 * Everything is plain SVG/HTML so it loads instantly and prints crisply.
 */

type Point = { label: string; value: number };

const GRID = [0.25, 0.5, 0.75, 1];

export function BarChart({ data, caption }: { data: Point[]; caption: string }) {
  const W = 320;
  const H = 176;
  const top = 20;
  const bottom = 26;
  const plotH = H - top - bottom;
  const max = Math.max(...data.map((d) => d.value));
  const slot = W / data.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={caption} className="h-auto w-full">
      {GRID.map((g) => (
        <line
          key={g}
          x1={0}
          x2={W}
          y1={top + plotH * (1 - g)}
          y2={top + plotH * (1 - g)}
          className="stroke-line"
          strokeWidth={1}
        />
      ))}
      {data.map((d, i) => {
        const h = (d.value / max) * plotH;
        const x = i * slot + slot * 0.2;
        const y = top + plotH - h;
        const last = i === data.length - 1;
        return (
          <g key={d.label}>
            <rect
              x={x}
              y={y}
              width={slot * 0.6}
              height={h}
              rx={4}
              className={last ? "fill-brand-600" : "fill-brand-200"}
            />
            <text
              x={x + slot * 0.3}
              y={y - 6}
              textAnchor="middle"
              fontSize={10}
              className={last ? "fill-ink font-semibold" : "fill-muted"}
            >
              {d.value}
            </text>
            <text
              x={x + slot * 0.3}
              y={H - 8}
              textAnchor="middle"
              fontSize={10}
              className="fill-muted"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function GroupedBars({
  labels,
  planned,
  done,
  caption,
}: {
  labels: string[];
  planned: number[];
  done: number[];
  caption: string;
}) {
  const W = 320;
  const H = 176;
  const top = 12;
  const bottom = 26;
  const plotH = H - top - bottom;
  const max = Math.max(...planned, ...done);
  const slot = W / labels.length;
  const barW = slot * 0.28;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={caption} className="h-auto w-full">
      {GRID.map((g) => (
        <line
          key={g}
          x1={0}
          x2={W}
          y1={top + plotH * (1 - g)}
          y2={top + plotH * (1 - g)}
          className="stroke-line"
          strokeWidth={1}
        />
      ))}
      {labels.map((label, i) => {
        const hp = (planned[i] / max) * plotH;
        const hd = (done[i] / max) * plotH;
        const x = i * slot + slot * 0.18;
        return (
          <g key={label}>
            <rect x={x} y={top + plotH - hp} width={barW} height={hp} rx={3} className="fill-brand-200" />
            <rect
              x={x + barW + 3}
              y={top + plotH - hd}
              width={barW}
              height={hd}
              rx={3}
              className="fill-brand-600"
            />
            <text x={i * slot + slot / 2} y={H - 8} textAnchor="middle" fontSize={10} className="fill-muted">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function LineChart({
  labels,
  a,
  b,
  caption,
}: {
  labels: string[];
  a: number[];
  b: number[];
  caption: string;
}) {
  const W = 320;
  const H = 176;
  const top = 12;
  const bottom = 26;
  const plotH = H - top - bottom;
  const max = Math.max(...a, ...b) * 1.1;
  const step = W / (labels.length - 1);
  const pad = 10;

  const xy = (values: number[]) =>
    values.map((v, i) => [pad + (i * (W - pad * 2)) / (labels.length - 1), top + plotH - (v / max) * plotH] as const);

  const line = (pts: (readonly [number, number])[]) =>
    pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

  const pa = xy(a);
  const pb = xy(b);
  const area = `${line(pa)} L${pa[pa.length - 1][0]} ${top + plotH} L${pa[0][0]} ${top + plotH} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={caption} className="h-auto w-full">
      {GRID.map((g) => (
        <line
          key={g}
          x1={0}
          x2={W}
          y1={top + plotH * (1 - g)}
          y2={top + plotH * (1 - g)}
          className="stroke-line"
          strokeWidth={1}
        />
      ))}
      <path d={area} className="fill-brand-100" opacity={0.7} />
      <path d={line(pb)} fill="none" className="stroke-muted" strokeWidth={2} strokeDasharray="5 4" />
      <path d={line(pa)} fill="none" className="stroke-brand-600" strokeWidth={2.5} strokeLinejoin="round" />
      {pa.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} className="fill-white stroke-brand-600" strokeWidth={2} />
      ))}
      {labels.map((label, i) => (
        <text
          key={label}
          x={pad + i * ((W - pad * 2) / (labels.length - 1))}
          y={H - 8}
          textAnchor="middle"
          fontSize={10}
          className="fill-muted"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

export type Slice = { label: string; value: number; stroke: string; dot: string };

export function Donut({ data, centre, caption }: { data: Slice[]; centre: string; caption: string }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:flex-col xl:flex-row">
      <svg viewBox="0 0 100 100" role="img" aria-label={caption} className="h-36 w-36 shrink-0">
        <g transform="rotate(-90 50 50)">
          {data.map((d) => {
            const len = (d.value / total) * c;
            const el = (
              <circle
                key={d.label}
                cx={50}
                cy={50}
                r={r}
                fill="none"
                strokeWidth={14}
                strokeDasharray={`${len - 1.5} ${c - len + 1.5}`}
                strokeDashoffset={-offset}
                className={d.stroke}
              />
            );
            offset += len;
            return el;
          })}
        </g>
        <text x={50} y={53.5} textAnchor="middle" fontSize={9.5} fontWeight={600} className="fill-ink">
          {centre}
        </text>
      </svg>
      <ul className="w-full space-y-2.5 text-sm">
        {data.map((d) => (
          <li key={d.label} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-muted">
              <span className={`h-2.5 w-2.5 rounded-full ${d.dot}`} aria-hidden="true" />
              {d.label}
            </span>
            <span className="font-semibold text-ink">{Math.round((d.value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MeterRow({
  label,
  value,
  note,
  tone = "brand",
}: {
  label: string;
  value: number;
  note?: string;
  tone?: "brand" | "alert";
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="text-muted">{note ?? `${value}%`}</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-brand-100"
        role="img"
        aria-label={`${label}: ${value}%`}
      >
        <div
          className={`h-full rounded-full ${tone === "alert" ? "bg-amber-400" : "bg-brand-500"}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

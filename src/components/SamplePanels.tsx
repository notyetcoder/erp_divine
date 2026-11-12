import type { ReactNode } from "react";
import { BarChart, Donut, GroupedBars, LineChart, MeterRow } from "./SampleCharts";

/* ---------- shared building blocks ---------- */

type Tone = "done" | "wait" | "alert";

const toneClass: Record<Tone, string> = {
  done: "bg-brand-50 text-brand-700 ring-brand-200",
  wait: "bg-slate-100 text-muted ring-line",
  alert: "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 ring-amber-200 dark:ring-amber-800",
};

function Status({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}

function Kpis({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-line bg-surface px-4 py-3.5">
          <dt className="text-xs font-medium text-muted">{item.label}</dt>
          <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-line bg-card p-5 ${className}`}>
      <h3 className="mb-4 text-sm font-semibold text-ink">{title}</h3>
      {children}
    </section>
  );
}

function Table({ caption, head, rows }: { caption: string; head: string[]; rows: ReactNode[][] }) {
  return (
    <section className="rounded-xl border border-line bg-card">
      <h3 className="px-5 pb-3 pt-5 text-sm font-semibold text-ink">{caption}</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead>
            <tr className="border-y border-line bg-surface text-xs text-muted">
              {head.map((h) => (
                <th key={h} scope="col" className="px-5 py-2.5 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium text-ink" : "text-muted"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Legend({ items }: { items: { label: string; className: string }[] }) {
  return (
    <ul className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-sm ${item.className}`} aria-hidden="true" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

/* ---------- the four sample screens ---------- */

export function SalesPanel() {
  return (
    <div className="space-y-4">
      <Kpis
        items={[
          { label: "Orders this month", value: "128" },
          { label: "Sales this month", value: "₹18.6 L" },
          { label: "Pending dispatch", value: "17" },
          { label: "Payments due", value: "₹4.2 L" },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <Block title="Sales by month (₹ lakh)" className="lg:col-span-3">
          <BarChart
            caption="Bar chart of sample monthly sales, rising from 11.2 to 18.6 lakh rupees over six months"
            data={[
              { label: "Apr", value: 11.2 },
              { label: "May", value: 13.5 },
              { label: "Jun", value: 12.1 },
              { label: "Jul", value: 15.8 },
              { label: "Aug", value: 14.9 },
              { label: "Sep", value: 18.6 },
            ]}
          />
        </Block>
        <Block title="Sales by channel" className="lg:col-span-2">
          <Donut
            centre="4 channels"
            caption="Donut chart of sample sales split across four channels"
            data={[
              { label: "Distributors", value: 38, stroke: "stroke-brand-600", dot: "bg-brand-600" },
              { label: "Direct customers", value: 29, stroke: "stroke-brand-500", dot: "bg-brand-500" },
              { label: "Online", value: 21, stroke: "stroke-brand-300", dot: "bg-brand-300" },
              { label: "Export", value: 12, stroke: "stroke-brand-300", dot: "bg-slate-300" },
            ]}
          />
        </Block>
      </div>
      <Table
        caption="Recent sales orders"
        head={["Order", "Customer", "Amount", "Status"]}
        rows={[
          ["SO-0128", "Sample Customer A", "₹1,24,000", <Status key="s" tone="done">Dispatched</Status>],
          ["SO-0127", "Sample Customer B", "₹86,500", <Status key="s" tone="wait">In production</Status>],
          ["SO-0126", "Sample Customer C", "₹2,10,000", <Status key="s" tone="done">Ready to ship</Status>],
          ["SO-0125", "Sample Customer D", "₹45,200", <Status key="s" tone="alert">Payment pending</Status>],
        ]}
      />
    </div>
  );
}

export function StockPanel() {
  return (
    <div className="space-y-4">
      <Kpis
        items={[
          { label: "Items tracked", value: "842" },
          { label: "Stock value", value: "₹52.4 L" },
          { label: "Below reorder level", value: "23" },
          { label: "Reorders due this week", value: "9" },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <Block title="Where the stock value sits" className="lg:col-span-2">
          <div className="space-y-4">
            <MeterRow label="Fabrics" value={42} />
            <MeterRow label="Finished goods" value={29} />
            <MeterRow label="Trims & accessories" value={18} />
            <MeterRow label="Packing material" value={11} />
          </div>
        </Block>
        <div className="lg:col-span-3">
          <Table
            caption="Items to reorder soon"
            head={["Item", "In stock", "Reorder at", "Status"]}
            rows={[
              ["Cotton fabric, white", "120 m", "200 m", <Status key="s" tone="alert">Reorder</Status>],
              ["Poly bags 12×16", "800 pcs", "1,500 pcs", <Status key="s" tone="alert">Reorder</Status>],
              ["Zipper 6 inch", "1,150 pcs", "1,000 pcs", <Status key="s" tone="wait">Low soon</Status>],
              ["Button 14 mm", "3,400 pcs", "2,000 pcs", <Status key="s" tone="done">Healthy</Status>],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export function WarehousePanel() {
  return (
    <div className="space-y-4">
      <Kpis
        items={[
          { label: "Warehouses", value: "3" },
          { label: "Space in use", value: "76%" },
          { label: "Received today", value: "6" },
          { label: "Dispatched today", value: "11" },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <Block title="Stock in and out, last 7 days (units)" className="lg:col-span-3">
          <Legend
            items={[
              { label: "Received", className: "bg-brand-600" },
              { label: "Dispatched", className: "bg-muted" },
            ]}
          />
          <LineChart
            caption="Line chart of sample stock received and dispatched over seven days"
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            a={[320, 280, 410, 360, 300, 450, 390]}
            b={[250, 310, 290, 380, 340, 360, 420]}
          />
        </Block>
        <Block title="Space in use by warehouse" className="lg:col-span-2">
          <div className="space-y-4">
            <MeterRow label="Main warehouse" value={82} />
            <MeterRow label="Fabric store" value={64} />
            <MeterRow label="Finished goods" value={77} />
          </div>
        </Block>
      </div>
      <Table
        caption="Recent stock movements"
        head={["Type", "Item", "Location", "Quantity", "When"]}
        rows={[
          [<Status key="s" tone="done">Receipt</Status>, "Cotton fabric, white", "Fabric store", "300 m", "Today, 10:20"],
          [<Status key="s" tone="wait">Transfer</Status>, "Style A-101", "Finished goods to Main", "120 pcs", "Today, 11:05"],
          [<Status key="s" tone="alert">Dispatch</Status>, "Order SO-0128", "Main warehouse", "240 pcs", "Today, 12:40"],
        ]}
      />
    </div>
  );
}

export function ProductionPanel() {
  const orders: { id: string; item: string; stage: string; pct: number; late?: boolean }[] = [
    { id: "WO-031", item: "Style A-101, 1,200 pcs", stage: "Stitching", pct: 60 },
    { id: "WO-030", item: "Style B-204, 800 pcs", stage: "Finishing", pct: 85 },
    { id: "WO-029", item: "Style C-310, 1,500 pcs", stage: "Cutting", pct: 25 },
    { id: "WO-027", item: "Style A-099, 600 pcs", stage: "Stitching", pct: 40, late: true },
  ];

  return (
    <div className="space-y-4">
      <Kpis
        items={[
          { label: "Open work orders", value: "14" },
          { label: "In progress", value: "6" },
          { label: "Delayed", value: "2" },
          { label: "Completed this week", value: "9" },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <Block title="Work orders on the floor" className="lg:col-span-3">
          <div className="space-y-5">
            {orders.map((o) => (
              <div key={o.id}>
                <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-ink">
                    {o.id} <span className="font-normal text-muted">· {o.item}</span>
                  </span>
                  <Status tone={o.late ? "alert" : "done"}>{o.late ? `${o.stage}, delayed` : o.stage}</Status>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-brand-100" role="img" aria-label={`${o.id}: ${o.pct}% complete`}>
                  <div
                    className={`h-full rounded-full ${o.late ? "bg-amber-400" : "bg-brand-500"}`}
                    style={{ width: `${o.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Block>
        <Block title="Planned vs completed (units per day)" className="lg:col-span-2">
          <Legend
            items={[
              { label: "Planned", className: "bg-brand-200" },
              { label: "Completed", className: "bg-brand-600" },
            ]}
          />
          <GroupedBars
            caption="Grouped bar chart of sample planned and completed units, Monday to Saturday"
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            planned={[200, 200, 220, 220, 220, 150]}
            done={[190, 205, 200, 225, 210, 140]}
          />
        </Block>
      </div>
    </div>
  );
}

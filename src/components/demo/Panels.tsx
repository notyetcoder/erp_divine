"use client";

import { useState } from "react";
import { ArrowRight, Check, Plus, X } from "lucide-react";
import { Kpi, RowButton, StatusPill, type Tone } from "@/components/ui";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function Head({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      {action}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <li className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">{children}</li>;
}

const list = "divide-y divide-line overflow-hidden rounded-xl border border-line bg-card";

/* ---------------- Selling ---------------- */
const orderStages = ["Draft", "Submitted", "In production", "Dispatched", "Invoiced"];
const orderTones: Tone[] = ["muted", "info", "info", "warn", "ok"];
const orderPresets: [string, number][] = [["Sample customer E", 42000], ["Sample customer F", 118000], ["Sample customer G", 67500], ["Sample customer H", 23400]];

export function SellingPanel() {
  const [orders, setOrders] = useState([
    { id: "SO-0042", who: "Sample customer A", amount: 124000, stage: 2 },
    { id: "SO-0041", who: "Sample customer B", amount: 86500, stage: 3 },
    { id: "SO-0040", who: "Sample customer C", amount: 210000, stage: 1 },
    { id: "SO-0039", who: "Sample customer D", amount: 45200, stage: 4 },
  ]);
  const open = orders.filter((o) => o.stage < 4);
  const add = () =>
    setOrders((prev) => {
      const [who, amount] = orderPresets[prev.length % orderPresets.length];
      return [{ id: `SO-${String(43 + prev.length - 4).padStart(4, "0")}`, who, amount, stage: 0 }, ...prev];
    });
  const advance = (id: string) => setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, stage: Math.min(4, o.stage + 1) } : o)));

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Open orders" value={open.length} />
        <Kpi label="Open value" value={inr.format(open.reduce((s, o) => s + o.amount, 0))} />
        <Kpi label="To dispatch" value={orders.filter((o) => o.stage === 1 || o.stage === 2).length} />
      </dl>
      <div className="mt-6">
        <Head title="Sales orders" action={<RowButton onClick={add} label="Add a sample sales order" tone="primary"><Plus size={14} aria-hidden="true" /> New order</RowButton>} />
        <ul className={list}>
          {orders.map((o) => (
            <Row key={o.id}>
              <span className="min-w-0 text-sm"><span className="font-semibold text-ink">{o.id}</span> <span className="text-muted">{o.who}</span></span>
              <span className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-ink">{inr.format(o.amount)}</span>
                <StatusPill tone={orderTones[o.stage]}>{orderStages[o.stage]}</StatusPill>
                <RowButton onClick={() => advance(o.id)} label={`Move ${o.id} to the next step`} disabled={o.stage === 4}>Next <ArrowRight size={12} aria-hidden="true" /></RowButton>
              </span>
            </Row>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Stock ---------------- */
export function StockPanel() {
  const [items, setItems] = useState([
    { name: "Cotton fabric, white", unit: "m", qty: 120, reorder: 200, step: 20 },
    { name: "Poly bags 12×16", unit: "pcs", qty: 800, reorder: 1500, step: 100 },
    { name: "Zipper 6 inch", unit: "pcs", qty: 1150, reorder: 1000, step: 100 },
    { name: "Button 14 mm", unit: "pcs", qty: 3400, reorder: 2000, step: 200 },
    { name: "Thread, black", unit: "cones", qty: 64, reorder: 40, step: 5 },
  ]);
  const move = (name: string, dir: 1 | -1) => setItems((prev) => prev.map((i) => (i.name === name ? { ...i, qty: Math.max(0, i.qty + dir * i.step) } : i)));
  const low = items.filter((i) => i.qty < i.reorder);

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Items tracked" value={items.length} />
        <Kpi label="Below reorder level" value={low.length} />
        <Kpi label="Requests to raise" value={low.length} />
      </dl>
      <div className="mt-6">
        <Head title="Stock balances" />
        <ul className={list}>
          {items.map((i) => {
            const isLow = i.qty < i.reorder;
            return (
              <li key={i.name} className="px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-ink">{i.name}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-sm text-muted">{i.qty.toLocaleString("en-IN")} {i.unit}</span>
                    <StatusPill tone={isLow ? "warn" : "ok"}>{isLow ? "Reorder" : "Healthy"}</StatusPill>
                  </span>
                </div>
                <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-brand-100" aria-hidden="true">
                  <div className={`h-full rounded-full transition-[width] duration-500 motion-reduce:transition-none ${isLow ? "bg-amber-400" : "bg-brand-500"}`} style={{ width: `${Math.min(100, (i.qty / (i.reorder * 2)) * 100)}%` }} />
                  <span className="absolute left-1/2 top-0 h-full w-0.5 bg-ink/40" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-muted">Reorder level: {i.reorder.toLocaleString("en-IN")} {i.unit}</span>
                  <span className="flex gap-2">
                    <RowButton onClick={() => move(i.name, -1)} label={`Issue ${i.step} ${i.unit} of ${i.name}`} disabled={i.qty === 0}>Issue {i.step}</RowButton>
                    <RowButton onClick={() => move(i.name, 1)} label={`Receive ${i.step} ${i.unit} of ${i.name}`}>Receive {i.step}</RowButton>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- Manufacturing ---------------- */
const woStages = ["Planned", "Cutting", "Stitching", "Finishing", "Done"];

export function ManufacturingPanel() {
  const [jobs, setJobs] = useState([
    { id: "WO-031", item: "Style A-101", qty: 1200, stage: 2 },
    { id: "WO-030", item: "Style B-204", qty: 800, stage: 3 },
    { id: "WO-029", item: "Style C-310", qty: 1500, stage: 1 },
  ]);
  const advance = (id: string) => setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, stage: Math.min(4, j.stage + 1) } : j)));
  const add = () => setJobs((prev) => [{ id: `WO-${String(32 + prev.length - 3).padStart(3, "0")}`, item: `Style D-${400 + prev.length}`, qty: 600, stage: 0 }, ...prev]);

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Planned" value={jobs.filter((j) => j.stage === 0).length} />
        <Kpi label="In progress" value={jobs.filter((j) => j.stage > 0 && j.stage < 4).length} />
        <Kpi label="Done" value={jobs.filter((j) => j.stage === 4).length} />
      </dl>
      <div className="mt-6">
        <Head title="Work orders" action={<RowButton onClick={add} label="Add a sample work order" tone="primary"><Plus size={14} aria-hidden="true" /> New work order</RowButton>} />
        <ul className={list}>
          {jobs.map((j) => (
            <li key={j.id} className="px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm"><span className="font-semibold text-ink">{j.id}</span> <span className="text-muted">{j.item}, {j.qty.toLocaleString("en-IN")} pcs</span></span>
                <span className="flex flex-wrap items-center gap-3">
                  <StatusPill tone={j.stage === 4 ? "ok" : j.stage === 0 ? "muted" : "info"}>{woStages[j.stage]}</StatusPill>
                  <RowButton onClick={() => advance(j.id)} label={`Move ${j.id} to the next stage`} disabled={j.stage === 4}>Advance <ArrowRight size={12} aria-hidden="true" /></RowButton>
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100" role="progressbar" aria-label={`${j.id} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={j.stage * 25}>
                <div className="h-full rounded-full bg-brand-500 transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${j.stage * 25}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- CRM ---------------- */
const cols = ["New", "Contacted", "Quotation sent", "Won"];
const leadPresets: [string, number][] = [["Sample lead 5", 60000], ["Sample lead 6", 145000], ["Sample lead 7", 38000]];

export function CrmPanel() {
  const [leads, setLeads] = useState([
    { id: 1, name: "Sample lead 1", value: 90000, col: 0 },
    { id: 2, name: "Sample lead 2", value: 210000, col: 1 },
    { id: 3, name: "Sample lead 3", value: 54000, col: 1 },
    { id: 4, name: "Sample lead 4", value: 125000, col: 2 },
  ]);
  const move = (id: number) => setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, col: Math.min(3, l.col + 1) } : l)));
  const add = () => setLeads((prev) => { const [name, value] = leadPresets[prev.length % leadPresets.length]; return [...prev, { id: prev.length + 1, name, value, col: 0 }]; });
  const open = leads.filter((l) => l.col < 3);

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Open leads" value={open.length} />
        <Kpi label="Pipeline value" value={inr.format(open.reduce((s, l) => s + l.value, 0))} />
        <Kpi label="Won" value={leads.filter((l) => l.col === 3).length} />
      </dl>
      <div className="mt-6">
        <Head title="Pipeline" action={<RowButton onClick={add} label="Add a sample lead" tone="primary"><Plus size={14} aria-hidden="true" /> New lead</RowButton>} />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {cols.map((name, ci) => (
            <section key={name} aria-label={name} className="rounded-xl border border-line bg-surface p-3">
              <h3 className="mb-2 flex items-center justify-between text-sm font-semibold text-ink">{name}<span className="text-xs font-normal text-muted">{leads.filter((l) => l.col === ci).length}</span></h3>
              <ul className="space-y-2">
                {leads.filter((l) => l.col === ci).map((l) => (
                  <li key={l.id} className="rounded-lg border border-line bg-card p-3 text-sm">
                    <p className="font-medium text-ink">{l.name}</p>
                    <p className="text-muted">{inr.format(l.value)}</p>
                    {ci < 3 && <div className="mt-2"><RowButton onClick={() => move(l.id)} label={`Move ${l.name} to ${cols[ci + 1]}`}>Move on <ArrowRight size={12} aria-hidden="true" /></RowButton></div>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- HR ---------------- */
export function HrPanel() {
  const [leaves, setLeaves] = useState<{ id: string; who: string; type: string; days: number; status: "Pending" | "Approved" | "Rejected" }[]>([
    { id: "LV-014", who: "Sample employee A", type: "Casual leave", days: 2, status: "Pending" },
    { id: "LV-013", who: "Sample employee B", type: "Sick leave", days: 1, status: "Pending" },
    { id: "LV-012", who: "Sample employee C", type: "Earned leave", days: 5, status: "Approved" },
    { id: "LV-011", who: "Sample employee D", type: "Casual leave", days: 1, status: "Pending" },
  ]);
  const decide = (id: string, status: "Approved" | "Rejected") => setLeaves((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  const week = [19, 18, 20, 17, 18];

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Waiting for approval" value={leaves.filter((l) => l.status === "Pending").length} />
        <Kpi label="Approved" value={leaves.filter((l) => l.status === "Approved").length} />
        <Kpi label="Present today" value="18 of 20" />
      </dl>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Head title="Leave requests" />
          <ul className={list}>
            {leaves.map((l) => (
              <Row key={l.id}>
                <span className="min-w-0 text-sm"><span className="font-semibold text-ink">{l.who}</span> <span className="text-muted">{l.type}, {l.days} {l.days === 1 ? "day" : "days"}</span></span>
                {l.status === "Pending" ? (
                  <span className="flex gap-2">
                    <RowButton onClick={() => decide(l.id, "Approved")} label={`Approve ${l.id}`} tone="primary"><Check size={13} aria-hidden="true" /> Approve</RowButton>
                    <RowButton onClick={() => decide(l.id, "Rejected")} label={`Reject ${l.id}`}><X size={13} aria-hidden="true" /> Reject</RowButton>
                  </span>
                ) : (
                  <StatusPill tone={l.status === "Approved" ? "ok" : "muted"}>{l.status}</StatusPill>
                )}
              </Row>
            ))}
          </ul>
        </div>
        <div>
          <Head title="Attendance this week" />
          <div className="rounded-xl border border-line bg-card p-4">
            <div className="flex h-28 items-end gap-3" role="img" aria-label="Number of employees present each day this week, out of 20">
              {week.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1 text-xs text-muted">
                  {v}
                  <span className="w-full rounded-t-md bg-brand-500" style={{ height: `${(v / 20) * 80}%` }} />
                  {["M", "T", "W", "T", "F"][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Accounting ---------------- */
export function AccountingPanel() {
  const [invoices, setInvoices] = useState([
    { id: "SINV-0031", who: "Sample customer A", amount: 86500, paid: false, late: false },
    { id: "SINV-0030", who: "Sample customer B", amount: 124000, paid: true, late: false },
    { id: "SINV-0029", who: "Sample customer C", amount: 45200, paid: false, late: true },
    { id: "SINV-0028", who: "Sample customer D", amount: 210000, paid: false, late: false },
    { id: "SINV-0027", who: "Sample customer E", amount: 32800, paid: true, late: false },
  ]);
  const toggle = (id: string) => setInvoices((prev) => prev.map((i) => (i.id === id ? { ...i, paid: !i.paid } : i)));
  const due = invoices.filter((i) => !i.paid).reduce((s, i) => s + i.amount, 0);
  const got = invoices.filter((i) => i.paid).reduce((s, i) => s + i.amount, 0);

  return (
    <div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 [&>div:last-child]:col-span-2 sm:[&>div:last-child]:col-span-1">
        <Kpi label="Still to receive" value={inr.format(due)} />
        <Kpi label="Received" value={inr.format(got)} />
        <Kpi label="Overdue invoices" value={invoices.filter((i) => !i.paid && i.late).length} />
      </dl>
      <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-amber-200 dark:bg-amber-900" role="img" aria-label="Share of invoice value received">
        <div className="h-full bg-brand-500 transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${(got / (got + due)) * 100}%` }} />
      </div>
      <div className="mt-6">
        <Head title="Sales invoices" />
        <ul className={list}>
          {invoices.map((i) => (
            <Row key={i.id}>
              <span className="min-w-0 text-sm"><span className="font-semibold text-ink">{i.id}</span> <span className="text-muted">{i.who}</span></span>
              <span className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-ink">{inr.format(i.amount)}</span>
                <StatusPill tone={i.paid ? "ok" : i.late ? "warn" : "info"}>{i.paid ? "Paid" : i.late ? "Overdue" : "Unpaid"}</StatusPill>
                <RowButton onClick={() => toggle(i.id)} label={i.paid ? `Mark ${i.id} unpaid` : `Mark ${i.id} paid`}>{i.paid ? "Undo" : "Mark paid"}</RowButton>
              </span>
            </Row>
          ))}
        </ul>
      </div>
    </div>
  );
}

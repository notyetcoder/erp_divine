"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Boxes, Download, Factory, TrendingUp, Warehouse, type LucideIcon } from "lucide-react";
import { ProductionPanel, SalesPanel, StockPanel, WarehousePanel } from "./SamplePanels";

const tabs: { id: string; label: string; title: string; icon: LucideIcon; Panel: () => JSX.Element }[] = [
  { id: "sales", label: "Selling", title: "Sales overview", icon: TrendingUp, Panel: SalesPanel },
  { id: "stock", label: "Stock", title: "Stock overview", icon: Boxes, Panel: StockPanel },
  { id: "warehouse", label: "Warehouse", title: "Warehouse overview", icon: Warehouse, Panel: WarehousePanel },
  { id: "production", label: "Production", title: "Production tracking", icon: Factory, Panel: ProductionPanel },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  const current = tabs[active];

  return (
    <section id="preview" className="section bg-brand-50/70">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">See how it could look for your team</h2>
          <p className="lead mt-5">
            Here are sample screens for selling, stock, warehouse and production, so you can picture
            the clarity we are aiming for. The numbers are made up for illustration. Your screens
            would be built around your own process.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Sample screens"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
        >
          {tabs.map((tab, index) => {
            const selected = index === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 ${
                  selected
                    ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                    : "border-line bg-card text-muted hover:border-brand-300 hover:text-link"
                }`}
              >
                <tab.icon size={16} aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-5 overflow-hidden rounded-2xl border border-line bg-card shadow-lift"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line bg-surface px-5 py-3.5 sm:px-6">
            <p className="text-sm font-semibold text-ink">{current.title}</p>
            <span className="pill whitespace-nowrap">
              Sample data<span className="hidden sm:inline">, for illustration</span>
            </span>
          </div>
          <div key={current.id} className="animate-[step-in_0.4s_ease-out] p-4 motion-reduce:animate-none sm:p-6">
            <current.Panel />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-card p-6 shadow-soft sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">Prefer to read it offline?</p>
            <p className="mt-1 text-muted">
              Our short brochure explains what we do and how we work, on a few simple pages.
            </p>
          </div>
          <a
            href="/divine-erp-solutions-brochure.pdf"
            download
            className="btn-quiet shrink-0 gap-2 px-5 py-3 text-base"
          >
            <Download size={18} aria-hidden="true" />
            Download brochure (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

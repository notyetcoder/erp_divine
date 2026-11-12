"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { modules } from "@/lib/modules";
import { moduleHref } from "@/lib/util";
import ModuleIcon from "@/components/ModuleIcon";
import FlowStepper from "@/components/FlowStepper";
import {
  AccountingPanel, CrmPanel, HrPanel, ManufacturingPanel, SellingPanel, StockPanel,
} from "@/components/demo/Panels";

const panels: Record<string, () => React.JSX.Element> = {
  selling: SellingPanel,
  stock: StockPanel,
  manufacturing: ManufacturingPanel,
  crm: CrmPanel,
  hr: HrPanel,
  accounting: AccountingPanel,
};

export default function Workspace() {
  const [active, setActive] = useState("selling");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (modules.some((m) => m.slug === fromHash)) setActive(fromHash);
  }, []);

  const select = (slug: string) => {
    setActive(slug);
    window.history.replaceState(null, "", `#${slug}`);
  };

  const current = modules.find((m) => m.slug === active) ?? modules[0];
  const Panel = panels[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-lift lg:flex">
      <nav aria-label="Modules" className="shrink-0 border-b border-line bg-surface lg:w-64 lg:border-b-0 lg:border-r">
        <ul className="flex gap-1 overflow-x-auto p-2 lg:block lg:space-y-0.5 lg:overflow-visible lg:p-3">
          {modules.map((m) => (
            <li key={m.slug} className="shrink-0">
              <button
                type="button"
                onClick={() => select(m.slug)}
                aria-current={m.slug === active ? "page" : undefined}
                className={`flex w-full items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition duration-200 motion-reduce:transition-none ${
                  m.slug === active ? "bg-brand-100 text-link" : "text-muted hover:bg-card hover:text-ink"
                }`}
              >
                <span className="shrink-0"><ModuleIcon name={m.icon} size={16} /></span>
                {m.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <div>
            <p className="font-semibold text-ink">{current.name}</p>
            <p className="text-xs text-muted">Sample data. Nothing here is saved.</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setResetKey((k) => k + 1)} className="btn-quiet">
              <RotateCcw size={14} aria-hidden="true" className="mr-1.5" /> Reset
            </button>
            <Link href={moduleHref(current.slug)} className="btn-quiet">
              About this module <ArrowRight size={14} aria-hidden="true" className="ml-1.5" />
            </Link>
          </div>
        </div>

        <div key={`${active}-${resetKey}`} className="p-5 sm:p-6" style={{ animation: "step-in 0.4s ease-out" }}>
          {Panel ? <Panel /> : <FlowStepper module={current} />}
        </div>
      </div>
    </div>
  );
}

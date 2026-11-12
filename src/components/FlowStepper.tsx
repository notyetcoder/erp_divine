"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import type { Module } from "@/lib/modules";
import { StatusPill } from "@/components/ui";

export default function FlowStepper({ module }: { module: Module }) {
  const [index, setIndex] = useState(0);
  const last = module.flow.length - 1;
  const current = module.flow[index];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-lift">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface px-5 py-3.5">
        <p className="font-semibold text-ink">{module.doc.title}</p>
        <StatusPill tone={index === last ? "ok" : "info"}>{current.status}</StatusPill>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-5 p-5 sm:p-6 lg:col-span-2 lg:border-r lg:border-line">
          <dl className="space-y-3 text-sm">
            {module.doc.rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-muted">Sample document with made-up details.</p>
        </div>

        <div className="p-5 sm:p-6 lg:col-span-3">
          <div className="h-1.5 overflow-hidden rounded-full bg-brand-100" role="progressbar" aria-valuemin={1} aria-valuemax={last + 1} aria-valuenow={index + 1} aria-label="Progress through the flow">
            <div className="h-full rounded-full bg-brand-500 transition-[width] duration-500 ease-out motion-reduce:transition-none" style={{ width: `${((index + 1) / (last + 1)) * 100}%` }} />
          </div>

          <ol className="mt-5 space-y-1.5">
            {module.flow.map((step, i) => {
              const done = i < index;
              const active = i === index;
              return (
                <li key={step.status}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={active ? "step" : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition duration-200 motion-reduce:transition-none ${
                      active ? "bg-brand-50 font-semibold text-ink" : "text-muted hover:bg-surface"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        done || active ? "bg-brand-600 text-white" : "border border-line bg-surface text-muted"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {step.step}
                  </button>
                </li>
              );
            })}
          </ol>

          <p className="mt-4 min-h-[3rem] rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-muted" aria-live="polite">
            {current.note}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => setIndex((v) => Math.max(0, v - 1))} disabled={index === 0} className="btn-quiet disabled:cursor-not-allowed disabled:opacity-40">
              <ArrowLeft size={16} aria-hidden="true" className="mr-1.5" /> Back
            </button>
            <button type="button" onClick={() => setIndex((v) => Math.min(last, v + 1))} disabled={index === last} className="btn-quiet disabled:cursor-not-allowed disabled:opacity-40">
              Next step <ArrowRight size={16} aria-hidden="true" className="ml-1.5" />
            </button>
            <button type="button" onClick={() => setIndex(0)} className="btn-quiet">
              <RotateCcw size={15} aria-hidden="true" className="mr-1.5" /> Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

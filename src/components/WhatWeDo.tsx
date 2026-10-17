import { ArrowRight, ArrowDown } from "lucide-react";

const chain = [
  { title: "Better processes", text: "Clear steps that your whole team follows the same way." },
  { title: "Better visibility", text: "You can see orders, stock and production as they happen." },
  { title: "Better decisions", text: "Real numbers replace guesswork and last-minute calls." },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">We focus on how your business actually runs</h2>
          <p className="lead mt-5">
            Installing software is the easy part. The real improvement comes from understanding how
            work moves through your business and making that flow simpler. We start with your
            process, and use ERP as the tool to support it.
          </p>
        </div>

        <ol className="mt-12 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {chain.map((item, index) => (
            <li key={item.title} className="contents">
              <div className="flex-1 rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-muted">{item.text}</p>
              </div>
              {index < chain.length - 1 && (
                <>
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden shrink-0 text-brand-500 md:block"
                    size={24}
                  />
                  <ArrowDown
                    aria-hidden="true"
                    className="mx-auto shrink-0 text-brand-500 md:hidden"
                    size={24}
                  />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

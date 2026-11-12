import Link from "next/link";
import { Network, Sprout, Users, Workflow, type LucideIcon } from "lucide-react";

type Path = {
  icon: LucideIcon;
  title: string;
  intro: string;
  steps: { title: string; text: string }[];
  cta: string;
  quiet?: boolean;
};

const paths: Path[] = [
  {
    icon: Sprout,
    title: "Just starting, or still small",
    intro: "A full system may be more than you need right now.",
    steps: [
      {
        title: "Grow the business first",
        text: "Spend your time and energy on finding customers and building steady sales. A system helps most once there is a business to run.",
      },
      {
        title: "Keep simple, clear records",
        text: "A diary or a simple sheet is enough for now. Try to write each thing only once.",
      },
      {
        title: "Come back when it gets heavy",
        text: "When the same numbers are written in more than one place, or finding an answer takes too long, it may be time to talk.",
      },
    ],
    cta: "Ask us a question",
    quiet: true,
  },
  {
    icon: Workflow,
    title: "Already running a business",
    intro: "This is a good time to look at how work flows and where it slows down.",
    steps: [
      { title: "Tell us how work flows today", text: "Orders, stock, payments, and who does what." },
      {
        title: "Find what slows you down",
        text: "Together we look for repeated work and places where mistakes happen.",
      },
      {
        title: "Decide where to begin",
        text: "We agree together on a first step that fits your business.",
      },
    ],
    cta: "Start a conversation",
  },
  {
    icon: Network,
    title: "Several parts, such as manufacturing, outlets and retail",
    intro: "With more than one part to the business, a connected system can help a lot.",
    steps: [
      {
        title: "Map every part",
        text: "See how production, outlets and sales channels connect today.",
      },
      {
        title: "Work from one set of numbers",
        text: "The aim is that stock, orders and payments agree across every part.",
      },
      { title: "Grow it with the business", text: "Add parts to the system as your business grows." },
    ],
    cta: "Start a conversation",
  },
];

const line = "border-dashed border-brand-300";

export default function Paths() {
  return (
    <section id="paths" className="section border-y border-line bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Which path fits your business?</h2>
          <p className="lead mt-5">
            Not every business needs a system today, and we would rather tell you that honestly.
            Find where you are below, and see what we would suggest.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center">
            <p className="rounded-full border border-brand-200 bg-card px-5 py-2.5 text-sm font-semibold text-ink shadow-soft">
              Where is your business today?
            </p>
            <span aria-hidden="true" className={`h-8 border-l-2 ${line}`} />
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className={`absolute left-[16.66%] right-[16.66%] top-0 hidden border-t-2 lg:block ${line}`}
            />
            <ul className="grid gap-8 lg:grid-cols-3 lg:gap-6 lg:pt-8">
              {paths.map((path) => (
                <li key={path.title} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -top-8 left-1/2 hidden h-8 border-l-2 lg:block ${line}`}
                  />
                  <div className="card flex h-full flex-col">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-link">
                      <path.icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{path.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{path.intro}</p>

                    <ol className="mt-6">
                      {path.steps.map((step, index) => (
                        <li key={step.title} className="relative pb-5 pl-8 last:pb-0">
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-brand-500 bg-card"
                          />
                          {index < path.steps.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="absolute -bottom-1 left-[5px] top-4 border-l-2 border-dashed border-brand-200"
                            />
                          )}
                          <p className="font-semibold text-ink">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-auto pt-6">
                      <Link
                        href="/contact"
                        className={path.quiet ? "btn-quiet" : "btn-primary !px-5 !py-2.5 !text-sm"}
                      >
                        {path.cta}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-link">
            <Users size={22} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-ink">Who can talk to us?</h3>
            <p className="mt-1 leading-relaxed text-muted">
              Everyone is welcome. Small and medium businesses and small manufacturers are most
              welcome, and so are single-person businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

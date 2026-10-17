import { Check } from "lucide-react";

const points = [
  {
    title: "We focus on real value",
    text: "We only suggest what will genuinely help your business.",
  },
  {
    title: "We take time to understand you",
    text: "Every business is different. We listen first and recommend later.",
  },
  {
    title: "We prefer long-term relationships",
    text: "We would rather earn your trust over time than close a quick sale.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="heading">Why work with us</h2>
          <p className="lead mt-5">
            We are a young team, and we are honest about that. What we offer is care, curiosity and
            hard work on your behalf.
          </p>
          <p className="mt-8 text-xl font-semibold leading-snug text-ink">
            Give us a chance to help your business run smoother.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            Start a conversation
          </a>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Check size={18} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{point.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

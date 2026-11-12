import { site } from "@/lib/site";
import Placeholder from "@/components/Placeholder";

const cases = ["Case study 1", "Case study 2", "Case study 3"];

export default function Proof() {
  if (!site.showPlaceholders) return null;

  return (
    <section id="proof" className="section">
      <div className="container-page">
        <h2 className="heading max-w-2xl">Our work</h2>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((name) => (
            <li key={name} className="card space-y-3">
              <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
              <Placeholder>The problem the client had</Placeholder>
              <Placeholder>What we did</Placeholder>
              <Placeholder>The real result, with a number only if it is true</Placeholder>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Placeholder>Demo area: add real screenshots or a short screen recording of a real project.</Placeholder>
        </div>
      </div>
    </section>
  );
}

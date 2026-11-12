import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Businesses we work with</h2>
          <p className="lead mt-5">
            Every business is different, but the everyday problems are often familiar. Here are the
            ones we hear about most, and how we would approach them.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {industries.map((item) => (
            <li key={item.title} className="card">
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-ink">Typical pains</p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                    {item.pains.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-link">How we would solve them</p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                    {item.solves.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

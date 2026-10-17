const steps = [
  {
    title: "Understand your current flow",
    text: "We sit with your team and learn how work really happens today.",
  },
  {
    title: "Identify bottlenecks",
    text: "Together we find where time is lost and where mistakes creep in.",
  },
  {
    title: "Design a practical solution",
    text: "We shape a simple setup that fits your business, not the other way round.",
  },
  {
    title: "Implement and support",
    text: "We set it up, train your team, and stay with you as things settle in.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">Our approach</h2>
          <p className="lead mt-5">
            Four simple steps, done together with you. We review how things are going after launch
            and keep improving, because a good process is never really finished.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

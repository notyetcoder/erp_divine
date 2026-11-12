import Photo from "@/components/Photo";
import { images } from "@/lib/images";
import { phases } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="heading">How an implementation runs</h2>
          <p className="lead mt-5">
            Six phases, done together with you. How long each one takes depends on your business,
            and we agree timings with you before we start.
          </p>
        </div>

        <Photo slot={images.approach} ratio="aspect-[21/9]" className="mt-10" />

        <ol className="mt-14">
          {phases.map((phase, index) => (
            <li
              key={phase.title}
              className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 pb-10 last:pb-0"
            >
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">
                {index + 1}
              </span>
              {index < phases.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0 left-5 top-10 -ml-px border-l-2 border-dashed border-brand-200"
                />
              )}
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {phase.title}
                    {phase.duration && (
                      <span className="pill ml-3 align-middle">{phase.duration}</span>
                    )}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{phase.text}</p>
                </div>
                <p className="mt-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-muted lg:col-span-7 lg:mt-0 lg:self-start">
                  <span className="font-semibold text-ink">You get: </span>
                  {phase.gets}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Photo from "@/components/Photo";
import { images } from "@/lib/images";

export default function Story() {
  return (
    <section id="story" className="section border-y border-line bg-brand-50/70">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="heading">Why we do this</h2>
          <Photo slot={images.story} className="mt-8" />
        </div>

        <div>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              One of us comes from a village and loves farming. We did not choose this work because
              it is easy money. It is not.
            </p>
            <p>
              One day, one of us saw a husband and wife in a small shop. They wrote the day’s
              sales, the money earned and what was still to be paid in one diary, then copied it
              into another. They used a calculator, and also pen and paper.
            </p>
            <p>
              We thought: if their work took less effort, they could give that time to their family.
              That thought stays with us. We want to learn and grow alongside the businesses we
              help. We also need to earn a living, and we say so openly.
            </p>
          </div>

          <div className="card mt-8">
            <h3 className="text-lg font-semibold text-ink">Where we are today</h3>
            <p className="mt-2 leading-relaxed text-muted">
              We are two people, and we are new. We have not yet completed a client project, and we
              will not pretend otherwise. We are an independent ERP implementation service, mostly ERPNext, and not an official Frappe partner. What we promise is care, hard work and plain speaking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

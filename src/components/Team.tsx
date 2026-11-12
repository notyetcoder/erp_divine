import { site } from "@/lib/site";
import Placeholder from "@/components/Placeholder";

export default function Team() {
  if (!site.showPlaceholders) return null;

  return (
    <section id="team" className="section bg-surface">
      <div className="container-page">
        <h2 className="heading max-w-2xl">The people behind it</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {["Founder", "Team member"].map((role) => (
            <li key={role} className="card space-y-3">
              <Placeholder>Photo of {role.toLowerCase()}, with honest alt text</Placeholder>
              <Placeholder>Name</Placeholder>
              <Placeholder>Short, true bio</Placeholder>
              <Placeholder>LinkedIn link</Placeholder>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

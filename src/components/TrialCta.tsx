import { ExternalLink } from "lucide-react";
import { links } from "@/lib/links";

export default function TrialCta({
  href = links.trial,
  label = "Start a free 14-day trial on Frappe Cloud",
  note = true,
  variant = "secondary",
  track = "trial",
}: {
  href?: string;
  label?: string;
  note?: boolean;
  variant?: "primary" | "secondary" | "quiet";
  track?: string;
}) {
  const cls = variant === "primary" ? "btn-primary" : variant === "quiet" ? "btn-quiet" : "btn-secondary";
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" data-track={track} className={cls}>
        {label}
        <ExternalLink size={15} aria-hidden="true" className="ml-2 shrink-0" />
      </a>
      {note && (
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted">
          Opens Frappe Cloud, which Frappe runs. After the 14 days you choose a Frappe Cloud plan to keep your site.
        </p>
      )}
    </div>
  );
}

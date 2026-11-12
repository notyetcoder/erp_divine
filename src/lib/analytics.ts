type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    plausible?: (event: string, options?: { props: Params }) => void;
  }
}

/**
 * Placeholder analytics hook. It does nothing until you add an analytics script
 * (Google Tag Manager, Plausible, etc.) to the page. Events then flow through automatically:
 *  - "cta_click"  for any link or button with a data-track="name" attribute
 *  - "form_submit" when the contact form succeeds or fails
 */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event, ...params });
  window.plausible?.(event, { props: params });
}

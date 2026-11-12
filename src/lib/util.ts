export function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
export const moduleHref = (slug: string) => `/products/erpnext/modules/${slug}`;
export const featureHref = (moduleSlug: string, title: string) => `/products/erpnext/modules/${moduleSlug}/${slugify(title)}`;
export const appHref = (slug: string) => `/products/${slug}`;
export const appFeatureHref = (slug: string, title: string) => `/products/${slug}/features/${slugify(title)}`;

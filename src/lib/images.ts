export type PhotoSlot = { src: string; alt: string; caption?: string } | null;

/**
 * Optional photos. A slot set to null shows nothing, so the site works without any photos.
 *
 * To use a photo:
 *  1. Put the file in public/images/ (JPG or WebP, about 1600 px wide, under 400 KB).
 *  2. Replace null with { src: "/images/your-file.jpg", alt: "Plain, honest description" }.
 *
 * Honest alt text matters. Describe what the picture shows, and do not present stock photos
 * as your own team, office or clients.
 */
export const images: Record<"story" | "approach" | "contact", PhotoSlot> = {
  story: null, // beside "Why we do this": a small shop counter, a ledger, a village
  approach: null, // wide banner above the steps: two people talking across a table
  contact: null, // above the contact options: a small workshop or a shop front
};

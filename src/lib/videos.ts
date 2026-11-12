/**
 * Official, public YouTube videos only. Add an entry only after you have checked the video
 * is published by Frappe and is relevant. Example:
 *   { id: "VIDEO_ID", title: "Title as shown on YouTube", product: "erpnext" }
 * Nothing loads from YouTube until a visitor presses play.
 */
export type Video = { id: string; title: string; product: string };
export const videos: Video[] = [];

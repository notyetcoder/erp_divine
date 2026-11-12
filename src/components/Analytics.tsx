"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>("[data-track]");
      if (el?.dataset.track) track("cta_click", { label: el.dataset.track });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", localStorage.getItem("theme") !== "light");
    } catch {
      document.documentElement.classList.add("dark");
    }
    document.documentElement.dataset.hydrated = "true";
  }, [pathname]);

  return null;
}

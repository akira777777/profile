"use client";

import type { CSSProperties } from "react";

export default function FadeIn({
  children,
  delay = 0,
  duration = 1,
  direction = "none",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "none";
  className?: string;
}) {
  const offset =
    direction === "down"
      ? "translate3d(0, 12px, 0)"
      : direction === "up"
        ? "translate3d(0, -12px, 0)"
        : direction === "left"
          ? "translate3d(-12px, 0, 0)"
          : direction === "right"
            ? "translate3d(12px, 0, 0)"
            : "none";

  const style = {
    animation: offset === "none" ? undefined : `fade-in-soft ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
    "--fade-start": offset,
  } as CSSProperties;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

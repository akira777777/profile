"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
};

const offsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

type FadeInStyle = CSSProperties & {
  "--fade-delay": string;
  "--fade-duration": string;
  "--fade-x": string;
  "--fade-y": string;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const offset = offsets[direction];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsInView(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: FadeInStyle = {
    "--fade-delay": `${delay}s`,
    "--fade-duration": `${duration}s`,
    "--fade-x": `${offset.x}px`,
    "--fade-y": `${offset.y}px`,
  };

  return (
    <div
      ref={ref}
      data-in-view={isInView}
      className={`fade-in ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

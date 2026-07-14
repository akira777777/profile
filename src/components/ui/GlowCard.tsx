"use client";

import React, { useRef, useState } from "react";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--accent-soft)",
  glowSize = 350,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[28px] border border-border bg-card/70 shadow-[0_24px_80px_rgba(20,20,35,0.14)] backdrop-blur-xl transition-colors hover:border-accent/40 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
      style={{
        "--mouse-x": "-999px",
        "--mouse-y": "-999px",
      } as React.CSSProperties}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${glowSize}px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

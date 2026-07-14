"use client";

import React, { useRef, useState } from "react";

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  glowColor?: string;
  glowSize?: number;
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--accent-soft)",
  glowSize = 350,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
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
    
    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-border bg-card/70 shadow-[0_16px_48px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:border-accent/40 dark:shadow-[0_16px_48px_rgba(0,0,0,0.2)] ${className}`}
      style={{
        "--mouse-x": "-999px",
        "--mouse-y": "-999px",
      } as React.CSSProperties}
      {...props}
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

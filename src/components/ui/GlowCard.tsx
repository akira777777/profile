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
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden border border-border bg-card/55 transition-colors hover:border-accent/40 ${className}`}
      style={{
        // Define Custom CSS variables inline
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`,
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

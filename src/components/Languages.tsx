"use client";

import { useEffect, useRef, useState } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import GlowCard from "./ui/GlowCard";

type Languages = Messages["languages"];

type LangItem = { name: string; level: string; note: string };

function levelToPercent(level: string): number {
  const v = level.trim().toUpperCase();
  if (v === "NATIVE" || v.startsWith("РОДН")) return 100;
  const map: Record<string, number> = {
    C2: 95,
    C1: 85,
    B2: 70,
    B1: 55,
    A2: 35,
    A1: 20,
  };
  return map[v] ?? 70;
}

const ORDER = ["ru", "cs", "en"] as const;

function AnimatedProgressBar({
  percent,
  isNative,
  label,
}: {
  percent: number;
  isNative: boolean;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        // Small delay for visual effect
        const timer = setTimeout(() => setWidth(percent), 150);
        observer.disconnect();
        return () => clearTimeout(timer);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="h-2 w-full overflow-hidden bg-border rounded-full">
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`h-full transition-all duration-1000 ease-out ${
          isNative ? "bg-emerald-500" : "bg-accent"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function Languages({ languages }: { languages: Languages }) {
  const items = ORDER.map((key) => ({
    key,
    ...(languages.items[key] as LangItem),
  }));

  return (
    <Section id="languages">
      <SectionHeading eyebrow="06" title={languages.title} subtitle={languages.subtitle} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {items.map((item, i) => {
          const pct = levelToPercent(item.level);
          const isNative = pct === 100;
          return (
            <FadeIn key={item.key} delay={i * 0.1}>
              <GlowCard
                className="flex h-full flex-col gap-4 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold ${
                      isNative
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                        : "bg-accent-soft text-accent"
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
                <AnimatedProgressBar
                  percent={pct}
                  isNative={isNative}
                  label={`${item.name}: ${item.level}`}
                />
                <p className="text-sm leading-relaxed text-muted">{item.note}</p>
              </GlowCard>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}

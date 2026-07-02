"use client";

import { useEffect, useRef, useState } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import GlowCard from "./ui/GlowCard";

type About = Messages["about"];

const stats = [
  { key: "projects", value: 5 },
  { key: "years", value: 5 },
  { key: "languages", value: 3 },
] as const;

function AnimatedCounter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated) return;
        setHasAnimated(true);
        observer.disconnect();

        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = (now - start) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export default function About({ about }: { about: About }) {
  return (
    <Section bgLetter="A" id="about">
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.95fr] lg:gap-12">
        <div>
          <SectionHeading eyebrow="01" title={about.title} />
          <FadeIn className="border-l border-accent/45 pl-5 mt-6">
            <p className="text-xl font-semibold leading-relaxed text-foreground">{about.lead}</p>
            <div className="mt-5 space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-pretty text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <dl className="grid grid-cols-3 gap-3 self-end lg:grid-cols-1 lg:self-start lg:mt-16">
          {stats.map((s, i) => (
            <FadeIn key={s.key} delay={0.1 + i * 0.1}>
              <GlowCard
                className="p-4 text-center lg:text-left"
              >
                <dt className="order-2 mt-1 text-xs font-semibold text-muted sm:text-sm">
                  {about.stats[s.key]}
                </dt>
                <dd className="order-1 text-3xl font-bold text-foreground sm:text-4xl">
                  <AnimatedCounter target={s.value} />
                </dd>
              </GlowCard>
            </FadeIn>
          ))}
        </dl>
      </div>
    </Section>
  );
}

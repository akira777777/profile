"use client";

import { useState, useEffect, useCallback } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";
import GlowCard from "./ui/GlowCard";
import FadeIn from "./ui/FadeIn";

type TestimonialsMessages = Messages["testimonials"];

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialsMessages;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const items = testimonials.items || [];

  const handleNext = useCallback(() => {
    if (isAnimating || isPaused || items.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, isPaused, items.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, items.length]);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext, items.length]);

  if (items.length === 0) return null;

  return (
    <Section id="testimonials" className="border-t border-border">
      <SectionHeading
        eyebrow="05"
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />
      <div className="mt-8 flex flex-col items-center">
        <FadeIn className="w-full max-w-3xl">
          <GlowCard
            className="border border-border bg-card/45 p-6 md:p-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative min-h-[220px] md:min-h-[180px] overflow-hidden">
              {/* Decorative quote mark */}
              <svg
                aria-hidden="true"
                className="absolute -top-2 -left-1 h-16 w-16 text-accent/10 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                      isActive
                        ? "translate-x-0 opacity-100 scale-100 pointer-events-auto"
                        : idx > activeIndex
                        ? "translate-x-12 opacity-0 scale-95 pointer-events-none"
                        : "-translate-x-12 opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <blockquote className="text-base leading-relaxed text-foreground md:text-lg italic font-medium">
                      &ldquo;{item.text}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-accent-soft text-accent font-bold text-sm">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <cite className="not-italic text-sm font-bold text-foreground block">
                          {item.name}
                        </cite>
                        <span className="text-xs text-muted block mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Navigation */}
            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
              <div className="flex gap-1">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setActiveIndex(idx);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "w-6 bg-accent"
                        : "w-1.5 bg-border hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-8 w-8 items-center justify-center border border-border bg-card text-foreground hover:bg-card-strong transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-8 w-8 items-center justify-center border border-border bg-card text-foreground hover:bg-card-strong transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </GlowCard>
        </FadeIn>
      </div>
    </Section>
  );
}

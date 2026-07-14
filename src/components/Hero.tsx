"use client";

import Image from "next/image";
import type { Messages } from "@/i18n/dictionaries";
import { ArrowDownIcon, MapPinIcon } from "./icons";
import FadeIn from "./ui/FadeIn";

type HeroProps = {
  hero: Messages["hero"];
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section id="hero" className="relative -mt-20 overflow-hidden border-b border-border px-5 pb-5 pt-24 sm:px-8 sm:pb-8 sm:pt-28">
      {/* Clean, minimalist hero section layout */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(120deg, color-mix(in oklab, var(--accent) 13%, transparent), transparent 44%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.availability}
            </span>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-gradient text-xs font-bold uppercase tracking-wide">{hero.greeting}</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="max-w-4xl font-display text-balance text-[2.75rem] font-bold leading-[0.9] sm:text-7xl lg:text-[5.75rem]">
              <span className="gleamy-highlight text-foreground">{hero.name}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-semibold text-muted sm:text-lg">
              <span className="text-foreground">{hero.role}</span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="font-mono text-xs text-muted sm:text-sm">{hero.roleSuffix}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-display text-sm font-semibold uppercase text-muted sm:text-base">
              {hero.descriptor.split(".").map((word, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-1 text-accent-secondary">.</span>}
                  {word}
                </span>
              ))}
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-lg">
              {hero.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-4 text-sm font-semibold text-accent-foreground shadow-[0_8px_20px_rgba(37,99,235,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(37,99,235,0.3)] active:scale-[0.99] sm:h-11 sm:px-5"
              >
                {hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="hover-slash-draw inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card/80 px-4 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card-strong sm:h-11 sm:px-5"
              >
                {hero.ctaContact}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-1 flex items-center gap-2 text-sm text-muted sm:mt-3">
              <MapPinIcon className="h-4 w-4 text-accent" />
              {hero.location}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="left" className="hidden lg:block h-full relative">
          <div className="group relative h-[520px] w-full select-none overflow-hidden rounded-[20px] border border-border/60 bg-card/30 shadow-[0_28px_90px_rgba(20,20,35,0.1)] backdrop-blur-xl dark:shadow-[0_28px_90px_rgba(0,0,0,0.25)]">
            {/* Portrait Image with strict grayscale filters for a serious, professional look */}
            <Image
              src="/hero-portrait.jpg"
              alt="Artem Mikhailov Portrait"
              fill
              priority
              className="object-cover object-center grayscale contrast-[1.08] brightness-[0.88] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
            />
            {/* Gradient Overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-30" />

            {/* Profile Info Overlay */}
            <div className="absolute bottom-5 left-5 right-5 border border-border/50 bg-background/80 backdrop-blur-md p-4 shadow-2xl transition-all duration-300 hover:border-accent/50">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-semibold">
                  {hero.profileLabel}
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-accent">
                  <span className="h-2 w-2 bg-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                {hero.focusValue}
              </h3>
              
              <div className="flex gap-2 mb-5 text-[10px] font-mono text-muted uppercase">
                {hero.focusTags.map((tag) => (
                  <span key={tag} className="border border-border px-2 py-1 bg-background/50">{tag}</span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] uppercase text-muted font-bold block">{hero.stackLabel}</span>
                  <span className="font-semibold text-foreground mt-0.5 block">Next.js / React</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-muted font-bold block">{hero.baseLabel}</span>
                  <span className="font-semibold text-foreground mt-0.5 block">{hero.location}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="hover-pause relative left-[calc(-50vw+50%)] my-4 w-screen overflow-hidden border-y border-border bg-card/50 py-2 backdrop-blur select-none sm:my-6 sm:py-3">
        <div className="flex animate-marquee whitespace-nowrap text-[10px] font-bold uppercase text-muted tracking-wider opacity-35">
          <span className="px-4">{hero.ticker} •</span>
          <span className="px-4">{hero.ticker} •</span>
          <span className="px-4">{hero.ticker} •</span>
          <span className="px-4">{hero.ticker} •</span>
          <span className="px-4">{hero.ticker} •</span>
          <span className="px-4">{hero.ticker} •</span>
        </div>
      </div>

      <a
        href="#about"
        className="relative z-10 mx-auto hidden w-full max-w-6xl items-center justify-center gap-2 text-xs font-medium uppercase text-muted transition-colors hover:text-foreground sm:flex"
      >
        {hero.scroll}
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

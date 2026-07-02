import type { Messages } from "@/i18n/dictionaries";
import { ArrowDownIcon, MapPinIcon } from "./icons";
import FadeIn from "./ui/FadeIn";

type Hero = Messages["hero"];

export default function Hero({ hero }: { hero: Hero }) {
  const initial = hero.name.charAt(0);
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
      {/* Backdrop large ghost initial (Gleamy 454px editorial device) */}
      <div className="outline-text absolute -left-10 -top-16 opacity-70 dark:opacity-60 pointer-events-none select-none z-0">
        {initial}
      </div>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--accent) 16%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] dark:opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {hero.availability}
          </span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{hero.greeting}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-display text-balance text-6xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-8xl lg:text-[7.5rem]">
            <span className="gleamy-highlight text-foreground">{hero.name}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-muted sm:text-xl">
            <span className="tracking-tight text-foreground">{hero.role}</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="font-mono text-xs text-muted sm:text-sm">{hero.roleSuffix}</span>
          </div>
        </FadeIn>

        {/* Gleamy period-separated capability descriptor */}
        <FadeIn delay={0.3}>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted sm:text-base">
            {hero.descriptor.split(".").map((word, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-1 text-accent">.</span>}
                {word}
              </span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {hero.tagline}
          </p>
        </FadeIn>

        {/* Gleamy tilted infinite ticker marquee */}
        <div className="relative w-screen left-[calc(-50vw+50%)] overflow-hidden py-5 bg-card/60 backdrop-blur-md border-y border-border/80 rotate-[-1.2deg] my-10 select-none">
          <div className="flex animate-marquee whitespace-nowrap text-[11px] font-bold tracking-[0.25em] uppercase text-accent/90">
            <span className="px-4">{hero.ticker} •</span>
            <span className="px-4">{hero.ticker} •</span>
            <span className="px-4">{hero.ticker} •</span>
            <span className="px-4">{hero.ticker} •</span>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card-strong hover-slash-draw"
            >
              {hero.ctaContact}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPinIcon className="h-4 w-4 text-accent animate-pulse" />
            {hero.location}
          </div>
        </FadeIn>
      </div>

      <a
        href="#about"
        className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
      >
        {hero.scroll}
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

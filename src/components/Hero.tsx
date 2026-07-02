import type { Messages } from "@/i18n/dictionaries";
import { ArrowDownIcon, MapPinIcon } from "./icons";
import FadeIn from "./ui/FadeIn";

type Hero = Messages["hero"];

export default function Hero({ hero }: { hero: Hero }) {
  const initial = hero.name.charAt(0);
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border px-5 pb-6 pt-8 sm:px-8 sm:pb-12 sm:pt-14">
      <div className="outline-text pointer-events-none absolute -left-10 -top-12 z-0 select-none opacity-45 dark:opacity-55">
        {initial}
      </div>

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

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.availability}
            </span>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xs font-bold uppercase text-accent">{hero.greeting}</p>
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
                className="inline-flex h-10 items-center justify-center bg-accent px-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.015] active:scale-[0.99] sm:h-11 sm:px-5"
              >
                {hero.ctaProjects}
              </a>
              <a
                href="#contact"
                className="hover-slash-draw inline-flex h-10 items-center justify-center border border-border bg-card/80 px-4 text-sm font-semibold text-foreground transition-colors hover:bg-card-strong sm:h-11 sm:px-5"
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

        <FadeIn delay={0.3} direction="left">
          <div className="relative hidden overflow-hidden border border-border bg-card/70 p-4 shadow-2xl shadow-black/10 backdrop-blur lg:block">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-40 w-40 border border-accent/25"
            />
            <div className="relative mb-4 flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-[11px] uppercase text-muted">{hero.profileLabel}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase text-accent">
                <span className="h-2 w-2 bg-accent" />
                2026
              </span>
            </div>
            <div className="relative space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase text-muted">{hero.focusLabel}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">{hero.focusValue}</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {hero.focusTags.map((item) => (
                  <span key={item} className="border border-border bg-background/60 px-3 py-2 text-center font-mono text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
              <div className="border border-border bg-background/70 p-3">
                <div className="mb-3 h-2 w-1/2 bg-accent/70" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-border" />
                  <div className="h-2 w-4/5 bg-border" />
                  <div className="h-2 w-2/3 bg-border" />
                </div>
                <div className="mt-5 flex gap-2">
                  <div className="h-8 flex-1 bg-accent-soft" />
                  <div className="h-8 flex-1 bg-[var(--accent-secondary-soft)]" />
                </div>
              </div>
              <div className="grid grid-cols-2 border border-border bg-card/80">
                <div className="border-r border-border p-3">
                  <p className="font-mono text-[10px] uppercase text-muted">{hero.stackLabel}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Next.js / React</p>
                </div>
                <div className="p-3">
                  <p className="font-mono text-[10px] uppercase text-muted">{hero.baseLabel}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{hero.location}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="hover-pause relative left-[calc(-50vw+50%)] my-4 w-screen overflow-hidden border-y border-border bg-card/50 py-2 backdrop-blur select-none sm:my-6 sm:py-3">
        <div className="flex animate-marquee whitespace-nowrap text-[11px] font-bold uppercase text-accent/85">
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

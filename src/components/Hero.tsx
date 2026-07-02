import type { Messages } from "@/i18n/dictionaries";
import { ArrowDownIcon, MapPinIcon } from "./icons";

type Hero = Messages["hero"];

export default function Hero({ hero }: { hero: Hero }) {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
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

      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {hero.availability}
        </span>

        <p className="text-base font-medium text-accent sm:text-lg">{hero.greeting}</p>

        <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {hero.name}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-muted sm:text-xl">
          <span>{hero.role}</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="font-mono text-sm text-muted sm:text-base">{hero.roleSuffix}</span>
        </div>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {hero.tagline}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            {hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card-strong"
          >
            {hero.ctaContact}
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPinIcon className="h-4 w-4 text-accent" />
          {hero.location}
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 flex w-full max-w-5xl items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
      >
        {hero.scroll}
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

import type { ReactNode } from "react";

export function Section({
  id,
  children,
  bgLetter,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  bgLetter?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 ${className}`}
    >
      {bgLetter && (
        <div className="outline-text absolute -left-8 top-2 z-0 select-none opacity-55">
          {bgLetter}
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
          <span className="h-px w-7 bg-gradient-to-r from-accent to-accent-secondary" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

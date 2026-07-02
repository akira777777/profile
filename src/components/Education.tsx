import type { Messages } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { GraduationIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import GlowCard from "./ui/GlowCard";

type Education = Messages["education"];

export default function Education({
  education,
  locale,
}: {
  education: Education;
  locale: Locale;
}) {
  return (
    <Section bgLetter="E" id="education" className="border-y border-border bg-card/20">
      <SectionHeading eyebrow="04" title={education.title} />
      <div className="mt-8">
        <FadeIn>
          <GlowCard className="p-6 sm:p-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent-soft text-accent">
                <GraduationIcon className="h-7 w-7" />
              </span>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {education.status}
                  </span>
                  <span className="border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {education.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {education.degree}
                </h3>

                <div className="space-y-1.5">
                  <p className="text-base font-semibold text-foreground/90">{education.school}</p>
                  <p className="text-sm text-muted">{education.schoolFull}</p>
                </div>

                <dl className="grid gap-4 sm:grid-cols-2 border-t border-border pt-4">
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-muted">
                      {education.programLabel}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground/90">{education.program}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-muted">
                      {education.locationLabel}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground/90">{education.location}</dd>
                  </div>
                </dl>

                <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted">
                  {education.details}
                </p>
              </div>
            </div>
          </GlowCard>
        </FadeIn>

        {/* Timeline block */}
        {education.timeline && education.timeline.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h4 className="font-display text-lg font-bold text-foreground mb-8 border-b border-border pb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
              {locale === "ru" ? "Хронология развития" : "Chronological Milestones"}
            </h4>
            <div className="relative border-l-2 border-border pl-6 ml-4 space-y-10">
              {education.timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <div className="relative group">
                    {/* Glowing bullet marker */}
                    <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background transition-transform duration-300 group-hover:scale-125">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-xs font-bold text-accent block tracking-wider">
                      {item.year}
                    </span>
                    <h5 className="font-display text-base font-bold text-foreground mt-1 group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h5>
                    <p className="text-sm text-muted mt-2 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

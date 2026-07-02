import type { Messages } from "@/i18n/dictionaries";
import { GraduationIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";

type Education = Messages["education"];

export default function Education({ education }: { education: Education }) {
  return (
    <Section bgLetter="E" id="education" className="border-y border-border bg-card/20">
      <SectionHeading eyebrow="04" title={education.title} />
      <div className="mt-8">
        <FadeIn>
          <div className="relative overflow-hidden border border-border bg-background/55 p-6 transition-colors hover:border-accent/45 hover:bg-card/70 sm:p-7">
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
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

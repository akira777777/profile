import type { Messages } from "@/i18n/dictionaries";
import { GraduationIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";

type Education = Messages["education"];

export default function Education({ education }: { education: Education }) {
  return (
    <Section id="education" className="border-y border-border bg-card/40">
      <SectionHeading eyebrow="04" title={education.title} />
      <div className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <GraduationIcon className="h-7 w-7" />
            </span>
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {education.status}
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                  {education.period}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {education.degree}
              </h3>

              <div className="space-y-1.5">
                <p className="text-base font-semibold">{education.school}</p>
                <p className="text-sm text-muted">{education.schoolFull}</p>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {education.programLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{education.program}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">
                    {education.locationLabel}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{education.location}</dd>
                </div>
              </dl>

              <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted">
                {education.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

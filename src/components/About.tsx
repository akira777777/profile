import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";

type About = Messages["about"];

const stats = [
  { key: "projects", value: 5 },
  { key: "years", value: 5 },
  { key: "languages", value: 3 },
] as const;

export default function About({ about }: { about: About }) {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01" title={about.title} />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          <p className="text-xl font-medium leading-relaxed text-foreground">{about.lead}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1">
          {stats.map((s) => (
            <div
              key={s.key}
              className="rounded-2xl border border-border bg-card p-5 text-center lg:text-left"
            >
              <dt className="order-2 mt-1 text-xs font-medium text-muted sm:text-sm">
                {about.stats[s.key]}
              </dt>
              <dd className="order-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";

type About = Messages["about"];

const stats = [
  { key: "projects", value: 5 },
  { key: "years", value: 5 },
  { key: "languages", value: 3 },
] as const;

export default function About({ about }: { about: About }) {
  return (
    <Section bgLetter="A" id="about">
      <SectionHeading eyebrow="01" title={about.title} />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.95fr] lg:gap-12">
        <FadeIn className="border-l border-accent/45 pl-5">
          <p className="text-xl font-semibold leading-relaxed text-foreground">{about.lead}</p>
          <div className="mt-5 space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
          </div>
        </FadeIn>

        <dl className="grid grid-cols-3 gap-3 self-start lg:grid-cols-1">
          {stats.map((s, i) => (
            <FadeIn key={s.key} delay={0.1 + i * 0.1}>
              <div
                className="border border-border bg-card/55 p-4 text-center transition-all duration-300 hover:border-accent/45 hover:bg-card/85 lg:text-left"
              >
                <dt className="order-2 mt-1 text-xs font-semibold text-muted sm:text-sm">
                  {about.stats[s.key]}
                </dt>
                <dd className="order-1 text-3xl font-bold text-foreground sm:text-4xl">
                  {s.value}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </Section>
  );
}

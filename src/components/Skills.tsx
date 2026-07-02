import type { ReactNode } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { CodeIcon, ServerIcon, ToolIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";

type Skills = Messages["skills"];

const groupIcons: Record<string, ReactNode> = {
  frontend: <CodeIcon className="h-5 w-5" />,
  backend: <ServerIcon className="h-5 w-5" />,
  tools: <ToolIcon className="h-5 w-5" />,
};

export default function Skills({ skills }: { skills: Skills }) {
  const entries = Object.entries(skills.groups) as [string, { label: string; items: string[] }][];

  return (
    <Section bgLetter="S" id="skills" className="border-y border-border bg-card/20">
      <SectionHeading eyebrow="02" title={skills.title} subtitle={skills.subtitle} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([key, group], i) => {
          return (
            <FadeIn key={key} delay={i * 0.1}>
              <div
                className="h-full border border-border bg-background/50 p-5 transition-all duration-300 hover:border-accent/45 hover:bg-card/80"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-accent-soft text-accent">
                    {groupIcons[key] ?? <CodeIcon className="h-5 w-5" />}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">{group.label}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-accent/35 hover:bg-card-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}

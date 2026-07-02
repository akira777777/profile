import type { ReactNode } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { CodeIcon, ServerIcon, ToolIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";

type Skills = Messages["skills"];

const groupIcons: Record<string, ReactNode> = {
  frontend: <CodeIcon className="h-5 w-5" />,
  backend: <ServerIcon className="h-5 w-5" />,
  tools: <ToolIcon className="h-5 w-5" />,
};

export default function Skills({ skills }: { skills: Skills }) {
  const entries = Object.entries(skills.groups) as [string, { label: string; items: string[] }][];

  return (
    <Section bgLetter="S" id="skills" className="border-y border-border bg-card/10">
      <SectionHeading eyebrow="02" title={skills.title} subtitle={skills.subtitle} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([key, group]) => {
          return (
            <div
              key={key}
              className="rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card/70 hover:shadow-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {groupIcons[key] ?? <CodeIcon className="h-5 w-5" />}
                </span>
                <h3 className="text-base font-bold tracking-tight text-foreground">{group.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent/10 bg-card px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-accent/30 hover:bg-card-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

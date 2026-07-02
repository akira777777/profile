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
  const groups = Object.values(skills.groups);

  return (
    <Section id="skills" className="border-y border-border bg-card/40">
      <SectionHeading eyebrow="02" title={skills.title} subtitle={skills.subtitle} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => {
          const key = group.label;
          return (
            <div
              key={key}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {groupIcons[key] ?? <CodeIcon className="h-5 w-5" />}
                </span>
                <h3 className="text-base font-semibold">{group.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
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

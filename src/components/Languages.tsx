import type { Messages } from "@/i18n/dictionaries";
import { Section, SectionHeading } from "./ui/Section";

type Languages = Messages["languages"];

type LangItem = { name: string; level: string; note: string };

function levelToPercent(level: string): number {
  const v = level.trim().toUpperCase();
  if (v === "NATIVE" || v.startsWith("РОДН")) return 100;
  const map: Record<string, number> = {
    C2: 95,
    C1: 85,
    B2: 70,
    B1: 55,
    A2: 35,
    A1: 20,
  };
  return map[v] ?? 70;
}

const ORDER = ["ru", "cs", "en"] as const;

export default function Languages({ languages }: { languages: Languages }) {
  const items = ORDER.map((key) => ({
    key,
    ...(languages.items[key] as LangItem),
  }));

  return (
    <Section bgLetter="L" id="languages">
      <SectionHeading eyebrow="05" title={languages.title} subtitle={languages.subtitle} />
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {items.map((item) => {
          const pct = levelToPercent(item.level);
          const isNative = pct === 100;
          return (
            <div
              key={item.key}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card/70 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{item.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    isNative
                      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      : "bg-accent-soft text-accent"
                  }`}
                >
                  {item.level}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full ${
                    isNative ? "bg-emerald-500" : "bg-accent"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

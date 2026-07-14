"use client";

import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "./ui/Section";
import GlowCard from "./ui/GlowCard";

type TerminalProps = {
  messages: Messages;
  locale: Locale;
};

type LogLine = {
  text: string;
  type: "input" | "output" | "error" | "info" | "system";
};

export default function Terminal({ messages, locale }: TerminalProps) {
  const t = messages.terminal;
  const [history, setHistory] = useState<LogLine[]>(() => [
    { text: messages.terminal.welcome, type: "system" },
    { text: messages.terminal.helpHint, type: "info" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [crtMode, setCrtMode] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    "help",
    "about",
    "skills",
    "projects",
    "education",
    "contact",
    "clear",
    "crt",
    "theme",
    "language",
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const val = inputVal.trim().toLowerCase();
      if (!val) return;
      const matches = availableCommands.filter((cmd) => cmd.startsWith(val));
      if (matches.length === 1) {
        setInputVal(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev,
          { text: `visitor@artem-mikhailov:~$ ${inputVal}`, type: "input" },
          { text: matches.join("    "), type: "info" },
        ]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal("");
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    }
  };

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputVal.trim().toLowerCase();
    if (!command) return;

    setCommandHistory((prev) => {
      if (prev.length > 0 && prev[prev.length - 1] === command) return prev;
      return [...prev, command];
    });
    setHistoryPointer(-1);

    const newLines: LogLine[] = [
      { text: `visitor@artem-mikhailov:~$ ${inputVal}`, type: "input" }
    ];

    switch (command) {
      case "help":
        newLines.push({ text: t.commands.help.output, type: "output" });
        newLines.push({ text: "theme      - " + t.themeToggle, type: "info" });
        newLines.push({ text: "language   - " + t.languageSwitch, type: "info" });
        newLines.push({ text: "crt        - " + t.crtToggle, type: "info" });
        break;

      case "about":
        newLines.push({ text: messages.about.lead, type: "output" });
        messages.about.paragraphs.forEach((p) => {
          newLines.push({ text: p, type: "output" });
        });
        break;

      case "skills":
        newLines.push({ text: `=== ${messages.skills.title} ===`, type: "info" });
        Object.entries(messages.skills.groups).forEach(([, group]) => {
          newLines.push({
            text: `[${group.label}]: ${group.items.join(", ")}`,
            type: "output",
          });
        });
        break;

      case "projects":
        newLines.push({ text: `=== ${messages.projects.title} ===`, type: "system" });
        Object.entries(messages.projects.items).forEach(([key, proj]) => {
          newLines.push({ text: `\n[ ${key.toUpperCase()} ]`, type: "info" });
          newLines.push({ text: `• Description: ${proj.description}`, type: "output" });
          newLines.push({ text: `• Challenge: ${proj.challenge}`, type: "output" });
          newLines.push({ text: `• Solution: ${proj.solution}`, type: "output" });
          newLines.push({ text: `• Achievements: ${proj.achievements.join(", ")}`, type: "output" });
          newLines.push({ text: `• Lighthouse Score: Performance ${proj.performance || 90} | SEO ${proj.seo || 90}`, type: "system" });
        });
        break;

      case "education":
        newLines.push({ text: `=== ${messages.education.title} ===`, type: "info" });
        newLines.push({ text: `${messages.education.degree}`, type: "output" });
        newLines.push({ text: `${messages.education.school} (${messages.education.period})`, type: "output" });
        newLines.push({ text: `${messages.education.details}`, type: "output" });
        break;

      case "contact":
        newLines.push({ text: `=== ${messages.contact.title} ===`, type: "info" });
        newLines.push({ text: `Email: ${site.email}`, type: "output" });
        newLines.push({ text: `Telegram: ${site.telegramUrl}`, type: "output" });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "theme": {
        const root = document.documentElement;
        const next = !root.classList.contains("dark");
        root.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
        newLines.push({
          text: `Theme changed to ${next ? t.themeDark : t.themeLight}`,
          type: "system",
        });
        break;
      }

      case "crt":
        setCrtMode((prev) => !prev);
        newLines.push({
          text: `CRT screen effect ${!crtMode ? t.crtEnabled : t.crtDisabled}`,
          type: "system",
        });
        break;

      case "language":
      case "lang": {
        const other = locale === "ru" ? "en" : "ru";
        newLines.push({
          text: t.languageRedirect,
          type: "system",
        });
        setHistory((prev) => [...prev, ...newLines]);
        setInputVal("");
        setTimeout(() => {
          window.location.href = other === "ru" ? "/" : "/en";
        }, 800);
        return;
      }

      case "secret":
      case "easteregg":
        newLines.push({
          text: "🚀 Google Antigravity loaded successfully! 'There is no spoon.'",
          type: "system",
        });
        break;

      default:
        newLines.push({ text: t.notFound, type: "error" });
        break;
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  return (
    <Section id="terminal-section" className="border-t border-border bg-card/10 pb-20">
      <SectionHeading
        eyebrow="07"
        title={t.title}
        subtitle={t.subtitle}
      />
      <div className={`mt-8 ${crtMode ? "crt-active" : ""}`}>
        <GlowCard className="w-full border border-border bg-slate-950/98 text-slate-100 font-mono text-sm shadow-2xl overflow-hidden rounded-md crt-screen">
          {/* Windows / macOS header bar */}
          <div className="flex items-center justify-between bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 select-none z-30 relative">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-zinc-400 font-sans font-medium">artem@mikhailov:~</span>
            
            {/* IDE Console indicator */}
            <span className="text-[9px] font-bold px-2 py-0.5 border border-zinc-700 bg-zinc-800 text-zinc-400 uppercase select-none">
              IDE CONSOLE
            </span>
          </div>

          {/* Console logs */}
          <div
            ref={containerRef}
            onClick={handleTerminalClick}
            className="h-80 overflow-y-auto p-4 flex flex-col gap-1.5 cursor-text no-scrollbar relative z-10"
          >
             {history.map((line, idx) => {
              let color = "text-slate-300";
              if (line.type === "input") color = "text-blue-400 font-semibold";
              if (line.type === "error") color = "text-rose-400";
              if (line.type === "info") color = "text-slate-400";
              if (line.type === "system") color = "text-indigo-400 font-bold";

              return (
                <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap`}>
                  {line.text}
                </div>
              );
            })}

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center mt-1">
              <span className="text-blue-400 font-semibold shrink-0">visitor@artem-mikhailov:~$ &nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.placeholder}
                aria-label={t.placeholder}
                className="bg-transparent text-slate-100 outline-none border-none flex-1 p-0 font-mono text-sm leading-normal focus:ring-0 focus:outline-none placeholder:text-zinc-800"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </form>
          </div>
        </GlowCard>
      </div>
    </Section>
  );
}

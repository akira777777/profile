"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
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
    { text: locale === "ru" ? "Введите 'help' для просмотра списка команд." : "Type 'help' to see all available commands.", type: "info" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [crtMode, setCrtMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

    const newLines: LogLine[] = [
      { text: `visitor@artem-mikhailov:~$ ${inputVal}`, type: "input" }
    ];

    switch (command) {
      case "help":
        newLines.push({ text: t.commands.help.output, type: "output" });
        newLines.push({ text: "theme      - " + (locale === "ru" ? "переключить темную/светлую тему" : "toggle dark/light theme"), type: "info" });
        newLines.push({ text: "language   - " + (locale === "ru" ? "переключить язык на английский" : "switch language to Russian"), type: "info" });
        newLines.push({ text: "crt        - " + (locale === "ru" ? "переключить эффект старого монитора" : "toggle retro CRT screen effect"), type: "info" });
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
        newLines.push({ text: `=== ${messages.projects.title} ===`, type: "info" });
        Object.entries(messages.projects.items).forEach(([key, proj]: [string, { description: string }]) => {
          newLines.push({ text: `• ${key.toUpperCase()}: ${proj.description}`, type: "output" });
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
        newLines.push({ text: `Email: fear75412@gmail.com`, type: "output" });
        newLines.push({ text: `Telegram: https://t.me/liltrafficRUS`, type: "output" });
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
          text: locale === "ru" ? `Тема переключена на ${next ? "ТЕМНУЮ" : "СВЕТЛУЮ"}` : `Theme changed to ${next ? "DARK" : "LIGHT"}`,
          type: "system",
        });
        break;
      }

      case "crt":
        setCrtMode((prev) => !prev);
        newLines.push({
          text: locale === "ru" ? `Эффект CRT ${!crtMode ? "ВКЛЮЧЕН" : "ВЫКЛЮЧЕН"}` : `CRT screen effect ${!crtMode ? "ENABLED" : "DISABLED"}`,
          type: "system",
        });
        break;

      case "language":
      case "lang": {
        const other = locale === "ru" ? "en" : "ru";
        newLines.push({
          text: locale === "ru" ? "Перенаправление на английскую версию..." : "Redirecting to Russian version...",
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
    <Section bgLetter="C" id="terminal-section" className="border-t border-border bg-card/10 pb-20">
      <SectionHeading
        eyebrow="07"
        title={t.title}
        subtitle={t.subtitle}
      />
      <div className="mt-8">
        <GlowCard className={`w-full border border-border bg-black/95 text-green-400 font-mono text-sm shadow-2xl overflow-hidden rounded-md ${
          crtMode ? "crt-screen crt-flicker-anim" : ""
        }`}>
          {/* Windows / macOS header bar */}
          <div className="flex items-center justify-between bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 select-none z-30 relative">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-zinc-400 font-sans font-medium">artem@mikhailov:~</span>
            
            {/* CRT Switcher */}
            <button
              type="button"
              onClick={() => setCrtMode((v) => !v)}
              className={`text-[10px] font-bold px-2 py-0.5 border cursor-pointer transition-all uppercase ${
                crtMode
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              CRT: {crtMode ? "ON" : "OFF"}
            </button>
          </div>

          {/* Console logs */}
          <div
            ref={containerRef}
            onClick={handleTerminalClick}
            className={`h-80 overflow-y-auto p-4 flex flex-col gap-1.5 cursor-text no-scrollbar relative z-10 ${
              crtMode ? "crt-phosphor-text" : ""
            }`}
          >
            {history.map((line, idx) => {
              let color = "text-zinc-300";
              if (line.type === "input") color = "text-emerald-400 font-semibold";
              if (line.type === "error") color = "text-red-400";
              if (line.type === "info") color = "text-cyan-400";
              if (line.type === "system") color = "text-amber-400 font-bold";

              return (
                <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap`}>
                  {line.text}
                </div>
              );
            })}

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center mt-1">
              <span className="text-emerald-400 font-semibold shrink-0">visitor@artem-mikhailov:~$ &nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={t.placeholder}
                className="bg-transparent text-green-400 outline-none border-none flex-1 p-0 font-mono text-sm leading-normal focus:ring-0 focus:outline-none placeholder:text-zinc-700"
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

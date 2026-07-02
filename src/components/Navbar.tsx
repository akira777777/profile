"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { CloseIcon, MenuIcon, DownloadIcon } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

type NavText = {
  about: string;
  skills: string;
  projects: string;
  education: string;
  languages: string;
  contact: string;
  menu: string;
  downloadCv: string;
};

const NAV_IDS = ["about", "skills", "projects", "education", "languages", "contact"] as const;

export default function Navbar({
  nav,
  themeToggle,
  locale,
}: {
  nav: NavText;
  themeToggle: string;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight > 0) {
        const percent = (window.scrollY / windowHeight) * 100;
        setScrollPercent(percent);
      }
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = NAV_IDS.map((id) => ({ id, label: nav[id] }));
  const name = locale === "ru" ? "Артём Михайлов" : "Artem Mikhailov";
  const role = locale === "ru" ? "Frontend" : "Frontend";

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <div
        className={`relative mx-auto max-w-6xl rounded-[24px] border transition-all duration-300 ${
          scrolled
            ? "border-border bg-card/85 shadow-[0_18px_50px_rgba(20,20,35,0.12)] backdrop-blur-xl dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            : "border-border/60 bg-card/45 backdrop-blur-lg"
        }`}
      >
      {/* Scroll Progress Bar */}
        <div
          className="absolute left-4 right-4 top-0 h-[3px] overflow-hidden rounded-full"
        >
          <div
            className="h-full bg-gradient-to-r from-accent via-fuchsia-400 to-accent-secondary transition-all duration-75 ease-out"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>

      <nav className="relative flex h-16 w-full items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href={locale === "ru" ? "/" : "/en"}
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-105">
            <span>{locale === "ru" ? "АМ" : "AM"}</span>
            <span className="absolute bottom-0 left-0 h-1 w-full bg-accent-secondary" />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate text-sm font-bold text-foreground">{name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{role}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-3 bottom-1 h-px bg-accent transition-transform duration-200 ${
                  activeSection === item.id
                    ? "scale-x-100 origin-left"
                    : "origin-left scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="hidden h-9 items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft px-3.5 text-xs font-semibold text-accent shadow-sm backdrop-blur transition-colors hover:bg-accent/20 sm:inline-flex"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            {nav.downloadCv}
          </a>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle label={themeToggle} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={nav.menu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card-strong md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-200 ${
            open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
          }`}
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-accent bg-accent-soft/50"
                      : "text-foreground hover:bg-card"
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="mr-2 inline-block h-1.5 w-1.5 bg-accent rounded-full" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {open ? (
          <div
            className="fixed inset-0 top-16 z-30 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        ) : null}
      </div>
      </div>
    </header>
  );
}

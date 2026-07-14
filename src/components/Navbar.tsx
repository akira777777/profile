"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import type { Locale } from "@/i18n/config";
import { MenuIcon, DownloadIcon } from "./icons";
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
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight > 0) {
        const percent = (window.scrollY / windowHeight) * 100;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${percent}%`;
        }
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

  const items = NAV_IDS.map((id) => ({ id, label: nav[id] }));
  const name = locale === "ru" ? "Артём Михайлов" : "Artem Mikhailov";
  const role = locale === "ru" ? "Frontend" : "Frontend";

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <div
        className={`relative mx-auto max-w-6xl rounded-xl border transition-all duration-300 ${
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
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-75 ease-out"
            style={{ width: "0%" }}
          />
        </div>

      <nav className="relative flex h-16 w-full items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href={locale === "ru" ? "/" : "/en"}
          className="group flex min-w-0 items-center gap-2.5"
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
            className="hidden h-9 items-center gap-1.5 rounded-lg border border-accent/25 bg-accent-soft px-3.5 text-xs font-semibold text-accent shadow-sm backdrop-blur transition-colors hover:bg-accent/20 sm:inline-flex"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            {nav.downloadCv}
          </a>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle label={themeToggle} />
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={nav.menu}
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card-strong"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {isMobileMenuOpen && (
              <div className="fixed inset-x-0 top-20 z-40 origin-top border-y border-border bg-background/96 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all duration-200 sm:px-8">
                <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${
                          activeSection === item.id
                            ? "bg-accent-soft text-accent"
                            : "text-foreground hover:bg-card"
                        }`}
                      >
                        {activeSection === item.id ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        ) : null}
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      </div>
    </header>
  );
}

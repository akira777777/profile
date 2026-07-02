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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items = NAV_IDS.map((id) => ({ id, label: nav[id] }));
  const name = locale === "ru" ? "Артём Михайлов" : "Artem Mikhailov";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href={locale === "ru" ? "/" : "/en"}
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background transition-transform group-hover:scale-105">
            {locale === "ru" ? "АМ" : "AM"}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/cv.pdf"
            download
            className="hidden items-center gap-1.5 rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20 sm:inline-flex"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-strong md:hidden"
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
          <ul className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-5 py-4 sm:px-8">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-card"
                >
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
    </header>
  );
}

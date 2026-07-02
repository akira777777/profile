"use client";

import Link from "next/link";
import { defaultLocale, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const other: Locale = locale === "ru" ? "en" : "ru";
  const href = other === defaultLocale ? "/" : `/${other}`;

  return (
    <Link
      href={href}
      prefetch
      className="inline-flex h-9 items-center gap-1.5 border border-border bg-card px-3 text-sm font-medium text-foreground transition-colors hover:bg-card-strong"
      aria-label={other === "ru" ? "Русская версия" : "English version"}
    >
      <span className="text-[11px] font-semibold opacity-60">
        {locale.toUpperCase()}
      </span>
      <span aria-hidden="true" className="text-muted">
        /
      </span>
      <span className="text-[11px] font-semibold">{other.toUpperCase()}</span>
    </Link>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import {
  CheckIcon,
  CopyIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
  TelegramIcon,
} from "./icons";
import { Section, SectionHeading } from "./ui/Section";

type ContactMessages = Messages["contact"];

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact({ contact }: { contact: ContactMessages }) {
  const f = contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const hasKey = Boolean(ACCESS_KEY);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasKey) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      access_key: ACCESS_KEY,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      from_name: "Portfolio — Artem Mikhailov",
      subject: `New message from ${data.get("name") ?? "portfolio"}`,
    };

    try {
      setStatus("submitting");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  const directLinks = [
    {
      href: site.telegramUrl,
      type: "Telegram",
      label: `@${site.telegramHandle}`,
      icon: <TelegramIcon className="h-4 w-4" />,
      external: true,
    },
    ...(site.githubUrl
      ? [{ href: site.githubUrl, type: "GitHub", label: site.name, icon: <GithubIcon className="h-4 w-4" />, external: true }]
      : []),
    ...(site.phone
      ? [{ href: `tel:${site.phone}`, type: "Phone", label: site.phone, icon: <PhoneIcon className="h-4 w-4" />, external: false }]
      : []),
  ];

  return (
    <Section bgLetter="C" id="contact">
      <SectionHeading eyebrow="06" title={contact.title} subtitle={contact.subtitle} align="center" />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card/40 p-6 sm:p-8 transition-colors hover:border-accent/30"
          noValidate
        >
          {!hasKey ? (
            <p className="mb-5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-400">
              {f.configHint}
            </p>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                {f.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={f.namePlaceholder}
                className="h-11 rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 text-foreground"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {f.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={f.emailPlaceholder}
                className="h-11 rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 text-foreground"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              {f.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={f.messagePlaceholder}
              className="resize-y rounded-xl border border-border bg-background px-3.5 py-3 text-sm outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15 text-foreground"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || !hasKey}
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:scale-[1.01] hover:bg-accent/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              f.sending
            ) : (
              <>
                <SendIcon className="h-4 w-4" />
                {f.send}
              </>
            )}
          </button>

          <div aria-live="polite" className="mt-3 min-h-5 text-sm">
            {status === "success" ? (
              <p className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                <CheckIcon className="h-4 w-4" />
                {f.success}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="font-medium text-red-600 dark:text-red-400">{f.error}</p>
            ) : null}
          </div>
        </form>

        {/* Direct contact */}
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/15 p-6 sm:p-8">
          <p className="text-sm font-medium text-muted">{contact.direct}</p>

          <button
            type="button"
            onClick={copyEmail}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card/30 p-4 text-left transition-all hover:border-accent/40 hover:bg-card/50"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MailIcon className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted">Email</span>
                <span className="hover-slash-draw text-sm font-semibold text-foreground">{site.email}</span>
              </span>
            </span>
            <span className="text-muted transition-colors group-hover:text-foreground">
              {copied ? <CheckIcon className="h-4 w-4 text-emerald-500" /> : <CopyIcon className="h-4 w-4" />}
            </span>
          </button>

          <ul className="flex flex-col gap-3">
            {directLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card/30 p-4 transition-all hover:border-accent/40 hover:bg-card/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    {link.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-muted">{link.type}</span>
                    <span className="hover-slash-draw text-sm font-semibold text-foreground">{link.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

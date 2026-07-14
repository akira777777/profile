"use client";

import { useState, type FormEvent } from "react";
import type { Messages } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
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
import FadeIn from "./ui/FadeIn";
import GlowCard from "./ui/GlowCard";

type ContactMessages = Messages["contact"];

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact({
  contact,
  locale,
}: {
  contact: ContactMessages;
  locale: Locale;
}) {
  const f = contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [messageVal, setMessageVal] = useState("");
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
      message: messageVal,
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
        setMessageVal("");
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

  const presets = locale === "ru" ? [
    { label: "Вакансия", text: "Здравствуйте, Артём! Меня заинтересовало ваше портфолио. Хочу обсудить открытую вакансию frontend-разработчика." },
    { label: "Проект", text: "Привет, Артём! Есть интересный проект на Next.js/React. Давай обсудим сотрудничество." },
    { label: "Написать привет", text: "Привет, Артём! Отличное портфолио, особенно интерактивный терминал! Успехов в кодинге!" }
  ] : [
    { label: "Job Opportunity", text: "Hi Artem, I came across your portfolio and would like to discuss an open frontend developer opportunity with our team." },
    { label: "Project Collaboration", text: "Hi Artem, we have a Next.js/React project coming up and would love to discuss a potential collaboration." },
    { label: "Say Hello", text: "Hi Artem! Cool portfolio, especially the interactive terminal dashboard. Best of luck!" }
  ];

  const directLinks = [
    {
      href: site.telegramUrl,
      type: "Telegram",
      label: `@${site.telegramHandle}`,
      icon: <TelegramIcon className="h-4 w-4" />,
      external: true,
    },
    ...(site.githubUrl
      ? [{ href: site.githubUrl, type: "GitHub", label: "GitHub Profile", icon: <GithubIcon className="h-4 w-4" />, external: true }]
      : []),
    ...(site.phone
      ? [{ href: `tel:${site.phone}`, type: "Phone", label: site.phone, icon: <PhoneIcon className="h-4 w-4" />, external: false }]
      : []),
  ];

  return (
    <Section bgLetter="C" id="contact">
      <SectionHeading eyebrow="08" title={contact.title} subtitle={contact.subtitle} align="center" />
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <GlowCard className="p-5 sm:p-7">
            <form
              onSubmit={onSubmit}
              noValidate
            >
              {!hasKey ? (
                <p className="mb-5 border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 dark:text-amber-400">
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
                    className="h-11 border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15"
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
                    className="h-11 border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15"
                  />
                </div>
              </div>

              {/* Quick presets */}
              <div className="mt-4 flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-muted">
                  {locale === "ru" ? "Быстрые шаблоны сообщений:" : "Quick message templates:"}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {presets.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setMessageVal(p.text)}
                      className="border border-border bg-card/65 px-2.5 py-1 text-xs text-muted hover:border-accent hover:text-foreground transition-all duration-200 cursor-pointer"
                    >
                      {p.label}
                    </button>
                  ))}
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
                  value={messageVal}
                  onChange={(e) => setMessageVal(e.target.value)}
                  placeholder={f.messagePlaceholder}
                  className="resize-y border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/15"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || !hasKey}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:scale-[1.005] hover:bg-accent/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
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
          </GlowCard>
        </FadeIn>

        <FadeIn delay={0.15}>
          <GlowCard className="h-full p-5 sm:p-7">
            <div className="flex h-full flex-col gap-4">
              <p className="text-sm font-medium text-muted">{contact.direct}</p>

              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center justify-between gap-3 border border-border bg-card/45 p-4 text-left transition-all hover:border-accent/45 hover:bg-card/75 cursor-pointer w-full"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-soft text-accent">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs text-muted">Email</span>
                    <span className="hover-slash-draw break-all text-sm font-semibold text-foreground">{site.email}</span>
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
                      className="group flex items-center gap-3 border border-border bg-card/45 p-4 transition-all hover:border-accent/45 hover:bg-card/75"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-soft text-accent">
                        {link.icon}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-xs text-muted">{link.type}</span>
                        <span className="hover-slash-draw break-all text-sm font-semibold text-foreground">{link.label}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </GlowCard>
        </FadeIn>
      </div>
    </Section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { Messages } from "@/i18n/dictionaries";
import { ArrowUpRightIcon, CheckIcon, CloseIcon } from "./icons";
import GlowCard from "./ui/GlowCard";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  messages: Messages["projects"];
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
  messages,
}: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const modal = modalRef.current;
    if (!modal) return;

    const focusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", focusTrap);
    return () => document.removeEventListener("keydown", focusTrap);
  }, [isOpen]);

  if (!project) return null;

  const copy = messages.items[project.id as keyof typeof messages.items];
  const category = messages.categories[project.categoryKey];

  if (!copy) return null;

  const perfScore = parseInt(copy.performance || "90", 10);
  const seoScore = parseInt(copy.seo || "90", 10);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden bg-transparent"
          >
            <GlowCard className="max-h-[85vh] overflow-y-auto p-6 sm:p-8 no-scrollbar">
              {/* Header section */}
              <div className="flex items-start justify-between border-b border-border pb-5">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {category}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Showcase visual & metrics */}
              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px]">
                {/* Accent colored placeholder simulating site UI */}
                <div className="relative min-h-[200px] overflow-hidden border border-border bg-background p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.2]`}
                  />
                  <div className="relative z-10 flex items-center justify-between border-b border-border/80 pb-3">
                    <span className="font-mono text-xs text-muted uppercase">Interactive Workspace</span>
                    <span className="font-mono text-xs font-bold text-accent">{project.monogram}</span>
                  </div>
                  <div className="relative z-10 my-6 space-y-3">
                    <div className="h-3 w-1/3 rounded bg-foreground/10" />
                    <div className="h-2.5 w-full rounded bg-muted/10" />
                    <div className="h-2.5 w-5/6 rounded bg-muted/10" />
                  </div>
                  <div className="relative z-10 flex gap-2 pt-3 border-t border-border/80">
                    <div className="h-8 w-20 rounded bg-accent-soft" />
                    <div className="h-8 w-24 rounded bg-[var(--accent-secondary-soft)]" />
                  </div>
                </div>

                {/* Lighthouse metrics */}
                <div className="flex flex-row justify-around items-center gap-4 border border-border bg-card/40 p-5 rounded-2xl md:flex-col md:justify-center md:gap-6">
                  {/* Gauge 1: Performance */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-20 w-20">
                      <svg className="h-full w-full -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-border fill-transparent"
                          strokeWidth="6"
                        />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-emerald-500 fill-transparent"
                          strokeWidth="6"
                          strokeDasharray="213.6"
                          initial={{ strokeDashoffset: 213.6 }}
                          animate={{ strokeDashoffset: 213.6 - (213.6 * perfScore) / 100 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-foreground">
                        {perfScore}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                      Performance
                    </span>
                  </div>

                  {/* Gauge 2: SEO */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-20 w-20">
                      <svg className="h-full w-full -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-border fill-transparent"
                          strokeWidth="6"
                        />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="34"
                          className="stroke-emerald-500 fill-transparent"
                          strokeWidth="6"
                          strokeDasharray="213.6"
                          initial={{ strokeDashoffset: 213.6 }}
                          animate={{ strokeDashoffset: 213.6 - (213.6 * seoScore) / 100 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold text-foreground">
                        {seoScore}
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                      SEO Index
                    </span>
                  </div>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] border-t border-border pt-6">
                <div className="space-y-6">
                  {/* Challenge */}
                  <div className="space-y-2">
                    <h4 className="font-display text-base font-bold text-foreground uppercase tracking-wide">
                      {messages.challenge}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted text-pretty">
                      {copy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <h4 className="font-display text-base font-bold text-foreground uppercase tracking-wide">
                      {messages.solution}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted text-pretty">
                      {copy.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Achievements Checklist */}
                  <div className="space-y-3">
                    <h4 className="font-display text-base font-bold text-foreground uppercase tracking-wide">
                      {messages.achievements}
                    </h4>
                    <ul className="space-y-2.5">
                      {copy.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-emerald-500/10 text-emerald-500 rounded-full">
                            <CheckIcon className="h-2.5 w-2.5" />
                          </span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link CTA & Tags */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-semibold shadow-md transition-all hover:bg-accent/90 active:scale-[0.99]"
                      >
                        {messages.live}
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </a>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border bg-card/50 px-2 py-0.5 text-[10px] font-mono text-muted uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Messages } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { GraduationIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";
import GlowCard from "./ui/GlowCard";

type Education = Messages["education"];

export default function Education({
  education,
  locale,
}: {
  education: Education;
  locale: Locale;
}) {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number | null>(
    education.timeline && education.timeline.length > 0 ? education.timeline.length - 1 : null
  );

  const toggleMilestone = (index: number) => {
    setActiveMilestoneIndex(activeMilestoneIndex === index ? null : index);
  };

  return (
    <Section bgLetter="E" id="education" className="border-y border-border bg-card/20">
      <SectionHeading eyebrow="04" title={education.title} />
      <div className="mt-8">
        <FadeIn>
          <GlowCard className="p-6 sm:p-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent-soft text-accent">
                <GraduationIcon className="h-7 w-7" />
              </span>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {education.status}
                  </span>
                  <span className="border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {education.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {education.degree}
                </h3>

                <div className="space-y-1.5">
                  <p className="text-base font-semibold text-foreground/90">{education.school}</p>
                  <p className="text-sm text-muted">{education.schoolFull}</p>
                </div>

                <dl className="grid gap-4 sm:grid-cols-2 border-t border-border pt-4">
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-muted">
                      {education.programLabel}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground/90">{education.program}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-muted">
                      {education.locationLabel}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground/90">{education.location}</dd>
                  </div>
                </dl>

                <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted">
                  {education.details}
                </p>
              </div>
            </div>
          </GlowCard>
        </FadeIn>

        {/* Timeline block */}
        {education.timeline && education.timeline.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h4 className="font-display text-lg font-bold text-foreground mb-4 border-b border-border pb-3 flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
              {locale === "ru" ? "Хронология развития" : "Chronological Milestones"}
            </h4>
            
            {/* Timeline Hint */}
            <p className="text-xs text-muted mb-8 font-semibold select-none flex items-center gap-1.5 opacity-90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              {education.timelineHint}
            </p>

            <div className="relative border-l-2 border-border pl-6 ml-4 space-y-10">
              {education.timeline.map((item, index) => {
                const isActive = activeMilestoneIndex === index;
                return (
                  <FadeIn key={index} delay={index * 0.08}>
                    <div className="relative group">
                      {/* Pulsating / glowing bullet marker */}
                      <button
                        type="button"
                        onClick={() => toggleMilestone(index)}
                        className={`absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-background transition-transform duration-300 focus:outline-none cursor-pointer ${
                          isActive
                            ? "border-accent scale-110 shadow-[0_0_8px_var(--accent)]"
                            : "border-border hover:scale-110"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-accent" : "bg-muted"}`} />
                      </button>

                      <div
                        onClick={() => toggleMilestone(index)}
                        className="cursor-pointer"
                      >
                        <span className={`font-mono text-xs font-bold block tracking-wider transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-muted group-hover:text-foreground"
                        }`}>
                          {item.year}
                        </span>
                        
                        <h5 className={`font-display text-base font-bold mt-1 transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}>
                          {item.title}
                        </h5>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-muted mt-2 leading-relaxed max-w-3xl border-l-2 border-accent-soft pl-3 py-0.5">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}

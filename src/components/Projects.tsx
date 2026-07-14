"use client";

import React, { useState, useRef, useEffect } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { projects as projectData, type Project, type ProjectCategoryKey } from "@/lib/projects";
import Image from "next/image";
import { ArrowUpRightIcon, StarIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import GlowCard from "./ui/GlowCard";
import FadeIn from "./ui/FadeIn";
import ProjectModal from "./ProjectModal";

type ProjectsMessages = Messages["projects"];

/* ── Live‑site preview iframe that loads on hover ── */
function LivePreview({ url, isHovered }: { url: string; isHovered: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const handle = requestAnimationFrame(() => {
        setShouldLoad(true);
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [isHovered]);

  return (
    <div
      className={`absolute inset-0 z-20 transition-opacity duration-500 ${
        isHovered && loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {shouldLoad && (
        <iframe
          src={url}
          title="Live preview"
          className="h-full w-full border-0 pointer-events-none"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
          onLoad={() => setLoaded(true)}
        />
      )}
      {/* Gradient fade at bottom so text is still readable */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

/* ── Metric dot (tiny performance indicator) ── */
function PerfDot({ score }: { score: number }) {
  const color =
    score >= 95
      ? "bg-emerald-500"
      : score >= 80
        ? "bg-amber-400"
        : "bg-red-400";
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {score}
    </span>
  );
}

/* ── Card Visual ── */
function CardVisual({
  project,
  category,
  featuredLabel,
  isHovered,
}: {
  project: Project;
  category: string;
  featuredLabel?: string;
  isHovered: boolean;
}) {
  return (
    <div
      className="relative min-h-[220px] overflow-hidden border border-border bg-background p-3 transition-transform duration-500 group-hover:scale-[1.01]"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.18] dark:opacity-[0.22] transition-opacity duration-500 group-hover:opacity-[0.28]`}
      />

      {/* Live iframe preview appears on hover */}
      {project.url && <LivePreview url={project.url} isHovered={isHovered} />}

      <div className="relative z-10 flex h-full min-h-[196px] flex-col border border-border bg-card/90 shadow-xl shadow-black/10 backdrop-blur">
        <div className="flex h-9 items-center justify-between border-b border-border px-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] uppercase text-muted">{category}</span>
        </div>
        <div className="grid flex-1 grid-cols-[0.8fr_1.2fr] gap-3 p-3">
          <div className="relative overflow-hidden bg-card-strong">
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              sizes="(min-width: 768px) 260px, 45vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/20"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-2.5 w-3/4 bg-foreground/80" />
              <div className="h-2 w-full bg-border" />
              <div className="h-2 w-5/6 bg-border" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-9 bg-accent-soft" />
              <div className="h-9 bg-[var(--accent-secondary-soft)]" />
            </div>
          </div>
        </div>
      </div>
      {featuredLabel ? (
        <span className="absolute right-5 top-5 z-20 inline-flex items-center gap-1 bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
          <StarIcon className="h-3 w-3 text-accent-secondary" />
          {featuredLabel}
        </span>
      ) : null}
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({
  project,
  messages,
  locale,
  onSelect,
}: {
  project: Project;
  messages: ProjectsMessages;
  locale: string;
  onSelect: (p: Project) => void;
}) {
  const copy = messages.items[project.id as keyof typeof messages.items];
  const category = messages.categories[project.categoryKey];
  const isFeatured = Boolean(project.featured);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const perfScore = parseInt(copy?.performance || "90", 10);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowCard
        className={`group relative flex flex-col overflow-hidden p-3 transition-all duration-300 hover:border-accent/45 hover:bg-card/85 hover:shadow-xl hover:shadow-black/10 ${
          isFeatured ? "sm:p-6" : ""
        }`}
      >
        {isFeatured ? (
          <div className="grid gap-6 md:grid-cols-2">
            <CardVisual project={project} category={category} featuredLabel={messages.featured} isHovered={isHovered} />
            <div className="flex flex-col justify-center gap-4 p-2">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-accent/20 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">
                {copy?.description}
              </p>

              {/* Metrics strip */}
              <div className="flex items-center gap-3 border-t border-border pt-3">
                <PerfDot score={perfScore} />
                <span className="text-[10px] text-muted font-mono">Lighthouse</span>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="hover-slash-draw inline-flex items-center gap-1 text-sm font-semibold text-foreground cursor-pointer"
                >
                  {locale === "ru" ? "Детали проекта" : "Case Study"}
                  <span className="text-xs">→</span>
                </button>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-xs font-bold text-accent-foreground shadow-[0_4px_20px_rgba(37,99,235,0.25)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {messages.live}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <>
            <CardVisual project={project} category={category} isHovered={isHovered} />
            <div className="flex flex-1 flex-col gap-3 p-3 pt-5">
              <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
              <p className="flex-1 text-pretty text-sm leading-relaxed text-muted">
                {copy?.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-accent/15 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics strip */}
              <div className="flex items-center gap-3 border-t border-border pt-2">
                <PerfDot score={perfScore} />
                <span className="text-[10px] text-muted font-mono">Lighthouse</span>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="hover-slash-draw inline-flex items-center gap-1 text-sm font-semibold text-foreground cursor-pointer"
                >
                  {locale === "ru" ? "Детали проекта" : "Case Study"}
                  <span className="text-xs">→</span>
                </button>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-3.5 py-1.5 text-[11px] font-bold text-accent-foreground shadow-[0_4px_16px_rgba(37,99,235,0.2)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {messages.live}
                    <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </>
        )}
      </GlowCard>
    </div>
  );
}

export default function Projects({ projects, locale }: { projects: ProjectsMessages; locale: string }) {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategoryKey>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = Object.entries(projects.categories) as [ProjectCategoryKey, string][];

  const filteredProjects = activeCategory === "all"
    ? projectData
    : projectData.filter((p) => p.categoryKey === activeCategory);

  // Split into featured (if still matching filter) and other matching ones
  const featured = filteredProjects.find((p) => p.featured);
  const rest = filteredProjects.filter((p) => !p.featured);

  return (
    <Section bgLetter="P" id="projects">
      <SectionHeading eyebrow="03" title={projects.title} subtitle={projects.subtitle} />

      {/* Category Filter Bar */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-xs font-semibold border transition-all duration-300 ${
            activeCategory === "all"
              ? "bg-accent border-accent text-accent-foreground shadow-lg shadow-accent/10"
              : "border-border bg-card/65 text-muted hover:border-accent/40 hover:text-foreground"
          }`}
        >
          {projects.allCategories}
        </button>
        {categories.map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-xs font-semibold border transition-all duration-300 ${
              activeCategory === key
                ? "bg-accent border-accent text-accent-foreground shadow-lg shadow-accent/10"
                : "border-border bg-card/65 text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects count */}
      <p className="mt-4 text-xs font-mono text-muted">
        {filteredProjects.length} {locale === "ru" ? "проектов" : "projects"}
      </p>

      {/* Projects Grid/List */}
      <div className="mt-4 flex flex-col gap-5">
        {featured ? (
          <FadeIn key={featured.id}>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <ProjectCard project={featured} messages={projects} locale={locale} onSelect={setSelectedProject} />
            </div>
          </FadeIn>
        ) : null}
        
        {rest.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <FadeIn key={project.id} delay={0.05 + i * 0.05}>
                <div className="transition-transform duration-300 hover:-translate-y-0.5">
                  <ProjectCard project={project} messages={projects} locale={locale} onSelect={setSelectedProject} />
                </div>
              </FadeIn>
            ))}
          </div>
        ) : !featured ? (
          <div className="text-center py-10 border border-border border-dashed text-muted text-sm">
            {projects.noProjects}
          </div>
        ) : null}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        locale={locale}
        messages={projects}
      />
    </Section>
  );
}

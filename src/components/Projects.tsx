"use client";

import React, { useState } from "react";
import type { Messages } from "@/i18n/dictionaries";
import { projects as projectData, type Project, type ProjectCategoryKey } from "@/lib/projects";
import Image from "next/image";
import { ArrowUpRightIcon, StarIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import GlowCard from "./ui/GlowCard";
import FadeIn from "./ui/FadeIn";
import ProjectModal from "./ProjectModal";

type ProjectsMessages = Messages["projects"];

function CardVisual({
  project,
  category,
  featuredLabel,
}: {
  project: Project;
  category: string;
  featuredLabel?: string;
}) {
  return (
    <div
      className="relative min-h-[190px] overflow-hidden border border-border bg-background p-3 transition-transform duration-500 group-hover:scale-[1.01]"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.18] dark:opacity-[0.22]`}
      />
      <div className="relative z-10 flex h-full min-h-[166px] flex-col border border-border bg-card/90 shadow-xl shadow-black/10 backdrop-blur">
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

  return (
    <GlowCard
      className={`group relative flex flex-col overflow-hidden p-3 transition-all duration-300 hover:border-accent/45 hover:bg-card/85 hover:shadow-xl hover:shadow-black/10 ${
        isFeatured ? "sm:p-6" : ""
      }`}
    >
      {isFeatured ? (
        <div className="grid gap-6 md:grid-cols-2">
          <CardVisual project={project} category={category} featuredLabel={messages.featured} />
          <div className="flex flex-col justify-center gap-4 p-2">
            <div className="flex flex-wrap gap-2">
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
              {copy.description}
            </p>
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
                  className="hover-slash-draw inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  {messages.live}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <>
          <CardVisual project={project} category={category} />
          <div className="flex flex-1 flex-col gap-3 p-3 pt-5">
            <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
            <p className="flex-1 text-pretty text-sm leading-relaxed text-muted">
              {copy.description}
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
                  className="hover-slash-draw inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  {messages.live}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </>
      )}
    </GlowCard>
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

      {/* Projects Grid/List */}
      <div className="mt-8 flex flex-col gap-5">
        {featured ? (
          <FadeIn key={featured.id}>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <ProjectCard project={featured} messages={projects} locale={locale} onSelect={setSelectedProject} />
            </div>
          </FadeIn>
        ) : null}
        
        {rest.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
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

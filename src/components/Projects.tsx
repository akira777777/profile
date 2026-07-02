import type { Messages } from "@/i18n/dictionaries";
import { projects as projectData, type Project } from "@/lib/projects";
import { ArrowUpRightIcon, StarIcon } from "./icons";
import { Section, SectionHeading } from "./ui/Section";
import FadeIn from "./ui/FadeIn";

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
      className={`relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${project.accent} p-6 transition-transform duration-500 group-hover:scale-[1.02]`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5) 0%, transparent 40%)",
        }}
      />
      <span className="text-5xl font-black tracking-tight text-white/95 drop-shadow-sm select-none">
        {project.monogram}
      </span>
      <span className="absolute left-4 top-4 rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
        {category}
      </span>
      {featuredLabel ? (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground">
          <StarIcon className="h-3 w-3 text-amber-500 animate-spin-slow" />
          {featuredLabel}
        </span>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  messages,
}: {
  project: Project;
  messages: ProjectsMessages;
}) {
  const copy = messages.items[project.id as keyof typeof messages.items];
  const category = messages.categories[project.categoryKey];
  const isFeatured = Boolean(project.featured);

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/40 p-4 transition-all duration-300 hover:border-accent/40 hover:bg-card/75 hover:shadow-lg hover:shadow-black/5 ${
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
                  className="rounded-full border border-accent/15 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-foreground sm:text-3xl">{project.title}</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">
              {copy.description}
            </p>
            {project.url ? (
              <div className="pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-slash-draw inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  {messages.live}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <CardVisual project={project} category={category} />
          <div className="flex flex-1 flex-col gap-3 p-3 pt-5">
            <h3 className="font-display text-lg font-bold tracking-[-0.03em] text-foreground">{project.title}</h3>
            <p className="flex-1 text-pretty text-sm leading-relaxed text-muted">
              {copy.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/15 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.url ? (
              <div className="pt-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-slash-draw inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  {messages.live}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
            ) : null}
          </div>
        </>
      )}
    </article>
  );
}

export default function Projects({ projects }: { projects: ProjectsMessages }) {
  const featured = projectData.find((p) => p.featured);
  const rest = projectData.filter((p) => !p.featured);

  return (
    <Section bgLetter="P" id="projects">
      <SectionHeading eyebrow="03" title={projects.title} subtitle={projects.subtitle} />
      <div className="mt-10 flex flex-col gap-6">
        {featured ? (
          <FadeIn>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <ProjectCard project={featured} messages={projects} />
            </div>
          </FadeIn>
        ) : null}
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <FadeIn key={project.id} delay={0.1 + i * 0.1}>
              <div className="transition-transform duration-300 hover:-translate-y-0.5">
                <ProjectCard project={project} messages={projects} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

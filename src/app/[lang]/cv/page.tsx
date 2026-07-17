import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { projects as projectData } from "@/lib/projects";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function CvPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getDictionary(locale);

  // Group categories
  const skillEntries = Object.entries(t.skills.groups) as [string, { label: string; items: string[] }][];

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 text-black shadow-sm print:p-0 print:shadow-none sm:p-12 font-sans mt-28 mb-10 print:mt-0 print:mb-0">
      {/* Header */}
      <header className="border-b border-zinc-300 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4 print:flex-row print:items-end print:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">{t.hero.name}</h1>
          <p className="text-lg font-bold text-zinc-700 mt-1">{t.hero.role}</p>
          <p className="text-xs text-zinc-500 italic mt-0.5">{t.hero.roleSuffix}</p>
        </div>
        <div className="text-xs text-zinc-600 space-y-1 md:text-right print:text-right">
          <p>📍 {t.hero.location}</p>
          <p>✉️ <a href={`mailto:${site.email}`} className="underline hover:text-black">{site.email}</a></p>
          <p>📱 <a href={site.telegramUrl} className="underline hover:text-black">t.me/{site.telegramHandle}</a></p>
          {site.githubUrl && (
            <p>💻 <a href={site.githubUrl} className="underline hover:text-black">github.com/{site.githubUrl.split("/").pop()}</a></p>
          )}
        </div>
      </header>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1 mb-2">
          {t.about.title}
        </h2>
        <p className="text-xs font-semibold leading-relaxed text-zinc-800">{t.about.lead}</p>
        <div className="mt-2 space-y-2">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-xs leading-relaxed text-zinc-600">{p}</p>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1 mb-2">
          {t.skills.title}
        </h2>
        <div className="grid gap-4 grid-cols-3">
          {skillEntries.map(([key, group]) => (
            <div key={key} className="space-y-1">
              <h3 className="text-xs font-bold text-zinc-800">{group.label}</h3>
              <p className="text-[11px] text-zinc-600 leading-relaxed">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1 mb-2">
          {t.projects.title}
        </h2>
        <div className="space-y-4">
          {projectData.map((project) => {
            const copy = t.projects.items[project.id as keyof typeof t.projects.items];
            if (!copy) return null;
            return (
              <div key={project.id} className="space-y-1 print:break-inside-avoid">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h4 className="text-xs font-bold text-zinc-900">{project.title}</h4>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    {t.projects.categories[project.categoryKey]} · {project.tags.slice(0, 4).join(", ")}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed">{copy.description}</p>
                <div className="grid gap-0.5 pl-3 border-l border-zinc-200 text-[10px] text-zinc-500">
                  <p><strong className="text-zinc-700">{t.projects.challenge}:</strong> {copy.challenge}</p>
                  <p><strong className="text-zinc-700">{t.projects.solution}:</strong> {copy.solution}</p>
                  <p><strong className="text-zinc-700">{t.projects.achievements}:</strong> {copy.achievements.join(" · ")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="mt-6 print:break-inside-avoid">
        <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1 mb-2">
          {t.education.title}
        </h2>
        <div className="space-y-2">
          <div>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xs font-bold text-zinc-900">{t.education.degree}</h4>
              <span className="text-[10px] font-semibold text-zinc-500">{t.education.period}</span>
            </div>
            <p className="text-[11px] font-semibold text-zinc-700 mt-0.5">{t.education.school} ({t.education.location})</p>
            <p className="text-[11px] text-zinc-600 leading-relaxed mt-1">{t.education.details}</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mt-6 print:break-inside-avoid">
        <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1 mb-2">
          {t.languages.title}
        </h2>
        <div className="grid gap-4 grid-cols-3">
          {Object.entries(t.languages.items).map(([key, lang]) => (
            <div key={key} className="text-[11px]">
              <p className="font-bold text-zinc-800">{lang.name}</p>
              <p className="text-zinc-500 font-medium mt-0.5">{lang.level} — {lang.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getDictionary(locale);

  return (
    <>
      <Hero hero={t.hero} />
      <About about={t.about} />
      <Skills skills={t.skills} />
      <Projects projects={t.projects} />
      <Education education={t.education} />
      <Languages languages={t.languages} />
      <Contact contact={t.contact} />
    </>
  );
}

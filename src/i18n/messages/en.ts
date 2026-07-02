import type { Messages } from "./ru";

export const en: Messages = {
  meta: {
    title: "Artem Mikhailov — Frontend Developer",
    description:
      "Portfolio of Artem Mikhailov: frontend developer working with Next.js, React and TypeScript. Projects, skills, education and contact.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    languages: "Languages",
    contact: "Contact",
    menu: "Menu",
    downloadCv: "Download CV",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Artem Mikhailov",
    role: "Frontend Developer",
    roleSuffix: "Next.js · React · TypeScript",
    descriptor: "development.interfaces.product",
    tagline:
      "I build fast, accessible and thoughtful web applications. Based in Prague, working with modern frontend on Next.js.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    location: "Prague, Czechia",
    availability: "Open to opportunities",
    scroll: "Scroll down",
    ticker: "NEXT.JS • REACT • TYPESCRIPT • FRONTEND DEVELOPER • UI/UX DESIGN • WEB STANDARDS • OPTIMIZATION",
  },
  about: {
    title: "About",
    lead: "Frontend developer with an IT education and hands-on experience building real projects on Next.js.",
    paragraphs: [
      "I focus on the frontend: interfaces, performance, SEO and accessibility. Most of my projects are built with Next.js, TypeScript and Tailwind CSS.",
      "I graduated from an IT secondary school in Prague under the “Softwarové aplikace a programování” program, where I built a solid foundation in programming, databases and web development.",
      "I speak Russian, Czech and English fluently, which helps me work in international teams and with clients from different countries.",
    ],
    stats: {
      projects: "Next.js projects",
      years: "Years in development",
      languages: "Languages",
    },
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies and tools I work with",
    groups: {
      frontend: {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      },
      backend: {
        label: "Backend & data",
        items: ["Node.js", "REST API", "SQL", "Databases"],
      },
      tools: {
        label: "Tools & practices",
        items: ["Git", "SEO", "Responsive design", "Accessibility", "UI / UX"],
      },
    },
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of delivered projects — all built on Next.js",
    live: "Visit site",
    featured: "Featured project",
    categories: {
      tours: "Healthcare",
      travel: "Travel",
      barber: "Barbershop",
      betting: "Sports betting",
      dental: "Dental clinic",
    },
    items: {
      "tauly-zholy": {
        description:
          "A multi-page rehab center website: treatment programs, medical team, gallery, documents, reviews, FAQ, pricing and contact form. Complex routing, SEO and well-structured page architecture.",
      },
      "secrettravel": {
        description:
          "Concierge booking service for hotels, flights and tours. Multilingual RU/EN, crypto payments, request form, pricing and FAQ.",
      },
      "iron-steel": {
        description:
          "A premium barbershop landing: services, barbers, pricing and online booking. Clean, bold design in the brand's style.",
      },
      "betz": {
        description: "A sports betting platform: live odds, matches and events in real time.",
      },
      "vakalova": {
        description:
          "A dental clinic website: services, team and appointment booking. Clean, trustworthy interface.",
      },
    },
  },
  education: {
    title: "Education",
    degree: "Maturita Certificate · Information Technology",
    school: "VOŠIS a SŠEMI",
    schoolFull:
      "Vyšší odborná škola informačních studií a Střední škola elektrotechniky, multimédií a informatiky",
    program: "Softwarové aplikace a programování",
    programLabel: "Program",
    period: "2019 — 2023",
    location: "Prague 9, Czechia",
    locationLabel: "Location",
    status: "Graduated",
    details:
      "Secondary education completed with a maturita certificate (EQF 4). Specialization in programming, databases and web development.",
  },
  languages: {
    title: "Languages",
    subtitle: "I work and communicate in three languages",
    items: {
      ru: { name: "Russian", level: "Native", note: "Any communication and documentation" },
      cs: { name: "Czech", level: "B2", note: "4 years studying in Prague, passed the maturita exam" },
      en: { name: "English", level: "B2", note: "90.5% on the state maturita exam" },
    },
  },
  contact: {
    title: "Get in touch",
    subtitle: "Open to work and collaboration. Drop me a line — I reply quickly.",
    form: {
      name: "Name",
      namePlaceholder: "What's your name?",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or role…",
      send: "Send",
      sending: "Sending…",
      success: "Thank you! Your message has been sent.",
      error: "Could not send. Please try again or email me directly.",
      configHint: "Add the Web3Forms key to enable sending (see README).",
    },
    direct: "Or directly",
    copy: "Copied",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js, React and Tailwind CSS.",
    backToTop: "Back to top",
  },
  theme: {
    toggle: "Toggle theme",
  },
};

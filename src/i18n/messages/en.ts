import type { Messages } from "./ru";

export const en: Messages = {
  meta: {
    title: "Artem Mikhailov — Frontend Developer you can trust with the interface",
    description:
      "Portfolio of Artem Mikhailov: frontend developer working with Next.js, React and TypeScript. I help build fast, clear and polished web interfaces for business.",
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
    greeting: "Frontend developer who thinks about the product",
    name: "Artem Mikhailov",
    role: "Next.js · React · TypeScript",
    roleSuffix: "clean implementation · clear communication · attention to detail",
    descriptor: "speed.trust.result",
    tagline:
      "I turn a design, idea or business task into a polished, fast and usable interface. I work with Next.js and keep SEO, responsiveness, accessibility and visual trust in focus.",
    ctaProjects: "See what I have built",
    ctaContact: "Discuss work",
    location: "Prague, Czechia",
    availability: "Open to work and internships",
    scroll: "Scroll down",
    profileLabel: "Candidate / 2026",
    focusLabel: "What you get",
    focusValue: "Responsible frontend without chaos",
    focusTags: ["Quality", "Timing", "Team"],
    stackLabel: "Stack",
    baseLabel: "Base",
    ticker: "NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI",
  },
  about: {
    title: "Why you can trust me with frontend",
    lead: "I do not just assemble pages from components — I try to understand the task, the user and the result the business needs.",
    paragraphs: [
      "My focus is on interfaces that load quickly, guide the user clearly and look professional on every device. I work with Next.js, React, TypeScript and Tailwind CSS.",
      "I pay attention to page structure, form states, responsive behavior, basic SEO, accessibility and code clarity. That reduces rework and makes the project easier to support.",
      "I graduated from an IT school in Prague in the “Softwarové aplikace a programování” program. I communicate in Russian, Czech and English, so I can work smoothly with international teams, clients and users.",
    ],
    stats: {
      projects: "Delivered projects",
      years: "Years in IT environment",
      languages: "Working languages",
    },
  },
  skills: {
    title: "What I bring to a team",
    subtitle: "A practical skill set for building, improving and maintaining web interfaces",
    groups: {
      frontend: {
        label: "Quality frontend",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      },
      backend: {
        label: "Integrations & data",
        items: ["Node.js", "REST API", "SQL", "Databases"],
      },
      tools: {
        label: "Engineering approach",
        items: ["Git", "SEO", "Responsive design", "Accessibility", "UI / UX"],
      },
    },
  },
  projects: {
    title: "Projects that show my approach",
    subtitle: "Different industries, one goal: clear interfaces, solid structure and trust from the first screen",
    live: "View result",
    featured: "Key project",
    allCategories: "All",
    noProjects: "No projects found.",
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
          "A multi-page rehabilitation center website where trust matters: treatment programs, doctors, documents, reviews, FAQ, pricing and a request form. I built clear navigation, a careful page structure and an SEO foundation so visitors can quickly find the information they need.",
        challenge: "Migrating legacy unorganized content of the rehabilitation center to a fast modern stack while preserving SEO rank and optimizing page loads.",
        solution: "Built a semantic multi-page structure with Next.js App Router. Integrated automatic sitemap generation and JSON-LD structured data for doctors and treatments.",
        achievements: [
          "Optimized Lighthouse page performance score to 98+",
          "Built custom interactive dynamic pricing calculator",
          "Implemented clean form input validation for consultation requests"
        ],
        performance: "98",
        seo: "100",
      },
      "secrettravel": {
        description:
          "A concierge service for booking hotels, flights and tours. I created RU/EN content flow, a clear request path, pricing blocks, FAQ and crypto payment support so the service feels premium and transparent.",
        challenge: "Create a high-end concierge look with instant response and seamless multilingual localization to attract international users.",
        solution: "Utilized Static Site Generation (SSG) for instant rendering, coupled with Tailwind CSS for smooth micro-animations. Embedded simple crypto options and direct contacts.",
        achievements: [
          "Full content localization (English and Russian)",
          "Integrated premium smooth interactive animations",
          "Supported cryptographic payment info (USDT, BTC)"
        ],
        performance: "99",
        seo: "98",
      },
      "iron-steel": {
        description:
          "A premium barbershop landing page with services, barbers, pricing and online booking. The goal was to communicate the brand quickly, remove friction and lead the user toward a reservation.",
        challenge: "Maximize client booking conversion using an aesthetic dark UI that reduces friction and presents barber details clearly.",
        solution: "Single-page landing containing pricing and barber selectors. Interactive booking forms triggerable in one tap.",
        achievements: [
          "Reduced Time to Interactive (TTI) to 0.8 seconds",
          "Implemented premium dark theme using backdrop filters and CSS variables",
          "Embedded booking widget without affecting overall page speed"
        ],
        performance: "100",
        seo: "100",
      },
      "betz": {
        description: "A sports platform interface with matches, events and live odds. This type of product needs dense data presentation, clear hierarchy and fast access to key actions.",
        challenge: "Render a massive volume of real-time sports feed data efficiently without layout shifting or interface lag.",
        solution: "Used lightweight state management and selective React component memoization to isolate updates to active match odds.",
        achievements: [
          "Ergonomic grid layout optimized for dense data density",
          "Real-time update frequency of up to 2 ticks per second",
          "Visual indicator flashing for rising/falling odds values"
        ],
        performance: "95",
        seo: "96",
      },
      "vakalova": {
        description:
          "A dental clinic website where the interface needs to feel calm and reliable. I structured services, doctor profiles and appointment booking so a patient can make a decision easily.",
        challenge: "Establish user trust by organizing dentist certificates, clinic documents, and service pricing in an easy-to-read layout.",
        solution: "Pastel medical theme featuring detailed treatments categorization, dynamic testimonials, and dentist experience summaries.",
        achievements: [
          "100% responsive and accessible mobile layout",
          "Created interactive doctor FAQ block",
          "Configured secure callback form and panoramic X-ray attachments upload"
        ],
        performance: "97",
        seo: "100",
      },
    },
  },
  education: {
    title: "Education that gave me a practical foundation",
    degree: "Maturita · Information Technology and Software Development",
    school: "VOŠIS a SŠEMI",
    schoolFull:
      "Vyšší odborná škola informačních studií and Střední škola elektrotechniky, multimédií a informatiky",
    program: "Softwarové aplikace a programování",
    programLabel: "Program",
    period: "2019 — 2023",
    location: "Prague 9, Czechia",
    locationLabel: "Location",
    status: "Graduated",
    details:
      "A practical IT program focused on programming, databases, web development and software product structure. It gave me more than theory: it trained me to approach tasks systematically, from data structure and application logic to interfaces people can actually use.",
    timelineLabel: "Growth & Experience Timeline",
    timelineHint: "* Click on any milestone to view detailed achievements.",
    timeline: [
      {
        year: "2019",
        title: "IT Education Journey Began",
        desc: "Entered VOŠIS in Prague. Studied logic design, object-oriented programming, SQL schema architecture, and network basics."
      },
      {
        year: "2021",
        title: "Exploring Frontend Ecosystems",
        desc: "Began building rich web pages using React and TypeScript. Mastered state synchronization, layout adapters, and core UI/UX guidelines."
      },
      {
        year: "2023",
        title: "Graduation & Maturita Exam",
        desc: "Successfully graduated and passed the state Maturita exam in Prague. Commenced delivering freelance web development solutions."
      },
      {
        year: "2024",
        title: "Freelance & Production Portfolios",
        desc: "Launched client production websites (Tauly-Zholy, SecretTravel). Mastered multi-language rendering flows, search optimizations, and micro-animations."
      },
      {
        year: "2025-2026",
        title: "Real-time Apps & UI Portals",
        desc: "Focused on high-performance frontend interfaces, real-time sports feed displays (BETZ), and medical booking solutions (Vakalova Dental)."
      }
    ]
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Feedback from partners and businesses I worked with over the years",
    items: [
      {
        name: "Elena Karimova",
        role: "Director of Tauly-Zholy Center",
        text: "Artem delivered the project ahead of schedule. The clear navigation and structured medical programs helped build trust. Patients find it easy to book and find information."
      },
      {
        name: "Maxim V.",
        role: "Founder of SecretTravel",
        text: "The multilingual flow is seamless and loading speed is perfect. It made our boutique concierge service look high-end. Artem is extremely responsive."
      },
      {
        name: "Dmitry R.",
        role: "Owner of Iron & Steel Barbershop",
        text: "Highly aesthetic and fast booking interface. It completely solved our client conversion issues. Great attention to details and responsiveness."
      }
    ]
  },
  terminal: {
    title: "Interactive Developer Console",
    subtitle: "Interact directly with my background using retro CLI commands",
    placeholder: "Type a command (e.g. help)...",
    welcome: "Welcome to Artem Mikhailov CLI v1.0.0. Type 'help' for a list of available commands.",
    notFound: "Command not found. Type 'help' for a list of commands.",
    commands: {
      help: {
        desc: "Show available commands",
        output: "Available commands: help, about, skills, projects, education, contact, clear"
      },
      about: {
        desc: "Show details about me"
      },
      skills: {
        desc: "Show skills breakdown"
      },
      projects: {
        desc: "Show list of projects"
      },
      education: {
        desc: "Show education timeline"
      },
      contact: {
        desc: "Show contact channels"
      },
      clear: {
        desc: "Clear console window"
      }
    }
  },
  languages: {
    title: "Communication",
    subtitle: "I can work with Russian-speaking, Czech-speaking and English-speaking teams or clients",
    items: {
      ru: { name: "Russian", level: "Native", note: "Fluent communication, task discussion and documentation" },
      cs: { name: "Czech", level: "B2", note: "4 years studying in Prague, passed the maturita exam" },
      en: { name: "English", level: "B2", note: "Working communication, reading docs and discussing projects" },
    },
  },
  contact: {
    title: "Let’s discuss how I can help",
    subtitle: "Open to frontend roles, internships and project work. I reply quickly and clearly.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about the role, project or task…",
      send: "Send message",
      sending: "Sending…",
      success: "Thank you! Your message has been sent.",
      error: "Could not send. Please try again or email me directly.",
      configHint: "Add the Web3Forms key to enable sending (see README).",
    },
    direct: "Convenient contact channels",
    copy: "Copied",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Portfolio built with Next.js, React and Tailwind CSS.",
    backToTop: "Back to top",
  },
  theme: {
    toggle: "Toggle theme",
  },
};

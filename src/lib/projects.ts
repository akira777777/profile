export type ProjectCategoryKey =
  | "tours"
  | "travel"
  | "barber"
  | "betting"
  | "dental"
  | "creative"
  | "photography";

export type Project = {
  id: string;
  title: string;
  categoryKey: ProjectCategoryKey;
  url: string;
  tags: string[];
  featured?: boolean;
  /** Local thumbnail stored under public/. */
  thumbnail: string;
  /** Tailwind gradient used for the card visual. */
  accent: string;
  /** Short monogram shown on the card visual. */
  monogram: string;
};

// Language-neutral project data. Localized copy lives in the message files
// (messages/ru.ts, messages/en.ts) keyed by `id`.
export const projects: Project[] = [
  {
    id: "vision-kraft",
    title: "VK — Vision Kraft",
    categoryKey: "creative",
    featured: true,
    url: "https://neo-sigma-ruby.vercel.app/",
    tags: ["Next.js", "TypeScript", "Framer Motion", "i18n", "Parallax"],
    thumbnail: "/project-thumbnails/vision-kraft.svg",
    accent: "from-cyan-400 to-fuchsia-600",
    monogram: "VK",
  },
  {
    id: "nova-koval",
    title: "Nova Koval",
    categoryKey: "creative",
    url: "https://r-avematej.vercel.app/",
    tags: ["Vanilla JS", "CSS3", "Lightbox", "Filtering", "Audio"],
    thumbnail: "/project-thumbnails/nova-koval.svg",
    accent: "from-lime-400 to-emerald-700",
    monogram: "NK",
  },
  {
    id: "fotogal",
    title: "Markéta Photography",
    categoryKey: "photography",
    url: "https://fotogal.vercel.app/",
    tags: ["i18n", "CSS Grid", "Lazy Loading", "Parallax", "Gallery"],
    thumbnail: "/project-thumbnails/fotogal.svg",
    accent: "from-amber-300 to-rose-500",
    monogram: "MK",
  },
  {
    id: "iron-steel",
    title: "Barbershop Iron & Steel",
    categoryKey: "barber",
    url: "https://barber-am.vercel.app/",
    tags: ["Next.js", "React", "Tailwind"],
    thumbnail: "/project-thumbnails/iron-steel.svg",
    accent: "from-zinc-500 to-zinc-900",
    monogram: "IS",
  },
  {
    id: "tauly-zholy",
    title: "Rehabilitation Center in Almaty",
    categoryKey: "tours",
    url: "https://reba-eight.vercel.app/",
    tags: ["Next.js", "TypeScript", "SEO", "Routing", "Tailwind"],
    thumbnail: "/project-thumbnails/tauly-zholy.svg",
    accent: "from-emerald-400 to-teal-600",
    monogram: "ТЖ",
  },
  {
    id: "secrettravel",
    title: "SecretTravel",
    categoryKey: "travel",
    url: "https://secrettravel.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Animation", "Crypto"],
    thumbnail: "/project-thumbnails/secrettravel.svg",
    accent: "from-sky-400 to-indigo-600",
    monogram: "ST",
  },
  {
    id: "betz",
    title: "BETZ Sportsbook",
    categoryKey: "betting",
    url: "https://bwin-1x.vercel.app/",
    tags: ["Next.js", "React", "Real-time"],
    thumbnail: "/project-thumbnails/betz.svg",
    accent: "from-amber-400 to-yellow-700",
    monogram: "BZ",
  },
  {
    id: "vakalova",
    title: "Vakalova Dental",
    categoryKey: "dental",
    url: "https://dental-clinic-vakalova.vercel.app/",
    tags: ["Next.js", "TypeScript", "UI/UX"],
    thumbnail: "/project-thumbnails/vakalova.svg",
    accent: "from-cyan-400 to-blue-600",
    monogram: "VD",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

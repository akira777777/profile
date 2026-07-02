import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LayoutProps = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.meta.title,
      template: `%s · ${locale === "ru" ? "Артём Михайлов" : "Artem Mikhailov"}`,
    },
    description: t.meta.description,
    applicationName: t.meta.title,
    authors: [{ name: site.name }],
    creator: site.name,
    keywords: [
      "Artem Mikhailov",
      "Артём Михайлов",
      "frontend developer",
      "Next.js",
      "React",
      "TypeScript",
      "portfolio",
      "Прага",
      "Prague",
    ],
    alternates: {
      canonical: locale === defaultLocale ? "/" : "/en",
      languages: {
        ru: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      url: locale === defaultLocale ? "/" : "/en",
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

// Prevent theme flash: apply the stored/system theme before first paint.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(!t&&m)||t==null&&m;var e=t? t==='dark' : m; if(e){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          {locale === "ru" ? "Перейти к содержимому" : "Skip to content"}
        </a>
        <Navbar nav={t.nav} themeToggle={t.theme.toggle} locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          rights={t.footer.rights}
          builtWith={t.footer.builtWith}
          backToTop={t.footer.backToTop}
          locale={locale}
        />
      </body>
    </html>
  );
}

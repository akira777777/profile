import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  const t = getDictionary(defaultLocale);
  const nf = t.notFound;

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-bold uppercase text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground sm:text-7xl">
        {nf.title}
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        {nf.description}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          {nf.goHome}
        </Link>
        <Link
          href="/en"
          className="inline-flex h-12 items-center justify-center border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-card-strong"
        >
          {nf.english}
        </Link>
      </div>
    </div>
  );
}

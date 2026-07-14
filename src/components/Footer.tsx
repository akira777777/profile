import { site } from "@/lib/site";
import { ArrowUpIcon } from "./icons";

export default function Footer({
  rights,
  builtWith,
  backToTop,
  siteName,
}: {
  rights: string;
  builtWith: string;
  backToTop: string;
  siteName: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/20 px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">{siteName}</p>
          <p className="mt-1 text-xs text-muted">
            © {year} {siteName}. {rights}
          </p>
          <p className="mt-1 text-xs text-muted">{builtWith}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <a
            href="#hero"
            className="inline-flex h-10 items-center gap-2 border border-border bg-card px-4 text-xs font-semibold transition-colors hover:bg-card-strong"
          >
            <ArrowUpIcon className="h-4 w-4" />
            {backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
      <p className="font-mono text-sm font-semibold text-accent">404</p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-muted">
        Страница не найдена. The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
      >
        ← Home
      </Link>
    </section>
  );
}

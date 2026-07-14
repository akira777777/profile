"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-bold uppercase text-red-500">Error</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

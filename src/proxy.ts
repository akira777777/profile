import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

// Native Next.js 16 i18n routing.
// Default locale (RU) is served at "/" with no prefix; "en" lives at "/en".
// We rewrite unprefixed paths to the default locale segment so the
// [lang] route receives it, without changing the visible URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on everything except API routes, Next internals and static files.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

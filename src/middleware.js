import { NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

function getLocaleFromHeader(request) {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) return defaultLocale;

    const preferred = acceptLanguage
        .split(",")
        .map((part) => part.split(";")[0].trim().toLowerCase().slice(0, 2));

    for (const lang of preferred) {
        if (locales.includes(lang)) return lang;
    }
    return defaultLocale;
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
    if (pathnameHasLocale) return;

    const cookieLocale = request.cookies.get("locale")?.value;
    const locale =
        cookieLocale && locales.includes(cookieLocale) ? cookieLocale : getLocaleFromHeader(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next|api|img|favicon.ico|manifest.json).*)"]
};

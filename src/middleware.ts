import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathSegment = url.pathname.split("/").filter(Boolean);
    const validLocales = ["en", "pt"];
    const locale = pathSegment[0];

    if (pathSegment.length === 0) {
        const acceptLanguage = request.headers.get("accept-language");
        const preferredLocale = acceptLanguage?.includes("pt") ? "/pt" : "/en"
        url.pathname = preferredLocale;
        return NextResponse.redirect(url);
    }

    if (!validLocales.includes(locale)) {
        url.pathname = "/en";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
}
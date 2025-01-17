import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathSegment = url.pathname.split("/").filter(Boolean);
    const validLocales = ["en", "pt"];

    if (pathSegment.length > 0 && !validLocales.includes(pathSegment[0])) {
        url.pathname = "/en";
        return NextResponse.redirect(url);
    }

    const acceptLanguage = request.headers.get("accept-language");
    const preferredLocale = acceptLanguage?.includes("pt") ? "/pt" : "/en"

    if (pathSegment.length === 0) {
        url.pathname = preferredLocale;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
}
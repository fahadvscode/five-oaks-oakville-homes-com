import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "fiveoaksoakvillehomes.com";
const ALIAS_HOSTS = new Set(["www.fiveoaksoakvillehomes.com"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  if (!host || host === CANONICAL_HOST || !ALIAS_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.host = CANONICAL_HOST;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon|images/|robots.txt|sitemap).*)",
  ],
};

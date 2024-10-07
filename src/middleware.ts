import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  requestHeader.set("next-js-con-de-tuti", "Buenas buenas mi gente");

  const response = NextResponse.next({
    request: {
      headers: requestHeader,
    },
  });

  if (request.nextUrl.pathname.endsWith("test")) {
    return NextResponse.redirect(new URL("/characters", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

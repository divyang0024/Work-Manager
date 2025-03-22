import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  const authToken = request.cookies?.get("authToken");

  // Allow specific API routes to pass through
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users" ||
    request.nextUrl.pathname === "/api/current" // Exclude /api/current
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/log-in" ||
    request.nextUrl.pathname === "/sign-up";

  // Redirect logged-in users away from login and signup pages
  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // Redirect non-authenticated users to login
    if (!authToken) {
      console.log("Redirecting to /log-in because no auth token was found");
      return NextResponse.redirect(new URL("/log-in", request.url));
    }
  }
}

export const config = {
  matcher: [
    "/",
    "/log-in",
    "/sign-up",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*", // Includes /api/current by default unless excluded
  ],
};

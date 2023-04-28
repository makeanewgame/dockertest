import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req) {
  const token = await getToken({ req });

  //User not have a valid token return to login
  if (!token) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  } else {
    if (req.nextUrl.pathname.startsWith("/panel") && token.role !== "admin") {
      const url = new URL("/403", request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/panel/:path*",
};

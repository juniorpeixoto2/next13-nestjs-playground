import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt_decode, { JwtPayload } from "jwt-decode";

type PayloadJwt = {
  sub: string;
  username: string;
  role: string;
  iat: string;
  exp: string;
};

export function middleware(request: NextRequest) {
  if (!request.cookies.has("next.token")) {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  const token = request.cookies.get("next.token")?.value;
  const decoded = jwt_decode<PayloadJwt>(token || "");
  const role = decoded.role;

  //@todo
  //login admin
}

export const config = {
  matcher: ["/client/:path*"],
};

// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("token: ", req.nextauth.token?.access_token);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiakBqLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTk5ODQyNiwiZXhwIjoxNjg1OTk4NDg2fQ.X6-Pw-h3GehY3z_qjYRxcnrhAh7C4rLyybEPRvCVMEM";
    const decoded = jwt_decode(token);

    console.log(decoded);

    // req.nextauth.token;

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "admin"
    )
      return NextResponse.rewrite(
        new URL("/auth/login?message=You Are Not Authorized!", req.url)
      );
    if (
      req.nextUrl.pathname.startsWith("/user") &&
      req.nextauth.token?.role !== "user"
    )
      return NextResponse.rewrite(
        new URL("/auth/login?message=You Are Not Authorized!", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};

"use client";
import { NextResponse } from "next/server";

export default function dashboard() {
  return <div>Client Dashboard</div>;
}

// export const getServerSideProps = async (req: any, res: any) => {
//   let nextResponse = NextResponse.next();
//   try {
//     const token = nextResponse.cookies.get("authorization");
//     console.log(token);
//   } catch (error) {}
// };

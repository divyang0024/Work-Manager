import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({
    success: true,
    msg: "logout successfull",
  });

  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });
  return response;
}

import { connectDb } from "../../helper/db.js";
import { NextResponse } from "next/server.js";

connectDb();

export function GET(request) {
  return NextResponse.json({
    success: true,
    msg: "/api route is working",
  });
}

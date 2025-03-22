import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;

  // Check if the token is not present
  if (!authToken) {
    return NextResponse.json(
      { success: false, msg: "No token found" }, // Send a clear error message
      { status: 401 } // Unauthorized status
    );
  }

  try {
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    const user = await User.findById(data._id);

    return NextResponse.json({
      success: true,
      user: user,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Error while verifying token or fetching user" },
      { status: 500 }
    );
  }
}

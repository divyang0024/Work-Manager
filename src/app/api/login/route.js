import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../../../models/user.js"; // Adjust the path to your User model
import { connectDb } from "@/helper/db.js";

connectDb();

export async function POST(request) {

  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, msg: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, msg: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Token validity
    );

    // Prepare the response
    const response = NextResponse.json(
      { success: true, user },
      { status: 200 }
    );

    // Set the HTTP-only cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60, // 1 day in seconds
      path: "/", // Cookie will be available for all routes
    });

    return response;
  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json(
      { success: false, msg: "There was a problem while logging in" },
      { status: 500 }
    );
  }
}

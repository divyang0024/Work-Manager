import { NextResponse } from "next/server";
import { User } from "../../../models/user.js";
import { connectDb } from "../../../helper/db.js";
import bcrypt from "bcryptjs";

connectDb();

// get all users
export async function GET() {
  try {
    const users = await User.find();
    return NextResponse.json(
      {
        success: true,
        user: users,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        msg: error.errmsg,
      },
      { status: 500 }
    );
  }
}

// create user
export async function POST(request) {
  try {
    const { name, email, password, about, profileURL } = await request.json();

    const passwordHash = bcrypt.hashSync(
      password,
      parseInt(process.env.BCRYPT_SALT)
    );

    const createdUser = await User.create({
      name,
      email,
      password: passwordHash,
      about,
      profileURL,
    });

    return NextResponse.json(
      {
        success: true,
        user: createdUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    return NextResponse.json(
      {
        success: false,
        msg: error.errmsg,
      },
      { status: 500 }
    );
  }
}

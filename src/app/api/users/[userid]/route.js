import { User } from "../../../../models/user.js";
import { connectDb } from "../../../../helper/db.js";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
connectDb();

//delete user
export async function DELETE(request, { params }) {
  const { userid } = params;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: userid });
    return NextResponse.json(
      {
        success: true,
        user: deletedUser,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        msg: err.errmsg,
      },
      { status: 500 }
    );
  }
}

// get a user
export async function GET(request, { params }) {
  const { userid } = params;
  try {
    const user = await User.findById({ _id: userid }).select("-password");
    return NextResponse.json(
      {
        success: true,
        user: user,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        msg: err.errmsg,
      },
      { status: 500 }
    );
  }
}

// edit user details
export async function PUT(request, { params }) {
  const { userid } = params;
  const { name, password, about, profileURL } = await request.json();

  try {
    let updateData = { name, about, profileURL };

    // If password is provided, hash it before updating
    if (password && password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
    }

    const modifiedUser = await User.findByIdAndUpdate(userid, updateData, {
      new: true,
    }).select("-password");

    return NextResponse.json(
      {
        success: true,
        user: modifiedUser,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        msg: err.message || "Server error",
      },
      { status: 500 }
    );
  }
}

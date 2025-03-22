import { User } from "../../../../models/user.js";
import { connectDb } from "../../../../helper/db.js";
import { NextResponse } from "next/server";

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
  const { userid } = await params;
  const { name, password, about, profileURL } = await request.json();

  try {
    const modifiedUser = await User.findByIdAndUpdate(
      userid,
      { name, password, about, profileURL },
      { new: true }
    ).select("-password");

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
        msg: err.errmsg,
      },
      { status: 500 }
    );
  }
}

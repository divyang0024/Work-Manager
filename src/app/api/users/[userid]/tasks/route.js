import { Task } from "../../../../../models/task.js";
import { connectDb } from "../../../../../helper/db.js";
import { NextResponse } from "next/server";

connectDb();

// get user tasks
export async function GET(request, { params }) {
  const { userid } = await params;

  try {
    const userTasks = await Task.find({ userId: userid });
    return NextResponse.json(
      {
        success: true,
        tasks: userTasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        msg: "there was some problems in getting user tasks",
      },
      {
        status: 500,
      }
    );
  }
}

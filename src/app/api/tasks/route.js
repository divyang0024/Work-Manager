import { NextResponse } from "next/server.js";
import { connectDb } from "../../../helper/db.js";
import { Task } from "../../../models/task.js";
import jwt from "jsonwebtoken";

connectDb();

// get all the task
export async function GET() {
  try {
    const tasks = await Task.find();
    return NextResponse.json(
      {
        success: true,
        tasks: tasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        msg: error.errmsg || "there was problems retrieving tasks",
      },
      {
        status: 500,
      }
    );
  }
}

// create task
export async function POST(request) {
  const { title, content, status } = await request.json();
  console.log(status);

  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_SECRET);

  try {
    const task = await Task.create({
      title,
      content,
      status,
      userId: data._id,
    });
    return NextResponse.json(
      {
        success: "true",
        task: task,
      },
      { status: 201 }
    ); 
  } catch (error) {
    return NextResponse.json(
      {
        success: "false",
        msg: error.errmsg || "we encountered some problem while creating task",
      },
      { status: 500 }
    );
  }
}

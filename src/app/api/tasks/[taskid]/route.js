import { NextResponse } from "next/server.js";
import { connectDb } from "../../../../helper/db.js";
import { Task } from "../../../../models/task.js";

connectDb();

// get spcefic task
export async function GET(request, { params }) {
  const { taskid } = await params;
  try {
    const task = await Task.findById(taskid);
    return NextResponse.json(
      {
        success: true,
        task: task,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        msg: error.errmsg || "there was some error retrieving tasks",
      },
      {
        status: 500,
      }
    );
  }
}

// update specific task
export async function PUT(request, { params }) {
  try {
    const { taskid } = await params;
    const { title, content, status } = await request.json();
    const updatedTask = await Task.findByIdAndUpdate(
      taskid,
      { title, content, status },
      { new: true }
    );
    return NextResponse.json(
      {
        success: true,
        task: updatedTask,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        msg: err.errmsg || "there was some error in updating the task",
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request, { params }) {
  const { taskid } = await params;
  console.log(taskid);
  try {
    const deletedTask = await Task.findByIdAndDelete(taskid);
    return NextResponse.json(
      {
        success: true,
        task: deletedTask,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        msg: "there was some error while deleting the task",
      },
       { status: 500 }
    );
  }
}

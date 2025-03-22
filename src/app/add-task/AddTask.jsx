"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/undraw_login_wqkt.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskService";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
  });

  async function handleAddTask(e) {
    e.preventDefault();
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("task added successfully");
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("task not added");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-5 ">
      <div className=" col-span-4 col-start-5">
        <div className="flex justify-center">
          <Image alt={"loginSvg"} src={loginSvg} className="w-[30vw]" />
        </div>

        <h1 className="text-3xl flex justify-center mt-2 text-center">
          Add your task here !!
        </h1>
        <form action="" className="" onSubmit={handleAddTask}>
          {/*Task title*/}
          <div className="mt-2">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-2.5 rounded-lg focus:ring-red-500  text-black"
              name="task_title"
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/*Task content*/}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              type="text"
              id="task_content"
              className="w-full p-2.5 rounded-lg focus:ring-red-500 text-black"
              rows={5}
              name="task_content"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          {/*Task status*/}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="tasl_status"
              className="w-full p-2.5 rounded-lg focus:ring-red-500 text-black text-center"
              name="task_status"
              onChange={(e) => {
                setTask({
                  ...task,
                  status: e.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ----Select Status----
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/*Button status*/}
          <div className="mt-4 flex justify-center gap-2 text-white ">
            <button
              type="submit"
              className="bg-blue-600 py-2 px-2 rounded-lg hover:opacity-70 duration-300"
            >
              Create Task
            </button>
            <button className="bg-red-600 py-2 px-2 rounded-lg hover:opacity-70 duration-300">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;

"use client";
import React, { useContext, useEffect, useState } from "react";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import { UserContext } from "@/context/userContext";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  useEffect(() => {
    async function LoadTasks() {
      try {
        const result = await getTasksOfUser(context.user.user._id);
        setTasks([...result.tasks]);
      } catch (error) {}
    }
    LoadTasks();
  }, [context.user]);

  async function deleteTaskParent(taskId) {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        const result = await deleteTask(taskId);
        const newTask = tasks.filter((item) => item._id != taskId);
        setTasks([...newTask]);
        toast.success("Deleted successfully");
      } catch (error) {
        toast.error("Delettion failed");
      }
    }
  }

  return (
    <div className="grid mt-5 grid-cols-12">
      <div className="col-span-10 col-start-2">
        <h1 className="text-xl mb-2">Your Tasks ( {tasks.length} )</h1>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTask;

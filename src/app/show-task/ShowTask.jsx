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
    async function loadTasks() {
      try {
        if (context.user?.user?._id) {
          const result = await getTasksOfUser(context.user.user._id);
          setTasks([...result.tasks]);
        }
      } catch (error) {
        toast.error("Failed to load tasks");
      }
    }
    loadTasks();
  }, [context.user]);

  async function deleteTaskParent(taskId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(taskId);
        const newTasks = tasks.filter((item) => item._id !== taskId);
        setTasks([...newTasks]);
        toast.success("Task deleted successfully");
      } catch (error) {
        toast.error("Deletion failed");
      }
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-8 sm:mb-10 animate-slide-in">
            Your Tasks ({tasks.length})
          </h1>
          {tasks.length === 0 ? (
            <p
              className="text-sm sm:text-base text-white/80 text-center animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              No tasks yet. Add one to get started!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {tasks.map((task, index) => (
                <Task
                  task={task}
                  key={task._id}
                  deleteTaskParent={deleteTaskParent}
                  delay={`${100 + index * 100}ms`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowTask;

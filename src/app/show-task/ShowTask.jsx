"use client";
import React, { useContext, useEffect, useState } from "react";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import { UserContext } from "@/context/userContext";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(UserContext);

  useEffect(() => {
    async function loadTasks() {
      setIsLoading(true);
      try {
        if (context.user?.user?._id) {
          const result = await getTasksOfUser(context.user.user._id);
          setTasks([...result.tasks]);
        }
      } catch (error) {
        toast.error("Failed to load tasks");
      } finally {
        setIsLoading(false);
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
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes spinGlow {
          0% {
            transform: rotate(0deg) scale(1);
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.9);
          }
          100% {
            transform: rotate(360deg) scale(1);
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
        }
        @keyframes pulseDot {
          0% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .loader-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          animation: fadeIn 0.4s ease-out forwards;
        }
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          position: relative;
          width: 100px;
          height: 100px;
        }
        .loader-dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #3b82f6, #60a5fa);
          border-radius: 50%;
          animation: pulseDot 1.2s ease-in-out infinite;
        }
        .loader-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loader-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        .loader::before {
          content: "";
          position: absolute;
          width: 60px;
          height: 60px;
          border: 5px solid transparent;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spinGlow 1.5s linear infinite;
        }
      `}</style>
      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-8 sm:mb-10 animate-slide-in">
            Your Tasks ({tasks.length})
          </h1>
          {isLoading ? (
            <div className="loader-overlay" aria-hidden="true">
              <div className="loader">
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
              </div>
            </div>
          ) : tasks.length === 0 ? (
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

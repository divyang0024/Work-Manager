"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assets/undraw_login_wqkt.svg";
import { toast } from "react-toastify";
import { addTask } from "@/services/taskService";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddTask(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Task added successfully");
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added");
    } finally {
      setIsLoading(false);
    }
  }

  const clearForm = () => {
    setTask({
      title: "",
      content: "",
      status: "none",
    });
  };

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
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        @keyframes spinGlow {
          0% {
            transform: rotate(0deg) scale(1);
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
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
            transform: scale(1.2);
          }
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.2s ease-in-out infinite;
        }
        .animate-bounce:hover {
          animation: bounce 0.5s ease-in-out;
        }
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          position: relative;
          width: 60px;
          height: 60px;
          margin: 0 auto;
        }
        .loader-dot {
          width: 12px;
          height: 12px;
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
          width: 40px;
          height: 40px;
          border: 3px solid transparent;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spinGlow 1.5s linear infinite;
        }
      `}</style>
      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-lg mx-auto relative z-10">
          {/* Image */}
          <div className="flex justify-center mb-4 animate-slide-in">
            <Image
              alt="Add Task Illustration"
              src={loginSvg}
              className="w-32 sm:w-40 h-auto animate-bounce"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-2 animate-slide-in">
            Add Your Task Here!
          </h1>
          <p
            className="text-sm sm:text-base text-white/80 text-center mb-6 sm:mb-8 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Create and manage tasks with ease.
          </p>

          {/* Form */}
          <form
            onSubmit={handleAddTask}
            className="bg-blue-600 rounded-xl shadow-lg p-6 sm:p-8"
          >
            {/* Task Title */}
            <div
              className="mb-4 animate-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              <label
                htmlFor="task_title"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Title
              </label>
              <div className="relative group">
                <input
                  type="text"
                  id="task_title"
                  name="task_title"
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 pr-10"
                  placeholder="Enter task title"
                  required
                  disabled={isLoading}
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6zm2 3h4v2H8V7zm0 4h4v2H8v-2z" />
                </svg>
              </div>
            </div>

            {/* Task Content */}
            <div
              className="mb-4 animate-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <label
                htmlFor="task_content"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Content
              </label>
              <textarea
                id="task_content"
                name="task_content"
                value={task.content}
                onChange={(e) => setTask({ ...task, content: e.target.value })}
                rows={5}
                className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50"
                placeholder="Describe your task"
                required
                disabled={isLoading}
              />
            </div>

            {/* Task Status */}
            <div
              className="mb-6 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <label
                htmlFor="task_status"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Status
              </label>
              <select
                id="task_status"
                name="task_status"
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value })}
                className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50"
                required
                disabled={isLoading}
              >
                <option value="none" disabled>
                  ----Select Status----
                </option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Loader */}
            {isLoading && (
              <div
                className="mb-6 animate-slide-in"
                style={{ animationDelay: "500ms" }}
              >
                <div className="loader">
                  <div className="loader-dot"></div>
                  <div className="loader-dot"></div>
                  <div className="loader-dot"></div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div
              className="flex justify-center gap-3 sm:gap-4 animate-slide-in"
              style={{ animationDelay: "500ms" }}
            >
              <button
                type="submit"
                className="bg-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create Task"}
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="bg-red-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-red-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;

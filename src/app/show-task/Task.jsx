import { UserContext } from "@/context/userContext";
import React, { useContext } from "react";

const Task = ({ task, deleteTaskParent, delay }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    deleteTaskParent(taskId);
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
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.2s ease-in-out infinite;
        }
      `}</style>
      <div
        className="w-full group animate-slide-in"
        style={{ animationDelay: delay }}
      >
        <div
          className={`rounded-xl p-6 sm:p-8 flex flex-col h-full border hover:scale-105 transition-all duration-300 animate-pulse-glow cursor-pointer
            ${
              task.status === "completed"
                ? "bg-green-600 border-green-500 hover:bg-green-700"
                : "bg-[#F97300] border-yellow-400 hover:bg-[#fb7e15]"
            }`}
        >
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              {task.title}
            </h1>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white py-1.5 px-3 rounded-md hover:bg-red-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer text-sm"
            >
              Delete
            </button>
          </div>
          <p className="text-sm sm:text-base text-white/90 mb-4 flex-grow">
            {task.content}
          </p>
          <div className="flex justify-between text-sm sm:text-base text-white/80">
            <p>
              Status: <span className="font-semibold">{task.status}</span>
            </p>
            <p>
              Author:{" "}
              <span className="font-semibold">
                {user?.user?.name || "Unknown"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;

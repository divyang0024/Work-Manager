"use client";
import React from "react";
import { FiCheckCircle, FiList, FiCalendar } from "react-icons/fi";

const FeatureSection = () => {
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
      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-10 sm:mb-12 animate-slide-in">
            Features of Task Manager
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={
                <FiCheckCircle className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              }
              title="Easy Task Management"
              description="Organize your tasks effortlessly with our intuitive system, designed for seamless productivity."
              delay="100ms"
            />
            <FeatureCard
              icon={
                <FiList className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              }
              title="Task Categories"
              description="Group your tasks into categories for better organization and clarity."
              delay="200ms"
            />
            <FeatureCard
              icon={
                <FiCalendar className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              }
              title="Due Date Reminders"
              description="Set reminders to stay on top of deadlines and never miss a task."
              delay="300ms"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className="w-full animate-slide-in group"
      style={{ animationDelay: delay }}
    >
      <div className="bg-blue-600 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-between h-full border border-blue-500 hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-pulse-glow cursor-pointer">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/80 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;

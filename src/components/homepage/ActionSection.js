"use client";
import React from "react";
import imageBanner from "../../assets/signup.svg";
import Image from "next/image";
import Link from "next/link";

const ActionSection = () => {
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
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.2;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
      <div className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20 animate-fade-in">
          <Image
            src={imageBanner}
            alt="Action Background"
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 animate-slide-in">
            Take Control of Your Tasks
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Start managing your tasks efficiently with our intuitive app,
            designed to boost your productivity.
          </p>
          <Link href="/sign-up">
            <button className="bg-white text-blue-500 py-3 sm:py-3.5 px-6 sm:px-8 rounded-md hover:bg-blue-100 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer text-base sm:text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ActionSection;

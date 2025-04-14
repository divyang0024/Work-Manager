"use client";
import React from "react";
import bannerImage from "../../assets/welcome.svg";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
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
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.2s ease-in-out infinite;
        }
        .animate-bounce:hover {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
      <div className="bg-black py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
          {/* Image */}
          <div className="flex justify-center animate-slide-in">
            <Image
              src={bannerImage}
              alt="Welcome Banner"
              className="w-48 sm:w-64 md:w-80 h-auto rounded-full animate-bounce"
              priority
            />
          </div>

          {/* Text and Button */}
          <div className="text-center sm:text-left max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 animate-slide-in">
              Welcome to Task Manager
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg text-white/80 mb-6 animate-slide-in"
              style={{ animationDelay: "100ms" }}
            >
              Organize your tasks efficiently and boost your productivity with
              our intuitive app.
            </p>
            <Link href="/sign-up">
              <button className="bg-white text-blue-500 py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-blue-100 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer text-sm sm:text-base">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;

"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "../context/userContext.js";
import { logout } from "@/services/userService.js";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";

function CustomNavbar() {
  const context = useContext(UserContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  async function doLogout() {
    try {
      const result = await logout();
      context.setUser(undefined);
      toast.success("Logout successful");
      router.push("/log-in");
    } catch (error) {
      toast.error("Logout error");
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
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
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.5s ease-in-out infinite;
        }
        .logo-hover:hover {
          animation: rotate 0.6s ease-in-out;
        }
      `}</style>
      <nav className="bg-blue-500 text-white py-3 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand with Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-4 hover:text-white/80 transition-colors duration-300"
            >
              <div className="relative logo-hover">
                <div className="absolute inset-0 bg-white rounded-full blur-[2px] scale-105"></div>
                <div className="relative overflow-hidden w-[64px] h-[64px] rounded-full border-2 border-white shadow-lg flex items-center justify-center bg-white">
                  <Image
                    src={logo}
                    alt="Task Manager Logo"
                    width={56}
                    height={56}
                    className="rounded-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight animate-slide-in relative">
                  <span className="relative z-10">Task Manager</span>
                </h1>
                <p className="text-xs text-white/80 font-light tracking-wider">
                  ORGANIZE • TRACK • SUCCEED
                </p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex sm:items-center sm:gap-8 absolute sm:static top-full left-0 w-full sm:w-auto bg-blue-500 sm:bg-transparent py-4 sm:py-0 transition-all duration-300`}
          >
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4 sm:px-0">
              {context.user && (
                <>
                  {[
                    { name: "Home", href: "/" },
                    { name: "Add Task", href: "/add-task" },
                    { name: "Show Task", href: "/show-task" },
                  ].map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition-all duration-300 block animate-slide-in"
                        style={{ animationDelay: `${100 + index * 100}ms` }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>

            {/* User Actions */}
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-5 px-4 sm:px-0 mt-4 sm:mt-0">
              {context.user ? (
                <>
                  <li>
                    <Link
                      href="/profile/user"
                      className="text-white/90 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition-all duration-300 block animate-slide-in"
                      style={{ animationDelay: "400ms" }}
                    >
                      {context.user.user.name}
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={doLogout}
                      className="text-white/90 hover:text-white hover:bg-red-600 px-3 py-1 rounded-md transition-all duration-300 block animate-slide-in"
                      style={{ animationDelay: "500ms" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {[
                    { name: "Login", href: "/log-in" },
                    { name: "Signup", href: "/sign-up" },
                  ].map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-white hover:bg-blue-600 px-3 py-1 rounded-md transition-all duration-300 block animate-pulse-glow animate-slide-in"
                        style={{ animationDelay: `${600 + index * 100}ms` }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;

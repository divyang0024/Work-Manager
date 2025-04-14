"use client";
import React from "react";

function Footer() {
  return (
    <>
      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          60% {
            opacity: 1;
            transform: translateY(-1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 7s ease-in-out infinite;
        }
        .animate-bounce-in {
          animation: bounceIn 0.5s ease-out forwards;
        }
        .animate-glow:hover {
          animation: glow 1.2s ease-in-out infinite;
        }
      `}</style>
      <footer className="bg-blue-500 text-white py-4 sm:py-6 mt-4 relative overflow-hidden">
        {/* Subtle Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.12),transparent_60%)] animate-pulse-slow"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Side - Brand */}
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-extrabold mb-1 tracking-tight animate-bounce-in animate-glow cursor-pointer hover:text-white/80 transition-colors duration-300">
                Work Manager
              </h1>
              <p
                className="text-[0.65rem] sm:text-xs opacity-90 max-w-[200px] sm:max-w-xs mx-auto sm:mx-0 animate-bounce-in"
                style={{ animationDelay: "100ms" }}
              >
                Ignite your productivity with style.
              </p>
            </div>

            {/* Important Links */}
            <div className="text-center sm:text-left">
              <h2 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 bg-blue-600 inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full animate-glow cursor-pointer hover:bg-blue-700 transition-colors duration-300">
                Quick Links
              </h2>
              <ul className="space-y-0.5 sm:space-y-1 text-[0.65rem] sm:text-xs">
                {[
                  {
                    name: "Facebook",
                    href: "#!",
                    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  },
                  {
                    name: "YouTube",
                    href: "#!",
                    icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05A4.28 4.28 0 0016.13 4c-2.35 0-4.27 1.92-4.27 4.29a4.27 4.27 0 00.11.91A12.12 12.12 0 013 4.79a4.25 4.25 0 00-.58 2.15c0 1.49.76 2.81 1.91 3.58a4.23 4.23 0 01-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98A8.57 8.57 0 012 19.54c1.88 1.2 4.12 1.9 6.52 1.9 7.82 0 12.1-6.49 12.1-12.1 0-.18 0-.36-.01-.54A8.66 8.66 0 0022.46 6z",
                  },
                  {
                    name: "Instagram",
                    href: "#!",
                    icon: "M16.5 0h-9A6.5 6.5 0 001 6.5v9A6.5 6.5 0 007.5 22h9a6.5 6.5 0 006.5-6.5v-9A6.5 6.5 0 0016.5 0zm4.5 15.5a4.5 4.5 0 01-4.5 4.5h-9a4.5 4.5 0 01-4.5-4.5v-9A4.5 4.5 0 017.5 2h9a4.5 4.5 0 014.5 4.5v9zm-4.5-9a3 3 0 11-6 0 3 3 0 016 0zm4.5 1.5a1 1 0 110-2 1 1 0 010 2z",
                  },
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center justify-center sm:justify-start gap-1.5 text-white/90 hover:text-white hover:bg-blue-600 hover:px-1.5 sm:hover:px-2 py-0.5 sm:py-1 rounded-md transition-all duration-300 animate-bounce-in cursor-pointer group"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                      aria-label={`Visit our ${link.name} page`}
                    >
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:scale-110 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={link.icon} />
                      </svg>
                      <span className="group-hover:underline">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h2 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 bg-blue-600 inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full animate-glow cursor-pointer hover:bg-blue-700 transition-colors duration-300">
                Contact Us
              </h2>
              <ul className="space-y-0.5 sm:space-y-1 text-[0.65rem] sm:text-xs text-white/90">
                <li
                  className="flex justify-center sm:justify-start items-center gap-1.5 group animate-bounce-in"
                  style={{ animationDelay: "500ms" }}
                >
                  <svg
                    className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:-rotate-12 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="group-hover:text-white group-hover:underline transition-all duration-300 cursor-pointer">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li
                  className="flex justify-center sm:justify-start items-center gap-1.5 group animate-bounce-in"
                  style={{ animationDelay: "600ms" }}
                >
                  <svg
                    className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="group-hover:text-white group-hover:underline transition-all duration-300 cursor-pointer">
                    support@workmanager.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/40 text-center">
            <p
              className="text-[0.65rem] sm:text-xs text-white/80 hover:text-white transition-colors duration-300 cursor-pointer animate-bounce-in"
              style={{ animationDelay: "700ms" }}
            >
              © {new Date().getFullYear()} Work Manager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

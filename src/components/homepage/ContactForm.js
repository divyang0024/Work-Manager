"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
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

        <div className="max-w-lg mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-8 sm:mb-10 animate-slide-in">
            Contact Us
          </h2>
          <p
            className="text-sm sm:text-base text-white/80 text-center mb-6 sm:mb-8 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Have questions? Reach out and let’s connect!
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-blue-600 rounded-xl shadow-lg p-6 sm:p-8"
          >
            {/* Name */}
            <div
              className="mb-4 animate-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 pr-10"
                  placeholder="Enter your name"
                  required
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zm-8 9a2 2 0 012-2h12a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1z" />
                </svg>
              </div>
            </div>

            {/* Email */}
            <div
              className="mb-4 animate-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 pr-10"
                  placeholder="Enter your email"
                  required
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div
              className="mb-6 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 resize-none"
                placeholder="Your message here"
                required
              />
            </div>

            {/* Buttons */}
            <div
              className="flex justify-center gap-3 sm:gap-4 animate-slide-in"
              style={{ animationDelay: "500ms" }}
            >
              <button
                type="submit"
                className="bg-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="bg-red-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-red-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

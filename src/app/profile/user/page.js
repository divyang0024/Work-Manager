"use client";

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context/userContext";

const Page = () => {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    about: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (user?.user) {
      setFormData({
        name: user.user.name || "",
        password: "",
        about: user.user.about || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(`/api/users/${user.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ success: false, msg: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="text-white text-center mt-20">Loading...</div>;
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

      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-lg mx-auto relative z-10">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-2 animate-slide-in">
            Update Your Profile
          </h1>
          <p className="text-white/80 text-sm sm:text-base text-center mb-6 animate-slide-in">
            Manage your account details with ease.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-blue-600 rounded-xl shadow-lg p-6 sm:p-8 animate-slide-in"
          >
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-blue-700 border border-blue-500 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-blue-700 border border-blue-500 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                placeholder="Enter new password"
              />
            </div>

            {/* About */}
            <div className="mb-6">
              <label
                htmlFor="about"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                About
              </label>
              <textarea
                id="about"
                name="about"
                rows={5}
                value={formData.about}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-blue-700 border border-blue-500 rounded-md text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2.5 sm:py-3 rounded-md hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow"
            >
              {loading ? "Updating..." : "Update"}
            </button>

            {/* Response */}
            {response && (
              <div className="mt-4 p-2 text-sm rounded border text-white">
                {response.success ? (
                  <p className="text-green-300">Profile updated!</p>
                ) : (
                  <p className="text-red-400">Error: {response.msg}</p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

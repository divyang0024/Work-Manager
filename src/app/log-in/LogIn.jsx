"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import LoginSvg from "../../assets/undraw_access-account_aydp.svg";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/userContext";

function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const context = useContext(UserContext);

  const loginFormSubmitted = async (e) => {
    e.preventDefault();
    try {
      const result = await login(data);
      setData({
        email: "",
        password: "",
      });
      context.setUser(result);
      router.push("/add-task");
      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  const clearForm = () => {
    setData({
      email: "",
      password: "",
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
      <div className="min-h-screen flex items-center justify-center bg-black py-6 sm:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-lg w-full bg-blue-600 rounded-xl shadow-lg p-6 sm:p-8 relative z-10">
          {/* Image */}
          <div className="flex justify-center mb-4 animate-slide-in">
            <Image
              alt="Login Illustration"
              src={LoginSvg}
              className="w-32 sm:w-40 h-auto animate-bounce"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-2 animate-slide-in">
            Login to Task Manager
          </h1>
          <p
            className="text-xs sm:text-sm text-white/80 text-center mb-6 animate-slide-in"
            style={{ animationDelay: "100ms" }}
          >
            Unlock your productivity with a single click!
          </p>

          {/* Form */}
          <form onSubmit={loginFormSubmitted}>
            {/* Email */}
            <div
              className="mb-4 animate-slide-in"
              style={{ animationDelay: "200ms" }}
            >
              <label
                htmlFor="user_email"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Email
              </label>
              <div className="relative group">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 pr-10"
                  placeholder="Enter your email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
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

            {/* Password */}
            <div
              className="mb-6 animate-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <label
                htmlFor="user_password"
                className="block text-sm sm:text-base font-medium text-white/90 mb-1.5"
              >
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  name="user_password"
                  id="user_password"
                  className="w-full px-4 py-2.5 sm:py-3 bg-blue-700 border border-blue-500 rounded-md focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 text-white placeholder-white/50 pr-10"
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  value={data.password}
                  required
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="flex justify-center gap-3 sm:gap-4 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <button
                type="submit"
                className="bg-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-md hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-300 animate-pulse-glow cursor-pointer"
              >
                Login
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

          {/* Footer Text */}
          <p
            className="text-xs sm:text-sm text-white/70 text-center mt-6 animate-slide-in"
            style={{ animationDelay: "500ms" }}
          >
            Don’t have an account?{" "}
            <a
              href="/sign-up"
              className="text-white hover:underline hover:text-blue-400 transition-colors duration-300"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogIn;

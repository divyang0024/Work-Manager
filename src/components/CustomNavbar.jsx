"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../context/userContext.js";
import { logout } from "@/services/userService.js";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function CustomNavbar() {
  const context = useContext(UserContext);
  const router = useRouter();

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
    <nav className="bg-blue-500 h-12 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="font-semibold text-xl">
          <Link href="/">Task Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex gap-5">
          {context.user && (
            <>
              <li>
                <Link href="/" className="hover:text-black duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/add-task"
                  className="hover:text-black duration-300"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  href="/show-task"
                  className="hover:text-black duration-300"
                >
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex gap-2.5">
          {context.user && (
            <>
              <li>
                <Link href="/profile/user">{context.user.user.name}</Link>
              </li>
              <li>
                <Link href="#!" onClick={doLogout}>
                  Logout
                </Link>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href="/log-in">Login</Link>
              </li>
              <li>
                <Link href="/sign-up">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;

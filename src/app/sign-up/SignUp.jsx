"use client";
import React, { useState } from "react";
import signUpSvg from "../../assets/signup.svg";
import Image from "next/image";
import { signUp } from "@/services/userService";
import { toast } from "react-toastify";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://imgs.search.brave.com/YymyHN5hCzKav184Ax8WJsqhYr49A4VNH6EUDLizvI0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE3LzEyLzIz/LzM2MF9GXzkxNzEy/MjM2N19rU3BkcFJK/NUhjbW4wczRXTWRK/YlNacGw3TlJ6d3Vw/VS5qcGc",
  });

  const doSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(data);
      toast.success("Sign up successfull");
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://imgs.search.brave.com/YymyHN5hCzKav184Ax8WJsqhYr49A4VNH6EUDLizvI0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE3LzEyLzIz/LzM2MF9GXzkxNzEy/MjM2N19rU3BkcFJK/NUhjbW4wczRXTWRK/YlNacGw3TlJ6d3Vw/VS5qcGc",
      });
    } catch (error) {
      toast.error("there was some problems in signing up");
    }
  };

  return (
    <div className="grid grid-cols-12 mt-5">
      <div className="col-span-4 col-start-5">
        <div className="">
          <div className="flex justify-center">
            <Image alt={"signUpSvg"} src={signUpSvg} className="w-[30vw]" />
          </div>

          <h1 className="text-3xl text-center mt-2">Signup Here</h1>
          <form action="" onSubmit={doSignup}>
            {/*username*/}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="w-full p-2.5 rounded-lg focus:ring-red-500  text-black"
                placeholder="enter here"
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                value={data.name}
              />
            </div>
            {/*email*/}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="w-full p-2.5 rounded-lg focus:ring-red-500  text-black"
                placeholder="enter here"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
                value={data.email}
              />
            </div>
            {/*password*/}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="user_password"
                id="user_password"
                className="w-full p-2.5 rounded-lg focus:ring-red-500  text-black"
                placeholder="enter here"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            {/*about*/}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2"
              >
                About
              </label>
              <textarea
                type="password"
                name="user_about"
                id="user_about"
                className="w-full p-2.5 rounded-lg focus:ring-red-500  text-black"
                placeholder="enter here"
                rows={8}
                onChange={(e) => {
                  setData({
                    ...data,
                    about: e.target.value,
                  });
                }}
                value={data.about}
              />
            </div>
            {/*button*/}
            <div className="mt-3 flex justify-center gap-2">
              <button
                className="bg-blue-500 py-2 px-2 rounded-lg hover:opacity-70 duration-300"
                type="submit"
              >
                Signup
              </button>
              <button className="bg-red-500 py-2 px-2 rounded-lg hover:opacity-70 duration-300">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useContext, useState } from "react";
import React from "react";
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
  const toProfile = useRouter();
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
      toProfile.push("/add-task");
      toast.success("login successfull");
    } catch (error) {
      toast.error("there was some problem in login");
    }
  };

  return (
    <div className="grid grid-cols-12 mt-5">
      <div className="col-span-4 col-start-5">
        <div className="">
          <div className="flex justify-center">
            <Image alt={"signUpSvg"} src={LoginSvg} className="w-[30vw]" />
          </div>
          <h1 className="text-3xl text-center mt-2">Login Here</h1>
          <form action="" onSubmit={loginFormSubmitted}>
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
            <div className="mt-3 flex justify-center gap-2">
              <button
                className="bg-blue-500 py-2 px-2 rounded-lg hover:opacity-70 duration-300"
                type="submit"
              >
                Login
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

export default LogIn;

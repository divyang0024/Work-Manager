"use client";
import React, { useEffect, useState } from "react";
import { UserContext } from "./userContext.js";
import { currentUser } from "@/services/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const result = await currentUser();
        setUser(result);
      } catch (error) {
        toast.warn("Please login or signup to access resource");
        setUser(undefined);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

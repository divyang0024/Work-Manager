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

  // ✅ Set initial form data when user is loaded
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
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-[20vh] p-4 border rounded shadow text-black">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Update Your Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="about"
          placeholder="About"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={5}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-2 text-sm rounded border">
          {response.success ? (
            <p className="text-green-600">Profile updated!</p>
          ) : (
            <p className="text-red-600">Error: {response.msg}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;

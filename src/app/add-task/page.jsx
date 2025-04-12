import React from "react";
import AddTask from "./AddTask.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  title: "Add Task : Work Manager",
};

function page() {
  return (
    <div>
      <AddTask />
      <Footer />
    </div>
  );
}

export default page;

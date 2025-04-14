import React from "react";
import LogIn from "./LogIn";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Log In : Work Manager",
};

function page() {
  return (
    <div>
      <LogIn />
      <Footer />
    </div>
  );
}

export default page;

import React from "react";
import SignUp from "./SignUp";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sign Up : Work Manager",
};

const page = () => {
  return (
    <div>
      <SignUp />;
      <Footer />
    </div>
  );
};

export default page;

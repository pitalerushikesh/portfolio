import React from "react";
import Navbar from "./navbar/Navbar";

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Base;

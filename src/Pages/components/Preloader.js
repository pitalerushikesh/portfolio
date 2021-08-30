import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Preloader = () => {
  return (
    <div className="d-flex justify-content-center vertical-center">
      <PacmanLoader loading size={40} />
    </div>
  );
};

export default Preloader;

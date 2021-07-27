import React from "react";

const ProgressWidget = ({ title, percent }) => {
  return (
    <div className="col-lg-6 mt-3 progresswidget" data-aos="flip-up">
      <h6 className="font-weight-bold fw-bold fontEncode">{title}</h6>
      <div className="progress rounded-pill" style={{ height: "25px" }}>
        <div className="progress-bar bg-dark" style={{ width: `${percent}%` }}>
          {percent}%
        </div>
      </div>
    </div>
  );
};

const Technical = () => {
  return (
    <div className="skills m-4" id="skills" data-aos="ease-in">
      <div className="container text-center mt-5 pt-5 mb-5 ">
        <div data-aos="fade-down">
          <h2 className="fontEncode section-header fw-bold">
            Technical Skills
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <p className="text-center fs-5 mb-4">
          Always ready to try hands-on new and emerging technologies
        </p>
      </div>

      <div className="container">
        <div className="row">
          <ProgressWidget title="Flutter" percent="80" />
          <ProgressWidget title="Python" percent="40" />
          <ProgressWidget title="React" percent="60" />
          <ProgressWidget title="Firebase" percent="70" />
          <ProgressWidget title="Javascript" percent="50" />
        </div>
      </div>
    </div>
  );
};

export default Technical;

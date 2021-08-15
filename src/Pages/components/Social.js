import React from "react";
import "../css/social.css";

const Social = () => {
  return (
    <footer className="py-5 mt-4">
      <div className="rounded-social-buttons text-center">
        <a
          className="social-button twitter"
          href="https://twitter.com/pitalerushikesh"
          target="_blank"
          rel="noreferrer"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="300"
          className="social-button mx-5 linkedin"
          href="https://www.linkedin.com/in/rushikesh-pitale-53870a213/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          data-aos="zoom-in"
          data-aos-delay="500"
          className="social-button instagram"
          href="https://www.instagram.com/pitale_rushikesh/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Social;

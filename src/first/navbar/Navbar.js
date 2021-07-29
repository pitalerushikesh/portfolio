import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="fontEncode nav-link text-dark me-5 fw-bolder"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fontEncode nav-link text-dark me-5 fw-bolder"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fontEncode nav-link text-dark me-5 fw-bolder"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fontEncode nav-link text-dark me-5 fw-bolder"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fontEncode nav-link text-dark me-5 fw-bolder"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

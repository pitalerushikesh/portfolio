import React, { useState } from "react";
import firebase from "../firebase";
import Base from "../first/Base";
import "./css/Home.css";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import prof from "../assets/logo/profile.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Technical from "../Technical";
import ProjectTiles from "./components/ProjectTiles";
// ..
AOS.init();

const Home = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    classn: "",
    message: "",
  });

  const { name, number, email, message } = state;

  const handleChange = (name) => (event) => {
    setState({ ...state, error: false, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("I'm inside");
    await firebase
      .firestore()
      .collection("Contacts")
      .add({
        name,
        number,
        email,
        message,
      })
      //.then will reset the form to nothing
      .then(() =>
        setState({
          email: "",
          name: "",
          message: "",
          number: "",
        })
      );
  };

  return (
    <Base>
      <div id="home"></div>
      <div className="my-5 py-5">
        <section>
          <div className="container text-center mt-5">
            <LazyLoadImage
              className="rounded-circle border img-fluid border-4 border-dark animate__animated animate__backInDown"
              height="200px"
              width="200px"
              src={prof}
              alt="Me"
            />
          </div>

          <div className="container text-center mt-3">
            <div className="fontSource fs-3 home-header animate__animated animate__wobble">
              Hi, I'm Rushikesh Pitale
            </div>
          </div>
          <div className="container text-center mt-2">
            <div className="home-subheader fontEncode fw-bold animate__animated animate__backInLeft">
              Full Stack Developer
            </div>
          </div>
          <div className="container text-center mt-2">
            <div className="fontUbuntu home-subpart animate__animated animate__backInRight">
              Specializing in Flutter, React and Django for front end system
              development and Firebase, MySQL for back end system development
            </div>
          </div>
          <div className="container text-center mt-5 pt-4">
            <div className="row">
              <div className="col homeButton text-end">
                <a
                  href="#contact"
                  className="text-decoration-none text-white animate__animated animate__bounceInLeft"
                >
                  <button
                    type="button"
                    className="fontRoboto btn btn-dark btn-lg rounded-pill main-btn  animate__animated animate__bounceInLeft"
                  >
                    CONNECT WITH ME
                  </button>
                </a>
              </div>
              <div className="col homeButton text-start">
                <a
                  href="https://github.com/pitalerushikesh/resume/raw/main/Rushikesh%20Pitale.pdf"
                  className="text-decoration-none text-white animate__animated animate__bounceInRight"
                >
                  <button
                    type="button"
                    className="fontRoboto btn btn-dark btn-lg rounded-pill main-btn  animate__animated animate__bounceInRight"
                  >
                    DOWNLOAD CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 pt-5" id="projects">
          <ProjectTiles />
        </section>
        <section id="skills" className="mt-5 pt-5">
          <Technical />
        </section>
        <section className="mt-5 pt-5" id="contact">
          <div className="container text-center mt-5 pt-5">
            <div data-aos="fade-down" data-aos-duration="1000">
              <div className="fontEncode section-header fw-bold">
                Talk to me
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div data-aos="flip-down" data-aos-duration="1000">
                  <form onSubmit={onSubmit}>
                    <div className="border border-2 border-dark input-group input-round input-group-lg mt-5">
                      <span
                        className="input-group-text border-0 input-round bg-white"
                        id="inputGroup-sizing-lg"
                      >
                        <AiOutlineUser className="bg-white" />
                      </span>
                      <input
                        type="text"
                        value={name}
                        onChange={handleChange("name")}
                        className="fontSource form-control input-onfocus input-round border-0"
                        placeholder="Your Name"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                      />
                    </div>
                    <div className="border border-2 border-dark input-group input-round input-group-lg mt-4">
                      <span
                        className="input-group-text border-0 input-round bg-white"
                        id="inputGroup-sizing-lg"
                      >
                        <MdPhoneIphone className="bg-white" />
                      </span>
                      <input
                        type="number"
                        value={number}
                        onChange={handleChange("number")}
                        className="fontSource form-control input-onfocus input-round border-0"
                        placeholder="Your Contact Number"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                      />
                    </div>
                    <div className="border border-2 border-dark input-group input-round input-group-lg mt-4">
                      <span
                        className="input-group-text border-0 input-round bg-white"
                        id="inputGroup-sizing-lg"
                      >
                        <AiOutlineMail className="bg-white" />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={handleChange("email")}
                        className="fontSource form-control input-onfocus input-round border-0"
                        placeholder="Your Email Address"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                      />
                    </div>
                    <div className="border border-2 border-dark input-group input-round input-group-lg mt-4">
                      <textarea
                        type="text"
                        className="fontSource form-control input-onfocus input-round p-3 border-0"
                        value={message}
                        onChange={handleChange("message")}
                        placeholder="Your Message"
                        rows="7"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                      ></textarea>
                    </div>
                    <button className="btn mt-4 btn-dark btn-lg rounded-pill">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Base>
  );
};

export default Home;

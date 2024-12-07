import React from "react";
import NavigationBar from "./Components/NavigationBar";
import "./Home.css";
import About from "./About/About.js";
import Skills from "./Skills/Skills.js";
import Contact from "./Contact/Contact.js";
function Home() {
  return (
    <div className="outer-container">
      <div id="home-section" className="inner-container">
        <div className="row">
          {/* Left Section: Text */}
          <div className="inner-sub-container col-md-5">
            <h2>
              <span style={{ color: "lightcoral" }}>Hi,</span> I'm a{" "}
              <span style={{ color: "lightcoral" }}>CSE</span> undergrad.
            </h2>
            <p id="biopara">
              As an aspiring FullStack developer, my career goal is to immerse
              myself into the depths of frontend and backend technologies that
              will be helpful to craft innovative and efficient solutions that
              bridge the gap between frontend and backend technologies.
            </p>
            <div className="group-icons">
              <a
                className="home-icons"
                href="https://wa.me/6300670399"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a className="home-icons" href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a
                className="home-icons"
                href="mailto:21bq1a05n9.vvit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
          {/* Right Section: Image */}
          <div className="sub-container col-md-6">
            <img id="myimage" src="myimage1.jpg" alt="CSE Undergrad" />
          </div>
        </div>
      </div>
      <div id="about-section" className="inner-container">
        <About />
      </div>
      <div id="skills-section" className="inner-container">
        <Skills />
      </div>
      <div id="contact-section" className="inner-container">
        <Contact />
      </div>
    </div>
  );
}
export default Home;

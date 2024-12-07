import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
function Intro() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/home");
  };

  return (
    <div className="introcontainer">
      <div className="introleft">
        <div className="introcard">
          <h1 id="introname">I'm Varun Chowdary Vankayalapati</h1>
          <span className="intro-role">Software Developer</span>
          <button id="introbtn" onClick={handleRedirect}>
            Know more about me{" "}
            <sub>
              <i className="bi bi-arrow-right"></i>
            </sub>
          </button>
        </div>
      </div>
      <div className="introright"></div>
    </div>
  );
}

export default Intro;

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <nav style={{ position: "sticky" }}>
      <Link id="name" to="/">
        Varun
      </Link>
      <div className="navlinks">
        <Link className="navlink" to="/home">
          Home
        </Link>
        <Link className="navlink" to="/about">
          About
        </Link>
        <Link className="navlink" to="/cert">
          Certificates
        </Link>
        <Link className="navlink" to="/project">
          Projects
        </Link>
        <Link className="navlink" to="/experience">
          Experience
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;

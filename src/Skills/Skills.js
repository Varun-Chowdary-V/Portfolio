import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="row">
      <h1 style={{ color: "palegreen" }}>Skillset</h1>
      <div className="skill-container-right col-md-6">
        <img src="programmer1.png" />
      </div>
      <div className="skill-container col-md-6">
          <img className="skill-card" src="java-removebg.png" />
          <img className="skill-card" src="python-removebg.png" />
          <img className="skill-card" src="clang.png" />
          <img className="skill-card" src="golang.png" />
          <img className="skill-card bg-dark" src="html5.png" />
          <img className="skill-card bg-dark" src="css.png" />
          <img className="skill-card bg-dark" src="javascript.png" />
          <img className="skill-card" src="typescript.jpg" />
          <img className="skill-card" src="mongodb.png" />
          <img className="skill-card" src="logo512.png" />
          <img className="skill-card" src="AngularJS.png" />
          <img className="skill-card bg-dark" src="Node-removebg.png" />
          <img className="skill-card" src="mysql.png" />
          <img className="skill-card" src="git.png" />
          <img className="skill-card" src="bootstrap.jpeg" />
          <img className="skill-card" src="postman.png" />
        </div>
    </div>
  );
}

export default Skills;

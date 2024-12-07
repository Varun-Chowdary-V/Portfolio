import React from "react";
import "./Experience.css";
function Experience() {
  return (
    <div className="experience-container">
      <h1 style={{ color: "palegreen" }}>Experience</h1>
      <div className="experience-inner-container">
        <div
          className="card bg-dark"
          style={{ margin: "20px", padding: "10px", width: "28rem" }}
        >
          <div className="card-body text-light">
            <h5 className="text-info card-title">FullStack Developer Intern</h5>
            <h6 className="card-subtitle mb-2">Subete Maho</h6>
            <p className="card-text">
              Duration: 6 months (Sep 2024 - April 2025)
            </p>
          </div>
        </div>

        <div
          className="card bg-dark"
          style={{ margin: "20px", padding: "10px", width: "28rem" }}
        >
          <div className="card-body text-light">
            <h5 className="text-info card-title">Web Developer Intern</h5>
            <h6 className="card-subtitle mb-2">IntendCareer</h6>
            <p className="card-text">
              Duration: 6 months (Feb 2024 - Aug 2024)
            </p>
          </div>
        </div>

        <div
          className="card bg-dark"
          style={{ margin: "20px", padding: "10px", width: "28rem" }}
        >
          <div className="card-body text-light">
            <h5 className="text-info card-title">
              Salesforce Developer Virtual Internship
            </h5>
            <h6 className="card-subtitle mb-2">SmartInternz</h6>
            <p className="card-text">
              Duration: 2 months (Dec 2023 - Jan 2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

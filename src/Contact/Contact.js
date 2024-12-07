import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <h1 style={{ color: "palegreen" }}>Contact Details</h1>
      <br />
      <div className="contact-container">
        <a href="mailto:21bq1a05n9.vvit@gmail.com">
          <i class="bi bi-envelope"></i> 21bq1a05n9.vvit@gmail.com
        </a>
        <a href="tel:6300670399">
          <i class="bi bi-person-circle"></i> 6300670399
        </a>
        <a href="https://www.linkedin.com/in/varun-chowdary-vankayalapati">
          <i class="bi bi-linkedin"></i> Linkedin
        </a>
        <a href="https://github.com/Varun-Chowdary-V">
          <i class="bi bi-github"></i> Github
        </a>
        <br />
      </div>
    </div>
  );
}

export default Contact;

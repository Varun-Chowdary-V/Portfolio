import React from 'react';
import "./About.css";
import Education from './Education';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the current route and toggle `isIntro` accordingly
    if (location.pathname === '/home') {
      setIsAboutOpen(true); // Set to true for the intro page
    } else {
      setIsAboutOpen(false); // Set to false for other pages
    }
  }, [location]);
  return (
    <div>
    <div className='row'>
      <h1 style={{ color: 'palegreen' }}>About Me</h1>
      <div className='inner-about offset-md-1 col-md-7'>
        <p>I am a passionate and driven Computer Science Engineering undergrad with a strong focus on becoming a proficient Full Stack Developer. My journey in the tech world has been fueled by a deep curiosity and commitment to mastering both frontend and backend technologies. I am dedicated to creating seamless, innovative, and efficient solutions that integrate the latest advancements in web development.</p>
          <p>My career aspiration is to become a versatile developer who not only excels in crafting visually appealing and responsive user interfaces but also in building robust and scalable backend systems. By continually expanding my knowledge and honing my skills, I aim to bridge the gap between the frontend and backend, delivering cohesive and powerful web applications.</p>
      </div>
      <div className='inner-about col-md-4'>
        <img id="aboutimg" src='programmer2.avif' />
      </div>
      </div>
      {!isAboutOpen && <Education />}
    </div>
  )
}

export default About;
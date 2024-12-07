import './App.css';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './Home';
import NavigationBar from './Components/NavigationBar';
import Intro from './Intro';
import About from './About/About';
import Contact from './Contact/Contact';
import { useState, useEffect } from 'react';
import Certificates from './Certifications/Certificates';
import Projects from './Certifications/Projects';
import Experience from './Experience/Experience';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const [isIntro, setIsIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check the current route and toggle `isIntro` accordingly
    if (location.pathname === '/') {
      setIsIntro(true); // Set to true for the intro page
    } else {
      setIsIntro(false); // Set to false for other pages
    }
  }, [location]);
  return (
    <div>
      {!isIntro && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cert" element={<Certificates />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;

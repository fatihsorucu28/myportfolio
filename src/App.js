import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Typewriter from './Typewriter';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const sentences = ["I am Fatih Sorucu.", "I am a Web Developer.", "I love coding."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <hr style={{marginTop: '5em', border : '0.1em solid black', width : '75%'}}></hr>
      <ProjectSection/>
    </div>
  );
}

export default App;

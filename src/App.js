// Import
import './App.css';
import React from 'react';

// Components
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience'
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

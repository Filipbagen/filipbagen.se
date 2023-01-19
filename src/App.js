// Import
import './App.css'
import React from 'react'

// Components
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

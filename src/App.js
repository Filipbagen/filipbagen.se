// Import
import './App.css';
import React from 'react';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Topic from './components/Topic';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Topic
          emoji="👨🏽‍💻"
          title="ABOUT ME"
          text="How to study effectively for exams, with the best evidence-based techniques"
        />
        <Topic
          emoji="🎯"
          title="SKILLS"
          text="How to study effectively for exams, with the best evidence-based techniques"
        />
        <Topic
          emoji="🚀"
          title="PROJECTS"
          text="How to study effectively for exams, with the best evidence-based techniques"
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

// Style
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

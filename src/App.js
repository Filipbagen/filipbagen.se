import './App.css';
import React from 'react';

// Components
import Header from './components/Header';
import Topic from './components/Topic';

function App() {
  return (
    <div>
      <Header />
      <Topic
        emoji="👨🏽‍💻"
        title="ABOUT ME"
        text="How to study effectively for exams, with the best evidence-based techniques"
      />
    </div>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/qualifications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
// import NavigationBar from '/components./NavigationBar';

const App = () => {
  return (
    <Router>
      <Routes>
      {/* <NavigationBar /> */}
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </Router>
  );
};

export default App;


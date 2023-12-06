import React from 'react';
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Education from './qualifications';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
       <h1>Welcome to My Portfolio</h1>
       <NavigationBar />
      <main>
        <Introduction />
     
        <Projects />
        <Skills />
        <Education/>
        <Contact />
        
        
      </main>
     <Footer/>
    </div>
  );
};

export default Home;

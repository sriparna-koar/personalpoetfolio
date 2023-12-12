import React from 'react';
import './Introduction.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Introduction = () => {
  return (
    
    <section className="intro-section">
       <NavigationBar />
     
      <p className="intro-text">Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and
                    visually appealing experiences. With a background in BTECH CSE-AI from Techno India University, I
                    bring a unique blend of technical skills and design aesthetics to my projects</p>
    
                    <Footer/>
    </section>
    
  );
};

export default Introduction;

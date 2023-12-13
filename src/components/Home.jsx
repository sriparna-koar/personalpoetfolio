import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <section className="intro-section">
      <div className="home-container">
        <div className="home-overlay"></div>
        <h1>Welcome to My Portfolio</h1>
        <NavigationBar />
        <p className="intro-text">Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and visually appealing experiences.</p>
        <Footer/>
      </div>
    </section>
  );
};

export default Home;

{/* 
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

export default Introduction; */}

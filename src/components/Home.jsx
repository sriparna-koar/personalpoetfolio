import React from 'react';
import NavigationBar from './NavigationBar';

import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-overlay"></div>
       <h1>Welcome to My Portfolio</h1>
       <NavigationBar />
       <p className="intro-text">Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and
                    visually appealing experiences. </p>
     <Footer/>
    </div>
  );
};

export default Home;

import React from 'react';
import olympicAnimation from './olympic-app-animation.gif';
import weatherAppAnimation from './images/weather-app-animation.gif';
import './Projects.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Projects = () => {
  // Styles moved to CSS for better management

  return (
    <section className="projects-section">
      <NavigationBar />
      <h1 className="projects-heading">Projects</h1>

      <div className="project-item">
        <h3 className="project-heading">Olympic Game Formation</h3>
        <p className="project-description">
          Olympic games details are given, also participation form and also submitted form are shown and prize details
          forms are given
        </p>
        <img src={olympicAnimation} alt="Olympic Game Formation" className="project-image" />
      </div>

      <div className="project-item">
        <h3 className="project-heading">Weather App</h3>
        <p className="project-description">Description: Your description here...</p>
        <img src={weatherAppAnimation} alt="Weather App" className="project-image" />
        <a href="https://sriparna-koar.github.io/weather_detect" className="project-link">
          View on GitHub
        </a>
      </div>

      <div className="project-item">
        <h3 className="project-heading">Job Details Formation</h3>
        <p className="project-description">Description: Your description here...</p>
      </div>
      <Footer />
    </section>
  );
};

export default Projects;

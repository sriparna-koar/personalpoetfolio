import React from 'react';
import olympicAnimation from './olympic-app-animation.gif';
import weatherAppAnimation from './images/weather-app-animation.gif';
// import jobDetailsAnimation from './job-details-formation.gif';

const Projects = () => {
  const projectStyle = {
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    marginBottom: '10px',
    fontSize: '20px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    // color: '#333',
  };

  const imageStyle = {
    width: '100px',
    height: 'auto',
    borderRadius: '4px',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <section className="projects-section">
      <h1>Projects</h1>

      <div style={projectStyle}>
        <h3 style={headingStyle}>Olympic Game Formation</h3>
        <p style={descriptionStyle}>Olympic games details are given,
        also participation form and also submitted form are shown and prize details forms are given</p>
        <img src={olympicAnimation} alt="Olympic Game Formation" style={imageStyle} />
      </div>

      <div style={projectStyle}>
        <h3 style={headingStyle}>Weather App</h3>
        <p style={descriptionStyle}>Description: Your description here...</p>
        <img src={weatherAppAnimation} alt="Weather App" style={imageStyle} />
      </div>

      <div style={projectStyle}>
        <h3 style={headingStyle}>Job Details Formation</h3>
        <p style={descriptionStyle}>Description: Your description here...</p>
        {/* <img src={jobDetailsAnimation} alt="Job Details Formation" /> */}
      </div>

      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;

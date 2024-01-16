// // Projects.js

// import React from 'react';
// import olympicAnimation from './olympic-app-animation.gif';
// import weatherAppAnimation from './images/weather-app-animation.gif';
// import './Projects.css';
// import Footer from './Footer';
// import NavigationBar from './NavigationBar';

// const Projects = () => {
//   return (
    
//     <section className="projects-section">
      
//       <NavigationBar />
//       <h1 className="projects-heading">Projects</h1>

//       <div className="projects-container">
        
//         <div className="project-item">
//           <h3 className="project-heading black-text">Olympic Game Formation</h3>
//           <p className="project-description">
//             Olympic games details are given, also participation form and also submitted form are shown and prize details
//             forms are given
//           </p>
//           <img src={olympicAnimation} alt="Olympic Game Formation" className="project-image" />
//           <a href="https://sriparna-koar.github.io/weather_detect" className="project-link">
//             View on GitHub
//           </a>
//         </div>

//         <div className="project-item">
//           <h3 className="project-heading black-text">Weather App</h3>
//           <p className="project-description">Temperature detection in fahrenheit celcius wind air quality with next four days of weather forecast</p>
//           <img src={weatherAppAnimation} alt="Weather App" className="project-image" />
//           <a href="https://sriparna-koar.github.io/weather_detect" className="project-link">
//             View on GitHub
//           </a>
//         </div>

//         <div className="project-item">
//           <h3 className="project-heading black-text">Quiz APP</h3>
//           <p className="project-description">User can play quiz game and add values to their knowledge learningnew things</p>
//           <a href="https://sriparna-koar.github.io/weather_detect" className="project-link">
//             View on GitHub
//           </a>
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default Projects;
import React from 'react';
import olympicAnimation from './olympic-app-animation.gif';
import weatherAppAnimation from './images/weather-app-animation.gif';
import './Projects.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Projects = () => {
  
  return (
    <section className="projects-section">
      <NavigationBar />
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        <div className="project-item">
          <h3 className="project-heading black-text">Olympic Game Formation</h3>
          <p className="project-description">
            Olympic games details are given, also participation form and also submitted form are shown and prize details
            forms are given
          </p>
          <a href="https://sriparna-koar.github.io/olympic-games" className="project-link">
            View on GitHub
          </a>
          <img src={olympicAnimation} alt="Olympic Game Formation" className="project-image" />
        </div>

        <div className="project-item">
          <h3 className="project-heading black-text">Weather App</h3>
          <p className="project-description">Temperature detection in fahrenheit celcius wind air quality with next four days of weather forecast</p>
          <a href="https://sriparna-koar.github.io/weather_detect" className="project-link">
            View on GitHub
          </a>
          <img src={weatherAppAnimation} alt="Weather App" className="project-image" />
        </div>
        <div className="project-item">
          <h3 className="project-heading black-text">Quiz APP</h3>
         <p className="project-description">User can play quiz game and add values to their knowledge learningnew things</p>
        <a href="https://sriparna-koar.github.io/create_aquiz" className="project-link">
           View on GitHub
         </a>
      </div>
      <div className="project-item">
          <h3 className="project-heading black-text">Color Guessing Game</h3>
         <p className="project-description">Guess your color</p>
        <a href="https://sriparna-koar.github.io/color_guessing_game" className="project-link">
           View on GitHub
         </a>
      </div>
      </div>
      <Footer />
    </section>
  );
};

export default Projects;

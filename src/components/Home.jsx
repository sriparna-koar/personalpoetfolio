// import React from 'react';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import './Home.css';

// const Home = () => {
//   return (
//     <section className="intro-section">
//       <div className="home-container">
//         <div className="home-overlay"></div>
//         <h1>Welcome to My Portfolio</h1>
//         <NavigationBar />
//         <p className="intro-text">Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and visually appealing experiences.</p>
//         <Footer/>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <section className="intro-section">
      <div className="home-container">
        <div className="home-overlay"></div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1, color: '#ff7f50', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          whileTap={{ scale: 0.9 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <NavigationBar />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="intro-text"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and visually appealing experiences.
        </motion.p>
        <Footer />
      </div>
    </section>
  );
};

export default Home;

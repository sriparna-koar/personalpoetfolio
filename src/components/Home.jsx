
// import React from 'react';
// import { motion } from 'framer-motion';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import './Home.css';

// const Home = () => {
  
//   return (
//     <section className="intro-section">
//       <div className="home-container">
//         <div className="home-overlay"></div>
//         <motion.h1
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           whileHover={{ scale: 1.1, color: '#ff7f50', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
//           whileTap={{ scale: 0.9 }}
//           className="neon-text display-4 font-weight-bold text-uppercase"
//         >
//           Welcome to My Portfolio
//         </motion.h1>
//         <NavigationBar />
//         <motion.p
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="intro-text neon-para lead"
//           whileHover={{ scale: 1.05 }}
//         >
//           Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and visually appealing experiences.
//         </motion.p>
//         <Footer />
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import NavigationBar from './NavigationBar';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className="intro-section">
      <div className="home-container">
        <NavigationBar />
        <div className="content-container">
          <div className="left-content">
            <div className="text-container">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1, color: '#ff7f50', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                className="neon-text display-4 font-weight-bold text-uppercase"
              >
                Welcome to My Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="intro-text neon-para lead"
                whileHover={{ scale: 1.05 }}
              >
                Hi, I'm Sriparna Koar, a passionate UI & UX designer and web developer. I am dedicated to creating user-friendly and visually appealing experiences.
              </motion.p>
            </div>
          </div>
          <div className="right-content">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="profile-picture"
              src="data:image/jpeg;base64,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"
              alt="Profile"
            />
          </div>
        </div>
        <button onClick={toggleContact} class="emailBox">Show Contact Details</button>

        
        {/* Contact modal */}
        {showContact && (
          <motion.div
            className="contact-modal" // Add appropriate styles for the modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Contact />
            <button onClick={toggleContact}>Close</button>
          </motion.div>
        )}
        <Footer />
        
      </div>
    
    </section>
  );
};

export default Home;

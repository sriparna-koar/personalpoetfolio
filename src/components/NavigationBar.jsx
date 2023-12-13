// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavigationBar.css'; 

// const NavigationBar = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navLinks = [
//     {to:'/', text:'Home'},
//     { to: '/introduction', text: 'Introduction' },
//     { to: '/projects', text: 'Projects' },
//     { to: '/skills', text: 'Skills' },
//     { to: '/education', text: 'Education' },
//     { to: '/hobbies', text: 'Hobbies' },
//     { to: '/contact', text: 'Contact' },
//   ];

//   return (
//     <nav className={isSticky ? "navbar sticky" : "navbar"}>
//       <ul className="nav-links">
//         {navLinks.map((link, index) => (
//           <li key={index}>
//             <NavLink to={link.to} activeClassName="active">
//               {link.text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;
// NavigationBar.js

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/introduction', text: 'Introduction' },
    { to: '/projects', text: 'Projects' },
    { to: '/skills', text: 'Skills' },
    { to: '/education', text: 'Education' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <nav className={`${isSticky ? 'navbar sticky' : 'navbar'} ${isMobile ? 'mobile' : ''}`}>
      {isMobile ? (
        <div className="mobile-menu-icon">
          <i className="fa fa-bars"></i>
        </div>
      ) : (
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} activeClassName="active">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;

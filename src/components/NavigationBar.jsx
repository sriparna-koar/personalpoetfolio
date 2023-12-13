// // // import React, { useEffect, useState } from 'react';
// // // import { NavLink } from 'react-router-dom';
// // // import './NavigationBar.css'; 

// // // const NavigationBar = () => {
// // //   const [isSticky, setIsSticky] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const offset = window.scrollY;
// // //       if (offset > 100) {
// // //         setIsSticky(true);
// // //       } else {
// // //         setIsSticky(false);
// // //       }
// // //     };

// // //     window.addEventListener('scroll', handleScroll);

// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   const navLinks = [
// // //     {to:'/', text:'Home'},
// // //     // { to: '/introduction', text: 'Introduction' },
// // //     { to: '/projects', text: 'Projects' },
// // //     { to: '/skills', text: 'Skills' },
// // //     { to: '/education', text: 'Education' },
// // //     { to: '/hobbies', text: 'Hobbies' },
// // //     { to: '/contact', text: 'Contact' },
// // //   ];

// // //   return (
// // //     <nav className={isSticky ? "navbar sticky" : "navbar"}>
// // //       <ul className="nav-links">
// // //         {navLinks.map((link, index) => (
// // //           <li key={index}>
// // //             <NavLink to={link.to} activeClassName="active">
// // //               {link.text}
// // //             </NavLink>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </nav>
// // //   );
// // // };

// // // export default NavigationBar;
// // import React, { useState } from 'react';
// // import { NavLink } from 'react-router-dom';
// // import './NavigationBar.css'; 

// // const NavigationBar = () => {
// //   const [isSticky, setIsSticky] = useState(false);

// //   const handleScroll = () => {
// //     const offset = window.scrollY;
// //     setIsSticky(offset > 100);
// //   };

// //   window.addEventListener('scroll', handleScroll);

// //   const navLinks = [
// //     {to:'/', text:'Home'},
// //     { to: '/projects', text: 'Projects' },
// //     { to: '/skills', text: 'Skills' },
// //     { to: '/education', text: 'Education' },
// //     { to: '/hobbies', text: 'Hobbies' },
// //     { to: '/contact', text: 'Contact' },
// //   ];

// //   return (
// //     <nav className={isSticky ? "navbar sticky" : "navbar"}>
// //       <ul className="nav-links">
// //         {navLinks.map((link, index) => (
// //           <li key={index}>
// //             <NavLink to={link.to} activeClassName="active">
// //               {link.text}
// //             </NavLink>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default NavigationBar;
// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavigationBar.css'; 

// const NavigationBar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setIsSticky(offset > 100);
//     };

//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 768);
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const navLinks = [
//     { to: '/', text: 'Home' },
//     { to: '/projects', text: 'Projects' },
//     { to: '/skills', text: 'Skills' },
//     { to: '/education', text: 'Education' },
//     { to: '/hobbies', text: 'Hobbies' },
//     { to: '/contact', text: 'Contact' },
//   ];

//   return (
//     <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
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
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/projects', text: 'Projects' },
    { to: '/skills', text: 'Skills' },
    { to: '/education', text: 'Education' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
      <ul className={`nav-links ${isMobileView ? 'mobile-view' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} activeClassName="active">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;

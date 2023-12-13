// NavigationBar.js

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

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

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      ) : (
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} activeClassName="active" onClick={closeMenu}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {isMobile && isMenuOpen && (
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} activeClassName="active" onClick={closeMenu}>
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

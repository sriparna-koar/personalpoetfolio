
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  const navLinks = [
    { to: '/introduction', text: 'Introduction' },
    { to: '/projects', text: 'Projects' },
    { to: '/skills', text: 'Skills' },
    { to: '/education', text: 'Education' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact' },
  
    // Add other links as needed
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
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

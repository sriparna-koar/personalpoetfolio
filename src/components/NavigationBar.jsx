import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'; 

const NavigationBar = () => {
  const navLinks = [
    {to:'/', text:'Home'},
    { to: '/projects', text: 'Projects' },
    { to: '/skills', text: 'Skills' },
    { to: '/education', text: 'Education' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact' },
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

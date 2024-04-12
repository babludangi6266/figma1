import React, { useState } from 'react';
import logoImage from './images/Logo1.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logoImage} alt="Logo image" className="logoimage" />
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={isMenuOpen ? 'menu-open' : ''}>
          <ul>
            <li>
              <a href="#" className="learn">
                Learn
              </a>
            </li>
            <li>
              <a href="#">Upskill Your Team</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Apply as Mentor</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

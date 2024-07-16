import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './_header.scss'; 


const Header = () => {
  return (
    <nav className='nav'>
      <div className="nav-wrapper">
        <div className="logo">
          <span className="logo-text">AP</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <a href="https://github.com/anapeff" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> 
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/anaïs-p-561140263" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

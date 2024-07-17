import React from 'react';
import './_about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  return (
<section id="about">
    <h2>A propos</h2>
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
</section>
  );
};

export default About;
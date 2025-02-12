import React from 'react';
import './_about.scss';
import aboutImage from '../../images/about/about.webp';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image-container">
          <Image src={aboutImage} alt="About" className="about-image" />
        </div>
        <div className="about-content">
          <h1 className="name">
            <span className="first-name">Anaïs</span>
            <span className="last-name">Pefferkorn</span>
          </h1>
          <h2 className="title">Développeuse web</h2>
          <p className="description">Développeuse web spécialisée en front-end, j'ai été formée intensivement pendant 9 mois chez OpenClassrooms, où j'ai développé des compétences en React, Sass et Redux. Ces compétences me permettent de développer des applications web performantes et modernes.</p>
          
          <div className="buttons">
            <a href="https://github.com/anapeff" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

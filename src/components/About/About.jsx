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
          <h2 className="title">Développeur web</h2>
          <p className="description">Développeuse web spécialisée en front-end, j'ai été formée intensivement pendant 9 mois chez OpenClassrooms, où j'ai développé des compétences en React, Sass et Redux. Ces compétences me permettent de développer des applications web performantes et modernes.</p>
          <p className="description">Avant cela, j'ai travaillé plusieurs années en tant qu'agente de support pour un logiciel d'huissier, ce qui m'a dotée de compétences essentielles telles que l’organisation, l’écoute, le conseil ainsi que des qualités relationnelles importantes. Toujours motivée par l'apprentissage de nouvelles technologies, je suis enthousiaste à l'idée de participer à de nouveaux projets.</p>

          <div className="buttons">
            <a href="https://github.com/anapeff" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <a href="https://linkedin.com/in/anaïs-p-561140263" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

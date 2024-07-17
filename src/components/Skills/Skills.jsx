import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HtmlIcon from '../../images/skills/html.svg';
import CssIcon from '../../images/skills/css.svg';
import JsIcon from '../../images/skills/js.svg';
import ReactIcon from '../../images/skills/react.svg';
import BoostrapIcon from '../../images/skills/boostrap.svg';
import MongoDBIcon from '../../images/skills/mongodb.svg';
import NotionIcon from '../../images/skills/notion.svg';
import GitHubIcon from '../../images/skills/github.svg';
import NodeJsIcon from '../../images/skills/nodejs.svg'; 
import './_skills.scss';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Mes Compétences</h2>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className="carousel-bg">
            <Carousel.Caption>
              <h3>Frontend</h3>
              <div className='skillGroup'>
                <div>
                    <img src={HtmlIcon} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={CssIcon} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={JsIcon} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={ReactIcon} alt="React" />
                    <p>React</p>
                </div>
                <div>
                    <img src={BoostrapIcon} alt="Boostrap" />
                    <p>Boostrap</p>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-bg">
            <Carousel.Caption>
              <h3>Backend</h3>
              <div className='skillGroup'>
              <div>
                    <img src={NodeJsIcon} alt="NodeJs" />
                    <p>NodeJs</p>
                </div>
                <div>
                    <img src={MongoDBIcon} alt="MongoDB" />
                    <p>MongoDB</p>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-bg">
            <Carousel.Caption>
              <h3>Autres</h3>
              <div className='skillGroup'>
                <div>
                    <img src={GitHubIcon} alt="GitHub" />
                    <p>GitHub</p>
                </div>
                <div>
                    <img src={NotionIcon} alt="Notion" />
                    <p>Notion</p>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Skills;

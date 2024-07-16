import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyCard from '../Card/Card';
import projectsData from '../../data/projectsData.json';
import './_projects.scss';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="cardsPosition">
     <h2>Mes Projets</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <MyCard 
              title={project.title} 
              text={project.text} 
              image={project.image} 
              github={project.github} 
              website={project.website} 
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;

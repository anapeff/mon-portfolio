import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MyCard from '../Card/Card';
import ProjectModal from '../Modal/ProjectModal';
import projectsData from '../../data/projectsData.json';
import './_projects.scss';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  return (
    <section id="projects" className="cardsPosition">
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
              onClick={() => handleCardClick(project)}
            />
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <ProjectModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './_projectModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectModal = ({ show, onHide, project }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-content">
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          {project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <h4>Présentation</h4>
        <p>{project.description}</p>
        
        <h4>Compétences acquises</h4>
        <ul className="skills-list">
          {project.skills && project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        
        <ul className="technologies-list">
          {project.technologies && project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
     
        <div className="links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} size="2x" />
            </a>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-content">
        <Button onClick={onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;

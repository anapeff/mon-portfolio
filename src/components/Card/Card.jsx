import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './_card.scss';



const MyCard = ({ title, image, github, website }) => {
  let imgSrc;
  try {
    imgSrc = require(`../../images/projects/${image}`);
  } catch (err) {
    console.error(`Error loading image: ${image}`, err);
    imgSrc = null; 
  }

  return (
    <Card className="mb-3">
      {imgSrc && <Card.Img variant="top" src={imgSrc} alt={title} className="card-img-top" />}
      <Card.Footer className="d-flex align-items-center">
        <Card.Title className="mb-0 card-title">{title}</Card.Title>
        <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;

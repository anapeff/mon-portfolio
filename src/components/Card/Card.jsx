import React from 'react';
import { Card } from 'react-bootstrap';

import './_card.scss';



const MyCard = ({ title, image, onClick }) => {
  let imgSrc;
  try {
    imgSrc = require(`../../images/projects/${image}`);
  } catch (err) {
    console.error(`Error loading image: ${image}`, err);
    imgSrc = null; 
  }

  return (
    <Card className="mb-3" onClick={onClick} style={{ cursor: 'pointer' }}>
      {imgSrc && <Card.Img variant="top" src={imgSrc} alt={title} className="card-img-top" />}
      <Card.Footer className="d-flex align-items-center">
        <Card.Title className="mb-0 card-title">{title}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default MyCard;

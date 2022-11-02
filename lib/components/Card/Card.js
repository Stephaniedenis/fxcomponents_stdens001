import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card as Carte } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Card = ({width,variant, title}) =>{

  return(
    <>
    <Carte style={{ width: `${width}`}}>
      <Carte.Img variant="top" src="http://via.placeholder.com/300x150" />
      <Carte.Body>
        <Carte.Title>{title}</Carte.Title>
        <Carte.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Carte.Text>
        <Button variant={variant}>Go somewhere</Button>
      </Carte.Body>
    </Carte>
    </>
  );

}

Card.PropTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  variant:PropTypes.string
}

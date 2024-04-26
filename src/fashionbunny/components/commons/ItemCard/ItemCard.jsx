import React from 'react';
import styles from "./ItemCard.module.css";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({image, title, desc, price }) => {
  return (
    <>
    <Card style={{ width: '18rem', display: "inline-block", marginRight: "1em", marginBottom: "1em" }}>
      <Card.Img variant="top" src={image} style={{
        height: "200px"
      }}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        <Card.Text>
            Price:: {price}
        </Card.Text>
        <Button variant="success">Try at Home</Button>
        <Button variant="light">Buy now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemCard;

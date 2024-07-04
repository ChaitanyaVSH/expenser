import React from 'react';
// import styles from "./ItemCard.module.css";

// Redux
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../redux/actions/fashionbunny/actions';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ADD_ITEM_TO_CART, TRY_AT_HOME_CART } from '../../../../redux/actions/fashionbunny/types';

const ItemCard = ({id, image, title, desc, price }) => {

  const dispatch = useDispatch();

  const addToCart = (cartType, cartItem) => {
    console.log("Adding item to cart: shop");
    dispatch(updateCart(ADD_ITEM_TO_CART, cartType, cartItem));
  };

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
        <Button variant="success" onClick={() => addToCart(TRY_AT_HOME_CART, {
          id, image, title, desc, price
        })}>Try at Home</Button>
        <Button variant="light">Buy now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemCard;

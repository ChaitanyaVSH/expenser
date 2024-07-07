import React, { useState } from 'react';
// import styles from "./ItemCard.module.css";

// Redux
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../redux/actions/fashionbunny/actions';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ADD_ITEM_TO_CART, TRY_AT_HOME_CART } from '../../../../redux/actions/fashionbunny/types';

const ItemCard = ({id, image, title, desc, price, supportedColors, supportedSizes }) => {

  const dispatch = useDispatch();

  const [selectionState, setSelectionState] = useState({
    selectedColor: supportedColors[0],
    selectedSize: supportedSizes[0]
  });

  const clickHandler = (event) => {
    setSelectionState({
      ...selectionState,
      [event.target.name]: event.target.value
    })
  };

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
        {supportedColors.map((color, idx) =>
        <Button
          name="selectedColor"
          key={idx}
          style={{
            backgroundColor: `${color}`,
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            marginBottom: "10px",
            border: `${selectionState.selectedColor === color ? "2px solid #000" : "none"}`
          }}
          value={color}
          onClick={(event) => clickHandler(event)}>
        </Button>)}
        <br/>
        {supportedSizes.map((size, idx) =>
        <Button
          name="selectedSize"
          key={idx}
          variant="light"
          style={{
            textAlign: "center",
            marginBottom: "10px",
            border: `${selectionState.selectedSize === size ? "2px solid #000" : "none"}`
          }}
          value={size}
          onClick={(event) => clickHandler(event)}
        >
          {size}
        </Button>)}
        <br/>
        <Button variant="success" onClick={() => addToCart(TRY_AT_HOME_CART, {
          id,
          image,
          title,
          desc,
          price,
          selectedColor: selectionState.selectedColor,
          selectedSize: selectionState.selectedSize
        })}>Try at Home</Button>
        <Button variant="light">Buy now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemCard;

import React, { useState } from 'react';
// import styles from "./ItemCard.module.css";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../../../redux/actions/fashionbunny/actions';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, TRY_AT_HOME_CART } from '../../../../redux/actions/fashionbunny/types';

const ItemCard = ({id, image, title, desc, price, supportedColors, supportedSizes }) => {

  const dispatch = useDispatch();

  const itemsInState = useSelector((state) => state?.fashionBunny);

  const [selectionState, setSelectionState] = useState({
    selectedColor: supportedColors[0],
    selectedSize: supportedSizes[0]
  });

  const buttonClickHandler = (event) => {
    setSelectionState({
      ...selectionState,
      [event.target.name]: event.target.value
    })
  };

  /**
  * Check if item with the selected parameters is already there in the cart
  * Here it is better to serialize the data because JS stores objects with different ids and
  * comparing object to object is not correct.
  * */
  const isItemThereInCart = (cartType, item) => {
    const serializedItems = itemsInState[cartType]?.items?.map((item) => JSON.stringify(item));
    return serializedItems?.includes(JSON.stringify(item));
  };

  const cartHandler = (cartType, item) => {
    !isItemThereInCart(cartType, item) ?
    addItemToCart(TRY_AT_HOME_CART, item) :
    removeItemFromCart(TRY_AT_HOME_CART, item);
  };

  const addItemToCart = (cartType, item) => {
    dispatch(updateCart(ADD_ITEM_TO_CART, cartType, item));
  };

  const removeItemFromCart = (cartType, item) => {
    dispatch(updateCart(REMOVE_ITEM_FROM_CART, cartType, item));
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
          onClick={(event) => buttonClickHandler(event)}>
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
          onClick={(event) => buttonClickHandler(event)}
        >
          {size}
        </Button>)}
        <br/>
        <Button
          variant="success"
          onClick={() => cartHandler(TRY_AT_HOME_CART, {
            id,
            image,
            title,
            desc,
            price,
            selectedColor: selectionState.selectedColor,
            selectedSize: selectionState.selectedSize
            })
          }
        >
          {!isItemThereInCart(TRY_AT_HOME_CART, {
            id,
            image,
            title,
            desc,
            price,
            selectedColor: selectionState.selectedColor,
            selectedSize: selectionState.selectedSize
          }) ? "Try at Home": "Remove from cart"}
        </Button>
        <Button variant="light">Buy now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemCard;

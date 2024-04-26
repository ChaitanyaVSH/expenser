import React from 'react';
import styles from "./Shop.module.css";

// Components
import ItemCard from '../commons/ItemCard/ItemCard';

// Data
import { items } from '../../mockdata/items';

const Shop = () => {
  return (
    <div style={{
        textAlign: "center"
    }}>
        <h1>New arrivals</h1>
        <hr />
        {
            items.map((item, idx) => <ItemCard {...item} key={idx}/>)
        }
        <br />
        <br />
        <br />
        <br />
        <h1>Featured products</h1>
        <hr />
        {
            items.slice(0, 3).map((item, idx) => <ItemCard {...item} key={idx}/>)
        }
        <br />
        <br />
        <br />
        <br />
        <h1>New arrivals</h1>
        <hr />
        {
            items.map((item, idx) => <ItemCard {...item} key={idx}/>)
        }
    </div>
  )
}

export default Shop;

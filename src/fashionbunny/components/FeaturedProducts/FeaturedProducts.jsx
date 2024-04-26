import React from 'react';
// import styles from "./FeaturedProducts.module.css";

// Components
import ItemCard from '../commons/ItemCard/ItemCard';

// Data
import { items } from '../../mockdata/items';

const FeaturedProducts = () => {
  return (
    <>
    <h1>Featured Products</h1>
    {
        items.slice(0, 5).map((item, idx) => <ItemCard {...item} key={idx}/>)
    }
    </>
  )
}

export default FeaturedProducts;

import React from 'react';
// import styles from "./NewArrivals.module.css";

// Components
import ItemCard from '../commons/ItemCard/ItemCard';

// Data
import { items } from '../../mockdata/items';

const NewArrivals = () => {
  return (
    <>
    <h1>New Arrivals</h1>
    {
        items.map((item, idx) => <ItemCard {...item} key={idx}/>)
    }
    </>
  )
}

export default NewArrivals;

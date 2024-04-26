import React from 'react';
import styles from "./Shop.module.css";

// Composite Components
import NewArrivals from '../NewArrivals/NewArrivals';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const Shop = () => {
  return (
    <div style={{
        width: "86%",
        margin: "0 auto",
    }}>
        <NewArrivals />
        <br />
        <br />
        <br />
        <br />
        <FeaturedProducts />
    </div>
  )
}

export default Shop;

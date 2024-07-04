import React from 'react';
// import styles from "./TryAtHome.module.css";

// Redux stuff
import { useSelector } from 'react-redux';

const TryAtHome = () => {
  const state = useSelector((state) => state);
  console.log("state", state);
  return (
    <div>TryAtHome</div>
  )
}

export default TryAtHome;

import React from "react";
import styles from "./Transaction.module.css";

const Transaction = ({tName, tAmount, tType, tDesc, tDate} ) => {
  return (
    <div className={styles.tContainer}>
        <div className={styles.tDetails}>
            <h2>{tName}</h2>
            <h4>{tAmount}</h4>
        </div>
        <p><strong>Description:</strong> {tDesc}</p>
        <p><strong>Date:</strong> {tDate}</p>
    </div>
  )
}

export default Transaction;

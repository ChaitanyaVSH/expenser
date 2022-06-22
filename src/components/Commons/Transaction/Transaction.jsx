import React from "react";
import styles from "./Transaction.module.css";

import transactionCategories from '../../Tracking/TrackingConstants';
import { updateTransactions } from '../../../redux/actions/transactions/actions';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TRANSACTIONS } from "../../../redux/actions/types";

// UI Components
import Button from "react-bootstrap/Button";

const Transaction = ({
  tName,
  tAmount,
  tType,
  tDesc,
  tDate,
  tCategory,
  tId,
} ) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleDelete = (index, tCategory) => {
    if(tCategory === transactionCategories.INCOME) {
        const incomes = state.transactions.incomes;
        incomes.splice(index, 1)
        const updatedIncomes = [...incomes]

        dispatch(updateTransactions(
          UPDATE_TRANSACTIONS,
          tCategory,
          [...updatedIncomes]
        ))
      }

      if(tCategory === transactionCategories.EXPENSE) {
        const expenses = state.transactions.expenses;
        expenses.splice(index, 1)
        const updatedExpenses = [...expenses]

        dispatch(updateTransactions(
            UPDATE_TRANSACTIONS,
            tCategory,
            [...updatedExpenses]
        ))
      }

      return;

}

  return (
    <div className={styles.tContainer}>
        <div className={styles.tDetails}>
            <h2>{tName}</h2>
            <h4>{tAmount}</h4>
        </div>
        <p><strong>Description:</strong> {tDesc}</p>
        <p><strong>Date:</strong> {tDate}</p>
        <div className={styles.tButtons}>
          <Button variant="warning" type="submit" onClick={() => handleDelete(tId, tCategory)}>Delete</Button>
          <Button variant="secondary" type="submit">Update</Button>
        </div>
    </div>
  )
}

export default Transaction;

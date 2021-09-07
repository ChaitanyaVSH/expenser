import React from 'react';
import styles from "./App.module.css";

// UI Components
import ShowCase from '../ShowCase/ShowCase';

// Redux
// import { useSelector, useDispatch } from "react-redux";
// import { makeExpense } from '../../redux/actions/expense/actions';

const App = () => {

  // const dispatch = useDispatch();
  // const expenses = useSelector(state => state.expenses.expenses);


  // const clickHandler = () => {
  //   dispatch(makeExpense({
  //     title: "New Expense",
  //     amount: Math.random()
  //   }))
  // }

  return (
    <div>
      <div className={styles.showcase}>
        <ShowCase/>
      </div>
    </div>
  )
}

export default App;

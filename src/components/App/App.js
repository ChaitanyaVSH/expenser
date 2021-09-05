import React from 'react';
import styles from "./App.module.css";

// UI Components
import NavBar from '../Navbar/NavBar';

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
      <div className={styles.container}>
        <NavBar/>
        <h1>Welcome to Expenses Management</h1>
      </div>
  )
}

export default App;

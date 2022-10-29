import React from 'react'
import styles from "./Overview.module.css";

// Redux
import { useSelector } from "react-redux";

const Overview = () => {

    const state = useSelector((state) => state);
    const incomes = [...state?.transactions?.incomes]
    const expenses = [...state?.transactions?.expenses]

    let totalIncome = 0
    //eslint-disable-next-line
    incomes.map((i) => {
        totalIncome += i.amount
    })
    let totalExpense = 0
    //eslint-disable-next-line
    expenses.map((e) => {
        totalExpense += e.amount
    })

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <h4>Total Income:</h4>
                <p style={{
                    color: "#51cf66",
                    fontSize: "25px"
                }}>{totalIncome}</p>
            </div>
            <div className={styles.flex}>
                <h4>Total Expense:</h4>
                <p style={{
                    color: "red",
                    fontSize: "25px"
                }}>{totalExpense}</p>
            </div>
            <div className={styles.flex}>
                <h4>Number of transactions:</h4>
                <p style={{
                    color: "#000",
                    fontSize: "25px"
                }}>{incomes.length + expenses.length}</p>
            </div>
        </div>
    )
}

export default Overview;

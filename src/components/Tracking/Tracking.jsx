import React from 'react';
import styles from "./Tracking.module.css";

// Custom UI Components
import IncomeTracker from './IncomeTracker/IncomeTracker';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';

/**
 * This component helps the user to add an income or expense.
 * @returns JSX
 */
const Tracking = () => {

    return (
        <div className={styles.container}>
            <IncomeTracker/>
            <ExpenseTracker/>
        </div>
    )
}

export default Tracking;

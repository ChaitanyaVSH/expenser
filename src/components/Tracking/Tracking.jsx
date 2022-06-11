import React from 'react';
import styles from "./Tracking.module.css";

// Redux
import { useDispatch } from "react-redux";
import { MAKE_INCOME, MAKE_EXPENSE } from '../../redux/actions/types';
import { makeTransaction } from "../../redux/actions/transactions/actions";

// UI Components
import { toast } from 'react-toastify';

// Custom UI Components
import IncomeTracker from './IncomeTracker/IncomeTracker';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';
import transactionTypes from './TrackingConstants';

/**
 * This component helps the user to add an income or expense.
 * @returns JSX
 */
const Tracking = () => {

    // Hooks
    const dispatch = useDispatch();

    /**
     * Submit handler to update the state and the validations
     * @param {0} event, input field on which the event has occurred.
     * @returns none
     */
     const handleSubmit = (event, transactionType, transaction) => {
        event.preventDefault();

        if (transactionType === transactionTypes.INCOME) {
            dispatch(makeTransaction(MAKE_INCOME, {
                title: transaction.incomeName,
                amount: parseInt(transaction.incomeAmount),
                type: transaction.incomeType,
                date: transaction.incomeDate
            }));
            toast.success("Hurray! Added the income.");
        }

        if (transactionType === transactionTypes.EXPENSE) {
            dispatch(makeTransaction(MAKE_EXPENSE, {
                title: transaction.expenseName,
                amount: parseInt(transaction.expenseAmount),
                type: transaction.expenseType,
                date: transaction.expenseDate
            }));
            toast.success("Expenses are hard, make them wisely.");
        }
    };

    return (
        <div className={styles.container}>
            <IncomeTracker
                transactionType={transactionTypes.INCOME}
                handleSubmit={handleSubmit}
            />
            <ExpenseTracker
                transactionType={transactionTypes.EXPENSE}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Tracking;

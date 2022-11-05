import React from 'react';
import queryString from 'query-string'
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
import transactionCategories from './TrackingConstants';

/**
 * This component helps the user to add an income or expense.
 * @returns JSX
 */
const Tracking = (props) => {

    const params =queryString.parse(props.location.search, { ignoreQueryPrefix: true });

    const category = params?.category?.toUpperCase();
    const edit = params?.edit && params?.edit === 'true';
    const id = params?.id;

    // Hooks
    const dispatch = useDispatch();

    /**
     * Submit handler to update the state and the validations
     * @param {0} event, input field on which the event has occurred.
     * @returns none
     */
     const handleSubmit = (event, transactionCategory, transaction) => {
        event.preventDefault();

        if (transactionCategory === transactionCategories.INCOME) {
            dispatch(makeTransaction(MAKE_INCOME, {
                title: transaction.incomeName,
                amount: parseInt(transaction.incomeAmount),
                type: transaction.incomeType,
                person: transaction.incomePerson,
                desc: transaction.incomeDesc,
                date: transaction.incomeDate,
                category: transactionCategories.INCOME
            }));
            toast.success("Hurray! Added the income.");
        }

        if (transactionCategory === transactionCategories.EXPENSE) {
            dispatch(makeTransaction(MAKE_EXPENSE, {
                title: transaction.expenseName,
                amount: parseInt(transaction.expenseAmount),
                type: transaction.expenseType,
                person: transaction.expensePerson,
                desc: transaction.expenseDesc,
                date: transaction.expenseDate,
                category: transactionCategories.EXPENSE
            }));
            toast.success("Expenses are hard, make them wisely.");
        }
    };

    const renderJSX = () => {
        if(edit) {
            if (category === transactionCategories.INCOME) {
                return <IncomeTracker
                transactionCategory={transactionCategories.INCOME}
                handleSubmit={handleSubmit}
                id={id}
                />
            }
            else if (category === transactionCategories.EXPENSE) {
                return <ExpenseTracker
                transactionCategory={transactionCategories.EXPENSE}
                handleSubmit={handleSubmit}
                id={id}
            />
            }
        }

        return  <>
            <IncomeTracker
                transactionCategory={transactionCategories.INCOME}
                handleSubmit={handleSubmit}
            />
            <ExpenseTracker
                transactionCategory={transactionCategories.EXPENSE}
                handleSubmit={handleSubmit}
            />
            </>
    }

    return (
        <div className={styles.container}>
            {renderJSX()}
        </div>
    )
}

export default Tracking;

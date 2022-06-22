import transactionCategories from "../../../components/Tracking/TrackingConstants";
import { MAKE_INCOME, MAKE_EXPENSE, UPDATE_TRANSACTIONS } from "../../actions/types";

// Initial state for the application
const defaultState = {
    expenses: [],
    incomes: []
};

/**
 * Reducer to update the state with the new income
 * @param {0} state, current state of the application
 * @param {*} income, new income object
 * @returns updated state
 */
 const updateIncomes = (state, income) => {
    return {
        ...state,
        incomes: [...state.incomes, income]
    }
};

/**
 * Reducer to update the state with the new expense
 * @param {0} state, current state of the application
 * @param {*} expense, new expense object
 * @returns updated state
 */
const updateExpenses = (state, expense) => {
    return {
        ...state,
        expenses: [...state.expenses, expense]
    }
};

/**
 * Reducer to update the state with new list of transactions per category
 * @param {0} state, current state of the application
 * @param {1} transactionCategory, category of the transaction. Ex. INCOME or EXPENSE
 * @param {2} transactions, list of transactions under a category. Ex. List of incomes or List of expenses
 * @returns updated state
 */
const _updateTransactions = (state, transactionCategory, transactions) => {
    if (transactionCategory === transactionCategories.INCOME) {
        return {
            ...state,
            incomes: [...transactions]
        }
    }

    if (transactionCategory === transactionCategories.EXPENSE) {
        return {
            ...state,
            expenses: [...transactions]
        }
    }

    return state;

}

/**
 * Helper method or root level reducer for expenses
 * @param {0} state, default state of the application
 * @param {*} action, currently dispatched action
 * @returns Handler to the redux store for expenses
 */
const transactionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MAKE_INCOME:
            return updateIncomes(state, action.payload);
        case MAKE_EXPENSE:
            return updateExpenses(state, action.payload);
        case UPDATE_TRANSACTIONS:
            return _updateTransactions(state, action.transactionCategory, action.payload)
        default:
            return state;
    }
};

export default transactionReducer;

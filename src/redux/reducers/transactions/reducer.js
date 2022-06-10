import { MAKE_INCOME } from "../../actions/types";
import { MAKE_EXPENSE } from "../../actions/types";

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
        default:
            return state;
    }
};

export default transactionReducer;

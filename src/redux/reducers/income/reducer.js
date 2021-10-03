import incomeEnum from "../../../components/Tracking/IncomeTracker/incomeTypes";
import { MAKE_INCOME } from "../../actions/types";

// Initial state for the application
const defaultState = {
    totalPortfolioValue: 1000,
    incomes: [{
        title: "Salary of August",
        amount: 112318000,
        type: incomeEnum.SALARY,
    }],
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
 * Helper method or root level reducer for incomes
 * @param {0} state, default state of the application
 * @param {*} action, currently dispatched action
 * @returns Handler to the redux store for incomes
 */
const incomeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MAKE_INCOME:
            return updateIncomes(state, action.payload);
        default:
            return state;
    }
};

export default incomeReducer;

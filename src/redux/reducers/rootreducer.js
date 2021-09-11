import { combineReducers } from "redux";
import expenseReducer from "./expense/reducer";
import incomeReducer from "./income/reducer";

const rootReducer = combineReducers({
    expenses: expenseReducer,
    incomes: incomeReducer
});

export default rootReducer;

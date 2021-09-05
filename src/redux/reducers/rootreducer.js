import { combineReducers } from "redux";
import expenseReducer from "./expense/reducer";

const rootReducer = combineReducers({
    expenses: expenseReducer
});

export default rootReducer;

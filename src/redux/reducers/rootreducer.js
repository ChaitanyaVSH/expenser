import { combineReducers } from "redux";
import transactionReducer from "./transactions/reducer";
import filtersReducer from "./filters/reducer";

const rootReducer = combineReducers({
    transactions: transactionReducer,
    filters: filtersReducer
});

export default rootReducer;

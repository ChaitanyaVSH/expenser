import { combineReducers } from "redux";
import transactionReducer from "./transactions/reducer";

const rootReducer = combineReducers({
    transactions: transactionReducer,
});

export default rootReducer;

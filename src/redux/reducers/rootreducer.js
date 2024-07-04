import { combineReducers } from "redux";
import transactionReducer from "./transactions/reducer";
import filtersReducer from "./filters/reducer";
import fashionBunnyReducer from "./fashionbunny/reducers";

const rootReducer = combineReducers({
    transactions: transactionReducer,
    filters: filtersReducer,
    fashionBunny: fashionBunnyReducer
});

export default rootReducer;

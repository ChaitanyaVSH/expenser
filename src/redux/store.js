import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/rootreducer";

let middleWares = null;

if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    middleWares = applyMiddleware(logger);
}

const store = createStore(rootReducer, middleWares);

export default store;

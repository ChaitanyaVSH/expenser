import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/rootreducer";

const middlewares = applyMiddleware(logger);

const store = createStore(rootReducer, middlewares);

export default store;

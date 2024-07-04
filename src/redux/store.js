import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/rootreducer";

// Utils
// import { setItem } from "../utils/LocalStorage/localStorageUtils";

let middleWares = [];

if( process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    middleWares = [logger];
}

// const persistedState = localStorage.getItem('CMexpenserDataKey')
//                        ? JSON.parse(localStorage.getItem('CMexpenserDataKey'))
//                        : {}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

// store.subscribe(() => {
//     setItem("CMexpenserDataKey", store.getState(), true);
// })

export default store;

/**
 * References:
 * https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
 */
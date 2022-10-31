import { ADD_FILTER } from "../types";

export const addFilter = (filter) => {
    return {
        type: ADD_FILTER,
        payload: filter
    }
};

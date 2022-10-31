import { ADD_FILTER } from "../../actions/types";

// Initial filters state for the application
const defaultState = {
    filters: {

    }
}

const updateFilters = (state, payload) => {
    return {
        filters: {
            ...state.filters,
            payload
        }
    }
}

/**
 * Helper method to set the filters across application
 * @param {0} state, default state of the application
 * @param {1} action, currently dispatched action
 * @returns Handler to the redux store for filters
 */
 const filtersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return updateFilters(state, action.payload);
        default:
            return state;
    }
};

export default filtersReducer;

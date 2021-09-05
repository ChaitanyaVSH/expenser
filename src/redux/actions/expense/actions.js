import { MAKE_EXPENSE } from "../types";

export const makeExpense = (expense) => {
    return {
        type: MAKE_EXPENSE,
        payload: expense
    }
};

import { MAKE_INCOME } from "../types";

export const makeIncome = (income) => {
    return {
        type: MAKE_INCOME,
        payload: income
    }
};

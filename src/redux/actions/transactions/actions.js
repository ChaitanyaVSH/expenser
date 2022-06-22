/**
 * Handler to add an individual transaction into the state.
 * @param {0} type, action type.
 * @param {*} transaction, transaction instance for that category.
 * @returns, Action with required payload properties.
 */
export const makeTransaction = (type, transaction) => {
    return {
        type: type,
        payload: transaction
    }
};

/**
 * Handler to update list of transactions per category at once in the state.
 * @param {0} type, action type.
 * @param {*} transactionCategory, transaction category.
 * @param {*} transactions, list of transactions under the category.
 * @returns Action with required payload properties.
 */
export const updateTransactions = (type, transactionCategory, transactions) => {
    return {
        type: type,
        transactionCategory: transactionCategory,
        payload: transactions
    }
};

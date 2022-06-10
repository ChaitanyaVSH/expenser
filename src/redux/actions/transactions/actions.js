export const makeTransaction = (type, transaction) => {
    return {
        type: type,
        payload: transaction
    }
};

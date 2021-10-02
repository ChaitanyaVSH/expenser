/**
 * Helper method to get items from the local storage.
 * @param {0} key, key of the local storage item.
 * @param {1} parse, boolean which determines whether to parse the response.
 * @returns response from the local storage.
 */
export const getItem = (key, parse = false) => {
    return parse ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key);
};

/**
 * Helper method to store items in the local storage.
 * @param {0} key, key of the local storage item.
 * @param {1} value, value against the key to store in the local storage.
 * @param {2} stringify, boolean which determines whether to stringify the data before storing in the local storage.
 * @returns true if able to store the {key: value} in local storage, else returns false if failed to store the data.
 */
export const setItem = (key, value, stringify = false) => {
    try {
        localStorage.setItem(key, stringify ? JSON.stringify(value) : value);
        return true;
    } catch (error) {
        console.error(error);
        return false
    }
};

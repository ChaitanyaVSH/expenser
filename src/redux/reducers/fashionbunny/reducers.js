import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    // INCREASE_QUANTITY_IN_CART,
    // DECREASE_QUANTITY_IN_CART,
    // TRY_AT_HOME_CART,
    // BUY_NOW_HOME_CART
} from "../../actions/fashionbunny/types";

const defaultState = {
    TRY_AT_HOME_CART: {
        items: []
    },
    BUY_NOW_HOME_CART: {
        items: []
    }
}

// Reducer handlers
const addItemToCart = (state, action) => {
    console.log("Adding item to cart: reducer");

    /**
     * It is better to use JSON.stringify() because attributes like size, color of the item
     * will be converted to a string and the apple-to-apple comparison will be easy as
     * items that differ only in size and color are considered as different items.
     */
    let setObj = new Set([...state[action.cartType].items, action.cartItem].map(JSON.stringify));
    let uniqueItems = Array.from(setObj).map(JSON.parse);

    return {
        ...state,
        [action.cartType]: {
            items: uniqueItems
        }
    };
};

const removeItemFromCart = (state, action) => {
    console.log("Removing item from the cart: reducer");
}

const fashionBunnyReducer = (state = defaultState, action) => {
    // console.log("action", action);
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return addItemToCart(state, action);
        case REMOVE_ITEM_FROM_CART:
            return removeItemFromCart(state, action);
        default:
            return state;
    }
}

export default fashionBunnyReducer;

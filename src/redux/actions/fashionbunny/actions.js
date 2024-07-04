// Actions

export const updateCart = (type, cartType, cartItem) => {
    console.log("Adding item to cart: action");
    return {
        type,
        cartType,
        cartItem
    }
};

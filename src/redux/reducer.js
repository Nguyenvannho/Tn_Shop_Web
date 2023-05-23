import {SET_CART,GET_CART} from './action'

let cart = localStorage.getItem('cart')
cart = cart ? JSON.parse(cart) : []
const initialState  = {
    cart: cart
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
            break;
        default:
            return state;
    }
};

export default rootReducer;
//INCREASE & DECREASE BUTTON 

import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT, CLEAR_CART } from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}

export const clearProduct = (name) => {
    return (dispatch) => {

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}

export const clearCart = (name) => {
    return (dispatch) => {

        dispatch({
            type: CLEAR_CART,
            payload: name
        })
    }
}
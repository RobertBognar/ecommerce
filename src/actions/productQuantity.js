//INCREASE & DECREASE BUTTON 

import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT, CLEAR_CART } from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log('Inside product quantity');
        console.log('The action is', action);
        console.log('The product name is', name);

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log('Inside remove product');
        console.log('Product name ', name);


        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}

export const clearCart = (name) => {
    return (dispatch) => {
        console.log('Inside remove cart');
        console.log('Product name ', name);


        dispatch({
            type: CLEAR_CART,
            payload: name
        })
    }
}
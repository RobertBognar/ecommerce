import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        blackHoodie: {
            name: "Black Hoodie",
            tag: 'blackHoodie',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        grayHoodie: {
            name: "Gray Hoodie",
            tag: 'grayHoodie',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        blueHoodie: {
            name: "Blue Hoodie",
            tag: 'blueHoodie',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        pinkHoodie: {
            name: "Pink Hoodie",
            tag: 'pinkHoodie',
            price: 60.00,
            numbers: 0,
            inCart: false
        },
        streetHoodie: {
            name: "Street Hoodie",
            tag: 'streetHoodie',
            price: 70.00,
            numbers: 0,
            inCart: false
        },
        printedHoodie: {
            name: "Printed Hoodie",
            tag: 'printedHoodie',
            price: 170.00,
            numbers: 0,
            inCart: false
        },
        warmHoodie: {
            name: "Warm Hoodie",
            tag: 'warmHoodie',
            price: 99.00,
            numbers: 0,
            inCart: false
        },
        basicHoodie: {
            name: "Basic Hoodie",
            tag: 'basicHoodie',
            price: 80.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload] }
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}
import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/types';

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
//ADDING CASES FOR BASKET & CART NUMBERS UPDATES
//DECREASE PREVENT TO GO TO NEGATIVE WITH UPDATING WITH THE NEW COST
export default (state = initialState, action) => {
    let productSelected = '';
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload] }
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            productSelected.numbers += 1;
            return {
                ...state,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            let newCartCost = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers -= 0;
                newCartCost = state.cartCost;
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
            }

            return {
                ...state,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state;
    }
}
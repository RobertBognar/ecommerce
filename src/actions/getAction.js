import { GET_NUMBERS_BASKET } from './types'

export const getNumbers = () => {
    return (dispatch) => {
        console.log('Getting All Numbers');
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}
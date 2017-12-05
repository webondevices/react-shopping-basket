import actionTypes from './../constants/actionTypes';
import initialState from './initialState';

export default function prodcutReducer(state = initialState.products, action) {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            const newProduct = {
                recordId: Date.now(),
                productId: action.product
            };

            return [...state, newProduct];

        case actionTypes.REMOVE_PRODUCT:
            const updatedProductList = state.filter(product => product.recordId !== action.recordId);
            return updatedProductList;
            
        default:
            return state;
    }
}
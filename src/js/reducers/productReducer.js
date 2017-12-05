import actionTypes from './../constants/actionTypes';
import initialState from './initialState';

export default function prodcutReducer(state = initialState.products, action) {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return [...state, action.product];
            
        default:
            return state;
    }
}
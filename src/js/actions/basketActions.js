import actionTypes from './../constants/actionTypes';

export function addProduct(product) {
    return {
        type: actionTypes.ADD_PRODUCT,
        product: product
    };
}
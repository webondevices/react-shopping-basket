import actionTypes from './../constants/actionTypes';

export function addProduct(product) {
    return {
        type: actionTypes.ADD_PRODUCT,
        product
    };
}

export function removeProduct(recordId) {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        recordId
    };
}
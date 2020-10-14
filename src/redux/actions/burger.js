import { 
    ADD_INGREDIENT, 
    LOAD_ORDERS, 
    ORDER_LOAD_FAILED, 
    REMOVE_INGREDIENT, 
    RESET_INGREDIENT, 
    UPDATE_PURCHASABLE
} from "./types";

import axios from 'axios';

export const addIngredient = ingredientType => {
    return {
        type: ADD_INGREDIENT,
        payload: ingredientType
    } 
};

export const removeIngredient = ingredientType => {
    return {
        type: REMOVE_INGREDIENT,
        payload: ingredientType
    } 
};

export const updatePurchasable = () => {
    return {
        type: UPDATE_PURCHASABLE
    }
};

export const resetIngredient = () => {
    return {
        type: RESET_INGREDIENT
    }
};

export const loadOrders = orders => {
    return {
        type: LOAD_ORDERS,
        payload: orders
    }
}

export const orderLoadFailed = () => {
    return {
        type: ORDER_LOAD_FAILED
    }
}

export const fetchOrders = () => dispatch => {
    axios.get('https://burger-builder-b6eae.firebaseio.com/orders.json')
        .then(response=>{
            dispatch(loadOrders(response.data));
        })
        .catch(err=>console.log(err))
}
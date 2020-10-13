import { 
    ADD_INGREDIENT, 
    REMOVE_INGREDIENT, 
    UPDATE_PURCHASABLE
} from "./types";

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
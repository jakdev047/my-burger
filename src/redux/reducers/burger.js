import { ADD_INGREDIENT } from "../actions/types";

const ingredientsPrice = {
    salad: 20,
    cheese: 40,
    meat: 90
}
const initialState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 },
    ],
    totalPrice: 80,
    purchaseable: false
};

const reducers = (state = initialState, action) => {
    const ingredients = [...state.ingredients];
    switch (action.type) {
        case ADD_INGREDIENT: {
            for (let item of ingredients) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + ingredientsPrice[action.payload],
            }
        };

        default:
            return state;
    };
};

export default reducers;
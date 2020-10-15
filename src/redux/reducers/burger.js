import { ADD_INGREDIENT, LOAD_ORDERS, ORDER_LOAD_FAILED, REMOVE_INGREDIENT, RESET_INGREDIENT, UPDATE_PURCHASABLE } from "../actions/types";

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
    purchaseable: false,
    orders: [],
    orderLoading: true,
    orderErr: false
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

        case REMOVE_INGREDIENT: {
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                };
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - ingredientsPrice[action.payload],
            }
        };

        case UPDATE_PURCHASABLE: {
            const sum = state.ingredients.reduce((sum, element) => {
                return sum += element.amount;
            }, 0);

            return {
                ...state,
                purchaseable: sum > 0
            }
        };

        case RESET_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    { type: 'salad', amount: 0 },
                    { type: 'cheese', amount: 0 },
                    { type: 'meat', amount: 0 },
                ],
                totalPrice: 80,
                purchaseable: false
            }
        };

        case LOAD_ORDERS: {
            let orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                orders: orders,
                orderLoading: false,
            }
        }

        case ORDER_LOAD_FAILED: {
            return {
                ...state,
                orderErr: true,
                orderLoading: false,
            }
        }

        default:
            return state;
    };
};

export default reducers;
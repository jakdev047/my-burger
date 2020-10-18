import { AUTH_SUCCESS } from "../actions/types";

const initialState = {
    token: null,
    userId: null
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        };
        default:
            return state;
    };
};

export default reducers;
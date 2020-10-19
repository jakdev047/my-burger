import { AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/types";

const initialState = {
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null
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
        case AUTH_LOGOUT: {
            return {
                ...state,
                token: null,
                userId: null
            }
        };
        case AUTH_LOADING:{
            return {
                ...state,
                authLoading: action.payload
            }
        };
        default:
            return state;
    };
};

export default reducers;
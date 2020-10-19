import axios from 'axios';
import { AUTH_SUCCESS } from './types';

export const authSuccess = (token,userId) => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            token,
            userId
        }
    }
}

export const auth = (email,password,mode) => dispatch => {
    const authData = {
        email,
        password,
        returnSecureToken: true
    };

    const API_KEY = 'AIzaSyAzjNdHvPRnbNl_H8gRolHg-ayxJF0ygQk';

    let authUrl = null;

    if(mode === 'Sign Up') {
        authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
    }
    else {
        authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`;
    }

    axios.post(authUrl + API_KEY,authData)
        .then(response=>{
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('userId',response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime',expirationTime);
            dispatch(authSuccess(response.data.idToken,response.data.localId))
        })
};

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if(!token) {
        // logout
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if(expirationTime <= new Date()) {
            // logout
        }
        else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token,userId));
        }
    }
}
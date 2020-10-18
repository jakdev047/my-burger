import axios from 'axios';

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
        .then(response=>console.log(response))
}
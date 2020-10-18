import { combineReducers } from 'redux';
import burger from '../reducers/burger';
import auth from '../reducers/auth';

export default combineReducers({
    burger,
    auth
});
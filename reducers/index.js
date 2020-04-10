import {combineReducers} from 'redux';
import user from './user';
import post from './post';
import reply from './reply';

const rootReducer = combineReducers({
    user,
    post, 
    reply,
})
export default rootReducer; 

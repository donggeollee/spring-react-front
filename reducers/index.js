import {combineReducers} from 'redux';
import user from './user';
import post from './post';
import reply from './reply';
import image from './image';

const rootReducer = combineReducers({
    user,
    post, 
    reply,
    image,
})
export default rootReducer; 

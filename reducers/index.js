import {combineReducers} from 'redux';
import user from './user';
import post from './post';
import reply from './reply';
import image from './image';
import file from './file';

const rootReducer = combineReducers({
    user,
    post, 
    reply,
    image,
    file,
})
export default rootReducer; 

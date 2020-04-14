import axios from 'axios';
import user from './user';
import post from './post';
import reply from './reply';
import image from './image';
import {all, fork} from 'redux-saga/effects';

axios.defaults.baseURL = 'http://localhost:8081/react';

export default function* rootSaga(){
    yield all([
        fork(user),
        fork(post),
        fork(reply),
        fork(image), 
    ])
}
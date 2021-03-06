import axios from 'axios';
import user from './user';
import post from './post';
import {all, fork} from 'redux-saga/effects';

axios.defaults.baseURL = 'http://localhost:8081/react';

export default function* rootSaga(){
    yield all([
        fork(user),
        fork(post),
    ])
}
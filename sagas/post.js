import { fork, all, takeLatest } from "redux-saga/effects";
import {ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE} from '../reducers/post';
import Axios from "axios";


function addPostApi(addPostInfo){
    return Axios.post('/post', addPostInfo);
}

function* addPost(action){
    try{
        const response = yield call(addPostApi,action.data);
        yield put({
            type : ADD_POST_SUCCESS,
            data : response.data
        })
    } catch(e){
        console.error(e);
        yield put({
            type : ADD_POST_FAILURE,
            data : response.data
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),

    ])
}
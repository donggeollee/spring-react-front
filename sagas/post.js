import { fork, all, takeLatest, put, call,} from "redux-saga/effects";
import {ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE} from '../reducers/post';
import axios from "axios";


function addPostApi(addPostInfo){
    return axios.post('/post/upload', addPostInfo);
}

function* addPost(action){
    let res = null;
    try{
        res = yield call(addPostApi,action.data);
        console.log(res); 
        yield put({
            type : ADD_POST_SUCCESS,
            data : res.data
        })
    } catch(e){
        console.error(e);
        yield put({
            type : ADD_POST_FAILURE,
            data : res.data
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function loadPostApi(username){
    return axios.get('/post/all');
}

function* loadPost(action){
    try {
        const response = yield call(loadPostApi,action.data)
        const result = response.data;
        if ( !result.error ){
            yield put({
                type : LOAD_POST_SUCCESS,
                data : result.data
            })
        } else {
            yield put({
                type : LOAD_POST_FAILURE
            })
        }
    } catch(e) {
        console.error(e)
        yield put({
            type : LOAD_POST_FAILURE
        })
    }
}

function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
 
export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPost),

    ])
}
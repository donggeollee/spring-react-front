import { fork, all, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE} from '../reducers/post';
import Axios from "axios";


function addPostApi(data){
    // 단일값의 경우 하나의 키-값 형태를 맞추기 위해 객체로 만들어,
    // 전송해주어야 서버에서 알맞게 파싱할 수 있다.
    return Axios.post('/post/upload', { userId : data.userId, content : data.content }); 
}

function* addPost(action){
    let  response = null;
    try{
        response = yield call(addPostApi,action.data);
        console.log(response); 
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

function loadPostApi(){
    return Axios.get('/post/all');
}

function* loadPost(action){
    let response = null
    console.log("loadpost 실행");
    try{
        response = yield call(loadPostApi, action.data)
        yield put({
            type : LOAD_POST_SUCCESS,
            data : response.data.data, 
        })
    } catch(e){
        console.error(e);
        yield put({
            type : LOAD_POST_FAILURE,
            data : response.data.error, 
        })
    }
}

function* watchLoadPost(){
    yield takeEvery(LOAD_POST_REQUEST, loadPost )
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPost),

    ])
}
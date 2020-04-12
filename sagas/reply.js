import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {CREATE_REPLY_REQUEST,
        CREATE_REPLY_SUCCESS,
        CREATE_REPLY_FAILURE,
        LOAD_REPLY_REQUEST,
        LOAD_REPLY_FAILURE,
        LOAD_REPLY_SUCCESS,} from '../reducers/reply';


function createReplyApi(replyInfo){
    const config = {
        headers : {
            'authorization' : localStorage.getItem('JWT_TOKEN'),
        } 
    }
    return axios.post( '/reply/create', replyInfo, config ); 
}

function* createReply(action){
    try {
        const response = yield call(createReplyApi,action.data);
        const result = response.data;
        if ( result.error != null ){
            yield put({
                type : CREATE_REPLY_FAILURE,
            })
        } else {
            yield put({  
                type : CREATE_REPLY_SUCCESS,
                data : result,
            })
        }
        
    } catch (e) {
        console.error(e);
        yield put({
            type : CREATE_REPLY_FAILURE,
        })
    }
}
 
function* watchCreateReply(){
    yield takeLatest(CREATE_REPLY_REQUEST, createReply);
} 

function loadReplyApi(){
    const config = {
        authorization : '',
    }
    return axios.get('/reply/read/all','',config);
}

function* loadReply(action){

    try {
        const response = yield call(loadReplyApi, action.data);
        const result = response.data; 
        if (result.error != null){  
            yield put({
                type : LOAD_REPLY_FAILURE
            })
        } else {
            yield put({
                type : LOAD_REPLY_SUCCESS,
                data : result.data
            })
        }
    }catch(e){
        console.error(e)
        put({
            type : LOAD_REPLY_FAILURE
        })
    }
}

function* watchLoadReply(){
    yield takeLatest(LOAD_REPLY_REQUEST, loadReply);
}


export default function* replySaga(){
    yield all([
        fork(watchCreateReply),
        fork(watchLoadReply),
    ])
}
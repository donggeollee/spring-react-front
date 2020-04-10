import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
import {CREATE_REPLY_REQUEST,
        CREATE_REPLY_SUCCESS,
        CREATE_REPLY_FAILURE,} from '../reducers/reply';
import axios from 'axios';


function createReplyApi(replyInfo){
    const config = {
        headers : {
            'authorization' : localStorage.getItem('JWT_TOKEN'),
        } 
    }
    return axios.post( '/reply/create', replyInfo, config ); 
}

function* createReply(action){
    console.log("댓글 삽입",action.data); 
    try {
        const response = yield call(createReplyApi,action.data);
        const result = response.data;
        console.log("result : ",result); 
        if ( result.error != null || result.data.saveCount !== 1 ){
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
 
export default function* replySaga(){
    yield all([
        fork(watchCreateReply),
    ])
}
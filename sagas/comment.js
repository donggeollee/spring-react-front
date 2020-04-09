import {CREATE_COMMENT_REQUEST,
        CREATE_COMMENT_SUCCESS,
        CREATE_COMMENT_FAILURE,} from '../reducers/post';

function createCommentApi(commentInfo){
    const config = {
        headers : {
            'authorization' : localStorage.getItem('JWT_TOKEN'),
        }
    }
    return axios.post( '/comment', commentInfo, config );
}

function* createComment(action){
    console.log("댓글 삽입",action.data);
    try {
        const response = yield call(createCommentApi,action.data);
        const result = response.data;
        if ( result.error != null ){
            yield put({
                type : CREATE_COMMENT_FAILURE,
            })
        } else {
            yield put({ 
                type : CREATE_COMMENT_SUCCESS,
                data : result.data,
            })
        }
        
    } catch (e) {
        console.error(e);
        yield put({
            type : CREATE_COMMENT_FAILURE,
        })
    }
}

function* watchCreateComment(){
    yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}
 
export default function* commentSaga(){
    yield all([
        fork(watchCreateComment),
    ])
}
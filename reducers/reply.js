
const initialState = {
    replys : [
        {
            id : '',
            postId : '',
            userId : '',
            nickname : '',
            reply : '',
            createdAt : '',
            updatedAt : '',
        }
    ],
    loadingReplys : false,
}

export const CREATE_REPLY_REQUEST = 'post/CREATE_REPLY_REQUEST';
export const CREATE_REPLY_SUCCESS = 'post/CREATE_REPLY_SUCCESS';
export const CREATE_REPLY_FAILURE = 'post/CREATE_REPLY_FAILURE';

export const LOAD_REPLY_REQUEST = 'post/LOAD_REPLY_REQUEST';
export const LOAD_REPLY_SUCCESS = 'post/LOAD_REPLY_SUCCESS';
export const LOAD_REPLY_FAILURE = 'post/LOAD_REPLY_FAILURE';


const replyReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_REPLY_REQUEST : {
            return {
                ...state,
            }
        }
        case CREATE_REPLY_SUCCESS : {
            return {
                ...state ,
                replys : action.data
            }
        }
        case CREATE_REPLY_FAILURE : {
            return {
                ...state,
            }
        }
        case LOAD_REPLY_REQUEST : {
            return {
                ...state,
                loadingReplys : true,
            }
        }
        case LOAD_REPLY_SUCCESS : {
            return {
                ...state ,
                loadingReplys : false ,
                REPLYs : action.data
            }
        }
        case LOAD_REPLY_FAILURE : {
            return {
                ...state,
                loadingReplys : false ,
            }
        }
        default : {
            return state;
        }

    }
} 

export default replyReducer;

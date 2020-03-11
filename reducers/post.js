const initialState = {
    posts : [
        {
            id : '10',
            userId : '1',
            content : '1',
            createdAt : '', // new Date() 는 리듀서가 순수함수여야 한다는 특징을 위배시킴.
            updatedAt : '',
        },
    ],
    isPosting : false, 
    isPostSuccess : false,
    isPostError : '',
    LoadedPost : false,
}

export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'post/LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'post/LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'post/LOAD_POST_FAILURE';

const postReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST : {
            return {
                ...state,
                isPosting : true,
            }
        }
        case ADD_POST_SUCCESS : {
            return {
                ...state,
                isPosting : false,
                posts : [
                    action.data ,
                    ... state.posts,
                ]
            }
        }
        case ADD_POST_FAILURE : {
            return {
                ...state,
                isPosting : false,
                isPostError : action.data
            }
        }
        case LOAD_POST_REQUEST : {
            return {
                ...state,
            }
        }
        case LOAD_POST_SUCCESS : {
            console.log('asdfasdf')
            console.log(action.data.posts)
            return {
                ...state,
                LoadedPost : true,
                posts : action.data.posts, 
            }
        }
        case LOAD_POST_FAILURE : {
            return {
                ...state,
                isPostError : action.data.error
            }
        }
        default : {
            return {
                ...state   
            }
        }
    }
}

export default postReducer;
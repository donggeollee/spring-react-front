
const initialState = {
    posts : [
        {
            postId : '0',  
            userId : '1',
            content : '1',
            likes : [1,2],
            images : ["src"],
        },
    ],
    isPosting : false,  
    isPostSuccess : false, 
    isPostError : '',
    isLoadingPost : false,
}

export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE';

export const LOAD_POST_REQUEST = 'post/LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'post/LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'post/LOAD_POST_FAILURE';

const postReducer = (state = initialState, action) => {
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
                isLoadingPost : true,
            }
        }
        case LOAD_POST_SUCCESS : {
            return {
                ...state,
                isLoadingPost : false,
                posts : action.data.posts,
            }
        }
        case LOAD_POST_FAILURE : { 
            return {
                ...state,
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
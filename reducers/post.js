const initialState = {
    posts : [
        {
            postId : '10',
            userId : '1',
            content : '1',
            likes : [1,2],
            images : ["src"],
        },
    ],
    isPosting : false, 
    isPostSuccess : false,
    isPostError : '',

}

export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE';


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
        default : {
            return {
                ...state   

            }
        }
    }

}


export default postReducer;
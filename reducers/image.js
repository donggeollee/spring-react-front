const initialState = {
    images : [
        {
            id : '',
            postId : '',
            imageName : '',
            fileSize : '',

        }    
    ],

}

export const CREATE_IMAGE_REQUEST = 'post/CREATE_IMAGE_REQUEST';
export const CREATE_IMAGE_SUCCESS = 'post/CREATE_IMAGE_SUCCESS';
export const CREATE_IMAGE_FAILURE = 'post/CREATE_IMAGE_FAILURE';

const imageReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_IMAGE_REQUEST : {
            return {
                
            }
        }
        case CREATE_IMAGE_SUCCESS : {
            return {
                
            }
        }
        case CREATE_IMAGE_FAILURE : {
            return {
                
            }
        }
        default :{
            return {
                ...state,
            }
        }

    }
}   

export default imageReducer;
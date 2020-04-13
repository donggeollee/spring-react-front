const initialState = {
    images : [
        
    ]
}

export const CREATE_IMAGE_REQUEST = 'image/CREATE_IMAGE_REQUEST';
export const CREATE_IMAGE_SUCCESS = 'image/CREATE_IMAGE_SUCCESS';
export const CREATE_IMAGE_FAILURE = 'image/CREATE_IMAGE_FAILURE';

export const READ_IMAGE_REQUEST = 'image/READ_IMAGE_REQUEST';
export const READ_IMAGE_SUCCESS = 'image/READ_IMAGE_SUCCESS';
export const READ_IMAGE_FAILURE = 'image/READ_IMAGE_FAILURE';

export const DELETE_IMAGE_REQUEST = 'image/DELETE_IMAGE_REQUEST';
export const DELETE_IMAGE_SUCCESS = 'image/DELETE_IMAGE_SUCCESS';
export const DELETE_IMAGE_FAILURE = 'image/DELETE_IMAGE_FAILURE';

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
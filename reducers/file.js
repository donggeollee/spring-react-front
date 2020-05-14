const initialState = {
    files : [
        {
            objectType : '',
            objectId : '',
            fileName : '',
            fileSize : '',
        }    
    ],
    fileUploading : false,            
}

export const CREATE_FILE_REQUEST = 'file/CREATE_FILE_REQUEST';
export const CREATE_FILE_SUCCESS = 'file/CREATE_FILE_SUCCESS';
export const CREATE_FILE_FAILURE = 'file/CREATE_FILE_FAILURE';

export const READ_FILE_REQUEST = 'file/READ_FILE_REQUEST';
export const READ_FILE_SUCCESS = 'file/READ_FILE_SUCCESS';
export const READ_FILE_FAILURE = 'file/READ_FILE_FAILURE';

export const DELETE_FILE_REQUEST = 'file/DELETE_FILE_REQUEST';
export const DELETE_FILE_SUCCESS = 'file/DELETE_FILE_SUCCESS';
export const DELETE_FILE_FAILURE = 'file/DELETE_FILE_FAILURE';

const fileReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_FILE_REQUEST : {
            console.log(action);
            return {
                ...state, 
                 
            }
        }
        case CREATE_FILE_SUCCESS : {
            return {
                ...state,
                files : state.files.concat(action.data.objectId),
            }
        }
        case CREATE_FILE_FAILURE : {
            return {
                
            }
        }
        case READ_FILE_REQUEST : {
            return {
                
            }
        }
        case READ_FILE_SUCCESS : {
            return {
                
            }
        }
        case READ_FILE_FAILURE : {
            return {
                
            }
        }
        case DELETE_FILE_REQUEST : {
            return {
                
            }
        }
        case DELETE_FILE_SUCCESS : {
            return {
                
            }
        }
        case DELETE_FILE_FAILURE : {
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

export default fileReducer;
import { bindActionCreators } from "redux";

const initialState = {
    user : {
        id : '',
        username : '',
        nickname : ''
    },
    isSigningup : false ,
    signupError : false ,
    signupSuccess : false ,
    isCheckingUsername : false ,
    isLoggingIn : false,
    isLoggedIn : false,
    isLoginError : false,
    authToken : ''
}

export const USER_SIGNUP_REQUEST = "user/USER_SIGNUP_REQUEST";
export const USER_SIGNUP_SUCCESS = "user/USER_SIGNUP_SUCCESS"; 
export const USER_SIGNUP_FAILURE = "user/USER_SIGNUP_FAILURE";

export const USER_USERNAME_DUPLICATE_CHECK_REQUEST = "user/USER_USERNAME_DUPLICATE_CHECK_REQUEST";
export const USER_USERNAME_DUPLICATE_CHECK_SUCCESS = "user/USER_USERNAME_DUPLICATE_CHECK_SUCCESS";
export const USER_USERNAME_DUPLICATE_CHECK_FAILURE = "user/USER_USERNAME_DUPLICATE_CHECK_FAILURE";

export const LOGIN_REQUEST = "user/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "user/LOGIN_FAILURE";

export const INSERT_AUTH_TOKEN = "user/INSERT_AUTH_TOKEN";
export const DELETE_AUTH_TOKEN = "user/DELETE_AUTH_TOKEN";

export const LOAD_USER_REQUEST = "user/LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "user/LOAD_USER_SUCCESS"; 
export const LOAD_USER_FAILURE = "user/LOAD_USER_FAILURE";


const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_SIGNUP_REQUEST : {
            return { 
                ...state ,
                isSigningup : true
            }
        }
        case USER_SIGNUP_SUCCESS : {
            return {
                ...state ,
                isSigningup : false,
                signupSuccess : true,
            }
        }
        case USER_SIGNUP_FAILURE : {
            return {
                ...state ,
                isSigningup : false, 
                signupError : action.error
            }
        }
        case USER_USERNAME_DUPLICATE_CHECK_REQUEST : {
            return {
                ...state ,
                isCheckingUsername : true
            }
        }
        case USER_USERNAME_DUPLICATE_CHECK_SUCCESS : {
            return {
                ...state ,
                isCheckingUsername : false,
                usernameChecked : true
            }
        }
        case USER_USERNAME_DUPLICATE_CHECK_FAILURE : {
            return {
                ...state ,
                isCheckingUsername : false, 
                usernameChecked : false,
            }
        }
        case LOGIN_REQUEST : {
            return {
                ...state ,
                isLoggingIn : true
            }
        }
        case LOGIN_SUCCESS : {
            return {
                ...state ,
                isLoggingIn : false,
                isLoggedIn : true, 
                user : {
                    ...state.user,
                    username : action.data.loginInfo.username,
                    nickname : action.data.loginInfo.nickname  
                },
                authToken : action.data.authToken
            }
        }
        case LOGIN_FAILURE : {
            return { 
                ...state ,
                isLoggingIn : false, 
                isLoginError : true,
            }
        }
        case INSERT_AUTH_TOKEN : {
            return {
                ...state ,
                authToken : action.data
            }
        }
        case DELETE_AUTH_TOKEN : {
            return { 
                ...state ,
                authToken : ''
            }
        }
        case LOAD_USER_REQUEST : {
            return { 
                ...state ,
                
            }
        }
        case LOAD_USER_SUCCESS : {
            return {
                ...state ,
                isLoggedIn : true,
                user : {
                    ...state.user,
                    username : action.data.loadedUser.principal.username,
                },
            }
        }
        case LOAD_USER_FAILURE : {
            return { 
                ...state ,
                isLoggedIn : false,
            }
        }
        default : {
            return {
                ...state,
            }
        }

    }
}

export default userReducer;
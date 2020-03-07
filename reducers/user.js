import { bindActionCreators } from "redux";

const initialState = {
    user : {
        id : '',
        username : '',
        password : '',
        nickname : ''
    },
    isSigningup : false ,
    signupError : false ,
    signupSuccess : false ,
    isCheckingUsername : false ,
    usernameChecked : false,
    isLoggingIn : false,
    isLoggedIn : false,
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
                     id : action.data.loginUser.id,
                     username : action.data.loginUser.username,
                     password : action.data.loginUser.password,
                     nickname : action.data.loginUser.nickname,
                    },
            }
        }
        case LOGIN_FAILURE : {
            return { 
                ...state ,
                isLoggingIn : false, 
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
import {all, fork, put, takeLatest, call, } from 'redux-saga/effects';
import { USER_SIGNUP_REQUEST,
         USER_SIGNUP_SUCCESS,
         USER_SIGNUP_FAILURE,
         USER_USERNAME_DUPLICATE_CHECK_REQUEST,
         USER_USERNAME_DUPLICATE_CHECK_SUCCESS,
         USER_USERNAME_DUPLICATE_CHECK_FAILURE,
         LOGIN_REQUEST,
         LOGIN_SUCCESS,
         LOGIN_FAILURE,
        } from '../reducers/user';
import axios from 'axios';
import bcrypt from 'bcrypt-nodejs';

function duplicateCheckApi(username){ 
    return axios.post('/user/usernameDuplicateCheck', {username} ); 
}
 
function* usernameDuplicateCheck(action){
    try {
        const result = yield call(duplicateCheckApi, action.data);
        console.log(result);
        if( result.data === 'success'){
            yield put({
                type : USER_USERNAME_DUPLICATE_CHECK_SUCCESS,
            })
        } else if (result.data === 'fail') {
            yield put({
                type : USER_USERNAME_DUPLICATE_CHECK_FAILURE,
            })
        }
    } catch (e) {
        console.error(e);
        yield put({
            type : USER_USERNAME_DUPLICATE_CHECK_FAILURE,
            data : e
        })
    }
}

function* watchCheckDuplicateUsername(){
    yield takeLatest(USER_USERNAME_DUPLICATE_CHECK_REQUEST, usernameDuplicateCheck);
}

function signUpApi(signUpUserInfo){
    
    // 비밀번호 암호화 
    // ==> 솔트값적용해서 해싱할떄 비동기 작업이 이루어져서 axios 이후에 작업이 끝나는 문제
    /* 
    bcrypt.genSalt(10,(error, salt)=>{
        if( error ){
            console.error(error)
        } else { 
            bcrypt.hashSync(signUpUserInfo.password, salt, null, (err, hash)=>{
                if (err){
                    console.error(err);
                } else {
                    console.log("before hashing : " + signUpUserInfo.password);
                    signUpUserInfo.password = hash;
                    console.log("after hashing : " + signUpUserInfo.password);
                }
            })
        }
    });
    console.log("right before sending backend server my hash password : " + signUpUserInfo.password);
    */
    return axios.post('/user/signup', signUpUserInfo);
}

function* signUp(action){
    try{
        const response = yield call(signUpApi, action.data);
        console.log(response.data);
        yield put({
            type : USER_SIGNUP_SUCCESS,
            data : response.data
        })
    } catch (e) {
        console.error(e);
        yield put({
            type : USER_SIGNUP_FAILURE,
        })
    }

}

function* watchSignUp(){
    yield takeLatest(USER_SIGNUP_REQUEST, signUp);
}

function loginApi(userLoginInfo){
    return axios.post('/user/login',userLoginInfo);
}

function* login(action){
    try {
        const response = yield call(loginApi,action.data);
        console.log(response.data);
        yield put({ 
            type : LOGIN_SUCCESS,
            data : response.data.data,
        })
    } catch (e) {
        console.error(e);
        yield put({
            type : LOGIN_FAILURE,
        })
    }
}

function* watchLogin(){
    yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga(){ 
    yield all([
        fork(watchCheckDuplicateUsername),
        fork(watchSignUp),
        fork(watchLogin),
    ])
}
import { all, fork, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

import { CREATE_FILE_REQUEST,
         CREATE_FILE_FAILURE, 
         CREATE_FILE_SUCCESS, 
         DELETE_FILE_REQUEST,
         DELETE_FILE_FAILURE, 
         DELETE_FILE_SUCCESS, 
         READ_FILE_REQUEST,
         READ_FILE_FAILURE, 
         READ_FILE_SUCCESS,  } from "../reducers/file";


function createFileApi(action){
    const config = { 
        headers : {
            'content-type': 'multipart/form-data'  
        }
    }
    return axios.post("/file/create", action.data, config);
}

function* createFile(action){
    try{
        const response = yield call(createFileApi, action);
        const result = response.data;
        console.log("create file result : ", result);
        if ( result.error != null ){
            yield put({
                type : CREATE_file_FAILURE
            })
        } else {
            yield put({
                type : CREATE_FILE_SUCCESS, 
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({
            type : CREATE_FILE_FAILURE
        })

    }
}

function* watchCreateFile(){
    yield takeEvery(CREATE_FILE_REQUEST, createFile);
}


function deleteFileApi({fileId}){
    return axios.get("/file/delete",fileId);
}

function* deleteFile(action){
    try{
        const response = yield call(deleteFileApi, action);
        const result = response.data;
        console.log("delete FILE result : ", result);
        if ( result.error != null ){
            yield put({
                type : DELETE_FILE_FAILURE
            })
        } else {
            yield put({
                type : DELETE_FILE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({
            type : DELETE_FILE_FAILURE
        })

    }
}

function* watchDeleteFile(){
    yield takeLatest(DELETE_FILE_REQUEST, deleteFile);
}

function readFileApi(action){
    return axios.get("/file/read",action.data);
}

function* readFile(action){
    try{
        const response = yield call(readFileApi, action);
        const result = response.data;
        console.log("read FILE result : ", result);
        if ( result.error != null ){
            yield put({
                type : READ_FILE_FAILURE
            })
        } else {
            yield put({
                type : READ_FILE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({ 
            type : READ_FILE_FAILURE
        })

    }
}

function* watchReadFile(){
    yield takeLatest(READ_FILE_REQUEST, readFile);
}

export default function* fileSagas(){
    yield all([
        fork(watchCreateFile),
        fork(watchDeleteFile),
        fork(watchReadFile),

    ])
}
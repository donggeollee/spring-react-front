import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import { CREATE_IMAGE_REQUEST,
         CREATE_IMAGE_FAILURE, 
         CREATE_IMAGE_SUCCESS, 
         DELETE_IMAGE_REQUEST,
         DELETE_IMAGE_FAILURE, 
         DELETE_IMAGE_SUCCESS, 
         READ_IMAGE_REQUEST,
         READ_IMAGE_FAILURE, 
         READ_IMAGE_SUCCESS,  } from "../reducers/image";


function createImageApi(action){
    console.log("action.data : ", action.data.get("file"));
    const config = { 
        headers : {
            'content-type': 'multipart/form-data' 
        }
    }
    return axios.post("/image/create", {uploadFile : action.data}, config);
}

function* createImage(action){
    try{
        const response = yield call(createImageApi, action);
        const result = response.data;
        console.log("create image result : ", result);
        if ( result.error != null ){
            yield put({
                type : CREATE_IMAGE_FAILURE
            })
        } else {
            yield put({
                type : CREATE_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({
            type : CREATE_IMAGE_FAILURE
        })

    }
}

function* watchCreateImage(){
    yield takeLatest(CREATE_IMAGE_REQUEST, createImage);
}


function deleteImageApi({imageId}){
    return axios.get("/image/delete",imageId);
}

function* deleteImage(action){
    try{
        const response = yield call(deleteImageApi, action);
        const result = response.data;
        console.log("delete image result : ", result);
        if ( result.error != null ){
            yield put({
                type : DELETE_IMAGE_FAILURE
            })
        } else {
            yield put({
                type : DELETE_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({
            type : DELETE_IMAGE_FAILURE
        })

    }
}

function* watchDeleteImage(){
    yield takeLatest(DELETE_IMAGE_REQUEST, deleteImage);
}

function readImageApi(action){
    return axios.get("/image/read",action.data);
}

function* readImage(action){
    try{
        const response = yield call(readImageApi, action);
        const result = response.data;
        console.log("read image result : ", result);
        if ( result.error != null ){
            yield put({
                type : READ_IMAGE_FAILURE
            })
        } else {
            yield put({
                type : READ_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        yield put({
            type : READ_IMAGE_FAILURE
        })

    }
}

function* watchReadImage(){
    yield takeLatest(READ_IMAGE_REQUEST, readImage);
}

export default function* imageSagas(){
    yield all([
        fork(watchCreateImage),
        fork(watchDeleteImage),
        fork(watchReadImage),

    ])
}
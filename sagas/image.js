import { all, fork, takeLatest, put } from "redux-saga/effects";
import axios from "axios";

import { CREATE_IMAGE_REQUEST,
         CREATE_IMAGE_FAILURE, 
         CREATE_IMAGE_SUCCESS, 
         DELETE_IMAGE_REQUEST,
         DELETE_IMAGE_FAILURE, 
         DELETE_IMAGE_SUCCESS, 
         READ_IMAGE_REQUEST,
         READ_IMAGE_FAILURE, 
         READ_IMAGE_SUCCESS, 
                            } from "../reducers/image";


function createImageApi({image}){
    const config = {
        headers : {
            "Content-Type" : ""
        }
    }
    return axios.post("/image/create",image);
}

function* createImage(action){
    try{
        const response = yield call(createImageApi, action);
        const result = response.data;
        console.log("create image result : ", result);
        if ( result.error != null ){
            put({
                type : CREATE_IMAGE_FAILURE
            })
        } else {
            put({
                type : CREATE_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        put({
            type : CREATE_IMAGE_FAILURE
        })

    }
}

function* watchCreateImage(){
    takeLatest(CREATE_IMAGE_REQUEST, createImage);
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
            put({
                type : DELETE_IMAGE_FAILURE
            })
        } else {
            put({
                type : DELETE_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        put({
            type : DELETE_IMAGE_FAILURE
        })

    }
}

function* watchDeleteImage(){
    takeLatest(DELETE_IMAGE_REQUEST, deleteImage);
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
            put({
                type : READ_IMAGE_FAILURE
            })
        } else {
            put({
                type : READ_IMAGE_SUCCESS,
                data : result.data
            })
        }
    } catch(e){
        console.error(e);
        put({
            type : READ_IMAGE_FAILURE
        })

    }
}

function* watchReadImage(){
    takeLatest(READ_IMAGE_REQUEST, readImage);
}

export default function* imageSagas(){
    yield all([
        fork(watchCreateImage),
        fork(watchDeleteImage),
        fork(watchReadImage),

    ])
}
import * as actionTypes from '../constants/actionTypes';


export function loadComments(payload){
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload
    }
}

export function loadCommentsSuccess(payload) {
    return {
        type: actionTypes.LOAD_COMMENTS_SUCCESS,
        payload
    }
}

export function clearComments(){
    return {
        type: actionTypes.CLEAR_COMMENTS,
    }
}

export function deletePost(postId){
    return {
        type: actionTypes.DELETE_POST,
        payload: postId,
    }
}
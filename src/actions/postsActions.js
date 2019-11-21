import * as actionTypes from '../constants/actionTypes';


export function loadPosts(payload){
    return {
        type: actionTypes.LOAD_POSTS,
        payload
    }
}

export function loadPostsSuccess(payload) {
    return {
        type: actionTypes.LOAD_POSTS_SUCCESS,
        payload
    }
}
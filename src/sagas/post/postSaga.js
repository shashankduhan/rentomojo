import { take, call, fork, all, put } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

import { fetchCustom } from '../../utils/fetch';
import { loadCommentsSuccess } from '../../actions/postActions';

function* loadComments (payload) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${payload}`;
    let response = yield call(fetchCustom, url, {
        method: 'get'
    });

    if(response){
        yield put(loadCommentsSuccess(response));
    }
}

function* deletePost (postId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    let response = yield call(fetch, url, {
        method: 'DELETE'
    });

    if(response.status === 200){
        yield window.history.back();
    }
}

function* watchLoadComments () {
    while(true){
        const action = yield take([actionTypes.LOAD_COMMENTS]);
        yield fork(loadComments, action.payload);
    } 
}

function* watchDeletePost () {
    while(true){
        const action = yield take([actionTypes.DELETE_POST]);
        yield fork(deletePost, action.payload);
    } 
}

function* post () {
    yield all([fork(watchLoadComments), fork(watchDeletePost)]);
}

export default post;
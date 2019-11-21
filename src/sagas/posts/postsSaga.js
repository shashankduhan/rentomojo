import { take, call, fork, all, put } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

import { fetchCustom } from '../../utils/fetch';
import { loadPostsSuccess } from '../../actions/postsActions';
import { clearComments } from '../../actions/postActions';

function* loadPosts (payload) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${payload.userId}&skip=${payload.skip}&limit=10`;
    let response = yield call(fetchCustom, url, {
        method: 'get'
    });

    if(response){
        yield put(loadPostsSuccess(response));
        yield put(clearComments());
    }
}

function* watchLoadPosts () {
    while(true){
        const action = yield take([actionTypes.LOAD_POSTS]);
        yield fork(loadPosts, action.payload);
    } 
}

function* posts () {
    yield all([fork(watchLoadPosts)]);
}

export default posts;
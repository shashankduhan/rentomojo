import { fork, all } from 'redux-saga/effects';

import homeSaga from './home/homeSaga';
import postsSaga from './posts/postsSaga';
import postSaga from './post/postSaga';

export default function* rootSaga() {
    yield all([fork(homeSaga), fork(postsSaga), fork(postSaga)]);
}
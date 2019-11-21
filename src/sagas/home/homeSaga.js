import { take, call, fork, all, put } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';

import { loadUsersSuccess } from '../../actions/homeActions';
import { fetchCustom } from '../../utils/fetch';

function* loadUsers (payload) {
    const url = "https://jsonplaceholder.typicode.com/users";
    let response = yield call(fetchCustom, url, {
        method: 'get'
    });

    if(response){
        yield put(loadUsersSuccess(response));
    }
    
}


function* watchLoadUsers (){
    const action = yield take([actionTypes.LOAD_USERS]);
    yield fork(loadUsers, action.payload);
}

function* homeSagas () {
    yield all([fork(watchLoadUsers)]);
}

export default homeSagas;
import * as actionTypes from '../constants/actionTypes';


export function loadUsers(){
    return {
        type: actionTypes.LOAD_USERS
    }
}

export function loadUsersSuccess(payload) {
    return {
        type: actionTypes.LOAD_USERS_SUCCESS,
        payload
    }
}
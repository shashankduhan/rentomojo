import { handleActions } from 'redux-actions';
import * as actionTypes from '../../constants/actionTypes';

const initialState = {

};

function loadUsers(state, { payload }) {
    return {
        ...state,
        users: payload,
    }
}

const home = handleActions(
    {
        [actionTypes.LOAD_USERS_SUCCESS]: loadUsers,
    },
    initialState,
)

export default home;
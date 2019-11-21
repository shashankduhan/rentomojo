import { handleActions } from 'redux-actions';
import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    comments: [],
};

function loadComments(state, { payload }) {
    return {
        ...state,
        comments: payload,
    }
}

function clearComments(state) {
    return {
        ...state,
        comments: [],
    }
}

const post = handleActions(
    {
        [actionTypes.LOAD_COMMENTS_SUCCESS]: loadComments,
        [actionTypes.CLEAR_COMMENTS]: clearComments,
    },
    initialState,
)

export default post;
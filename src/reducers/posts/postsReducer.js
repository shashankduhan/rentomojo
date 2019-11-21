import { handleActions } from 'redux-actions';
import * as actionTypes from '../../constants/actionTypes';

const initialState = {

};

function loadPosts(state, { payload }) {
    return {
        ...state,
        allPosts: payload,
    }
}

const posts = handleActions(
    {
        [actionTypes.LOAD_POSTS_SUCCESS]: loadPosts,
    },
    initialState,
)

export default posts;
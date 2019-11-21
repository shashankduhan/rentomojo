import { combineReducers } from 'redux';

import home from './home/homeReducer';
import posts from './posts/postsReducer';
import post from './post/postReducer';

let reducers = {
    home,
    posts,
    post,
};

const reducer = combineReducers(reducers);

export default reducer;
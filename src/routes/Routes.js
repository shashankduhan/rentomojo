import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from '../components/home/Home';
import Posts from '../components/posts/Posts';
import Post from '../components/post/Post';

const Routes = props => {

    return (
            <Switch>
                <Route path="/posts/:userId"><Posts /></Route>
                <Route path="/post/:postId"><Post /></Route>
                <Route exact path="/"><Home /></Route>
            </Switch>
    )
}

export default Routes;
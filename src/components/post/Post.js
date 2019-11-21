import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadComments as loadCommentsForthisPost, deletePost as deleteCurrentPost} from '../../actions/postActions';

const Post = props => {
    const { postId } = useParams();

    function commentsLoader(){
        props.loadComments(postId)
    }

    function deletePostHandler(){
        document.getElementById('spinner').style.display = 'inline-block';
       props.deletePost(postId);
    }
    
    return (
        <div className="post">
            <h1>{props.posts && props.posts.filter(i => i.id == postId)[0].title}</h1>
            <p>{props.posts && props.posts.filter(i => i.id == postId)[0].body}</p>
            <button onClick={commentsLoader}>Load Comments</button>
            <button onClick={deletePostHandler}>Delete this post</button><img src="/spinner.svg" id="spinner"/>
            <div>
                {props.comments && props.comments.map(item => {
                    return (
                        <div key={item.id} className="comment_block">
                            <span className="comments_name">{item.name}</span>
                            <span className="comments_email">{item.email}</span>
                            <span className="comments_body">{item.body}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        posts: state.posts.allPosts,
        comments: state.post.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadComments(postId){
            dispatch(loadCommentsForthisPost(postId));
        },
        deletePost(postId){
            dispatch(deleteCurrentPost(postId));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Post);
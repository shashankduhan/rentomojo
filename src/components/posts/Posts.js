import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadPosts as loadAllPostsForThisUser } from '../../actions/postsActions';

const Posts = props => {
    const { userId } = useParams();
    const [skip, setSkip] = useState(0);

    useEffect(()=>{
        props.loadPosts(userId, skip);
    }, []);

    function decrementSkip(){
        if(skip > 0){
            setSkip(skip - 10);
            props.loadPosts(userId, skip);
        }
    }

    function incrementSkip(){
        setSkip(skip + 10);
        props.loadPosts(userId, skip);
    }
    
    return (
        <div className="posts">
            <table>
                <thead><tr><th>Post titles</th><th>Post Link</th></tr></thead>
                <tbody>
                    {
                        props.posts && props.posts.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td><Link to={`/post/${item.id}`}>Post Link</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <span onClick={decrementSkip} className="pagination_icon">&lt;</span><span>{skip/10}</span><span className="pagination_icon" onClick={incrementSkip}>&gt;</span>
          </div>
    );
}

const mapStatetoProps = state => {
    return {
        posts: state.posts.allPosts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadPosts(userId, skip){
            dispatch(loadAllPostsForThisUser({userId, skip}));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Posts);
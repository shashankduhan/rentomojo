import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {loadUsers as loadUsersAction} from '../../actions/homeActions';

const Home = props => {

    useEffect(() => {
        if(!props.users) {
            props.loadUsers();
        }
    }, [props.users]);

    return (
        <div className="home">
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>company</th>
                        <th>blog post</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users && props.users.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.company.name}</td>
                                <td><Link to={`/posts/${item.id}`}>Blog Posts</Link></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.home && state.home.users,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        loadUsers(){
            dispatch(loadUsersAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
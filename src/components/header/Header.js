import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {

    return (
        <div className="header">
            <Link to="/">Home</Link>
        </div>
    )
}

export default Header;
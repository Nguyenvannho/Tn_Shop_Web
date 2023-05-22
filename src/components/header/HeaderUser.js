import React from 'react';
import { Link } from 'react-router-dom';

function HeaderUser(props) {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    if(user){
        return (
            <ul className="header-user-links">
                <li>
                    <Link to={'/profile'}>Xin Chào: {user.name}</Link>/
                    <Link to={'/logout'}>Logout</Link>
                </li>
            </ul>
        );
    }

    return (
        <ul className="header-user-links">
            <li>
                <Link to={'/login'}>Login</Link>/
                <Link to={'/register'}>Register</Link>
            </li>
        </ul>
    );
}

export default HeaderUser;
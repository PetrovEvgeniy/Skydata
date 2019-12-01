import React from 'react';
import '../Navigation/Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <a class="active" href="/">Skydata©</a>
            <a href="/aircraft/all">All Aircraft</a>
            <a href="/aircraft/create">Create</a>
            <div id="auth-buttons">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <div id="profile">
                <a href="/my-profile">My profile</a>
                <a href="/logout">Logout</a>
            </div>
        </nav>
    )
}

export default Navigation;
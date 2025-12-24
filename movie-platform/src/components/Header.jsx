import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <div className="header">
            <h1>Movie Platform</h1>
            {/* <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav> */}
        </div>
    );
}

export default Header;
import React, { useState } from 'react';
import './navbar.css';
import {
    Link
} from "react-router-dom";

const AuthNav = ({user, searchQuery, setSearchQuery }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    // const [searchTxt, setSearchTxt] = useState("");
    return (
        <nav className="navigation">
            <Link to='/' className='brand-name'>
                BLOG
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li className='search-box'>
                        <div className="search">
                            <form action="/" method='post'>
                                <input 
                                    type="text" 
                                    name="search" 
                                    id="search" 
                                    value={searchQuery}
                                    onInput={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search blog posts"
                                />
                            </form>
                        </div>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default AuthNav;
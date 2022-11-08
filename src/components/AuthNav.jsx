import React, { useState } from 'react';
import './styles/navbar.css';
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
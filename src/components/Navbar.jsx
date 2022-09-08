import React, { useState } from 'react';
import './styles/navbar.css';

const Navbar = () => {
const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                BLOG
            </a>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}
            >
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <div className="search">
                            <input type="text" name="search" id="search" />
                        </div>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
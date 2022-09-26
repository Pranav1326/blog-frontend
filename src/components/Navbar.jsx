import React, { useState } from 'react';
import './styles/navbar.css';
import {
    Link
} from "react-router-dom";

const Navbar = ({user}) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
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
                    <li>
                        <div className="search">
                            {/* <input type="text" name="search" id="search" /> */}
                        </div>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
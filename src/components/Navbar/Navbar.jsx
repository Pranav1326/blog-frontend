import React, { useState } from 'react';
import './navbar.css';
import {
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const user = useSelector(state => state.userReducer.user);

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
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    { !user ? <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li> : 
                    <>
                        <div className='loggedIn'>
                            <Link to='/profile'>
                                <img src={user.profilepic ? user.profilepic : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"} alt="User" className='user-nav-img'/>
                            </Link>
                        </div> 
                    </>}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
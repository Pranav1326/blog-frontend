import React, { useState } from 'react';
import './styles/article.css';
import Taglist from './Taglist';
import CoverImg from '../images/Node.js.png';
import ProfilePic from '../images/Profile-Pic.jpg';

const Article = () => {

const [isLiked, setIsliked] = useState(false);
const [copyStatus, setCopyStatus] = useState(false);

const handleToggle = () => {
    setIsliked(!isLiked);
}

return (
    <div className='single-article-main'>
        <div className="single-article-btns">
            <div className="single-article-like-btn">
                {isLiked ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" role="img" aria-hidden="true" class="crayons-icon" onClick={handleToggle}>
                    <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                    </svg> 
                : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon" onClick={handleToggle}>
                    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    </svg> 
                }
            </div>
            <div className="single-article-copy-link-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" id="article-copy-icon" role="img" aria-labelledby="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3" aria-hidden="true" className="crayons-icon mx-2 shrink-0" onClick={() => {navigator.clipboard.writeText(window.location.href); setCopyStatus(true)}}><title id="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3">Copy link</title>
                <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                </svg>
                {copyStatus ? "Copied" : ""}
                {/* "Copied" */}
            </div>
        </div>
        <div className="single-article-main-box">
            <div className="single-article">
                <img src={CoverImg} alt="Cover_Image" className='single-article-cover-image'/>
                <div className="single-article-wrapper">
                    <div className="article-user-details">
                        <img src={ProfilePic} alt="" className='single-article-user-profile-img'/>
                        <div className="single-article-user-publish-date">
                            <h3>Pranav1326</h3>
                            <p>14 Aug 2022</p>
                        </div>
                    </div>
                    <div className="single-article-title">
                        <h1>Node.js File System API - beginner-friendly guide </h1>
                    </div>
                    <div className="single-article-tags">
                        <p>node</p>
                        <p>javascript</p>
                        <p>tutorial</p>
                    </div>
                    <div className="single-article-content">
                        <h2>File System API</h2>
                        <p>
                            Accessing file system, managing and editing files is probably one of the most important tasks that are done on the server-side. Thus, Node.js is deemed to provide such functionality. It does so in the form of File System (FS) API, containing a vast number of methods and properties. While casual use of this API is usually limited to just reading and writing files, there's still much, much more to discover...
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="single-article-user-tags">
            <div className="single-article-user-card-details">
                <div className="article-user-card-details">
                    <img src={ProfilePic} alt="" />
                    <h4>Pranav1326</h4>
                </div>
                <p className="single-article-user-bio">Hobbyist. Web Developer. 👨‍💻 Freelancer. Blogger. Making awesome websites. </p>
                <div className="single-article-user-location">
                    <span>Location</span>
                    <p>Gujarart, India</p>
                </div>
                <div className="single-article-user-joined">
                    <span>Joined</span>
                    <p>31 Jul 2022</p>
                </div>
            </div>
            <div className="single-article-popular-tags">
                <Taglist />
            </div>
        </div>
    </div>
  );
}

export default Article;

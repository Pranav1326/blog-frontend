/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './article.css';
import Taglist from '../Taglist/Taglist';
import CoverImg from '../../images/introduction-to-web-development-social.png';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import UserCard from '../UserCard/UserCard';

const Article = ({BASE_URL}) => {

    const [ isLiked, setIsLiked ] = useState(false);
    const [ copyStatus, setCopyStatus ] = useState(false);
    
    return (
        <div className='single-article-main'>
            <div className="single-article-btns">
                <div className="single-article-like-btn">
                    {isLiked ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                        <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                        </svg> 
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon">
                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                        </svg> 
                    }
                </div>
                <div className="single-article-copy-link-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" id="article-copy-icon" role="img" aria-labelledby="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3" aria-hidden="true" className="crayons-icon mx-2 shrink-0" onClick={() => {navigator.clipboard.writeText(window.location.href); setCopyStatus(true)}}><title id="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3">Copy link</title>
                    <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                    </svg>
                    {copyStatus ? <p>"Copied"</p> : ""}
                </div>
            </div>
            <div className="single-article-main-user-tags-wrapper">
                <div className="single-article-main-box">
                    <div className="single-article">
                        <img src={""} alt="Cover_Image" className='single-article-cover-image'/>
                        <div className="single-article-wrapper">
                            <div className="article-user-details">
                                <img src={""} alt="" className={'single-article-user-profile-img'}/>
                                <div className="single-article-user-publish-date">
                                    <h3>{"Pranav"}</h3>
                                    <p>{"29 Aug 2022"}</p>
                                </div>
                                {/* Edit, Delete Buttons */}
                                {/* {loggedUser ? 
                                    <div className="single-article-update-delete">
                                    <div className="single-article-update">
                                        <button onClick={handleUpdate}>Update</button>
                                    </div>
                                    <div className="single-article-delete">
                                        <button onClick={handleDelete}>Delete</button>
                                    </div>
                                </div>
                                :
                                    <></>
                                } */}
                            </div>
                            <div className="single-article-title">
                                <h1>{"Any Suitable Title"}</h1>
                            </div>
                            <div className="single-article-tags">
                                {"Some Tags"}
                            </div>
                            <div className="single-article-content">
                                <ReactMarkdown>
                                    {"This is some Content. Just believe it!"}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-article-user-tags">
                    <UserCard BASE_URL={BASE_URL}/>
                    <div className="single-article-popular-tags">
                        <Taglist BASE_URL={BASE_URL}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;

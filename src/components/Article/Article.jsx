/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './article.css';
import Taglist from '../Taglist/Taglist';
import ReactMarkdown from 'react-markdown';
import UserCard from '../UserCard/UserCard';
import { getArticle, getAuthor } from '../../api/article';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Article = ({BASE_URL}) => {

    const user = useSelector(state => state.userReducer.user);
    
    // Internal states
    const [ isLiked, setIsLiked ] = useState(false);
    const [ copyStatus, setCopyStatus ] = useState(false);
    const [ data, setData ] = useState(null);
    const [ isLoggedin, setIsLoggedin ] = useState(false);

    const navigate = useNavigate();
    
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/articles/${id}`)
            .then((res) => {
                setData(res.data)
                if(res.data.authorId === user._id){
                    setIsLoggedin(true);
                }
            })
            .catch(err => console.log(err));
    }, []);
    
    if(!data) return <p className='no-posts-msg'>Loading...</p>;
    
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
                        <img src={data.image} alt="Cover_Image" className='single-article-cover-image'/>
                        <div className="single-article-wrapper">
                            <div className="article-user-details">
                                <img src={""} alt="" className={'single-article-user-profile-img'}/>
                                <div className="single-article-user-publish-date">
                                    <h3>{data.author}</h3>
                                    <p>{new Date(data.createdAt).toDateString()}</p>
                                </div>
                                {/* Edit, Delete Buttons */}
                                {data && isLoggedin ? 
                                    <div className="single-article-update-delete">
                                    <div className="single-article-update">
                                        <button 
                                            // onClick={handleUpdate}
                                        >Update</button>
                                    </div>
                                    <div className="single-article-delete">
                                        <button 
                                            // onClick={handleDelete}
                                        >Delete</button>
                                    </div>
                                </div>
                                :
                                    <></>
                                }
                            </div>
                            <div className="single-article-title">
                                <h1>{data.title}</h1>
                            </div>
                            <div className="single-article-tags">
                                {data && data.tags.map((tag, id) => {
                                    return <p key={id}>{tag}</p>
                                })}
                            </div>
                            <div className="single-article-content">
                                <ReactMarkdown>
                                    {data.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-article-user-tags">
                    {data && <UserCard BASE_URL={BASE_URL} userId={data && data.authorId}/>}
                    <div className="single-article-popular-tags">
                        <Taglist BASE_URL={BASE_URL}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;

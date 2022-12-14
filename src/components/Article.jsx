/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './styles/article.css';
import Taglist from './Taglist';
import CoverImg from '../images/introduction-to-web-development-social.png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import UserCard from './UserCard';

const Article = ({BASE_URL}) => {

const navigate = useNavigate();

const [isLiked, setIsliked] = useState(false);
const [copyStatus, setCopyStatus] = useState(false);

const handleToggle = () => {setIsliked(!isLiked)}

const { id } = useParams();

const baseUrl = `${BASE_URL}/articles/${id}`;

const [post, setPost] = useState(null);
const [userData, setUserData] = useState(null);
const [loggedUser, setLoggedUser] = useState(false);
let [tag, setTag] = useState("");

// Article Data
const fetchPostData = async () => {
    try {
	    await axios.get(baseUrl)
        .then((result) => {
            setPost(result.data);
            fetchUserData(result.data.authorId);
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    };
}

const fetchUserData = async (authorId) => {
    try {
        await axios.get(BASE_URL + `/user/${authorId}`)
        .then(result => {
            setUserData(result.data);
            checkAuthor(authorId);
        });
    } catch (error) {
        console.log(error);
    }
}

const checkAuthor = async (authId) => {
    if(localStorage.getItem("user") !== 'null'){
        const loggedUserId = JSON.parse(localStorage.getItem("user"))._id;
        if(loggedUser !== 'null'){
            const authorId = authId;
            if(loggedUserId === authorId){
                setLoggedUser(true);
            }
            else{
                setLoggedUser(false);
            }
        }
        else{
            setLoggedUser(false);
        }
    }
}

useEffect(() => {
    fetchPostData();
},[]);

// Tags
const fetchTags = post && post.tags.map((e, i) => {
    return (<p key={i}>{e}</p>);
})

// Update Button
const handleUpdate = async e => {
    e.preventDefault();
    localStorage.setItem("author", userData);
    navigate(`/articleupdate/${id}`);
}

// Delete Button
const handleDelete = async e => {
    e.preventDefault();
    const choice = window.confirm(`Are you sure? This action can't be undone.`);
    if(choice){
        const token = JSON.parse(localStorage.getItem('token'));
        const postDetails = {
            userId: post.authorId,
            author: post.author,
            articleId: post._id
        };
        const url = `${BASE_URL}/articles/delete/${id}`;
        const authAxios = axios.create({
            baseURL: url,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        try {
            const res = await authAxios.delete(
                url,
                {data: postDetails}
            );
            if(res){
                alert(`Article Deleted Successfully!`);
            }
            navigate('/');
        } catch (error) {
            if(error.response.data.message){
                alert(error.response.data.message);
            }
            else{
                alert(error.response.data);
            }
        }
    }
    else{
        return;
    }
}

const handleTag = async (event, manualTag) => {
    navigate('/');
}

if(userData === null){
    return <p className='article-loading-p'>Loading...</p>;
}

return (
    <div className='single-article-main'>
        <div className="single-article-btns">
            <div className="single-article-like-btn">
                {isLiked ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" role="img" aria-hidden="true" className="crayons-icon" onClick={handleToggle}>
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
                {copyStatus ? <p>"Copied"</p> : ""}
            </div>
        </div>
        <div className="single-article-main-user-tags-wrapper">
            <div className="single-article-main-box">
                <div className="single-article">
                    <img src={CoverImg} alt="Cover_Image" className='single-article-cover-image'/>
                    <div className="single-article-wrapper">
                        <div className="article-user-details">
                            <img src={userData.profilepic} alt="" className={userData.profilepic !== "" ? 'single-article-user-profile-img' : 'single-article-user-profile-img-hidden'}/>
                            <div className="single-article-user-publish-date">
                                <h3>{post.author}</h3>
                                <p>{new Date(post.createdAt).toDateString()}</p>
                            </div>
                            {/* Edit, Delete Buttons */}
                            {loggedUser ? 
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
                            }
                        </div>
                        <div className="single-article-title">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="single-article-tags">
                            {/* {post.tags && post.tags.forEach(function(e){
                                return <p>{e}</p>
                            })} */}
                            {post.tags && fetchTags}
                        </div>
                        <div className="single-article-content">
                            <ReactMarkdown>
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-article-user-tags">
                <UserCard userData={userData} BASE_URL={BASE_URL}/>
                <div className="single-article-popular-tags">
                    <Taglist handleTag={handleTag} BASE_URL={BASE_URL}/>
                </div>
            </div>
        </div>
    </div>
);
}

export default Article;

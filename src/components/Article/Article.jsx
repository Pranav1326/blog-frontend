import React, { useEffect, useState } from 'react';
import './article.css';
// import Taglist from '../Taglist/Taglist';
import ReactMarkdown from 'react-markdown';
import UserCard from '../UserCard/UserCard';
import { PublishArticle, deleteArticle, unpublishArticle } from '../../api/article';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import BlogCard from '../BlogCard/BlogCard';
import { baseUrl } from '../../api/url';
import { useCookies } from 'react-cookie';

const Article = () => {

    const user = useSelector(state => state.userReducer.user);

    // Internal states
    const [isLiked, setIsLiked] = useState(false);
    const [copyStatus, setCopyStatus] = useState(false);
    const [data, setData] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState(null);

    const { id } = useParams();
    
    // Cookies
    const [cookies, setCookie] = useCookies([id]);

    // Set the cookie
    const setCookieTrue = () => {
        setCookie(id, 'true', { path: '/' });
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/articles/${id}`);
                setData(res.data);
                if (res) {
                    axios.post(`${baseUrl}/articles/related`, { tags: res.data.tags })
                        .then(res => setRelatedArticles(res.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const cookieValue = cookies[id];
        if(!cookieValue){
            axios.put(`${baseUrl}/articles/incview/${id}`);
            setCookieTrue();
        }
        // eslint-disable-next-line
    }, [ id ]);

    // Delete an Article
    const handleDelete = () => {
        const ans = window.confirm("Are you sure! This action can't be undone!");
        ans && deleteArticle(data._id, { authorId: data.authorId, author: data.author, articleId: data._id, role: user.role }, navigate);
    }

    // Unpublish an Article
    const handleUnpublish = () => {
        const ans = window.confirm("Are you sure?");
        ans && unpublishArticle({ id: data._id, authorId: data.authorId, author: data.author }, navigate);
    }

    // Publish an Article
    const handlePublish = () => {
        const ans = window.confirm("Are you sure?");
        ans && PublishArticle({ id: data._id, authorId: data.authorId, author: data.author }, navigate);
    }

    const handleUpdate = () => {
        navigate(`/articleupdate/${id}`);
    }

    const renderRelatedPosts = relatedArticles && relatedArticles.map((e, id) => {
        if (e._id !== data._id) {
            let date = e.createdAt.split("T")[0];
            return (
                <BlogCard
                    key={id}
                    id={e._id}
                    author={e.author}
                    publish={date}
                    title={e.title}
                    description={e.description}
                    tags={e.tags}
                    image={e.image}
                />
            );
        }
        else return null;
    });

    if (!data) return <p className='no-posts-msg'>Loading...</p>;

    return (
        <div className='single-article-main'>
            {/* Like & Share */}
            <div className="single-article-btns">
                <div className="single-article-like-btn" onClick={() => setIsLiked(!isLiked)}>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" id="article-copy-icon" role="img" aria-labelledby="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3" aria-hidden="true" className="crayons-icon mx-2 shrink-0" onClick={() => { navigator.clipboard.writeText(window.location.href); setCopyStatus(true) }}><title id="ab6q3dl3z7qb1xyovh7n58gakgh7f8l3">Copy link</title>
                        <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
                    </svg>
                    {copyStatus ? <p>"Copied"</p> : ""}
                </div>
            </div>
            <div className="single-article-main-user-tags-wrapper">
                {/* Title */}
                <div className="single-article-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="single-article-main-box">
                    {/* Article */}
                    <div className="single-article">

                        {/* Image */}
                        <img src={data.image} alt="Cover_Image" className='single-article-cover-image' />
                        <div className="article-user-details">
                            {/* Author Image */}
                            <img src={""} alt="" className={'single-article-user-profile-img'} />
                            {/* Author Name and Publish Date */}
                            <div className="single-article-user-publish-date">
                                <h3>{data.author}</h3>
                                <p>Published on {new Date(data.createdAt).toDateString()}</p>
                            </div>
                            {/* Edit, Delete Buttons */}
                            {data && user ?
                                <div className="single-article-update-delete">
                                    <div className="single-article-update">
                                        <button
                                            onClick={handleUpdate}
                                        >Update</button>
                                    </div>
                                    <div className="single-article-delete">
                                        <button
                                            onClick={handleDelete}
                                        >Delete</button>
                                    </div>
                                    <div className="single-article-delete">
                                        {
                                            data.published ?
                                                <button
                                                    onClick={handleUnpublish}
                                                >Unpublish</button>
                                                :
                                                <button
                                                    onClick={handlePublish}
                                                >Publish</button>
                                        }
                                    </div>
                                </div>
                                :
                                <></>
                            }
                        </div>
                        {
                            user ?
                                <div className="single-article-view-count">
                                    <p>Views: {data.viewCount}</p>
                                </div>
                                : ""
                        }
                        <div className="single-article-wrapper">

                            {/* Tags */}
                            <div className="single-article-tags">
                                {data && data.tags.map((tag, id) => {
                                    return <p key={id}>{tag}</p>
                                })}
                            </div>
                            {/* Content */}
                            <div className="single-article-content">
                                <ReactMarkdown>
                                    {data.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="single-article-user-tags">
                    {/* User Information */}
                    {data && <UserCard userId={data && data.authorId} />}
                    {/* Tags */}
                    <div className="single-article-popular-tags">
                        {/* <Taglist /> */}
                    </div>
                </div>
                <div className="related-articles">
                    <h1 className='related-articles-title'>Releted Articles</h1>
                    <div className="related-articles-list">
                        {renderRelatedPosts}
                    </div>
                </div>
                <button className="scroller" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>Top ↑</button>
            </div>
        </div>
    );
}

export default Article;

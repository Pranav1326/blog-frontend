import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/userApi';

import './profile.css';
import BlogCard from '../BlogCard/BlogCard';
import axios from 'axios';
import { baseUrl } from '../../api/url';

const Profile = () => {

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ articles, setArticles ] = useState(null);
    
    // Pagination
    const [ page, setPage ] = useState(1);
    const [ pages, setPages ] = useState();

    // Previous Page
    const previousPage = async () => {
        setPage(page => page - 1);
    }

    // Next Page
    const nextPage = async () => {
        if(pages > page){
            setPage(page => page + 1);
        }
    }
    
    // Change Password Button
    const handleChangePassword = () => {
        navigate('/changepassword');
    }
    
    // Create Post Button
    const handleCreatePost = () => {
        navigate('/createpost');
    }

    // Unpublished Articles Page Button
    const handleUnpublishedPosts = () => {
        navigate('/unpublished');
    }

    // Logout Button
    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure to logout?");
        confirmLogout && logout(dispatch, navigate);
    }
    
    // Edit Profile Button
    const handleEditProfile = () => {
        navigate('/editprofile');
    }
    
    const renderArticles = articles && articles.map(e => {
        let date = e.createdAt.split("T")[0];
        return (
            <BlogCard
                key={e._id}
                id={e._id}
                author={e.author}
                publish={date}
                title={e.title}
                description={e.description}
                tags={e.tags}
                image={e.image}
            />
        );
    });
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(`${baseUrl}/articles?page=${page}`);
                res && setPage(res.data.page);
                res && setPages(res.data.pages);
                res && setArticles(res.data.articles);
            } catch (error) {
                console.log(error);
            }
        }
        fetchArticles();
    }, [ page ]);
    
    return (
        <div className='profile-section'>
            <section className="profile-section-1">
                <div className="profile-pic">
                    <img src={user.profilepic ? user.profilepic : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"} alt="User" className='img'/>
                </div>
                <div className="profile-details">
                    <p className='user-details user-details-name'>{user.name}</p>
                    <p className='user-details user-details-joined'>Joined: {new Date(user.createdAt).toDateString()}</p>
                    <p className='user-details user-details-email'>{user.email}</p>
                    <p className='user-details'>{user.bio}</p>
                    <div className="profile-details-btns">
                        <button id='edit-profile-btn' onClick={handleChangePassword}> Change Password </button>
                        <button id='edit-profile-btn' onClick={handleEditProfile}> Edit Profile </button>
                        <button id='create-article-btn' onClick={handleCreatePost}> Create Article </button>
                        <button id='create-article-btn' onClick={handleUnpublishedPosts}> Unpublished Articles </button>
                        <button id='logout-btn' onClick={handleLogout}> Logout </button>
                    </div>
                </div>
                <div className="articles-comments">
                    <div className="details">
                        <p><span>{user.articles.length}</span> Post Publised</p>
                    </div>
                    {/* <div className="details">
                        <p>{user.comments.length} Comments</p>
                    </div> */}
                </div>
            </section>
            <section className="profile-section-2">
                <h1 className='user-articles-title'>Articles</h1>
                <div className="users-articles">
                    {/* Posts */}
                    {renderArticles}
                </div>
                {/* Pagination */}
                {
                    <div className='pagination'>
                        <button onClick={previousPage} disabled={page === 1} >Previous</button>
                        <p className='page-p'> {page} out of {pages} Pages </p>
                        <button onClick={nextPage} disabled={page === pages} >Next</button>
                    </div>
                }
            </section>
        </div>
    );
}

export default Profile;
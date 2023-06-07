import React, { useEffect, useState } from 'react';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/userApi';
import { deleteAccount } from '../../api/userProfile';
import BlogCard from '../BlogCard/BlogCard';
import { getArticlesOfAuthor } from '../../api/article';

const Profile = ({BASE_URL}) => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ userArticles, setUserArticles ] = useState(null);

    useEffect(() => {
      getArticlesOfAuthor(user.username, setUserArticles);
    }, []);

    const renderArticles = userArticles && userArticles.map((article, id) => {
        return(
            <BlogCard
                key={id}
                id={article._id}
                author={article.author}
                publish={new Date(article.createdAt).toDateString()}
                title={article.title}
                description={article.description}
                tags={article.tags}
                image={article.image}
            />
        );
    });
    
    // Delete Button
    const handleDelete = () => {
        const userChoice = window.confirm(`Are you sure? This action can't be undone.`);
        if(userChoice){
            const userDetails = {
                username: user.username,
                email: user.email,
                userId: user._id
            };
            deleteAccount(userDetails);
            logout(dispatch, navigate);
        }
    }
    
    // Create Post Button
    const handleCreatePost = () => {
        navigate('/createpost');
    }

    // Logout Button
    const handleLogout = () => {
        logout(dispatch, navigate);
    }
    
    // Edit Profile Button
    const handleEditProfile = () => {
        navigate('/editprofile');
    }
    
    return (
        <div className='profile-section'>
            <section className="profile-section-1">
                <div className="profile-pic">
                    <img src={user.profilepic ? user.profilepic : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"} alt="User" className='img'/>
                </div>
                <div className="profile-details">
                    <p className='user-details'>{user.name}</p>
                    <p className='user-details'>Email: {user.email}</p>
                    <p className='user-details'>Bio: {user.bio}</p>
                    <p className='user-details'>Joined: {new Date(user.createdAt).toDateString()}</p>
                    <p className='user-details'>Location: {user.location}</p>
                    <p className='user-details'>Work: {user.work}</p>
                    <div className="profile-details-btns">
                        <button id='edit-profile-btn' onClick={handleDelete}>Delete Profile</button>
                        <button id='edit-profile-btn' onClick={handleEditProfile}>Edit Profile</button>
                        <button id='create-article-btn' onClick={handleCreatePost}> Create Article</button>
                        <button id='logout-btn' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </section>
            <section className="profile-section-2">
                <div className="articles-comments">
                    <div className="details">
                        <p>{user.articles.length} Post Publised</p>
                    </div>
                    <div className="details">
                        <p>{user.comments.length} Comments</p>
                    </div>
                </div>
                <div className='user-articles'>
                    <h1 className='user-articles-title'>Articles</h1>
                    <div className="users-articles">
                        {renderArticles}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
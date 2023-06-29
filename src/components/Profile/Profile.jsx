import React from 'react';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/userApi';

const Profile = () => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
                        <button id='edit-profile-btn' onClick={handleChangePassword}> Change Password </button>
                        <button id='edit-profile-btn' onClick={handleEditProfile}> Edit Profile </button>
                        <button id='create-article-btn' onClick={handleCreatePost}> Create Article </button>
                        <button id='create-article-btn' onClick={handleUnpublishedPosts}> Unpublished Articles </button>
                        <button id='logout-btn' onClick={handleLogout}> Logout </button>
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
                {/* <div className='user-articles'>
                    <h1 className='user-articles-title'>Articles</h1>
                    <div className="users-articles">
                        {renderArticles}
                    </div>
                </div> */}
            </section>
        </div>
    );
}

export default Profile;
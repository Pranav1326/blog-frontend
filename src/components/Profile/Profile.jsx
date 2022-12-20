import React from 'react';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/userApi';
import { deleteAccount } from '../../api/userProfile';

const Profile = ({BASE_URL}) => {
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
                        <button id='create-article-btn' > Create Article</button>
                        <button id='logout-btn' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </section>
            <section className="profile-section-2">
                <div className="details">
                    <p>{user.articles.length} Post Publised</p>
                </div>
                {/* <ProfileArticles 
                    fetchedUser={fetchedUser}
                /> */}
            </section>
        </div>
    );
}

export default Profile;
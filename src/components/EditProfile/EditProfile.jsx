import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../api/userProfile';
import './editprofile.css';

const EditProfile = () => {
    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // name, email, username, location, bio, work | profile-pic
    
    // User's Data State 
    const [ userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        location: user.location,
        bio: user.bio,
        work: user.work,
        profilepic: user.profilepic
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    
    // Saving Form Data
    const handleSubmit = async e => {
        e.preventDefault();
        updateProfile(userData, user._id, user.username, dispatch, navigate);
    }
    
    return (
        <div className='edit-profile-main'>
            <div className="edit-profile-box">
                <form action="" method='post' onSubmit={handleSubmit}>
                    <div className="user-details">
                        <h1>User</h1>
                        <div className="user-details-section">
                            <div className="name">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" id="name" value={userData.name} onChange={handleChange} />
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" value={userData.email} onChange={handleChange} />
                            </div>
                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" readOnly value={user.username}/>
                                <p className="warning">*Username cannot be changed after user is created</p>
                            </div>
                            <div className="image-profile">
                                <label htmlFor="profilepic">ProfilePic URL</label>
                                <input type="text" name="profilepic" value={userData.profilepic} onChange={handleChange}  />
                            </div>
                        </div>
                    </div>
                    <div className="basic-details">
                        <h1>Basic</h1>
                        <div className="basic-details-section">
                            <div className="location">
                                <label htmlFor="Location">Location</label>
                                <input type="text" name="location" id="location" value={userData.location} onChange={handleChange} />
                            </div>
                            <div className="bio">
                                <label htmlFor="bio">Bio</label>
                                <input type="text" name="bio" id="bio" value={userData.bio} onChange={handleChange} />
                            </div>
                            <div className="work">
                                <label htmlFor="work">Work</label>
                                <input type="text" name="work" id="work" value={userData.work} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <button type='submit' id='save-profile-btn'>Save Profile</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;
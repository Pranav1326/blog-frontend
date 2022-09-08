import React from 'react';
import './styles/editprofile.css';

const EditProfile = () => {
  return (
    <div className='edit-profile-main'>
        <div className="edit-profile-box">
            <div className="user-details">
                <h1>User</h1>
                <div className="user-details-section">
                    <div className="name">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" contentEditable="false" value="Pranav1326"/>
                        <p className="warning">*Username cannot be changed after user is created</p>
                    </div>
                    <div className="image-profile">
                        <input type="file" name="profileImage" id="profile-image" />
                    </div>
                </div>
            </div>
            <div className="basic-details">
                <h1>Basic</h1>
                <div className="basic-details-section">
                    <div className="location">
                        <label htmlFor="Location">Location</label>
                        <input type="text" name="location" id="location" />
                    </div>
                    <div className="bio">
                        <label htmlFor="bio">Bio</label>
                        <input type="text" name="bio" id="bio" />
                    </div>
                    <div className="work">
                        <label htmlFor="work">Work</label>
                        <input type="text" name="work" id="work" />
                    </div>
                </div>
            </div>
            <button type='submit' id='save-profile-btn'>Save Profile</button>
        </div>
    </div>
  )
}

export default EditProfile;
import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../api/userProfile';
import './editprofile.css';

const EditProfile = ({BASE_URL}) => {
    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // name, email, username, location, bio, work | profile-pic
    // req: body{userId, info}, params{userId}
    
    // User's Data State 
    const [ userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        location: user.location,
        bio: user.bio,
        work: user.work,
    })

    // Handling Input States
    const handleChange = e => {
        const {name, value, files} = e.target;
        setUserData((preValue) => {
            if(name === "name"){
                return{
                    name: value,
                    email: preValue.email,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: preValue.work,
                };
            }
            else if(name === "email"){
                return{
                    name: preValue.name,
                    email: value,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: preValue.work,
                };
            }
            else if(name === "location"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: value,
                    bio: preValue.bio,
                    work: preValue.work,
                };
            }
            else if(name === "bio"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: preValue.location,
                    bio: value,
                    work: preValue.work,
                };
            }
            else if(name === "work"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: value,
                };
            }
        });
    }
    
    // Handle Image Input
    const handleImageInput = async e => {
        setImg(e.target.files[0]);
        // uploadedImage = await handleFileInput();
    }
    
    // Uploading Image
    let fileName;
    var uploadedImage;
    const [ img, setImg ] = useState("");

    const handleFileInput = async () => {
        const data = new FormData();
        fileName = Date.now() + img.name;
        data.append("name", fileName);
        data.append("file", img);
        try {
            var imgUpload = await axios.post(`http://localhost:5000/api/imageupload`, data);
        } catch (error) {
            console.log(error);
        }
        return imgUpload.data.path;
    }
    
    // Saving Form Data
    const handleSubmit = async e => {
        e.preventDefault();
        if(img){
            uploadedImage = await handleFileInput();
        }
        else{
            uploadedImage = user.profilepic;
        }
        updateProfile(userData, uploadedImage, user._id, user.username, dispatch, navigate);
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
                                <input type="file" name="profileImage" id="profile-image" onChange={handleImageInput} />
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
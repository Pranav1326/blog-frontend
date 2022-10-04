import axios from 'axios';
import React, { useContext, useState } from 'react';
import './styles/editprofile.css';
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    // name, email, username, location, bio, work | profile-pic
    // req: body{userId, info}, params{userId}
    let fileName;
    const navigate = useNavigate();
    const { user, dispatch } = useContext(Context);
    const [ img, setImg ] = useState("");
    const [ profile, setProfile ] = useState("");
    const [userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        location: user.location,
        bio: user.bio,
        work: user.work,
        profilepic: user.profilepic
    });

    // Handling Input States
    const handleChange = e => {
        const {name, value} = e.target;
        setUserData(preValue => {
            if(name === "name"){
                return{
                    name: value,
                    email: preValue.email,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: preValue.work,
                    profilepic: preValue.profilepic
                };
            }
            else if(name === "email"){
                return{
                    name: preValue.name,
                    email: value,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: preValue.work,
                    profilepic: preValue.profilepic
                };
            }
            else if(name === "location"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: value,
                    bio: preValue.bio,
                    work: preValue.work,
                    profilepic: preValue.profilepic
                };
            }
            else if(name === "bio"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: preValue.location,
                    bio: value,
                    work: preValue.work,
                    profilepic: preValue.profilepic
                };
            }
            else if(name === "work"){
                return{
                    name: preValue.name,
                    email: preValue.email,
                    location: preValue.location,
                    bio: preValue.bio,
                    work: value,
                    profilepic: preValue.profilepic
                };
            }
        });
    }

    // Form Submit Handling
    const data = JSON.stringify({
        "userId": `${user._id}`,
        "name": (!userData.name) ? `${user.name}` : `${userData.name}`,
        "email": (!userData.email) ? `${user.email}` : `${userData.email}`,
        "location": (!userData.location) ? `${user.location}` : `${userData.location}`,
        "bio": (!userData.bio) ? `${user.bio}` : `${userData.bio}`,
        "work": (!userData.work) ? `${user.work}` : `${userData.work}`,
        // "profilepic": (!userData.profilepic) ? `${user.profilepic}` : `${userData.profilepic}`
        "profilepic": `${userData.profilepic}`
    });
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
        method: 'put',
        url: `http://localhost:5000/api/user/update/${user._id}`,
        headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data : data
    };

    // Submitting form
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({type: "USER_UPDATE_START"});
        let uploadedImg = await handleFileInput();
        setUserData(preValue => {
            return{
                name: preValue.name,
                email: preValue.email,
                location: preValue.location,
                bio: preValue.bio,
                work: preValue.work,
                profilepic: uploadedImg
            }
        });
        console.log(userData);

        axios(config)
        .then((response) => {
            if(response){
                console.log(response);
                alert(`Profile updated Successfully.`);
                dispatch({type: "USER_UPDATE_SUCCESS", payload: response.data});
                navigate('/profile');
            }
        })
        .catch((error) => {
            console.log(error);
            if(error.response.data.message){
                alert(error.response.data.message);
            }
            else if(error.response.data.code === 11000){
                alert("Email exists!");
            }
            else if(error.response.data){
                alert(error.response.data);
            }
            else{
                alert(error.response.data.message || error.response.data || error.response || error);
            }
        });
    }

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

    return (
        <div className='edit-profile-main'>
            <div className="edit-profile-box">
                <form action="" method='post' onSubmit={handleSubmit}>
                    <div className="user-details">
                        <h1>User</h1>
                        <div className="user-details-section">
                            <div className="name">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="name" id="name" onChange={handleChange} value={userData.name}/>
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" onChange={handleChange} value={userData.email}/>
                            </div>
                            <div className="username">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" value={user.username} readOnly/>
                                <p className="warning">*Username cannot be changed after user is created</p>
                            </div>
                            <div className="image-profile">
                                <input type="file" name="profileImage" id="profile-image" onChange={e => {setImg(e.target.files[0]); handleFileInput()}} />
                            </div>
                        </div>
                    </div>
                    <div className="basic-details">
                        <h1>Basic</h1>
                        <div className="basic-details-section">
                            <div className="location">
                                <label htmlFor="Location">Location</label>
                                <input type="text" name="location" id="location" onChange={handleChange} value={userData.location}/>
                            </div>
                            <div className="bio">
                                <label htmlFor="bio">Bio</label>
                                <input type="text" name="bio" id="bio" onChange={handleChange} value={userData.bio}/>
                            </div>
                            <div className="work">
                                <label htmlFor="work">Work</label>
                                <input type="text" name="work" id="work" onChange={handleChange} value={userData.work}/>
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
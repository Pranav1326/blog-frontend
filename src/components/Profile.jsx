import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/profile.css';
import { Context } from '../context/Context';
import axios from 'axios';
import ProfileArticles from './ProfileArticles';

const Profile = ({BASE_URL}) => {

const [fetchedUser, setFetchedUser] = useState(null);
const { user, dispatch } = useContext(Context);
const onLoad = async e => {
    dispatch({type: "USER_UPDATE_START"});

    const baseUrl = `${BASE_URL}/user/${user._id}`;
    try {
        const res = await axios.get(baseUrl);
        if(res.data){
            setFetchedUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        // dispatch({type: "USER_UPDATE_SUCCESS", payload: res.data});
    } catch (error) {
        alert(error.response.data);
        console.log(error);
    }
}

useEffect(() => {
    onLoad();
}, []);

// Edit-Profile Button
const navigate = useNavigate();
const handleNavigaion = e => {
    navigate('/editprofile');
}

// Logout Button
const handleLogout = e => {
    e.preventDefault();
    dispatch({type: "LOGOUT"});
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    navigate('/');
}

// Delete Button
const handleDelete = async e => {
    e.preventDefault();
    const choice = window.confirm(`Are you sure? This action can't be undone.`);
    if(choice){
        const token = JSON.parse(localStorage.getItem('token'));
        const userDetails = {
            username: user.username,
            email: user.email,
            userId: user._id
        };
        const baseUrl = `${BASE_URL}/user/delete/${user._id}`;
        const authAxios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        try {
            const res = await authAxios.delete(baseUrl, {data: userDetails})
            .then((result) => {
                alert(result.data);
                handleLogout(e);
            })
            .catch(err => {
                alert(err.response.data);
            });
            console.log(res);
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || error.response.data || error.response || error);
        }
    }
    else{
        return;
    }
}

return (
    <div className='profile-section'>
        <section className="profile-section-1">
            <div className="profile-pic">
                {fetchedUser ? 
                <img src={fetchedUser.profilepic === "" ? "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" : fetchedUser.profilepic} alt="User Imae" className='img'/>
                : ""}
            </div>
            <div className="profile-details">
                <p className='user-details'>{fetchedUser ? fetchedUser.username : user.username}</p>
                <p className='user-details'>Bio: {fetchedUser ? fetchedUser.bio : user.bio}</p>
                <p className='user-details'>Joined: {fetchedUser ? new Date(fetchedUser.createdAt).toDateString() : new Date(user.createdAt).toDateString()}</p>
                <p className='user-details'>Location: {fetchedUser ? fetchedUser.location: user.localStorage}</p>
                <p className='user-details'>Work: {fetchedUser ? fetchedUser.work: user.work}</p>
                <button id='edit-profile-btn' onClick={handleDelete}>Delete Profile</button>
                <button id='edit-profile-btn' onClick={handleNavigaion}>Edit Profile</button>
                <button id='create-article-btn' onClick={() => navigate('/createpost')}> Create Article</button>
                <button id='logout-btn' onClick={handleLogout}>Logout</button>
            </div>
        </section>
        <section className="profile-section-2">
            <div className="details">
                <p>{user.articles.length} Post Publised</p>
            </div>
            <ProfileArticles 
                fetchedUser={fetchedUser}
            />
        </section>
    </div>
  );
}

export default Profile;
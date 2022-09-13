import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/profile.css';
import { Context } from '../context/Context';
import axios from 'axios';

const Profile = () => {
const {user, dispatch } = useContext(Context);
const onLoad = async e => {
    dispatch({type: "USER_UPDATE_START"});

    const baseUrl = `http://localhost:5000/api/user/${user._id}`;
    try {
        const res = await axios.get(baseUrl);
        localStorage.setItem("user",JSON.stringify(res.data));
        // dispatch({type: "USER_UPDATE_SUCCESS", payload: res.data});
    } catch (error) {
        alert(error.response.data);
        console.log(error);
    }
}
useEffect(() => {
    onLoad();
}, [user])

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
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(`Bearer ${token}`);
    const userDetails = {
        username: user.username,
        email: user.email,
        userId: user._id
    };
    const baseUrl = `http://localhost:5000/api/user/delete/${user._id}`;
    const authAxios = axios.create({
        baseURL: baseUrl,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    try {
        const res = await authAxios.delete(baseUrl, {data: userDetails})
        .then((result) => {
            console.log(result)
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
return (
    <div className='profile-section'>
        <section className="profile-section-1">
            <div className="profile-pic">
                <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="User Imae" className='img'/>
            </div>
            <div className="profile-details">
                <p className='user-details'>{user.username}</p>
                <p className='user-details'>Bio: {user.bio}</p>
                <p className='user-details'>Joined: {new Date(user.createdAt).toDateString()}</p>
                <p className='user-details'>Location: {user.location}</p>
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
            <div className="article-list">
                <h3 className='article-list-title'>
                    Articles
                </h3>
                <ul>
                    {user.articles>0 ? 
                        user.articles.map(e => {
                            <li>{e}</li>
                        })
                    :
                        <li>No Articles written by you!</li>
                    }
                </ul>
            </div>
        </section>
    </div>
  );
}

export default Profile;
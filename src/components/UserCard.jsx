import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({userData, BASE_URL}) => {

    const navigate = useNavigate();

    const handleUserCardClick = async () => {
        const baseUrl = `${BASE_URL}/user/${userData._id}`;
        const res = await axios.get(baseUrl);
        if(res.data){
            navigate(`/userprofile/${userData._id}`);
        }
    }

    return (
        <div className="single-article-user-card-details">
            <div className="article-user-card-details" onClick={handleUserCardClick}>
                <img src={userData.profilepic} alt="" className={userData.profilepic !== "" ? 'single-article-user-card-profile-img' : 'single-article-user-card-profile-img-hidden'}/>
                <h4>{userData.username}</h4>
            </div>
            <p className="single-article-user-bio">
                {userData.bio !== "undefined" ? userData.bio : ""}
            </p>
            {userData.location !== "undefined" ? <div className="single-article-user-location">
                {userData.location ? <span>Location</span> : ""}
                <p>{userData.location}</p>
            </div> : ""}
            <div className="single-article-user-joined">
                <span>Joined</span>
                <p>{new Date(userData.createdAt).toDateString()}</p>
            </div>
        </div>
    );
}

export default UserCard;
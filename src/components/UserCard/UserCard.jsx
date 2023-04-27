import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthor } from '../../api/article';

const UserCard = ({userId, BASE_URL}) => {

    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        getAuthor(userId, setUser);
    }, [])
    
    const handleUserCardClick = async () => {
        const baseUrl = `${BASE_URL}/user/${user._id}`;
        const res = await axios.get(baseUrl);
        if(res.data){
            navigate(`/userprofile/${user._id}`);
        }
    }

    if(!user) return <p className='no-posts-msg'>Loading...</p>;
    
    return (
        <div className="single-article-user-card-details">
            <div 
                className="article-user-card-details" 
                // onClick={handleUserCardClick}
            >
                <img src={user.profilepic} alt="" className={user.profilepic !== "" ? 'single-article-user-card-profile-img' : 'single-article-user-card-profile-img-hidden'}/>
                <h2>{user.username}</h2>
            </div>
            <p className="single-article-user-bio">
                {user.bio !== "undefined" ? user.bio : ""}
            </p>
            {user.location !== "undefined" ? <div className="single-article-user-location">
                {user.location ? <span>Location</span> : ""}
                <p>{user.location}</p>
            </div> : ""}
            <div className="single-article-user-joined">
                <span>Joined</span>
                <p>{new Date(user.createdAt).toDateString()}</p>
            </div>
        </div>
    );
}

export default UserCard;
import React from 'react';

const UserCard = ({userData}) => {
    return (
        <div className="single-article-user-card-details">
            <div className="article-user-card-details">
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
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getAuthor } from '../../api/article';

const UserCard = ({userId, BASE_URL}) => {

    // const navigate = useNavigate();

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        getAuthor(userId, setUser);
        // eslint-disable-next-line
    }, []);
    
    // const handleUserCardClick = async () => {
    //     const baseUrl = `${BASE_URL}/user/${user._id}`;
    //     const res = await axios.get(baseUrl);
    //     if(res.data){
    //         navigate(`/userprofile/${user._id}`);
    //     }
    // }

    if(!user) return <p className='no-posts-msg'>Loading...</p>;
    
    return (
        <div className="single-article-user-card-details">
            <div 
                className="article-user-card-details" 
                // onClick={handleUserCardClick}
            >
                <a href="https://pranav1326.github.io/pranav-portfolio" target='_blank'>
                    <img src={"https://drive.google.com/uc?id=1mSX81XYW6koJsLw3JZDI3wyzJJ169srj"} alt="" className={user.profilepic !== "" ? 'single-article-user-card-profile-img' : 'single-article-user-card-profile-img-hidden'}/>
                </a>
            </div>
            <div className="wrapper-user-info">
                <h1>{user.name}</h1>
                <p className="single-article-user-bio">
                    {user.bio !== "undefined" ? user.bio : ""}
                </p>
                <div className="single-article-user-description">
                    {/* <p>{user.description}</p> */}
                    <p>{"Hello There, I'm Pranav a passionate web designer and developer. Visit my portfolio at "}<a className='portfolio-link' target='_blank' href='https://pranav1326.github.io/pranav-portfolio'>Here</a></p>
                </div>
                {user.location !== "undefined" ? <div className="single-article-user-location">
                    {user.location ? <span>Location</span> : ""}
                    <p>{user.location}</p>
                </div> : ""}
                <div className="single-article-user-joined">
                    <span>Joined</span>
                    <p>{new Date(user.createdAt).toDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
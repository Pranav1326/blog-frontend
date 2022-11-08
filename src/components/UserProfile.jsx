/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileArticles from './ProfileArticles';

const UserProfile = ({BASE_URL}) => {
    const [ fetchedUser, setFetchedUser ] = useState([]);
    const { id } = useParams();
    const onLoad = async e => {
        const baseUrl = `${BASE_URL}/user/${id}`;
        try {
            const res = await axios.get(baseUrl);
            if(res.data){
                setFetchedUser(res.data);
            }
        } catch (error) {
            alert(error.response.data);
            console.log(error);
        }
    }
    
    useEffect(() => {
        onLoad();
    }, []);
    
    return (
        <div className='profile-section'>
            <section className="profile-section-1">
                <div className="profile-pic">
                    {fetchedUser ? 
                    <img src={fetchedUser.profilepic === "" ? "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" : fetchedUser.profilepic} alt="User Imae" className='img'/>
                    : ""}
                </div>
                <div className="profile-details">
                    <p className='user-details'>{fetchedUser.username}</p>
                    <p className='user-details'>Bio: {fetchedUser.bio}</p>
                    <p className='user-details'>Joined: {new Date(fetchedUser.createdAt).toDateString()}</p>
                    <p className='user-details'>Location: {fetchedUser.location}</p>
                    <p className='user-details'>Work: {fetchedUser.work}</p>
                </div>
            </section>
            <section className="profile-section-2">
                <div className="details">
                    {/* {console.log(fetchedUser.articles.length)} */}
                    <p>{fetchedUser.articles && fetchedUser.articles.length} Post Publised</p>
                </div>
                <ProfileArticles 
                    fetchedUser={fetchedUser}
                    BASE_URL={BASE_URL}
                />
            </section>
        </div>
    );
}

export default UserProfile;
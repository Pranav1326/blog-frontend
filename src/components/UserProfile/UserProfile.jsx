/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ProfileArticles from '../ProfileArticles/ProfileArticles';

const UserProfile = ({BASE_URL}) => {
    
    return (
        <div className='profile-section'>
            <section className="profile-section-1">
                <div className="profile-pic">
                    <img src={"https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" } alt="User Imae" className='img'/>
                </div>
                <div className="profile-details">
                    <p className='user-details'>{"Pranav"}</p>
                    <p className='user-details'>Bio: {"Developer"}</p>
                    <p className='user-details'>Joined: {"14 Feb 2022"}</p>
                    <p className='user-details'>Location: {"Gujarat"}</p>
                    <p className='user-details'>Work: {"Student"}</p>
                </div>
            </section>
            <section className="profile-section-2">
                <div className="details">
                    <p>{5} Post Publised</p>
                </div>
                <ProfileArticles 
                />
            </section>
        </div>
    );
}

export default UserProfile;
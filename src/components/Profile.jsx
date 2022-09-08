import React from 'react';
import './styles/profile.css';

const Profile = () => {
  return (
    <div className='profile-section'>
        <section className="profile-section-1">
            <div className="profile-pic">
                <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="User Imae" className='img'/>
            </div>
            <div className="profile-details">
                <p className='user-details'>Username</p>
                <p className='user-details'>Bio</p>
                <p className='user-details'>Join Date</p>
                <p className='user-details'>Location</p>
                <button id='edit-profile-btn'>Edit Profile</button>
            </div>
        </section>
        <section className="profile-section-2">
            <div className="details">
                <p>3 Post Publised</p>
            </div>
            <div className="article-list">
                <h3 className='article-list-title'>
                    Articles
                </h3>
                <ul>
                    <li>
                        Getting Started with Node.js step by step easy for beginner
                    </li>
                    <li>
                        Getting Started with React.js
                    </li>
                    <li>
                        javascript basics
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Profile;
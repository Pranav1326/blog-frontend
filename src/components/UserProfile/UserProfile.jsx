/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesOfAuthor, getAuthor } from '../../api/article';
import BlogCard from '../BlogCard/BlogCard';
// import ProfileArticles from '../ProfileArticles/ProfileArticles';

const UserProfile = ({BASE_URL}) => {
    
    const { id } = useParams();
    const [ user, setUser ] = useState(null);

    const [ userArticles, setUserArticles ] = useState(null);

    const renderArticles = userArticles && userArticles.map((article, id) => {
        return(
            <BlogCard
                key={id}
                id={article._id}
                author={article.author}
                publish={new Date(article.createdAt).toDateString()}
                title={article.title}
                description={article.description}
                tags={article.tags}
                image={article.image}
            />
        );
    });
    
    useEffect(() => {
        getAuthor(id, setUser);
        user && getArticlesOfAuthor(user.username, setUserArticles);
    }, []);
    
    if(!user || !userArticles) return <p className='no-posts-msg'>Loading...</p>;
    
    return (
        <div className='profile-section'>
            <section className="profile-section-1">
                <div className="profile-pic">
                    <img src={user && user.profilepic ? user.profilepic : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" } alt="User Imae" className='img'/>
                </div>
                <div className="profile-details">
                    <p className='user-details'>{user.username}</p>
                    <p className='user-details'>Bio: {user.bio}</p>
                    <p className='user-details'>Joined: {new Date(user.createdAt).toDateString()}</p>
                    <p className='user-details'>Location: {user.location}</p>
                    <p className='user-details'>Work: {user.work}</p>
                </div>
            </section>
            <section className="profile-section-2">
                <div className="articles-comments">
                    <div className="details">
                        <p>{user.articles.length} Post Publised</p>
                    </div>
                    <div className="details">
                        <p>{user.comments.length} Comments</p>
                    </div>
                </div>
                <div className='user-articles'>
                    <h1 className='user-articles-title'>Articles</h1>
                    <div className="articles">
                        {renderArticles}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserProfile;
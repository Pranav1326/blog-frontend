import React, { useEffect, useState } from 'react';
import './unpublishedarticles.css';
import axios from 'axios';
import BlogCard from '../BlogCard/BlogCard';

const UnpublishedArticles = ({BASE_URL}) => {

    const [ posts, setPosts ] = useState([]);

    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/articles/unpublished`);
            res && setPosts(res.data);
        }
        fetchPosts();
    }, []);

    const renderPosts = posts && posts.map((post, i) => {
        let date = post.createdAt.split("T")[0];
        return(
            <BlogCard
                key={i}
                id={post._id}
                author={post.author}
                publish={date}
                title={post.title}
                description={post.description}
                tags={post.tags}
                image={post.image}
            />
        );
    });

    return (
        <div className='unpublished-main'>
            <h1 className='unpublished-articles-title'>Unpublished Articles</h1>
            <div className="unpublished-articles-posts">
                {renderPosts}
            </div>
        </div>
    );
}

export default UnpublishedArticles;
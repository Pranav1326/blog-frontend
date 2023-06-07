import React, { useEffect, useState } from 'react';
import './PopularArticles.css';
import { baseUrl } from '../../api/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PopularArticles = () => {

  const navigate = useNavigate();
  
  const [ popularArticles, setPopularArticles ] = useState(null);

  useEffect(() => {
    const fetchPopularArticles = async () => {
      const res = await axios.get(`${baseUrl}/articles/popular`);
      if(res){
        setPopularArticles(res.data);
      }
    }
    fetchPopularArticles();
  },[]);

  const renderPopularArticles = popularArticles && popularArticles.map((post, i) => {
    return(
      <div key={i} onClick={() => {
        navigate(`/article/${post._id}`);    
      }} className="popular-article-card" style={{backgroundColor: 'rgba(0,0,0,0.5)', backgroundImage: `url(${post.image})`, backgroundBlendMode: 'multiply', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <h2>{post.title}</h2>
      </div>
    );
  });

  return (
    <div className='popular-articles-main'>
        <div className="popular-articles-title">
          <h2>Popular Articles</h2>
        </div>
        <div className="popular-articles-content">
          <div className="popular-articles-posts">
            {renderPopularArticles}
          </div>
        </div>
    </div>
  );
}

export default PopularArticles;
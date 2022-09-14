import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileArticles = ({fetchedUser}) => {
    
const navigate = useNavigate();

const [titles, setTitles] = useState([]);

// Posts of user
const handlePosts = async () => {
    const postsOfUser = await fetchedUser.articles;
    let posts = [];
    postsOfUser.forEach(async (e, i) => {
        const res = await axios.get(`http://localhost:5000/api/articles/${e}`);
        posts.push(res.data.title);
        setTitles(posts);
    });
}

const handlePostRedirect = (e) => {
    // /article/:id
    const findArticle = titles.find(ele => {
        return(ele = e.target.textContent);
    });
    // console.log(findArticle);
    // console.log(titles);
    navigate(`/article/${findArticle}`)
}

useEffect(() => {
    handlePosts();
}, [fetchedUser]);

const articleTitles = titles.map((e, i) => {
    return(<li key={i} onClick={handlePostRedirect}>{e}</li>);
});

return (
    <div className="article-list">
        <h3 className='article-list-title'>
            Articles
        </h3>
        <ul>
            {articleTitles}
        </ul>
    </div>
  );
}

export default ProfileArticles;
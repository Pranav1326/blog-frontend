/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileArticles = ({fetchedUser, BASE_URL}) => {
    
const navigate = useNavigate();

const [postData, setPostData] = useState({
    title: "",
    id: ""
});

const [articleTitles, setArticleTitles] = useState(null);

// Posts of user
const handlePosts = async () => {
    const postsOfUser = await fetchedUser.articles;
    let posts = [];
    postsOfUser && postsOfUser.forEach(async (e) => {
        await axios.get(`${BASE_URL}/articles/${e}`)
        .then((result) => {
            posts.push({
                title: result.data.title,
                id: result.data._id
            });
            setPostData(posts);
            fetchArticleTitles(posts);
        })
        .catch(err => console.log(err));
    });
}

const handlePostRedirect = (event) => {
    // /article/:id
    let clickedArticleTitle = event.target.textContent;
    let clickedArticle = articleTitles && articleTitles.find((e) => {
        if(clickedArticleTitle === e.props.children){
            return e.key;
        }
        else{
            return null;
        }
    });
    navigate(`/article/${clickedArticle.key}`);
}

useEffect(() => {
    handlePosts();
}, [fetchedUser]);

const makePostLi = (posts) => {
    return (posts).map(ele => {
        return(<li 
            key={ele.id} 
            onClick={handlePostRedirect}
        >
            {ele.title}
        </li>);
    });
}

const fetchArticleTitles = (posts) => {
    setArticleTitles(makePostLi(posts));
}

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
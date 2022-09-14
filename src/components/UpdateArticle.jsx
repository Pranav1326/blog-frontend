/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import './styles/createpost.css';
import B from '../icons/png/007-bold.png';
import I from '../icons/png/008-italic.png';
import T from '../icons/png/001-terminal.png';
import C from '../icons/png/002-coding.png';
import H from '../icons/png/003-heading.png';
import N from '../icons/png/004-number.png';
import L from '../icons/png/005-list.png';
import U from '../icons/png/006-underline.png';
import Link from '../icons/png/009-link.png';
import Q from '../icons/png/010-left-quote.png';
import P from '../icons/png/011-photo.png';
import ST from '../icons/png/012-strikethrough.png';
import HR from '../icons/png/013-line-break-symbol.png';
import { useState } from 'react';
import { Context } from '../context/Context';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UpdateArticle = () => {

const { id } = useParams();
const baseUrl = `http://localhost:5000/api/`;
const [currentPost, setCurrentPost] = useState([]);

const fetchPostData = async () => {
    try {
        const res = await axios.get(baseUrl + `articles/${id}`);
	    setCurrentPost(res.data);
    } catch (error) {
        console.log(error);        
    }
}

useEffect(() => {
    fetchPostData();
}, []);

const [title, setTitle] = useState(currentPost.title);

const navigate = useNavigate();
const { user } = useContext(Context);

// Updating post request
const handleSubmit = async e => {
    e.preventDefault();
    // const tags = postData.tags.split(",");
    // postData.tags = tags;
    const data = JSON.stringify({
        "title": `${title}`,
        // "content": `${postData.content}`,
        "author": `${user.username}`,
        "authorId": `${user._id}`,
        // "tags": tags
    });
    console.log(data);
    const token = JSON.parse(localStorage.getItem('token'));
    var config = {
        method: 'put',
        url: `http://localhost:5000/api/articles/update/${id}`,
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data : data
    };
    axios(config)
    .then(function (response) {
        console.log(response);
        if(response){
            alert(`Article created successfully.`);
            navigate('/');
        }
    })
    .catch(function (error) {
        console.log(error);
        alert(`Can't create article.`);
    });
}

console.log(title);
const titleInputHandler = e => {
    setTitle(preState => {
        return e.target.value;
    })
}

if(!currentPost){
    return `Loading...`;
}
else{
return (
    <div className='create-post-main'>
        <div className="create-post-box">
            <div className="create-post-section-1">
                <div className="create-post-image">
                    <input type="file" src="" alt="" id='create-post-image' placeholder='Add a cover Image'/>
                </div>
                <div className="create-post-title">
                    <input type="text" name="title" id="" placeholder='New Post Title Here' 
                    value={title} 
                    onChange={titleInputHandler}
                    />
                </div>
                <div className="create-post-tags">
                    <input type="text" name="tags" id="" placeholder='Add upto 4 tags' 
                    // value={postData.tags} 
                    // onChange={handleChange}
                    />
                </div>
                <div className="create-post-editing">
                    <div className="editing-panel">
                        {/* <button onClick={handleBold}><img src={B} alt=""/></button> */}
                        {/* <button onClick={handleItalic}><img src={I} alt="" /></button> */}
                        {/* <button onClick={}><img src={U} alt="" /></button>
                        <button onClick={}><img src={Link} alt="" /></button>
                        <button onClick={}><img src={L} alt="" /></button>
                        <button onClick={}><img src={N} alt="" /></button>
                        <button onClick={}><img src={H} alt="" /></button>
                        <button onClick={}><img src={Q} alt="" /></button>
                        <button onClick={}><img src={C} alt="" /></button>
                        <button onClick={}><img src={T} alt="" /></button>
                        <button onClick={}><img src={P} alt="" /></button>
                        <button onClick={}><img src={ST} alt="" /></button>
                        <button onClick={}><img src={HR} alt="" /></button> */}
                    </div>
                </div>
            </div>
            <div className="create-post-section-2">
                <textarea name="content" id="" cols="30" rows="10" placeholder='Write your text here...' 
                // value={postData.content} 
                // onChange={handleChange}
                >
                </textarea>
            </div>
        </div>
        <div className="create-post-btns">
            <div className="create-post-publish">
                <button className='create-post-btn' type='submit' onClick={handleSubmit}>Publish</button>
            </div>
            <div className="create-post-edit-preview">
                <button className='create-post-btn'>Edit</button>
                <button className='create-post-btn'>Preview</button>
            </div>
        </div>
    </div>
  );
}
}

export default UpdateArticle;
/* eslint-disable no-unused-vars */
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

const navigate = useNavigate();
const { user } = useContext(Context);
const { id } = useParams();
const baseUrl = `http://localhost:5000/api/`;
const [currentPost, setCurrentPost] = useState([]);
let [newData, setNewData] = useState({
    title: "",
    tags: "",
    content: ""
});

const fetchPostData = async () => {
    try {
        const res = await axios.get(baseUrl + `articles/${id}`);
	    setCurrentPost(res.data);
        let tag = res.data.tags.map(e => e.toString());
        setNewData({
            title: res.data.title,
            tags: tag.toString(),
            content: res.data.content
        })
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchPostData();
}, []);


// Updating post request
const handleSubmit = async e => {
    e.preventDefault();
    if(newData.title !== undefined && newData.tags !== undefined && newData.content !== undefined){
        const tags = newData.tags.split(",");
        newData.tags = tags;
        const data = {
            "title": `${newData.title}`,
            "tags": tags,
            "content": `${newData.content}`,
            "author": `${user.username}`,
            "userId": `${user._id}`
        };
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
            if(response){
                alert(`Article updated successfully.`);
                navigate('/');
            }
        })
        .catch(function (error) {
            alert(`Can't update article.`);
        });
    }
    else{
        alert(`Please provide proper input!`);
    }
}

const handleChange = e => {
    const {name, value} = e.target;
    setNewData(preState => {
        if(name === "title"){
            return {
                title: value,
                tags: preState.tags,
                content: preState.content
            }
        }
        else if(name === "tags"){
            return {
                title: preState.title,
                tags: value,
                content: preState.content
            }
        }
        else if(name === "content"){
            return {
                title: preState.title,
                tags: preState.tags,
                content: value
            };
        }
    });
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
                    value={newData.title} 
                    onChange={handleChange}
                    />
                </div>
                <div className="create-post-tags">
                    <input type="text" name="tags" id="" placeholder='Add upto 4 tags' 
                    value={newData.tags} 
                    onChange={handleChange}
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
                value={newData.content} 
                onChange={handleChange}
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
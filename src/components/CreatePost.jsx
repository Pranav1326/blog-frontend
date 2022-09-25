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
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

const navigate = useNavigate();
const { user } = useContext(Context);
const [postData, setPostData] = useState({
    title: "",
    tags: "",
    content: ""
});
const handleChange = (e) => {
    const {name, value} = e.target;
    setPostData(preValue => {
        if(name === "title"){
            return{
                title: value,
                tags: preValue.tags,
                content: preValue.content
            };
        }
        else if(name === "tags"){
            return {
                title: preValue.title,
                tags: value,
                content: preValue.content
            };
        }
        else if(name === "content"){
            return {
                title: preValue.title,
                tags: preValue.tags,
                content: value
            };
        }
    });
}
const [content, setContent] = useState("");
const handleBold = (e) => {
    console.log(content);
    setContent(preValue => {
        // [...content, "** **"]
        return[preValue, "** **"];
    });
}
// Creating post request
const handleSubmit = async e => {
    e.preventDefault();
    const tags = postData.tags.split(",");
    postData.tags = tags;
    const data = JSON.stringify({
        "title": `${postData.title}`,
        "content": `${postData.content}`,
        "author": `${user.username}`,
        "authorId": `${user._id}`,
        "tags": tags
    });
    console.log(data);
    const token = JSON.parse(localStorage.getItem('token'));
    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/articles/create',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data : data
    };
    if(postData.title !== "" && postData.content !== ""){
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
    else{
        alert(`Plese fill data!`);
    }
}
    

return (
    <div className='create-post-main'>
        <div className="create-post-box">
            <div className="create-post-section-1">
                <div className="create-post-image">
                    <input type="file" src="" alt="" id='create-post-image' placeholder='Add a cover Image'/>
                </div>
                <div className="create-post-title">
                    <input type="text" name="title" id="" placeholder='New Post Title Here' 
                    value={postData.title} 
                    onChange={handleChange}
                    />
                </div>
                <div className="create-post-tags">
                    <input type="text" name="tags" id="" placeholder='Add upto 4 tags' 
                    value={postData.tags} 
                    onChange={handleChange}
                    />
                </div>
                <div className="create-post-editing">
                    <div className="editing-panel">
                        <button onClick={handleBold}><img src={B} alt=""/></button>
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
                <textarea name="content" id="" cols="30" rows="10" placeholder='Write your text here...' value={postData.content} onChange={handleChange}></textarea>
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
  )
}

export default CreatePost;
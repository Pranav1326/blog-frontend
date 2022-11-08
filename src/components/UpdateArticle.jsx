/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import './styles/createpost.css';
import { useState } from 'react';
import { Context } from '../context/Context';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const UpdateArticle = ({BASE_URL}) => {

const navigate = useNavigate();
const { user } = useContext(Context);
const { id } = useParams();
const baseUrl = `${BASE_URL}/articles/${id}`;
const [currentPost, setCurrentPost] = useState([]);
const [newData, setNewData] = useState({
    title: "",
    tags: "",
});
const [content, setContent] = useState("");

const fetchPostData = async () => {
    try {
        const res = await axios.get(baseUrl);
	    setCurrentPost(res.data);
        let tag = res.data.tags.map(e => e.trim().toString());
        setNewData({
            title: res.data.title,
            tags: tag.toString(),
        });
        setContent(res.data.content);
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
    if(newData.title !== undefined && newData.tags !== undefined && content !== undefined){
        const tags = newData.tags.split(",") || newData.tags.split(", ");
        if(tags.length > 4){
            alert(`You can include maximum 4 tags!`);
        }
        else{
            const filteredTags = tags.map(e => e.trim())
            newData.tags = tags;
            const data = {
                "title": `${newData.title}`,
                "tags": filteredTags,
                "content": `${content}`,
                "author": `${user.username}`,
                "userId": `${user._id}`
            };
            const token = JSON.parse(localStorage.getItem('token'));
            var config = {
                method: 'put',
                url: `${BASE_URL}/articles/update/${id}`,
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
            }
        }
        else if(name === "tags"){
            return {
                title: preState.title,
                tags: value,
            }
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
                    {/* <input type="file" src="" alt="" id='create-post-image' placeholder='Add a cover Image'/> */}
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
            </div>
            <div className="create-post-section-2">
                <MDEditor
                    value={content}
                    onChange={setContent}
                    className='md-editor'
                />
            </div>
        </div>
        <div className="create-post-btns">
            <div className="create-post-publish">
                <button className='create-post-btn' type='submit' onClick={handleSubmit}>Publish</button>
            </div>
        </div>
    </div>
  );
}
}

export default UpdateArticle;
import React, { useState } from 'react';
import './createpost.css';
import MDEditor from '@uiw/react-md-editor';
import { useSelector } from 'react-redux';
import { createArticle } from '../../api/article';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = ({BASE_URL}) => {

    // User
    const user = useSelector(state => state.userReducer.user);

    const navigate = useNavigate();

    // Title & Tags State
    const [ postData, setPostData ] = useState({
        image: "",
        title: "",
        description: "",
        tags: ""
    });
    // Content State
    const [ content, setContent ] = useState("");

    // Handle Change function for Title and Tags
    const handleChange = e => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    }

    // Posting Article
    const handleSubmit = async (e) => {
        const authorData = {
            author: user.username,
            authorId: user._id,
            role: user.role,
            title: postData.title,
            description: postData.description,
            tags: postData.tags.split(","),
            content: content,
            image: postData.image
        }
        createArticle(authorData, navigate);
    }

    return (
        <div className='create-post-main'>
            <div className="create-post-box">
                <div className="create-post-section-1">
                    <div className="create-post-image">
                        {/* Cover Image */}
                        {/* <input type="file" onChange={handleImageChange} name='image' id='create-post-image' placeholder='Add a cover Image'/> */}
                        <input type="text" name='image' onChange={handleChange} value={postData.image} placeholder='Cover Image URL' className='cover-image' />
                    </div>
                    <div className="create-post-title">
                        {/* Blog Title */}
                        <input type="text" name="title" id="" placeholder='New Post Title Here' 
                        value={postData.title} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="create-post-description">
                        {/* Blog Description */}
                        <input type="text" name="description" id="" placeholder='Description' 
                        value={postData.description} 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="create-post-tags">
                        {/* Blog Tags */}
                        <input type="text" name="tags" id="" placeholder='Add upto 4 tags comma seperated' 
                        value={postData.tags} 
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="create-post-section-2">
                    {/* Markdown Editor */}
                    <MDEditor
                        value={content}
                        onChange={setContent}
                        className='md-editor'
                    />
                </div>
            </div>
            <div className="create-post-btns">
                <div className="create-post-publish">
                    {/* Publish Button */}
                    <button 
                        className='create-post-btn' 
                        type='submit' 
                        onClick={handleSubmit}
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
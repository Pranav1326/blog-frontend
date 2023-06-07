/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './createpost.css';
import MDEditor from '@uiw/react-md-editor';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createArticle, updateArticle } from '../../api/article';
import axios from 'axios';

const UpdateArticle = ({BASE_URL}) => {
    // User
    const user = useSelector(state => state.userReducer.user);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/articles/${id}`)
            .then((res) => {
                setPostData(res.data);
                setContent(res.data.content);
            })
            .catch(err => console.log(err));
    }, []);
    

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
            articleid: id,
            author: user.username,
            userId: user._id,
            role: user.role,
            title: postData.title,
            description: postData.description,
            tags: postData.tags,
            content: content,
        }
        updateArticle(authorData, navigate);
    }
    
    return (
        <div className='create-post-main'>
            <div className="create-post-box">
                <div className="create-post-section-1">
                    <div className="create-post-image">
                    <input type="text" name='image' onChange={handleChange} value={postData.image} placeholder='Cover Image URL' className='cover-image' />
                    </div>
                    <div className="create-post-title">
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
                        <input type="text" name="tags" id="" placeholder='Add upto 4 tags' 
                            value={postData.tags}
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

export default UpdateArticle;
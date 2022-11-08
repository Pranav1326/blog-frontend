import React, { useContext } from 'react';
import './styles/createpost.css';
import { useState } from 'react';
import { Context } from '../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

const CreatePost = ({BASE_URL}) => {

    const navigate = useNavigate();
    const { user } = useContext(Context);
    const [ postData, setPostData ] = useState({
        title: "",
        tags: "",
    });
    const [content, setContent] = useState("");
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPostData(preValue => {
            if(name === "title"){
                return{
                    title: value,
                    tags: preValue.tags,
                };
            }
            else if(name === "tags"){
                return {
                    title: preValue.title,
                    tags: value,
                };
            }
        });
    }

    // Creating post request
    const handleSubmit = async e => {
        e.preventDefault();
        let tags = postData.tags.split(",");
        tags = tags.map(tag => tag.toLowerCase())
        postData.tags = tags;
        const data = JSON.stringify({
            "title": `${postData.title}`,
            "content": `${content}`,
            "author": `${user.username}`,
            "authorId": `${user._id}`,
            "tags": tags
        });
        const token = JSON.parse(localStorage.getItem('token'));
        var config = {
            method: 'post',
            url: `${BASE_URL}/articles/create`,
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
                    {/* <input type="file" src="" alt="" id='create-post-image' placeholder='Add a cover Image'/> */}
                </div>
                <div className="create-post-title">
                    <input type="text" name="title" id="" placeholder='New Post Title Here' 
                    value={postData.title} 
                    onChange={handleChange}
                    />
                </div>
                <div className="create-post-tags">
                    <input type="text" name="tags" id="" placeholder='Add upto 4 tags comma seperated' 
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
  )
}

export default CreatePost;
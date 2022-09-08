import React from 'react';
import './styles/createpost.css';

const CreatePost = () => {
  return (
    <div className='create-post-main'>
        <div className="create-post-box">
            <div className="create-post-section-1">
                <div className="create-post-image">
                    <input type="file" src="" alt="" id='create-post-image' placeholder='Add a cover Image'/>
                </div>
                <div className="create-post-title">
                    <input type="text" name="title" id="" placeholder='New Post Title Here'/>
                </div>
                <div className="create-post-tags">
                    <input type="text" name="tags" id="" placeholder='Add upto 4 tags'/>
                </div>
                <div className="create-post-editing">
                    <div className="editing-panel">
                        {/* <FontAwesomeIcon icon="fa-solid fa-bold" /> */}
                    </div>
                </div>
            </div>
            <div className="create-post-section-2">
                <textarea name="content" id="" cols="30" rows="10" placeholder='Write your text here...'></textarea>
            </div>
        </div>
        <div className="create-post-btns">
            <div className="create-post-publish">
                <button className='create-post-btn'>Publish</button>
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
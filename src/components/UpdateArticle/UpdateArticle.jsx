/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './createpost.css';
import MDEditor from '@uiw/react-md-editor';

const UpdateArticle = ({BASE_URL}) => {

    return (
        <div className='create-post-main'>
            <div className="create-post-box">
                <div className="create-post-section-1">
                    <div className="create-post-image">
                        <input type="file" id='create-post-image' placeholder='Add a cover Image'/>
                    </div>
                    <div className="create-post-title">
                        <input type="text" name="title" id="" placeholder='New Post Title Here' 
                        />
                    </div>
                    <div className="create-post-tags">
                        <input type="text" name="tags" id="" placeholder='Add upto 4 tags' 
                        />
                    </div>
                </div>
                <div className="create-post-section-2">
                    <MDEditor
                        className='md-editor'
                    />
                </div>
            </div>
            <div className="create-post-btns">
                <div className="create-post-publish">
                    <button className='create-post-btn' type='submit' >Publish</button>
                </div>
            </div>
        </div>
    );

}

export default UpdateArticle;
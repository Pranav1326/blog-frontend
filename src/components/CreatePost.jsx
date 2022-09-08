import React from 'react';
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
                        <img src={B} alt="" />
                        <img src={I} alt="" />
                        <img src={U} alt="" />
                        <img src={Link} alt="" />
                        <img src={L} alt="" />
                        <img src={N} alt="" />
                        <img src={H} alt="" />
                        <img src={Q} alt="" />
                        <img src={C} alt="" />
                        <img src={T} alt="" />
                        <img src={P} alt="" />
                        <img src={ST} alt="" />
                        <img src={HR} alt="" />
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
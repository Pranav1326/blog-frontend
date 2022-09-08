import React from 'react';
import './styles/taglist.css';

const Taglist = () => {
  return (
    <div className='taglist-card'>
        <div className="tag-title">
            <h2>Popular Tags</h2>
        </div>
        <div className="content">
            <ul>
                <li>javascript</li>
                <li>nodejs</li>
                <li>reactjs</li>
                <li>webdev</li>
                <li>github</li>
                <li>css</li>
                <li>html</li>
                <li>programming</li>
                <li>frontend</li>
                <li>backend</li>
            </ul>
        </div>
    </div>
  )
}

export default Taglist;
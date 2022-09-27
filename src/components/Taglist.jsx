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
          <li>test</li>
          <li>blog</li>
          <li>nodejs</li>
          <li>reactjs</li>
          <li>github</li>
          <li>programming</li>
        </ul>
      </div>
    </div>
  );
}

export default Taglist;
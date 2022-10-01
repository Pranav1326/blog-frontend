/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/taglist.css';

const Taglist = ({handleTag}) => {
  
  const tags = ['javascript', 'test', 'blog', 'nodejs', 'reactjs', 'github', 'programming'];
  const [renderTags, setRenderTags] = useState(null);
  
  useEffect(() => {
    setRenderTags(tags.map((tag, i) => {
      return(
        <li key={i} onClick={e => handleTag(e, e.target.textContent)}>{tag}</li>
      );
    }));
  }, []);

  return (
    <div className='taglist-card'>
      <div className="tag-title">
        <h2>Popular Tags</h2>
      </div>
      <div className="content">
        <ul>
          {renderTags}
        </ul>
      </div>
    </div>
  );
}

export default Taglist;
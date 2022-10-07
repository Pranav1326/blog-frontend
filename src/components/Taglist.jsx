/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles/taglist.css';

const Taglist = ({handleTag}) => {
  
  // const tags = ['All Posts','javascript', 'test', 'blog', 'nodejs', 'reactjs', 'markdown', 'programming'];
  const [ tags, setTags ] = useState([]);
  const [ renderTags, setRenderTags ] = useState(null);
  const [isTagsRendered, setIsTagsRendered] = useState(false);
  
  const fetchTags = async () => {
    const baseUrl = "http://localhost:5000/api/tags";
    await axios.get(baseUrl)
    .then(result => {
      setTags(result.data);
      setIsTagsRendered(true);
    })
    .catch(err => console.log(err));
  }

  const renderTag = async() => {
    const sortedTags = isTagsRendered && tags.sort((a, b) => {
      const nameA = a.tag.toLowerCase();
      const nameB = b.tag.toLowerCase();
      if(nameA < nameB){
        return -1;
      }
      if(nameA > nameB){
        return 1;
      }
      return 0;
    });
    setRenderTags(isTagsRendered && sortedTags.map((tag, i) => {
      return(
        <li key={i} onClick={e => handleTag(e, e.target.textContent)}>{tag.tag}</li>
      );
    }));
  }

  useEffect(() => {
    fetchTags();
    renderTag();
  }, [isTagsRendered]);

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
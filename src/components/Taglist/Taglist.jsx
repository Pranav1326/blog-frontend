/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './taglist.css';

const Taglist = ({handleTag, BASE_URL}) => {
  
  const [ tags, setTags ] = useState([]);
  const [ renderTags, setRenderTags ] = useState(null);
  const [isTagsRendered, setIsTagsRendered] = useState(false);
  
  const fetchTags = async () => {
    const baseUrl = `${BASE_URL}/tags`;
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
    setRenderTags(isTagsRendered && sortedTags.map((tag, id) => {
      return(
        <li key={id} onClick={e => handleTag(e, e.target.textContent)}>{tag.tag}</li>
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
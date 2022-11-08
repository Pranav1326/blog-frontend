import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/blogcard.css';

const BlogCard = (props) => {
  const tagList = props.tags.map(function(e){
    return <li>{e}</li>;
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/article/${props.id}`);    
  }
  return (
    <div className='blogcard' onClick={handleClick}>
      <div className="first">
        <div className="details-one">
          <div className="author">
            <a href='/' id="author">
              {props.author}
            </a>
          </div>
          <div className="date">
            {new Date(props.publish).toDateString()}
          </div>
        </div>
      </div>
      <div className="second">
        <div className="details-two">
          <div className="title">
            {props.title}
          </div>
          <div className="description">
            {props.description}
          </div>
          <div className="tags">
            <ul>
              {tagList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
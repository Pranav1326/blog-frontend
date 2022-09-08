import React from 'react';
import './styles/blogcard.css';

const BlogCard = () => {
  return (
    <div className='blogcard'>
      <div className="first">
        <div className="details-one">
          <div className="author">
            <a href='/' id="author">
              Pranav1326
            </a>
          </div>
          <div className="date">
            13 Aug 2022
          </div>
        </div>
      </div>
      <div className="second">
        <div className="details-two">
          <div className="title">
            Getting Started with Node.js
          </div>
          <div className="description">
            Learn your very first node.js project step by step
          </div>
          <div className="tags">
            <ul>
              <li>nodejs</li>
              <li>javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
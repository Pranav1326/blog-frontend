import React from 'react';
import { useNavigate } from 'react-router-dom';
import './blogcard.css';

const BlogCard = (props) => {

  // const bgImg = {
  //   "background": `url(${props.image})`,
  //   "width": "30rem",
  //   "minHeight": "14.3rem",
  //   "backgroundPosition": "center",
  //   "backgroundRepeat": "no-repeat",
  //   "backgroundSize": "cover",
  //   "backgroundColor": "rgba(0, 0, 0, 0.6)",
  //   "backgroundBlendMode": "multiply",
  //   "color": "#fff",
  //   "margin": "1rem 0.5rem",
  //   "borderRadius": "10px",
  //   "position": "relative",
  //   "padding": "1.5rem",
  //   "display": "flex",
  //   "flexDirection": "column",
  //   "justifyContent": "space-between"
  // }
  
  const tagList = props.tags.map((e, id) => {
    return <li key={id}>{e}</li>;
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/article/${props.id}`);    
  }
  
  return (
    <div className='blogcard' 
      onClick={handleClick} 
      // style={bgImg}
    >
      <img src={props.image} alt="blogcard background" className='card-img-bg'/>
      <div className="first">
        <div className="details-one">
          <div className="author">
            {/* <a href='/' id="author"> */}
              {props.author}
            {/* </a> */}
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
          {/* <div className="description">
            {props.description}
          </div> */}
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
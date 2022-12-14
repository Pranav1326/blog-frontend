import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Taglist from './Taglist';
import './styles/articles.css';
import axios from 'axios';

// const baseUrl = "http://localhost:5000/api/articles";

const Articles = ({post, setPost, BASE_URL}) => {
  // const [ post, setPost ] = useState(null);
  let [ tag, setTag ] = useState("");
  const [ sort, setSort ] = useState(false);

  useEffect(() => {
    // axios.get(baseUrl)
    // .then((response) => {
    //   setPost(response.data);
    // })
    // .catch((err) => console.log(err));
  }, []);

  if(!post) return <p className='no-posts-msg'>Loading...</p>;

  
  
  const postData = post.map((e) => {
    let date = e.createdAt.split("T")[0];
    return(
      <BlogCard
        key={e._id}
        id={e._id}
        author={e.author}
        publish={date}
        title={e.title}
        description={e.description}
        tags={e.tags}
      />
    );
  });

  const handleTag = async (event, manualTag) => {
    event.target.state = "active";
    tag=manualTag;
    setTag(manualTag);
    if(tag === "All Posts"){
      setPost(post);
    }
    else{
      await axios.get(`${BASE_URL}/articles?tag=${tag}`)
      .then(result => {
        setPost(result.data);
        if(!result.data){
          alert(`No Articles Found!`);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  
  const handleSort = e => {
    setSort(!sort);
    const sortPost = post.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setPost(sortPost);
  }
  
  return (
    <div className="articles">
      <section className='section-1'>
        <div className="cards">
          <button className="sort-new" onClick={handleSort}>New Posts</button>
          {postData}
        </div>
      </section>
      <section className="section-2">
        <div className="taglist">
          <Taglist BASE_URL={BASE_URL} handleTag={handleTag}/>
        </div>
      </section>
    </div>
  );
}

export default Articles;
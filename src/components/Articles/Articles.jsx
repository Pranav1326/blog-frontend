import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import Taglist from '../Taglist/Taglist';
import './articles.css';
import axios from 'axios';
// import { getAllArticles } from '../../api/article';

const baseUrl = "https://blog-api-c8j7.onrender.com/api/articles";

const Articles = ({BASE_URL, searchQuery, setSearchQuery}) => {
  const [ post, setPost ] = useState(null);
  let [ tag, setTag ] = useState("");
  const [ sort, setSort ] = useState(false);

  useEffect(() => {
    axios.get(`${baseUrl}?user=${searchQuery}`)
    .then((response) => {
      setPost(response.data);
    })
    .catch((err) => console.log(err));
    
  }, [searchQuery]);

  // setTimeout(() => {
  //   console.log("request made");
  //   axios.get(`${baseUrl}/incview/${post._id}`)
  //   .then((response) => {
  //     setPost(response.data);
  //   })
  //   .catch((err) => console.log(err));
  // }, 10000);

  if(!post) return <p className='no-posts-msg'>Loading...</p>;
  
  const postData = post && post.map((e, id) => {
    let date = e.createdAt.split("T")[0];
    return(
      <BlogCard
        key={id}
        id={e._id}
        author={e.author}
        publish={date}
        title={e.title}
        description={e.description}
        tags={e.tags}
        image={e.image}
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
  
  if(post === []){
    return(
      <h1>No Posts!</h1>
    );
  }

  return (
    <div className="articles">
      <section className='section-1'>
        <div className="cards">
          <button className="sort-new" 
          onClick={handleSort}
          >New Posts</button>
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